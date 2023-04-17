import pandas as pd
import numpy as np
from collections import OrderedDict
from matplotlib.ticker import MaxNLocator
import seaborn as sns
import matplotlib.pyplot as plt
from statannot import add_stat_annotation


diyvisualdf = pd.read_excel('diyvisual.xlsx',  engine='openpyxl')
onlymusicdf = pd.read_excel('onlymusic.xlsx',  engine='openpyxl')


nasatlxdf = pd.read_excel('nasatlx.xlsx',  engine='openpyxl')

def printAnnotation(df, yvalue):
    plt.figure(figsize=(9, 6))
    plt.title(f'Music Entertainment Survey: {yvalue}')
    plt.ylim([0, 8])

    ax = sns.boxplot(x=df['condition'], y=df[yvalue])
    ax, test_results = add_stat_annotation(ax, data=df, x='condition', y=yvalue, box_pairs=[('onlyMusic', 'DIY')], test='Wilcoxon', text_format='star', loc='inside')
    plt.savefig(f'./result/graphs/MEQ/{yvalue}_meq.png', bbox_inches = 'tight')





printAnnotation()
# print(round(nasatlxdf['mental demand'].mean(), 2), round (nasatlxdf['mental demand'].std(), 2))
# print(round(nasatlxdf['physical demand'].mean(), 2), round (nasatlxdf['physical demand'].std(), 2))
# print(round(nasatlxdf['temporal demand'].mean(), 2), round (nasatlxdf['temporal demand'].std(), 2))
# print(round(nasatlxdf['effort'].mean(), 2), round (nasatlxdf['effort'].std(), 2))
# print(round(nasatlxdf['performance'].mean(), 2), round (nasatlxdf['performance'].std(), 2))
# print(round(nasatlxdf['frustration'].mean(), 2), round (nasatlxdf['frustration'].std(), 2))


print(round(diyvisualdf['stimulated'].mean(), 2), round (diyvisualdf['stimulated'].std(), 2))
print(round(diyvisualdf['dancing'].mean(), 2), round (diyvisualdf['dancing'].std(), 2))
print(round(diyvisualdf['entertain'].mean(), 2), round (diyvisualdf['entertain'].std(), 2))
print(round(diyvisualdf['energized'].mean(), 2), round (diyvisualdf['energized'].std(), 2))
print(round(diyvisualdf['moving'].mean(), 2), round (diyvisualdf['moving'].std(), 2))
print(round(diyvisualdf['animated'].mean(), 2), round (diyvisualdf['animated'].std(), 2))
print(round(diyvisualdf['excited'].mean(), 2), round (diyvisualdf['excited'].std(), 2))
print(round(diyvisualdf['rhythm'].mean(), 2), round (diyvisualdf['rhythm'].std(), 2))

# print(round(onlymusicdf['stimulated'].mean(), 2), round (onlymusicdf['stimulated'].std(), 2))
# print(round(onlymusicdf['dancing'].mean(), 2), round (onlymusicdf['dancing'].std(), 2))
# print(round(onlymusicdf['entertain'].mean(), 2), round (onlymusicdf['entertain'].std(), 2))
# print(round(onlymusicdf['energized'].mean(), 2), round (onlymusicdf['energized'].std(), 2))
# print(round(onlymusicdf['moving'].mean(), 2), round (onlymusicdf['moving'].std(), 2))
# print(round(onlymusicdf['animated'].mean(), 2), round (onlymusicdf['animated'].std(), 2))
# print(round(onlymusicdf['excited'].mean(), 2), round (onlymusicdf['excited'].std(), 2))
# print(round(onlymusicdf['rhythm'].mean(), 2), round (onlymusicdf['rhythm'].std(), 2))



# plt.figure(figsize=(10, 8))
# plt.title('MEQ Survey: DIY Visualization Condition')
# plt.ylim([0, 8]) 
# sns.boxplot(data=diyvisualdf)
# plt.savefig('./result/graphs/MEQ/DIYVISUAL.png', bbox_inches = 'tight')



