import json
import pandas as pd
visual_data = pd.read_excel('visualannotations.xlsx',  engine='openpyxl')
json_name = visual_data["2. 저장한 json의 파일명 (ex. teamA_chunghalee_1.json)"].tolist()
json_title = []
shape_lst = []
effect_lst = []



def countEffect(effectlst):
    scaleCount = effectlst.count('scale')
    blinkCount = effectlst.count('blink')
    bloomCount = effectlst.count('bloom')
    particleCount = effectlst.count('particles')
    lineCount = effectlst.count('line')
    gradientCount = effectlst.count('gradient')
    horizontalCount = effectlst.count('horizontal')

    effectdict = { 'scale': scaleCount, 'blink': blinkCount, 'bloom': bloomCount, 'particle': particleCount, 'line': lineCount, 'gradient': gradientCount, 'horizontal': horizontalCount}
    print(effectdict)


def countShape(shapelst):
    triangleCount = shapelst.count('triangle')
    rectangleCount = shapelst.count('rectangle')
    pentagonCount = shapelst.count('pentagon')
    circleCount = shapelst.count('circle')
    coneCount = shapelst.count('cone')
    boxCount = shapelst.count('box')
    dodeCount = shapelst.count('dode')
    sphereCount = shapelst.count('sphere')

    shapedict = { 'triangle': triangleCount, 'rect': rectangleCount, 'pentagon': pentagonCount, 'circle':circleCount, 'cone':coneCount, 'box':boxCount, 'dode': dodeCount, 'sphere': sphereCount}

    print(shapedict)

def readJSONandwrite(filename):
    file_path = './data/jsons/%s' %filename # 저장한 json 의 파일명
    with open(file_path, 'r') as file:
        jsondata = json.load(file)
        for i in range(len(jsondata['visualization'])):
            jsontitle = jsondata['music']
            shape = jsondata['visualization'][i].split('-')[0]       
            effect = jsondata['visualization'][i].split('-')[1]     
            json_title.append(jsontitle)
            shape_lst.append(shape)
            effect_lst.append(effect)
    countShape(shape_lst)
    
            
readJSONandwrite('teamA_ecehanakan_1.json')
readJSONandwrite('teamA_ecehanakan_2.json')
# for i in range(len(json_name)):
#     readJSONandwrite(json_name[i])



