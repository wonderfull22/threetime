function jsonCallback(json){var obj=jQuery.parseJSON(json);if(console.log(obj),null==obj.errors){var amountPay=obj.results[0].payment_per_interval;null!=amountPay&&($(".finanlink").show(),$(".financeit-price").text(amountPay),$(".finanlink").attr("href",obj.application_link))}else console.log(obj.errors)}$(document).ready((function(){var windowWidth;$(this).scrollTop(0),AOS.init({duration:1500}),$(window).width()<1e3&&$(".filter-group").toggleClass("active-filter")})),$("form").on("click",'button:not([type="submit"])',(function(e){e.preventDefault()})),$(".sharing-button").on("click",(function(e){e.preventDefault(),$(this).find(".social-sharing").toggleClass("active-sharing")})),$(".main-description").find(".contact-info").appendTo(".contact-items"),$(".main-description").find(".locations").appendTo(".store-locations"),$(".tab-heading").click((function(){var content=$(this).data("content");$(".tab-contents > li").hide(),$("#"+content).show(),$(".tab-headings li").removeClass("active-tab"),$(this).closest("li").addClass("active-tab")})),$(".fd-product-tabs li:first-child").addClass("active-tab"),$(".fd-product-tabs a").click((function(e){e.preventDefault();var content=$(this).attr("href");$(".fd-product-tab-pane").hide(),$(content).show(),$(".fd-product-tabs li").removeClass("active-tab"),$(this).closest("li").addClass("active-tab")})),$(".view-option").on("click",(function(){$(".view-option").removeClass("active-list"),$(this).addClass("active-list"),$(".collection-list-view").fadeOut(),$("."+$(this).data("list")).fadeIn()})),$("#pagination--count").on("change",(function(){var val=$(this).val();$.ajax({type:"POST",url:"/cart.js",data:{"attributes[pagination]":val},dataType:"json",success:function(){window.location.reload()}})})),$(".link-accord").on("click",(function(e){e.preventDefault(),$(this).closest(".sidebar-link").toggleClass("active-accordion")})),$(".mobile-accordion").on("click",(function(){$(this).closest(".grid__item").toggleClass("active-accordion")})),$(".filter-heading").on("click",(function(e){e.preventDefault()}));var num_of_maps=$(".location-map").length,map,map2,map3,map4,mapContainer;console.log(num_of_maps);for(var i=1;i<=num_of_maps;i++)mapAddress("map_"+i,(mapContainer=$("#map_"+i)).data("address")),console.log("#map_"+i+" address:"+mapContainer.data("address"));function mapAddress(mapElement,address){var geocoder;(new google.maps.Geocoder).geocode({address:address},(function(results,status){if(status==google.maps.GeocoderStatus.OK)var mapOptions={zoom:14,center:results[0].geometry.location,disableDefaultUI:!0,styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"},{visibility:"off"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]},map=new google.maps.Map(document.getElementById(mapElement),mapOptions),marker=new google.maps.Marker({map:map,position:results[0].geometry.location,icon:"https://cdn.shopify.com/s/files/1/0680/1801/files/locations.png?1276396881828341755"});else alert("Geocode was not successful for the following reason: "+status)}))}function labnolThumb(id){var thumb,play='<div class="play-video"></div>';return'<img src="https://i.ytimg.com/vi/ID/maxresdefault.jpg">'.replace("ID",id)+play}function labnolIframe(){var iframe=document.createElement("iframe"),embed="https://www.youtube.com/embed/ID?autoplay=1";iframe.setAttribute("src",embed.replace("ID",this.dataset.id)),iframe.setAttribute("frameborder","0"),iframe.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(iframe,this)}document.addEventListener("DOMContentLoaded",(function(){var div,n,v=document.getElementsByClassName("youtube-player");for(n=0;n<v.length;n++)(div=document.createElement("div")).setAttribute("data-id",v[n].dataset.id),div.innerHTML=labnolThumb(v[n].dataset.id),div.onclick=labnolIframe,v[n].appendChild(div)})),jQuery(document).ready((function(jQuery){function jsonCallback(json){var obj=jQuery.parseJSON(json);if(console.log(obj),null==obj.errors){var amountPay=obj.results[0].payment_per_interval;null!=amountPay&&(jQuery(".finanlink").show(),jQuery(".financeit-price").text(amountPay),jQuery(".finanlink").attr("href",obj.application_link))}else console.log(obj.errors)}var getUrl=jQuery(".getprice").data("apiurl"),getamount=jQuery(".getprice").data("amount");console.log(getUrl),jQuery.ajax({url:getUrl,type:"GET",data:"amount="+getamount,dataType:"jsonp",success:function(data,success){console.log("success"),console.log(data),console.log(success)},error:function(data,error){console.log("error"),console.log(data),console.log(error)}});var fixmeTop=$(".wrapper-header").height();$(window).scroll((function(){var currentScroll;$(window).scrollTop()>=fixmeTop?$(".wrapper-header").addClass("scrolled"):$(".wrapper-header").removeClass("scrolled")}))})),$(".js-toggle-submenu").click((function(){$(this).hasClass("is-active")?$(this).next(".mobile-nav__dropdown").slideUp():$(this).next(".mobile-nav__dropdown").slideDown()}));