# TDA_Visualization
A website to visualize the data needed for 'Facial Emotion Recognition depends on TDA'

 </br>
English:

These files use html, CSS, JavaScript depending on echarts to code a website containing user interaction. All data visualized gets from Facial Emotion Recognition depends on TDA
 
 </br>
中文注释：

本库是运用html、css、JavaScript基于echarts生成的动态可视化平台，生成数据为基于TDA的人脸表情识别所获得的数据

 </br>
How to use:

STEP1: Run visualization2.html, then the following website will appear.

 </br>
使用方法：

步骤1：运行visualization2.html文档，即可生成下图所示的网站


![image](https://user-images.githubusercontent.com/102588357/174073352-b0356464-b2d6-4363-9f11-1a85bcfd22a3.png)

STEP2: User can change the forms' choices. After clicking the submit button, the corresponding images will appear.

a.

The left-hand section allows user to select the category of the generated image, including persistent diagram or 0/1 dimensional persistent barcode, and the drop-down form allows user to select the emotion corresponding to the choice.

In this part, I use echarts.Scatter to show the face emotion with hiding coordinate axis and data. The corresponding data is displayed by mouse contact.("js\face_1.js"-"js\face_17js")

However, persistent diagram and persistent barcode are png picture without user interaction. ("js\dgm_1.js"-"js\dgm_3.js")

<br>


步骤2：用户可以在该网站上更改表单选项，点击submit即可生成对应的图表

a. 

左侧部分可以选择生成图像的类别，即persistent diagram或者0/1维persistent barcode，下拉表单可以选择生成图像对应的表情

此处人脸表情为echarts生成的Scatter散点图象，隐藏了坐标轴和数据，鼠标接触即可显示对应的数据（"js\face_1.js"-"js\face_17js"）

而persistent diagram和persistent barcode均为静态图片，没有交互性（"js\dgm_1.js"-"js\dgm_3.js"）

![image](https://user-images.githubusercontent.com/102588357/174074811-32d650ad-49bd-4e60-ad00-365cd2e8a86e.png)

b. 

The upper right-hand section also allows user to select the type of data to be processed, either based on MDS or t-SNE. The drop-down list shows ten different face datasets, each with seven cases of "angry", "disgust", "fear", "happy", "neutral", "sad" and "surprise", with equal amounts of data.

User can click reset button to clear their choices. After submission, the scatter diagram will be produced based on data after MDS or t-SNE. Each color corresponds to an emotion.("js\1.js"-"js\20.js")

<br>

右上部分同样可以选择数据类型，可以选择基于MDS或t-SNE进行数据处理，下拉列表展示了十个不同的人脸数据集，每个都有“生气”，“恶心”，“害怕”，“开心”，“平静”，“难过”，“惊讶”七种情况，数据数量相等

可以点击reset重置选项，随后将生成通过MDS/t-SNE算法处理后的数据，每种表情的点对应一种颜色（"js\1.js"-"js\20.js"）

![image](https://user-images.githubusercontent.com/102588357/174078086-ccfd8149-904f-425b-998f-f1a2f5687513.png)

c.

The lower right part also allows user to choose the type, i.e. Bottleneck distance or Wasserstein distance. Note: the reference values for the distance calculations here are all for "neutral" faces, i.e. the Bottleneck distance/Wasserstein distance is calculated for each "angry", "disgust", "fear", "happy", "sad", "surprise" face and the corresponding "neutral" face

Besides, user can also choose Emotion or Position. For Emotion, the diagram is based on the distance between facial features of the choosed emotion and the facial features of "neutral" face. For Position,  the diagram is based on the distance between the choosed Position in each emotion and the choosed Position in "neutral" face.

I use echarts.Line to show these diagrams

(js\line_1.js-"js\line_6.js" is for Bottleneck + Emotion, "js\linew_1.js"-"js\linew_6.js" is for Wasserstein + Emotion, "js\linepb_1.js"-"js\linepb_6.js" is for Bottleneck + Position, "js\linepw_1.js"-"js\linepw_6.js" is for Wasserstein + Position)
</br>


右下部分同样可以选择类型，即Bottleneck distance或Wasserstein distance，注：这里的distance计算的参考值均为“平静”脸，即计算每个“生气”，“恶心”，“害怕”，“开心”，“难过”，“惊讶”脸与对应的“平静”脸的Bottleneck distance/Wasserstein distance

此外可以选择基于Emotion或是Position，若选择Emotion，即生成该emotion脸中各个部位与“平静”脸对应部位的距离；若选择Position，即生成该Position在各个表情脸中与“平静”脸中该Position之间的距离

用echarts的Line折线图表现

（js\line_1.js-"js\line_6.js"为Bottleneck + Emotion, "js\linew_1.js"-"js\linew_6.js"为Wasserstein + Emotion, "js\linepb_1.js"-"js\linepb_6.js"为Bottleneck + Position, "js\linepw_1.js"-"js\linepw_6.js"为Wasserstein + Position）

![image](https://user-images.githubusercontent.com/102588357/174079714-80815f0f-9803-484b-821d-85fa0b853aba.png)


Code for frontend:

visualization2.html is the main html file for the website

The layout is shown in CSS file

( it's really basic, I crash-landed this skill >.<

The UI part depends on the js files and several functions in html file

Take the upper right as an instance

    function testSubmit(){  
      console.log(document.getElementById('mds').checked);
      console.log(document.getElementById('tsne').checked);
      console.log(document.getElementById('select').value);
      chooseimg_face()
    }
 
Use document.getElementById('id').checked to get the value of radio and document.getElementById('id').value to get the choice of drop-down list. By console.log(), we can get the reaction through console and we use this function on the submit part.

After getting the data we needed, we can use if else or other way to call the corresponding echarts javascript document.

    function chooseimg_face(){
      var x=document.getElementById('select').value;
      var y=document.getElementById('mds').checked;
      var z=document.getElementById('tsne').checked;
      if(y==true){
        if(x==1){
          displayChart1()
        }else if(x==2){
          displayChart2()
         }
      }
    }
  
Function displayChart1() corresponds to the echarts generated by the first picture of the function in the javascript document, similarly, displayChart2() is the second picture of the corresponding function.

Note that at this point we need to call chooseimg_face () in testSubmit ().

</br>

前端代码：

visualization2.html为主html文件

排版基于index.css

（都很基础，是PO主速成的哈哈哈

动态部分由html文件中的几个函数实现

以右上部分为例
     
    function testSubmit(){  
      console.log(document.getElementById('mds').checked);
      console.log(document.getElementById('tsne').checked);
      console.log(document.getElementById('select').value);
      chooseimg_face()
    }
 
通过document.getElementById('id').checked获取radio的值，document.getElementById('id').value获取下拉表单的值，并用console.log()输出在控制台处，并在submit处调用本函数

在获得输入数据之后，可以根据需求通过if else等方式，根据不同的条件调用对应的echarts javascript文档


    function chooseimg_face(){
      var x=document.getElementById('select').value;
      var y=document.getElementById('mds').checked;
      var z=document.getElementById('tsne').checked;
      if(y==true){
        if(x==1){
          displayChart1()
        }else if(x==2){
          displayChart2()
         }
      }
    }
    
  
函数displayChart1()即对应了echarts所生成的第一幅图javascript文档中的函数，同理displayChart2()则是第二幅图的对应函数

注意，此时要把chooseimg_face()函数放到testSubmit()中进行调用

---------------------------------------------------------------

对应的知乎：https://zhuanlan.zhihu.com/p/528189187

若有任何问题可以通过知乎联系我，或发送邮件至2767703031@qq.com

If you have any questions, please contact me through email 2767703031@qq.com or Ins @ppp0524
