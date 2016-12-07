var jQuery = require('jquery');
var $ = jQuery

$(document).ready(function(){

    /**Randomize gif*/
    var nGif = Math.floor(Math.random() * 12) + 1 ;
    var nTxt = Math.floor(Math.random() * 12) + 1 ;
    $("#gif").attr('src', 'img/gif' + nGif + '.gif');
    $("#giftxt").attr('src', 'img/txt' + nTxt + '.png');

    // put about.html in the placeholder
    $(".abo").load("about");

});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
};
