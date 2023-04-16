import pandas as pd
import numpy as np
from collections import OrderedDict
from matplotlib.ticker import MaxNLocator
import seaborn as sns
import matplotlib.pyplot as plt


diyvisualdf = pd.read_excel('diyvisual.xlsx',  engine='openpyxl')
onlymusicdf = pd.read_excel('onlymusic.xlsx',  engine='openpyxl')


nasatlxdf = pd.read_excel('nasatlx.xlsx',  engine='openpyxl')



plt.figure(figsize=(15, 10))
plt.title('NASA TLX Survey')
plt.ylim([0, 11]) 
sns.boxplot(data=nasatlxdf)
plt.savefig('./result/graphs/NASA-TLX/nasatlx.png', bbox_inches = 'tight')





# Expression of Semantic Descriptors

def mean_dataframe_byShape(inputdf, identifier):
    try:
        low_high = inputdf.mean()


        dict = { 'low': low_high, 'weak': weak_loud, 'tonal': tonal_noisy, 'short': short_long, 'static': static_dynamic, 'smooth' : smooth_rough, 'dull': dull_bright, 'mate': mate_resonant, 'light': light_heavy , 'cold': cold_warm}
        opposites = ('high', 'loud', 'noisy', 'long', 'dynamic', 'rough', 'bright', 'resonant', 'heavy', 'warm')
        fig, ax1 = plt.subplots(1, 1)


        ax1.plot(list(dict.values()), list(dict.keys()), marker='o', color='mediumvioletred')

        ax1.set_yticks(np.r_[:len(dict)])
        ax1.set_yticklabels(dict.keys())
        ax1.xaxis.set_major_locator(MaxNLocator(integer=True))

        ax2 = ax1.twinx()
        ax2.set_ylim(ax1.get_ylim())
        ax2.set_yticks(np.r_[:len(dict)])
        ax2.set_yticklabels(opposites)



        fig.tight_layout()
        plt.title(f'Expression of Semantic Descriptors: {identifier}')
        plt.xlim([0, 8]) 
        plt.savefig(f'./result/graphs/shapes/{identifier}.png', bbox_inches = 'tight')
        # plt.show()
    except:
        pass



