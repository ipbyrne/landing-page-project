!function(i){window.lp=window.lp||{},window.lp.image=window.lp.image||{},i(document).ready(function(){lp.image.main.start()}),i(window).resize(function(){lp.image.main.start()}),lp.image.main=function(){var n=function(n){return i(n).css("background-image").replace(/['"]/g,"").slice(4,-1)},t=function(t,a){var e=i(a).attr("id").split("-holder")[0],r=i("#"+e+" img");r.attr("src",n(a))},a=function(){i.each(i(".lp-pom-image-holder"),t)},e=function(){a()};return{start:e}}()}(lp.jQuery);