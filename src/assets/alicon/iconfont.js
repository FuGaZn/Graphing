(function(window){var svgSprite='<svg><symbol id="icon-xiangpi" viewBox="0 0 1024 1024"><path d="M992.187733 391.645867c40.96-40.3456 40.96-100.898133 0-141.312A291646.0544 291646.0544 0 0 1 777.4208 38.365867c-59.733333-52.155733-96.938667-42.734933-143.223467 0C634.606933 39.048533 433.493333 239.342933 30.72 638.976c-40.96 40.413867-40.96 100.9664 0 141.312l214.766933 212.036267c15.36 20.138667 40.96 30.242133 61.44 30.242133h613.717334v-50.517333H409.1904l368.2304-368.366934 214.766933-212.036266zM311.978667 972.117333a55.637333 55.637333 0 0 1-35.771734-15.1552L61.371733 744.994133c-5.12-10.103467-10.24-20.206933-10.24-35.362133 0-15.1552 5.12-25.258667 15.36-35.293867l332.458667-328.0896c0 20.206933 10.24 35.362133 25.531733 50.517334l214.8352 211.968c15.36 15.086933 30.72 20.138667 46.011734 25.258666l-332.458667 328.021334c-10.24 5.051733-25.531733 10.103467-40.891733 10.103466z"  ></path></symbol><symbol id="icon-shibie" viewBox="0 0 1024 1024"><path d="M951.890231 102.19031V331.339812h71.884159V60.39952c0-65.785503-60.286715-60.286715-60.286715-60.286715h-270.940292v71.884159h229.24948c0 0.199956 30.093368 1.099758 30.093368 30.193346zM71.884159 102.19031c0-29.193567 30.093368-30.093368 30.093368-30.093368h229.24948v-71.884159h-270.940292s-60.286715-5.698744-60.286715 60.286715v270.940292h71.884159V102.19031zM951.890231 921.80969c0 29.193567-30.093368 30.093368-30.093368 30.093368h-229.24948v71.884159h270.940292s60.286715 5.498788 60.286715-60.286715v-270.940292h-71.884159v229.24948zM71.884159 921.80969v-229.149502h-71.884159v270.940292c0 65.785503 60.286715 60.286715 60.286715 60.286715h270.940292v-71.884159h-229.049524c-0.099978 0-30.293324-0.99978-30.293324-30.193346zM0.099978 459.811501H1023.77439v91.779774h-1023.674412z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)