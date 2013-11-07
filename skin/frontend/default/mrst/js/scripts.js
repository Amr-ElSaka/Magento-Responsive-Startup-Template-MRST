///////////////////////////////
// Header
//////////////////////////////
/* TOP Nav
--------------------------*/
var ww = document.body.clientWidth;
jQuery(document).ready(function() {
  jQuery("#nav li a").each(function() {
    if (jQuery(this).next().length > 0) {
    	jQuery(this).addClass("dropparent");
		};
	})
	jQuery(".toggleMenu").click(function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("#nav").toggle();
	});
	adjustMenu();
})
jQuery(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});
var adjustMenu = function() {
	if (ww < 960) {
    // if "more" link not in DOM, add it
    if (!jQuery(".more")[0]) {
    jQuery('<div class="more">&nbsp;</div>').insertBefore(jQuery('.dropparent')); 
    }
		jQuery(".toggleMenu").css("display", "inline-block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery("#nav").hide();
		} else {
			jQuery("#nav").show();
		}
		jQuery("#nav li").unbind('mouseenter mouseleave');
		jQuery("#nav li a.dropparent").unbind('click');
    	jQuery("#nav li .more").unbind('click').bind('click', function() {
			jQuery(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 960) {
    // remove .more link in desktop view
    jQuery('.more').remove(); 
		jQuery(".toggleMenu").css("display", "none");
		jQuery("#nav").show();
		jQuery("#nav li").removeClass("hover");
		jQuery("#nav li a").unbind('click');
		jQuery("#av li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	jQuery(this).toggleClass('hover');
		});
	}
}

///////////////////////////////
// Product List
//////////////////////////////

jQuery('.products-grid li.item:nth-child(2n)').addClass('second');
jQuery('.products-grid li.item:nth-child(3n)').addClass('third');

///////////////////////////////
//Product Page
//////////////////////////////

// Add to cart + and -
jQuery("div.quantity").append('<input type="button" value="+" id="add1" class="plus" />').prepend('<input type="button" value="-" id="minus1" class="minus" />');
	jQuery(".plus").click(function()
	{
		var currentVal = parseInt(jQuery(this).prev(".qty").val());
		if (!currentVal || currentVal=="" || currentVal == "NaN") currentVal = 0;
		jQuery(this).prev(".qty").val(currentVal + 1); 
	});
    jQuery(".minus").click(function()
	{
		var currentVal = parseInt(jQuery(this).next(".qty").val());
		if (currentVal == "NaN") currentVal = 1;
		if (currentVal > 1)
		{
	    jQuery(this).next(".qty").val(currentVal - 1);
		}
	});
/* tabs */
jQuery("#productShopTabs, #productCollateralTabs").easyResponsiveTabs({
	type: 'default', //Types: default, vertical, accordion           
	width: 'auto', //auto or any custom width
	fit: true,   // 100% fits in a container
	activate: function() {} // Callback function, gets called if tab is switched
});