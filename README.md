# TDA_Visualization
a website to visualize the data needed for 'Facial Emotion Recognition depends on TDA'

本库是运用html、css、JavaScript基于echarts生成的动态可视化平台，生成数据为基于TDA的人脸表情识别所获得的数据

使用方法：

步骤1：运行visualization2.html文档，即可生成下图所示的网站

![image](https://user-images.githubusercontent.com/102588357/174073352-b0356464-b2d6-4363-9f11-1a85bcfd22a3.png)

步骤2：用户可以在该网站上更改表单选项，点击submit即可生成对应的图表

a. 

左侧部分可以选择生成图像的类别，即persistent diagram或者0/1维persistent barcode，下拉表单可以选择生成图像对应的表情

此处人脸表情为echarts生成的Scatter散点图象，隐藏了坐标轴和数据，鼠标接触即可显示对应的数据（"js\face_1.js"-"js\face_17js"）

而persistent diagram和persistent barcode均为静态图片，没有交互性（"js\dgm_1.js"-"js\dgm_3.js"）

![image](https://user-images.githubusercontent.com/102588357/174074811-32d650ad-49bd-4e60-ad00-365cd2e8a86e.png)

b. 

右上部分同样可以选择数据类型，可以选择基于MDS或t-SNE进行数据处理，下拉列表展示了十个不同的人脸数据集，每个都有“生气”，“恶心”，“害怕”，“开心”，“平静”，“难过”，“惊讶”七种情况，数据数量相等

可以点击reset重置选项，随后将生成通过MDS/t-SNE算法处理后的数据，每种颜色的点对应一种颜色（"js\1.js"-"js\20.js"）

![image](https://user-images.githubusercontent.com/102588357/174078086-ccfd8149-904f-425b-998f-f1a2f5687513.png)

c.

右下部分同样可以选择类型，即Bottleneck distance或Wasserstein distance，注：这里的distance计算的参考值均为“平静”脸，即计算每个“生气”，“恶心”，“害怕”，“开心”，“难过”，“惊讶”脸与对应的“平静”脸的Bottleneck distance/Wasserstein distance

此外可以选择基于Emotion或是Position，若选择Emotion，即生成该emotion脸中各个部位与“平静”脸对应部位的距离；若选择Position，即生成该Position在各个表情脸中与“平静”脸中该Position之间的距离

用echarts的Line折线图表现

（js\line_1.js-"js\line_6.js"为Bottleneck + Emotion, "js\linew_1.js"-"js\linew_6.js"为Wasserstein + Emotion, "js\linepb_1.js"-"js\linepb_6.js"为Bottleneck + Position, "js\linepw_1.js"-"js\linepw_6.js"为Wasserstein + Position）

![image](https://user-images.githubusercontent.com/102588357/174079714-80815f0f-9803-484b-821d-85fa0b853aba.png)



前端代码：

