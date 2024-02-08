$(document).ready(function() {
  
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        toggleEnvelope();
    });
    btn_open.click(function() {
        toggleEnvelope();
    });
    btn_reset.click(function() {
        closeEnvelope();
    });

    function toggleEnvelope() {
        if (envelope.hasClass("open")) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    }

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        $(".heart").css("opacity", "1");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        $(".heart").css("opacity", "0");
    }
    

   
});
