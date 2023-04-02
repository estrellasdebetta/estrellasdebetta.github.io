var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function(b){b(document.body).on("wcpbc_refresh_cart_fragments",function(){var c;try{c="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc")}catch(a){c=!1}var d={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(a){a&&a.fragments&&(b.each(a.fragments,function(a,c){b(a).replaceWith(c)}),c&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,
JSON.stringify(a.fragments)),sessionStorage.setItem("wc_cart_hash",a.cart_hash)),b(document.body).trigger("wc_fragments_refreshed"))}};b.ajax(d)});"undefined"!==typeof wcpbc_frontend_params&&b(document.body).trigger("wcpbc_refresh_cart_fragments")});

}
/*
     FILE ARCHIVED ON 05:41:56 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:26:33 Apr 01, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.199
  exclusion.robots: 0.139
  exclusion.robots.policy: 0.124
  RedisCDXSource: 3.784
  esindex: 0.009
  LoadShardBlock: 51.879 (3)
  PetaboxLoader3.datanode: 53.698 (4)
  load_resource: 469.391
  PetaboxLoader3.resolve: 72.271
*/