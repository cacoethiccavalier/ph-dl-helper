// ==UserScript==
// @name         PornHub Download Helper
// @version      1.0.0
// @namespace    https://github.com/cacoethiccavalier/ph-dl-helper
// @description  Removes PornHub's event catcher div so you can just right click and save videos
// @author       Cacoethic Cavalier <code@cacocav.com>
// @license      Apache v2.0
// @match        https://www.pornhub.com/view_video.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('#player > div > div').forEach(function (elem) {
        if(~elem.className.indexOf('eventCatcher')) {
            elem.remove();
        }
    });
})();