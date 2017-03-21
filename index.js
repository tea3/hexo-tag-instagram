'use strict';

hexo.extend.tag.register('instagram', function(args, content){

	var postURL    = "";
	var postId     = "";
	var returnHTML = "";
	var is_captioned = true;

	// checking _config.yml
	if(!hexo.config.tagInstagram || hexo.config.tagInstagram.captioned !== undefined){
	  is_captioned = (hexo.config.tagInstagram.captioned ? true : false);
	}


	if(args.length == 1){
		postURL = args[0];
  	}else if(args.length == 2){
  		is_captioned = (args[0] ? true : false);
  		postURL = args[1];
  	}else{
  		return "";
  	}
  	
  	
  	if(postURL && postURL.match(/https\:\/\/www\.instagram\.com\/p\/[0-9a-zA-Z-_]+/)){
	  	var matchURL = postURL.match(/https\:\/\/www\.instagram\.com\/p\/([0-9a-zA-Z-_]+)/);
	  	postId = matchURL[1];
  	}else if(postURL && postURL.match(/[0-9a-zA-Z-_]+/)){
		postId = postURL;
	}
	

  	if(postId != ""){
		returnHTML = '<div class="instagram-wrapper"><blockquote class="instagram-media"' + (is_captioned ? ' data-instgrm-captioned' : '') + ' data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px auto; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/' + postId + '/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank"></a></p></div></blockquote></div><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>';
	}
	  return returnHTML;
},{
  async: true,
  ends: false
});