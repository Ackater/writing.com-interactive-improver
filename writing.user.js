// ==UserScript==
// @name        Writing.com
// @include http://writing.com/*
// @include http://www.writing.com/*
// @include https://writing.com/*
// @include https://www.writing.com/*
// @downloadURL https://github.com/Ackater/writing.com-interactive-improver/raw/master/writing.user.js
// @description Writing.com Interactive bullshit
// @version     5
// @grant       none
// ==/UserScript==
/* eslint-env jquery */
//Refresh a "Heavy server volume" page half a second after it loads

var test = /Due to resource limitations/.test(document.body.innerHTML);
if (test)
{
    setTimeout(function() {
    location.reload();
    }, 100);
} else {
    var path = document.location.pathname;
    //Add some buttons to make the intro page look better
    if (path.match(/\/main\/interactive-story\/item_id\/(\d+)-[\w-]+/)) {
        var enter = $('a:contains("Start this interactive story...")')[0];
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
