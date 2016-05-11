/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    
    var score = 0,
        remaining = 4,
        clicksRemaining = 10,
        stop = true;
    
    $('html').click(function () {
        
        if (clicksRemaining > 0 && stop == true) {
            clicksRemaining = clicksRemaining - 1;
            $('label#clicks-remaining span').text(clicksRemaining);
        }
        
        if (clicksRemaining == 0 && remaining > 0) {
            
            $('div.lvl-1').fadeOut();
            $('div.lvl-2').fadeOut();
            $('h2.lose').fadeIn();
            
        }
        
    });
    
    $("div.div-1-circle").click(function () {
        
        $(this).remove();
        score = score + 2;
        remaining = remaining - 1;
        clicksRemaining = clicksRemaining + 1;
        
        $('label#score span').text(score);
        $('label#remaining span').text(remaining);
        
        if (score == 8) {
            $('.lvl-1-win').fadeIn();
            stop = false;
        }
    });
    
    
    $("div.div-2-circle").click(function () {
        
        $(this).remove();
        score = score + 4;
        remaining = remaining - 1;
        clicksRemaining = clicksRemaining + 1;
        
        $('label#score span').text(score);
        $('label#remaining span').text(remaining);
        
        if (score == 24) {
            $('.lvl-2-win').fadeIn();
            stop = false;
        }
    });
    
    
    
    var min = -50;
    var max = 120;
    var random1;
    var random2;
    
    ////////////////////////////////////////////
    ///////////////Level ONE START//////////////
    ////////////////////////////////////////////
    
    function lvlOne() {
        setInterval(function () {
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-1-circle:nth-child(1)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 2000);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-1-circle:nth-child(2)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 2000);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-1-circle:nth-child(3)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 2000);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-1-circle:nth-child(4)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 2000);
        
    },5000);
    }
    lvlOne();
    
    $('.lvl-1-win span').click(function (){
        
        $('.lvl-1-win').hide();
        $('.lvl-2').fadeIn();
        stop = true;
        remaining = 4;
        $('label#remaining span').text(remaining);
        lvlTwo();
        
    });
    
    ////////////////////////////////////////////
    ///////////////Level ONE END////////////////
    ////////////////////////////////////////////
    
    
    
    ////////////////////////////////////////////
    ///////////////Level TWO START//////////////
    ////////////////////////////////////////////
    
    function lvlTwo() {
        setInterval(function () {
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-2-circle:nth-child(1)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 1200);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-2-circle:nth-child(2)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 1200);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-2-circle:nth-child(3)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 1200);
        
        random1 = Math.floor(Math.random() * (max - min + 1) + min);
        random2 = Math.floor(Math.random() * (max - min + 1) + min);
        $('div.div-2-circle:nth-child(4)').animate({
            
            "left" : random1 + "%",
            "top" : random2 + "%"
            
        }, 1200);
        
    },0);
    }
    lvlOne();
    
    $('.lvl-1-win span').click(function (){
        
        $('.lvl-1-win').hide();
        $('.lvl-2').fadeIn();
        stop = true;
        remaining = 4;
        $('label#remaining span').text(remaining);
        
        
    });
    
    ////////////////////////////////////////////
    ///////////////Level Two END////////////////
    ////////////////////////////////////////////
    
});
















