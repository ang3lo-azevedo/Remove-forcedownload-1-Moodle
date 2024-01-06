// ==UserScript==
// @name         Remove ?forcedownload=1 Moodle
// @version      1.1
// @description  Remove o parâmetro ?forcedownload=1 no Moodle do ISEL e abre documentos numa nova tab. Não façam download de jogos pirateados a partir de sites brasileiros se faz favor. Usem o r/Piracy.
// @author       Ângelo Azevedo
// @match        https://2324moodle.isel.pt/*
// @downloadURL  https://raw.githubusercontent.com/ang3lo-azevedo/Remove-forcedownload-1-Moodle/main/Remove%20%3Fforcedownload%3D1%20Moodle.js
// @updateURL    https://raw.githubusercontent.com/ang3lo-azevedo/Remove-forcedownload-1-Moodle/main/Remove%20%3Fforcedownload%3D1%20Moodle.js
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
