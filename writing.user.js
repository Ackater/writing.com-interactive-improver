// ==UserScript==
// @name        Writing.com
// @include http://writing.com/*
// @include http://www.writing.com/*
// @include https://writing.com/*
// @include https://www.writing.com/*
// @downloadURL https://github.com/Ackater/writing.com-interactive-improver/raw/master/writing.user.js
// @description Writing.com Interactive bullshit
// @version     6
// @grant       none
// ==/UserScript==
/* eslint-env jquery */
//Refresh a "Heavy server volume" page half a second after it loads

var test = /vimeo.com\/video\/253498365/.test(document.body.innerHTML);
if (document.location.pathname.match(/\/main\/interactive-story\/item_id\//) && test)
{
    setTimeout(function() {
    location.reload();
    }, 500);
} else {
    var path = document.location.pathname;
    //Add some buttons to make the intro page look better
    if (path.match(/\/main\/interactive-story\/item_id\/(\d+)-[\w-]+$/)) {
        var enter = $("a[href$='/map/1']")[0];
        var parent = enter.parentNode;
  
        var recent = enter.cloneNode(false);
        recent.text = "Recent Additions";
        recent.href = path + "/action/recent_chapters";
  
        var map = enter.cloneNode(false);
        map.text = "Story Outline";
        map.href = path + "/action/outline";
  
        parent.innerHTML = " · " + parent.innerHTML + " · ";
        parent.appendChild(map);
        parent.insertBefore(recent, parent.firstChild);
    }
}
