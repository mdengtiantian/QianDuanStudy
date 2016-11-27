/**
 * Created by lenovo on 2016/11/19.
 */
window.onload = function () {

    //创建XHRHttpRequest对象
    function createXHR() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        //跳过
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR object available.");
        }
    }

    //Ajax请求
    var btn = document.getElementById("btn");
    var responseText = document.getElementById("responseText");
    btn.onclick = function () {
        var xhr = createXHR();
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status <300) || xhr.status ==304){
                    responseText.children[1].innerHTML = xhr.responseText;
                }else{
                    alert("Request was unsuccessful: " + xhr.status);
                }
            }
        };
        xhr.open("get","http://192.168.1.109/index.php",true);
        xhr.send(null);
    };




};
