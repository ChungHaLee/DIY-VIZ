from flask import Flask, render_template, request
import os

app = Flask(__name__)


## 필요한 함수 선언 

@app.route('/', methods=['POST', 'GET'])
def login():
    return render_template('login.html')



@app.route('/menu', methods=['POST', 'GET'])
def menu():
    if request.method == 'POST':
        id = request.form['id_name']  # 아이디 저장
        pw = request.form['pw_name']  # 패스워드 저장

    return render_template('menu.html', UserID = id, UserPW = pw)



@app.route('/ballad', methods=['POST', 'GET'])
def balad():

    return render_template('ballad.html')



@app.route('/hiphop', methods=['POST', 'GET'])
def hiphop():

    return render_template('hiphop.html')



if __name__ == '__main__':
  app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 8000)), debug=True, use_reloader=False)