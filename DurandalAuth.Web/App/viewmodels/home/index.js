﻿define(function () {

    return {

        activate: function () {
            ga('send', 'pageview', { 'page': window.location.href, 'title': document.title });
        },

        viewAttached: function () {
            Stashy.Slider("#index #featured", { showControls: false, showIndicators: false, enableTouch: true }).on();
            $("#index #featured").animate({ opacity: 1 }, 500);
        }
    };
});