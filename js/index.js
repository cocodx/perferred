//作用：需要将所有的DOM元素对象及相关资源全部都加载完毕后，再来加载元素
window.onload=function () {

    //路径导航的数据渲染
    navPathDataBind();
    function navPathDataBind() {
        //1.获取页面导航的元素对象
        var navPath = document.querySelector("#wrapper #content .contentMain #navPath");

        //2.获取数据
        var path = goodData.path;

        //3.遍历数据
        for (var i = 0; i < path.length; i++) {
            if (i == path.length-1){
                //只需要创建a且没有href属性
                var aNode = document.createElement("a");
                aNode.innerText = path[i].title;
                navPath.appendChild(aNode);
            }else {
                //4.创建a标签
                var aNode = document.createElement("a");
                aNode.href = path[i].url;
                aNode.innerText = path[i].title;

                //5.创建i标签
                var iNode = document.createElement('i');
                iNode.innerText = '/';

                //6.让navPath元素来追加a和i
                navPath.appendChild(aNode);
                navPath.appendChild(iNode);
            }

        }
    }

    //放大镜的移入和移出效果
    bigClassBind();
    function bigClassBind() {
        var smallPic = document.querySelector("#wrapper #content .contentMain #center #left #leftTop #smallPic");

        var leftTop = document.querySelector("#wrapper #content .contentMain #center #left #leftTop");

        smallPic.onmouseenter=function () {

            var maskDiv = document.createElement("div");
            maskDiv.className="mask";

            var bigPic = document.createElement("div");
            bigPic.id="bigPic";

            var bigImg = document.createElement("img");
            bigImg.src="images/b1.png";

            //大图框追加图片
            bigPic.appendChild(bigImg);

            smallPic.appendChild(maskDiv);

            leftTop.appendChild(bigPic);

            smallPic.onmouseleave = function () {
                smallPic.removeChild(maskDiv);
                leftTop.removeChild(bigPic)
            }
        }

    }

}
