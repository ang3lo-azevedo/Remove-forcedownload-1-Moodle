// ==UserScript==
// @name         Remove ?forcedownload=1 Moodle
// @version      1.0
// @description  Remove o parâmetro ?forcedownload=1 no Moodle do ISEL e abre documentos numa nova tab
// @author       Ângelo Azevedo
// @match        https://2324moodle.isel.pt/*
// @downloadURL  https://gist.githubusercontent.com/ang3lo-azevedo/855e618f77167b81ebf7b28803c6956e/raw/501e5faca1562472d4157e6cb8e1411967f0acba/Remove%2520-forcedownload=1%2520Moodle.js
// @updateURL    https://gist.githubusercontent.com/ang3lo-azevedo/855e618f77167b81ebf7b28803c6956e/raw/501e5faca1562472d4157e6cb8e1411967f0acba/Remove%2520-forcedownload=1%2520Moodle.js
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.indexOf('?forcedownload=1') !== -1) {
            link.href = link.href.replace('?forcedownload=1', '');
            link.target = '_blank';
        }
    }
})();
