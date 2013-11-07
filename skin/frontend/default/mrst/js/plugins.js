// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function(e){e.fn.extend({easyResponsiveTabs:function(t){var n={type:"default",width:"auto",fit:true,closed:false,activate:function(){}};var t=e.extend(n,t);var r=t,i=r.type,s=r.fit,o=r.width,u="vertical",a="accordion";e(this).bind("tabactivate",function(e,n){if(typeof t.activate==="function"){t.activate.call(n,e)}});this.each(function(){function f(){if(i==u){n.addClass("resp-vtabs")}if(s==true){n.css({width:"100%",margin:"0px"})}if(i==a){n.addClass("resp-easy-accordion");n.find(".resp-tabs-list").css("display","none")}}var n=e(this);var r=n.find("ul.resp-tabs-list");n.find("ul.resp-tabs-list li").addClass("resp-tab-item");n.css({display:"block",width:o});n.find(".resp-tabs-container > div").addClass("resp-tab-content");f();var l;n.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");var c=0;n.find(".resp-accordion").each(function(){l=e(this);var t=n.find(".resp-tab-item:eq("+c+")").html();n.find(".resp-accordion:eq("+c+")").append(t);l.attr("aria-controls","tab_item-"+c);c++});var h=0,p;n.find(".resp-tab-item").each(function(){$tabItem=e(this);$tabItem.attr("aria-controls","tab_item-"+h);$tabItem.attr("role","tab");if(t.closed!==true&&!(t.closed==="accordion"&&!r.is(":visible"))&&!(t.closed==="tabs"&&r.is(":visible"))){n.find(".resp-tab-item").first().addClass("resp-tab-active");n.find(".resp-accordion").first().addClass("resp-tab-active");n.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style","display:block")}var i=0;n.find(".resp-tab-content").each(function(){p=e(this);p.attr("aria-labelledby","tab_item-"+i);i++});h++});n.find("[role=tab]").each(function(){var t=e(this);t.click(function(){var r=t.attr("aria-controls");if(t.hasClass("resp-accordion")&&t.hasClass("resp-tab-active")){n.find(".resp-tab-content-active").slideUp("",function(){e(this).addClass("resp-accordion-closed")});t.removeClass("resp-tab-active");return false}if(!t.hasClass("resp-tab-active")&&t.hasClass("resp-accordion")){n.find(".resp-tab-active").removeClass("resp-tab-active");n.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed");n.find("[aria-controls="+r+"]").addClass("resp-tab-active");n.find(".resp-tab-content[aria-labelledby = "+r+"]").slideDown().addClass("resp-tab-content-active")}else{n.find(".resp-tab-active").removeClass("resp-tab-active");n.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed");n.find("[aria-controls="+r+"]").addClass("resp-tab-active");n.find(".resp-tab-content[aria-labelledby = "+r+"]").addClass("resp-tab-content-active").attr("style","display:block")}t.trigger("tabactivate",t)});e(window).resize(function(){n.find(".resp-accordion-closed").removeAttr("style")})})})}})})(jQuery)