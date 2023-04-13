import pandas as pd
import numpy as np
from collections import OrderedDict
from matplotlib.ticker import MaxNLocator
import seaborn as sns
import matplotlib.pyplot as plt


finaldf = pd.read_excel('finaldf.xlsx',  engine='openpyxl')

musicdf = finaldf[['energy', 'beat', 'pitch', 'timbre', 'mood']]


# 2D SHAPES
circledf = finaldf[finaldf['shape']=='circle']
triangledf = finaldf[finaldf['shape']=='triangle']
rectangledf = finaldf[finaldf['shape']=='rectangle']
pentagondf = finaldf[finaldf['shape']=='pentagon']

# 3D SHAPES
spheredf = finaldf[finaldf['shape']=='sphere']
conedf = finaldf[finaldf['shape']=='cone']
boxdf = finaldf[finaldf['shape']=='box']
dodedf = finaldf[finaldf['shape']=='dode']

# EFFECTS
scaledf = finaldf[finaldf['effect']=='scale']
blinkdf = finaldf[finaldf['effect']=='blink']
linedf = finaldf[finaldf['effect']=='line']
particlesdf = finaldf[finaldf['effect']=='particles']
bloomdf = finaldf[finaldf['effect']=='bloom']
gradientdf = finaldf[finaldf['effect']=='gradient']
horizontaldf = finaldf[finaldf['effect']=='horizontal']


# Expression of Semantic Descriptors

def mean_dataframe_byShape(inputdf, identifier):
    try:
        low_high = inputdf.groupby("shape")['low-high'].mean()
        weak_loud = inputdf.groupby("shape")['weak-loud'].mean()
        tonal_noisy = inputdf.groupby("shape")['tonal-noisy'].mean()
        short_long = inputdf.groupby("shape")['short-long'].mean()
        static_dynamic = inputdf.groupby("shape")['static-dynamic'].mean()
        smooth_rough = inputdf.groupby("shape")['smooth-rough'].mean()
        dull_bright = inputdf.groupby("shape")['dull-bright'].mean()
        mate_resonant = inputdf.groupby("shape")['mate-resonant'].mean()
        light_heavy = inputdf.groupby("shape")['light-heavy'].mean()
        cold_warm = inputdf.groupby("shape")['cold-warm'].mean()

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




def mean_dataframe_byEffect(inputdf, identifier):
    try:
        low_high = inputdf.groupby("effect")['low-high'].mean()
        weak_loud = inputdf.groupby("effect")['weak-loud'].mean()
        tonal_noisy = inputdf.groupby("effect")['tonal-noisy'].mean()
        short_long = inputdf.groupby("effect")['short-long'].mean()
        static_dynamic = inputdf.groupby("effect")['static-dynamic'].mean()
        smooth_rough = inputdf.groupby("effect")['smooth-rough'].mean()
        dull_bright = inputdf.groupby("effect")['dull-bright'].mean()
        mate_resonant = inputdf.groupby("effect")['mate-resonant'].mean()
        light_heavy = inputdf.groupby("effect")['light-heavy'].mean()
        cold_warm = inputdf.groupby("effect")['cold-warm'].mean()

        dict = { 'low': low_high, 'weak': weak_loud, 'tonal': tonal_noisy, 'short': short_long, 'static': static_dynamic, 'smooth' : smooth_rough, 'dull': dull_bright, 'mate': mate_resonant, 'light': light_heavy , 'cold': cold_warm}
        opposites = ('high', 'loud', 'noisy', 'long', 'dynamic', 'rough', 'bright', 'resonant', 'heavy', 'warm')
        fig, ax1 = plt.subplots(1, 1)


        ax1.plot(list(dict.values()), list(dict.keys()), marker='o', color='forestgreen')

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
        plt.savefig(f'./result/graphs/effects/{identifier}.png', bbox_inches = 'tight')
        # plt.show()
    except:
        pass




def make_graph():
    mean_dataframe_byShape(spheredf, 'Shape_Sphere')
    mean_dataframe_byShape(conedf, 'Shape_Cone')
    mean_dataframe_byShape(rectangledf, 'Shape_Rectangle')
    mean_dataframe_byShape(dodedf, 'Shape_Dodecahedron')
    mean_dataframe_byShape(circledf, 'Shape_Circle')
    mean_dataframe_byShape(triangledf, 'Shape_Triangle')
    mean_dataframe_byShape(rectangledf, 'Shape_Rectangle')
    mean_dataframe_byShape(pentagondf, 'Shape_Pentagon')


    mean_dataframe_byEffect(scaledf, 'Effect_Scale')
    mean_dataframe_byEffect(blinkdf, 'Effect_Blink')
    mean_dataframe_byEffect(linedf, 'Effect_Line')
    mean_dataframe_byEffect(particlesdf, 'Effect_Particles')
    mean_dataframe_byEffect(bloomdf, 'Effect_Bloom')
    mean_dataframe_byEffect(gradientdf, 'Effect_Gradient')
    mean_dataframe_byEffect(horizontaldf, 'Effect_Horizontal')


make_graph()





# Expression of Music Components
# sns.boxplot(data=musicdf)
# plt.title('Expression of Music Components')
# plt.ylim([0, 8]) 
# plt.show()



# Expression of Semantic Descriptors
# dict = OrderedDict([('')])

# dict = { 'low': -2, 'weak': -1, 'tonal': 2, 'short': 1, 'static': 1, 'smooth' : 2, 'dull': 1, 'mate': -2, 'light': 1 , 'cold': 2}
# opposites = ('high', 'loud', 'noisy', 'long', 'dynamic', 'rough', 'bright', 'resonant', 'heavy', 'warm')
# fig, ax1 = plt.subplots(1, 1)


# ax1.plot(list(dict.values()), list(dict.keys()), marker='o')

# ax1.set_yticks(np.r_[:len(dict)])
# ax1.set_yticklabels(dict.keys())
# ax1.xaxis.set_major_locator(MaxNLocator(integer=True))

# ax2 = ax1.twinx()
# ax2.set_ylim(ax1.get_ylim())
# ax2.set_yticks(np.r_[:len(dict)])
# ax2.set_yticklabels(opposites)


# fig.tight_layout()
# plt.title('Expression of Semantic Descriptors')
# plt.show()