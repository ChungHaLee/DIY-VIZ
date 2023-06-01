import pandas as pd
import json

visual_data = pd.read_excel('visualannotations.xlsx',  engine='openpyxl')
json_name = visual_data["2. 저장한 json의 파일명 (ex. teamA_chunghalee_1.json)"].tolist()



def readJSONandwrite(filename):
    file_path = './data/jsons/%s' %filename # 저장한 json 의 파일명
    with open(file_path, 'r') as file:
        jsondata = json.load(file)

        data_extracted = visual_data[visual_data["2. 저장한 json의 파일명 (ex. teamA_chunghalee_1.json)"] == filename]
        templated = sorted(data_extracted["3. 저장한 시각화 템플릿의 번호 (ex. 1, 2 처럼 '숫자만' 작성)"].tolist())
        
        kinds = templated[-1]

        for temp_num in range(kinds): 
            df_idx = visual_data.index[(visual_data["2. 저장한 json의 파일명 (ex. teamA_chunghalee_1.json)"] == filename) & (visual_data["3. 저장한 시각화 템플릿의 번호 (ex. 1, 2 처럼 '숫자만' 작성)"] == temp_num + 1)]

            shape = jsondata['visualization'][temp_num].split('-')[0]       
            effect = jsondata['visualization'][temp_num].split('-')[1]     
            shape_color = jsondata['objectColor'][temp_num]    
            bg_color = jsondata['backgroundColorList'][temp_num]
            obj_position_x = jsondata['objectPositionX'][temp_num]
            obj_position_y = jsondata['objectPositionY'][temp_num]
            obj_position_z = jsondata['objectPositionZ'][temp_num]
            time_table = jsondata['timeTable'][temp_num + 1]    # 시작이 항상 0이기 때문에
            size = jsondata['volume'][temp_num]

            # 해당하는 df idx 에 값들 넣기
            visual_data.at[df_idx, 'shape'] = shape
            visual_data.at[df_idx, 'effect'] = effect
            visual_data.at[df_idx, 'size'] = size
            visual_data.at[df_idx, 'shape_color'] = shape_color
            visual_data.at[df_idx, 'bg_color'] = bg_color
            visual_data.at[df_idx, 'obj_position_x'] = obj_position_x
            visual_data.at[df_idx, 'obj_position_y'] = obj_position_y
            visual_data.at[df_idx, 'obj_position_z'] = obj_position_z
            visual_data.at[df_idx, 'time_table'] = time_table   


            
            visual_data.to_excel('finaldf.xlsx')

            


def readbyeveryJSON():
    for json in json_name:
        readJSONandwrite(json)



readbyeveryJSON()