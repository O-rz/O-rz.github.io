document.addEventListener("DOMContentLoaded", function() {
    var gallery = document.getElementById("photoGallery");

    // 创建一个 XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();

    // 指定要加载的XML文件
    xhr.open("GET", "photo.xml", true);

    // 设置回调函数，处理XML数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xml = xhr.responseXML;
            var photos = xml.getElementsByTagName("photo");

            for (var i = 0; i < photos.length; i++) {
                var photo = photos[i];
                var imgSrc = photo.getElementsByTagName("url")[0].textContent;
                var caption = photo.getElementsByTagName("caption")[0].textContent;

                // 创建图片元素并添加到图库中
                var img = document.createElement("img");
                img.src = imgSrc;
                gallery.appendChild(img);

                // 创建图像标题并添加到图库中
                var imgCaption = document.createElement("p");
                imgCaption.textContent = caption;
                gallery.appendChild(imgCaption);
            }
        }
    };

    // 发送XML数据请求
    xhr.send();
});
