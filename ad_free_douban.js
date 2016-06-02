// ==UserScript==
// @name         Ad-free douban
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  clear-up ads in douban 
// @author       Yuesong Shen
// @match        https://www.douban.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // remove Yi Pai Yi AD
    document.getElementById("side-ypy").innerHTML = "";

    // remove side bar ads
    var adSlots = ['dale_homepage_login_top_right', 'dale_homepage_login_bottom_middle_right', 'dale_homepage_login_bottom_right', 'dale_homepage_online_activity_promo'];
    for (var i=0; i<adSlots.length; i++){
        var elem = document.getElementById(adSlots[i]);
        elem.parentNode.removeChild(elem);
    }

    // remove douban Shi Ji AD in status stream content
    var stats = document.getElementsByClassName("status-item");
    for (i=0; i<stats.length; i++){
        if (stats[i].getAttribute('data-object-id') === "None"){
            stats[i].innerHTML = "";
        }
    }
})();
