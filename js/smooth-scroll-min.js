(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{if(typeof exports==="object"){module.exports=b}else{a.smoothScroll=b(a)}}})(this,function(j){var e={};var l=!!document.querySelector&&!!j.addEventListener;var d={speed:500,easing:"easeInOutCubic",offset:0,updateURL:false,callbackBefore:function(){},callbackAfter:function(){}};var g=function(o,m){for(var n in m){if(Object.prototype.hasOwnProperty.call(m,n)){o[n]=m[n]}}return o};var f=function(p,r,o){if(Object.prototype.toString.call(p)==="[object Object]"){for(var q in p){if(Object.prototype.hasOwnProperty.call(p,q)){r.call(o,p[q],q,p)}}}else{for(var n=0,m=p.length;n<m;n++){r.call(o,p[n],n,p)}}};var k=function(m,o){var n;if(m==="easeInQuad"){n=o*o}if(m==="easeOutQuad"){n=o*(2-o)}if(m==="easeInOutQuad"){n=o<.5?2*o*o:-1+(4-2*o)*o}if(m==="easeInCubic"){n=o*o*o}if(m==="easeOutCubic"){n=--o*o*o+1}if(m==="easeInOutCubic"){n=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1}if(m==="easeInQuart"){n=o*o*o*o}if(m==="easeOutQuart"){n=1- --o*o*o*o}if(m==="easeInOutQuart"){n=o<.5?8*o*o*o*o:1-8*--o*o*o*o}if(m==="easeInQuint"){n=o*o*o*o*o}if(m==="easeOutQuint"){n=1+--o*o*o*o*o}if(m==="easeInOutQuint"){n=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o}return n||o};var h=function(o,n,p){var m=0;if(o.offsetParent){do{m+=o.offsetTop;o=o.offsetParent}while(o)}m=m-n-p;return m>=0?m:0};var i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)};var b=function(m){return m.replace(/^\s+|\s+$/g,"")};var a=function(m){var n={};if(m){m=m.split(";");m.forEach(function(o){o=b(o);if(o!==""){o=o.split(":");n[o[0]]=b(o[1])}})}return n};var c=function(n,m){if(history.pushState&&(m||m==="true")){history.pushState({pos:n.id},"",n)}};e.animateScroll=function(v,p,n,y){var A=g(d,n||{});var u=a(v?v.getAttribute("data-options"):null);A=g(A,u);var E=document.querySelector("[data-scroll-header]");var x=E===null?0:E.offsetHeight+E.offsetTop;var s=j.pageYOffset;var m=h(document.querySelector(p),x,parseInt(A.offset,10));var w;var o=m-s;var q=i();var B=0;var r,D;if(v&&v.tagName.toLowerCase()==="a"&&y){y.preventDefault()}c(p,A.updateURL);var C=function(F,I,G){var H=j.pageYOffset;if(F==I||H==I||j.innerHeight+H>=q){clearInterval(G);A.callbackAfter(v,p)}};var t=function(){B+=16;r=B/parseInt(A.speed,10);r=r>1?1:r;D=s+o*k(A.easing,r);j.scrollTo(0,Math.floor(D));C(D,m,w)};var z=function(){A.callbackBefore(v,p);w=setInterval(t,16)};if(j.pageYOffset===0){j.scrollTo(0,0)}z()};e.init=function(m){if(!l){return}var n=g(d,m||{});var o=document.querySelectorAll("[data-scroll]");f(o,function(p){p.addEventListener("click",e.animateScroll.bind(null,p,p.getAttribute("href"),n),false)})};return e});