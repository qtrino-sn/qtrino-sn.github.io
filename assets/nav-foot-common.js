
document.getElementById("nav").innerHTML =
'<input type="checkbox" id="check">'
+'<label for="check" class="checkbtn noselect">'
+  '&#x2630;'
+'</label>'
+'<label class="logo">'
+  '<a href="/"><img src="/assets/logo/qtrino.ico" alt="icon"></a>'
+  '<span> QTRINO</span>'
+'</label>'
+'<ul id="">'
+  '<li><a id="home" href="/index.html">Home</a></li>'
+  '<li><a id="product" href="/product.html">Products</a></li>'
+  '<li><a id="blog" href="/blog.html">Blogs</a></li>'
+  '<li><a class="social" href="https://www.facebook.com/qtrino"><img src="/assets/logo/fb.png" alt="fb"></a></li>'
+  '<li><a class="social" href="https://www.instagram.com/_qtrino"><img src="/assets/logo/instra.png" alt="instra"></a></li>'
+  '<li><a class="social" href="https://twitter.com/qtrino1"><img src="/assets/logo/twit.png" alt="twitter"></a></li>'
+  '<li><a style="padding-right:0px;" class="social" href="https://www.youtube.com/channel/UCSSmITU7-0-qr6D9xqlQMVA?sub_confirmation=1"><img src="/assets/logo/qtube.png" alt="youtube"></a></li>'
+'</ul>';



var d = new Date();
var year = d.getFullYear();
var m = d.toDateString();
var month = m;
document.title
document.getElementById("copyright").innerHTML =
'© Copyright Brand - All Rights Reserved '
+'['+year+']';

var x= document.title;
document.title = x + ' ['+month+ ']';

document.getElementById("gotop").innerHTML =
'<a href="#top">'
+'Back to top'
+' &#8679;'
+'</a>';
