/* ---------------------------------------------------------------------------------
Author: Andrea Gallotta
Website: http://andlink.net/
Version: 1.0.0
Date: 2018-09-01

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

Get the full text of the GPL here: http://www.gnu.org/licenses/gpl.txt
--------------------------------------------------------------------------------- */

function move_resize() {
    var top = $('.navbar-fixed-left').offset().top;
    var margin = -1 * $(".cont-header").height();
    if(top - $(window).scrollTop() < 0 ) {
        $(".container").css("position", "fixed");   
        $(".container").css("margin-top", margin);
        $(".container").css("background", "black");
        if ($(".sr-only").is(":visible")) {
            $(".container").css("width", "100%");
            $(".container").css("padding-right", "20px");                    
            $(".cont-right").css("z-index", "1");    
            $(".cont-left").css("z-index", "9999");    
        } else {
            $(".container").css("width", "auto");
            $(".container").css("padding-right", "0px");
            $(".cont-right").css("z-index", "9999");    
            $(".cont-left").css("z-index", "1");    
        }
    } else {            
        $(".container").css("margin-top", 0);                           
        $(".container").css("padding-right", "0px");     
        if ($(".sr-only").is(":visible")) {
            $(".container").css("position", "relative");
            $(".container").css("width", "100%");
            $(".container").css("padding-right", "20px");    
        } else {
            $(".container").css("position", "absolute");
            $(".container").css("width", "auto");
            $(".container").css("padding-right", "0px");
        }        
    }
}

$(window).scroll(function() { move_resize(); });  
$(window).resize(function() { move_resize(); });