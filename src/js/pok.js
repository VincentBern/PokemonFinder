var jQuery = require('jquery');
var $ = jQuery

/**Show advanced controls*/
$(document).on("click","#Advanced", function(){

    if (document.getElementById('Advanced').classList.contains('off')){
        $(".advanced").attr('style', 'opacity:100; height:auto;');
        document.cookie = ('advanced=1');
    }else{
        $(".advanced").attr('style', 'opacity:0; height:0px;');
        document.cookie = ('advanced=0');
    };

    this.classList.toggle('off');
});

/**Show basic controls*/
$(document).on("click","#Basic", function(){

    if (document.getElementById('Basic').classList.contains('off')){
        $(".basic").attr('style', 'opacity:100; height:auto;');
        document.cookie = ('basic=1');
    }else{
        $(".basic").attr('style', 'opacity:0; height:0px;');
        document.cookie = ('basic=0');
    };
    this.classList.toggle('off');
});


// CLEAR SEARCH
$(document).on("click","#Clear", function(){
  location.href = "#"
  $("#search > div > div:nth-child(2) > div:nth-child(1) > div.col-md-8 > div.CoveoOmnibox.magic-box.magic-box-inline.coveo-magicbox-search-as-you-type > div.magic-box-input > input").focus()
});

$(document).ready(function(){

    if (getCookie('basic')==1){
        $("#Basic").click();
    };

    if (getCookie('advanced')==1){
        $("#Advanced").click();
    };

    /**Randomize gif*/
    var nGif = Math.floor(Math.random() * 12) + 1 ;
    var nTxt = Math.floor(Math.random() * 12) + 1 ;
    $("#gif").attr('src', 'img/gif' + nGif + '.gif');
    $("#giftxt").attr('src', 'img/txt' + nTxt + '.png');

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
