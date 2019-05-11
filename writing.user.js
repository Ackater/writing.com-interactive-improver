// ==UserScript==
// @name        Writing.com
// @include http://writing.com/*
// @include http://www.writing.com/*
// @include https://writing.com/*
// @include https://www.writing.com/*
// @description Writing.com Interactive bullshit
// @version     1
// @grant       none
// ==/UserScript==

//Refresh a "Heavy server volume" page every 10 seconds.

var test = /Please try again in a few minutes/.test(document.body.innerHTML);
if (test)
{
    setTimeout ("location.reload();", 500);
} else {
    var path = document.location.pathname;
    //Add some buttons to make the intro page look better
    if (path.match(/\/main\/interact\/item_id\/(\d+)-[\w-]+/)) {
        var enter = $('a:contains("Click here to begin the story...")')[0];
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
