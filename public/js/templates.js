!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.artist=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s,i=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="artistDiv" id='+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+' name="'+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+'">\n    \x3c!--<div class="checkbox" id=\'checkbox_'+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+"'  >--\x3e\n        \x3c!--<div class=\"checkSlider\" id='checkSlider_"+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+'\'></div>--\x3e\n    \x3c!--</div>--\x3e\n    <i class="fas fa-thumbtack" id='+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+'_thumbtack></i>\n    <div class="artistName"> '+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+' </div>\n    <i class="far fa-times-circle" id='+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+'_delete></i>\n    <svg class="artistShape" id='+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+"_artistShape></svg>\n</div>\n"},useData:!0}),l.recommendation=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s,i=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="recommendation" id='+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'>\n    <div class="permanent" id="permanent_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'" >\n        <div class="buttons" id="buttons_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'">\n            <button class="thumbUp fa fa-thumbs-o-up" id="thumbUp_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'" style="font-size: 35px"></button>\n            <button class=\'playButton fa fa-play-circle\'  id=trackButton_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+' style="font-size: 35px"></button>\n            <audio id=trackAudio_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+">\n                <source src="+c((s=null!=(s=t.preview||(null!=l?l.preview:l))?s:d,typeof s===u?s.call(i,{name:"preview",hash:{},data:e}):s))+'>\n            </audio>\n            <button class="thumbDown fa fa-thumbs-o-down" id="thumbDown_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'"  style="font-size: 35px"></button>\n        </div>\n        <div class="titleLinkDiv">\n            <a href='+c((s=null!=(s=t.url||(null!=l?l.url:l))?s:d,typeof s===u?s.call(i,{name:"url",hash:{},data:e}):s))+' target="_blank" title="'+c((s=null!=(s=t.title||(null!=l?l.title:l))?s:d,typeof s===u?s.call(i,{name:"title",hash:{},data:e}):s))+" from "+c((s=null!=(s=t.artist||(null!=l?l.artist:l))?s:d,typeof s===u?s.call(i,{name:"artist",hash:{},data:e}):s))+'"   class="titleLink"\n               id="songLink_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'">'+c((s=null!=(s=t.title||(null!=l?l.title:l))?s:d,typeof s===u?s.call(i,{name:"title",hash:{},data:e}):s))+'</a>\n            <p class="artistNameRecommendation"><i>'+c((s=null!=(s=t.artist||(null!=l?l.artist:l))?s:d,typeof s===u?s.call(i,{name:"artist",hash:{},data:e}):s))+'</i></p>\n        </div>\n\n        <div class="miniHistogram">\n            <svg id="miniHistogramSvg_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'", width="60" height="60"></svg>\n        </div>\n    </div>\n    <div class="popUp hidden" id="popUp_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'" >\n        <div id="tooltipBarDiv_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'" class="tooltipBar"></div>\n        <svg id="popUpSvg_'+c((s=null!=(s=t.trackId||(null!=l?l.trackId:l))?s:d,typeof s===u?s.call(i,{name:"trackId",hash:{},data:e}):s))+'" width="500" height="200"></svg>\n    </div>\n\n\n</div>\n\n'},useData:!0}),l.searchResult=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s,i=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id="result_'+c((s=null!=(s=t.index||(null!=l?l.index:l))?s:d,typeof s===u?s.call(i,{name:"index",hash:{},data:e}):s))+'" class="result">\n    <img src="'+c((s=null!=(s=t.imageSrc||(null!=l?l.imageSrc:l))?s:d,typeof s===u?s.call(i,{name:"imageSrc",hash:{},data:e}):s))+'" alt="'+c((s=null!=(s=t.artistName||(null!=l?l.artistName:l))?s:d,typeof s===u?s.call(i,{name:"artistName",hash:{},data:e}):s))+'" style="width:150px; height: 150px"\n         onclick="appendSearchResult(\''+c((s=null!=(s=t.artistName||(null!=l?l.artistName:l))?s:d,typeof s===u?s.call(i,{name:"artistName",hash:{},data:e}):s))+"' , '"+c((s=null!=(s=t.id||(null!=l?l.id:l))?s:d,typeof s===u?s.call(i,{name:"id",hash:{},data:e}):s))+"')\">\n    <p>"+c((s=null!=(s=t.artistName||(null!=l?l.artistName:l))?s:d,typeof s===u?s.call(i,{name:"artistName",hash:{},data:e}):s))+"</p>\n</div>\n"},useData:!0}),l.slider=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s,i=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return"\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id='"+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+'\' class="slidecontainer">'+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+" : "+c((s=null!=(s=t.startValue||(null!=l?l.startValue:l))?s:d,typeof s===u?s.call(i,{name:"startValue",hash:{},data:e}):s))+'\n    <input type="range" min="0" max="100" value=\''+c((s=null!=(s=t.startValue||(null!=l?l.startValue:l))?s:d,typeof s===u?s.call(i,{name:"startValue",hash:{},data:e}):s))+"' id= '"+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+'_Slider\' class="slider" color='+c((s=null!=(s=t.color||(null!=l?l.color:l))?s:d,typeof s===u?s.call(i,{name:"color",hash:{},data:e}):s))+' style=\n            "background: linear-gradient(90deg, '+c((s=null!=(s=t.color||(null!=l?l.color:l))?s:d,typeof s===u?s.call(i,{name:"color",hash:{},data:e}):s))+" "+c((s=null!=(s=t.startValue||(null!=l?l.startValue:l))?s:d,typeof s===u?s.call(i,{name:"startValue",hash:{},data:e}):s))+"%, rgba(53, 53, 53, 1) "+c((s=null!=(s=t.startValue||(null!=l?l.startValue:l))?s:d,typeof s===u?s.call(i,{name:"startValue",hash:{},data:e}):s))+"%)\">\n    <div id='"+c((s=null!=(s=t.name||(null!=l?l.name:l))?s:d,typeof s===u?s.call(i,{name:"name",hash:{},data:e}):s))+'_tooltip\' class="tooltip">'+c((s=null!=(s=t.definition||(null!=l?l.definition:l))?s:d,typeof s===u?s.call(i,{name:"definition",hash:{},data:e}):s))+" </div>\n</div>"},useData:!0}),l.song=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s;return"\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div>"+a.escapeExpression((s=null!=(s=t.id||(null!=l?l.id:l))?s:t.helperMissing,"function"==typeof s?s.call(null!=l?l:a.nullContext||{},{name:"id",hash:{},data:e}):s))+"</div>"},useData:!0}),l.tab=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var s,i=null!=l?l:a.nullContext||{},d=t.helperMissing,u=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<button id="tab_'+u((s=null!=(s=t.artistId||(null!=l?l.artistId:l))?s:d,"function"==typeof s?s.call(i,{name:"artistId",hash:{},data:e}):s))+'"   class="tablinks active">'+u((s=null!=(s=t.artistName||(null!=l?l.artistName:l))?s:d,"function"==typeof s?s.call(i,{name:"artistName",hash:{},data:e}):s))+"</button>"},useData:!0})}();