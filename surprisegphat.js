// ==UserScript==
// @name          SURPRISEGPHAT
// @namespace     http://www.rjgoldsborough
// @description   SURPRISEGPHATONEVERYPAGE
// @include       *
// @grant         none
// ==/UserScript==

var div = document.createElement('div');
div.className = "surprise-gphat";
div.style.backgroundImage = "url(https://www.runscope.com/static/img/public/customer-portrait-keenio.png)"
div.style.position = "fixed";
div.style.right = "15%";
div.style.bottom = "0";
div.style.height = "355px";
div.style.width = "350px";

document.getElementsByTagName('body')[0].appendChild(div);
