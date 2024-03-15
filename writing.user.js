// ==UserScript==
// @name        Writing.com
// @include http://writing.com/*
// @include http://www.writing.com/*
// @include https://writing.com/*
// @include https://www.writing.com/*
// @downloadURL https://github.com/Ackater/writing.com-interactive-improver/raw/master/writing.user.js
// @description Writing.com Interactive bullshit
// @version     8
// @grant       none
// ==/UserScript==
/* eslint-env jquery */
//Refresh a "Heavy server volume" page half a second after it loads

var test = document.title === "One Moment Please...";
if (document.location.pathname.match(/\/main\/interactive-story\/item_id\//) && test)
{
    setTimeout(function() {
    location.reload();
    }, 10000);
} 
