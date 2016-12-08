var jQuery = require("jquery");
var $ = jQuery;

$(document).ready(function () {

    /**Randomize gif*/
    var nGif = Math.floor(Math.random() * 18) + 1;
    var nTxt = Math.floor(Math.random() * 18) + 1;
    $("#gif").attr("src", "img/gif" + nGif + ".gif");
    $("#giftxt").attr("src", "img/txt" + nTxt + ".png");

    // put about.html in the placeholder
    $(".abo").load("about");
});
