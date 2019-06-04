!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.artist=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="artistDiv" id='+c((i=null!=(i=t.id||(null!=l?l.id:l))?i:d,typeof i===u?i.call(s,{name:"id",hash:{},data:e}):i))+' name="'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'" title="'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'">\n    <div class="artistImage">\n        <img src="'+c((i=null!=(i=t.imageSrc||(null!=l?l.imageSrc:l))?i:d,typeof i===u?i.call(s,{name:"imageSrc",hash:{},data:e}):i))+'" alt="'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'" style="width:150px; height: 150px">\n    </div>\n    <div class="artistAdditional">\n        <div class="artistAdditionalHeader">\n            <div class="artistName">'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'</div>\n            <i class="far fa-times-circle" id='+c((i=null!=(i=t.id||(null!=l?l.id:l))?i:d,typeof i===u?i.call(s,{name:"id",hash:{},data:e}):i))+'_delete></i>\n        </div>\n        <div class="artistAttributes">\n            <svg id="attributes_'+c((i=null!=(i=t.id||(null!=l?l.id:l))?i:d,typeof i===u?i.call(s,{name:"id",hash:{},data:e}):i))+'"></svg>\n        </div>\n    </div>\n\n\n</div>\n'},useData:!0}),l.attributeContainer=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id="attributeContainer_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'" class="attributeContainer">\n    <h1 class="attributeName">'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'</h1>\n    <span class="definition">'+c((i=null!=(i=t.definition||(null!=l?l.definition:l))?i:d,typeof i===u?i.call(s,{name:"definition",hash:{},data:e}):i))+'</span>\n    <div class="buttonAttibuteContainer">\n        <button id="button_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'"   class="showExamplesButton">Show Examples</button>\n        <button id="button_select_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'"   class="selectAttributeButton">Select this attribute</button>\n    </div>\n\n\n    <div id="songDiv_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'" class="exampleSongs">\n        <div id="low_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_container">\n            <h3>Low</h3>\n            <div id="low_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'"></div>\n        </div>\n\n        <div id="medium_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_container">\n            <h3>Medium</h3>\n            <div id="medium_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'"></div>\n        </div>\n\n        <div id="high_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_container">\n            <h3>High</h3>\n            <div id="high_'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'"></div>\n        </div>\n    </div>\n\n</div>\n'},useData:!0}),l.attributeSong=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="exampleSong" id=example_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'>\n    <div class="example_permanent" id="example_permanent_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" >\n        <div class="example_buttons" id="example_buttons_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+"\">\n            <button class='playButton fa fa-play-circle'  id=exampleTrackButton_"+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+' style="font-size: 35px"></button>\n            <audio id=trackAudio_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+">\n                <source src="+c((i=null!=(i=t.preview||(null!=l?l.preview:l))?i:d,typeof i===u?i.call(s,{name:"preview",hash:{},data:e}):i))+'>\n            </audio>\n        </div>\n        <div class="example_titleLinkDiv">\n            <a href='+c((i=null!=(i=t.url||(null!=l?l.url:l))?i:d,typeof i===u?i.call(s,{name:"url",hash:{},data:e}):i))+' target="_blank" title="'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+" from "+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+'"   class="example_titleLink"\n               id="example_songLink_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'</a>\n            <p class="example_artistNameRecommendation"><i>'+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+"</i></p>\n        </div>\n    </div>\n</div>"},useData:!0}),l.dubbleslider=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return"\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id='"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'\' class="slidecontainer">\n    <div class="sliderInfo">\n        <label for=\''+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+"_output'>"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'</label>\n        \x3c!--<input type="text" id=\''+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_output\' class="sliderOutput" value="'+c((i=null!=(i=t.minValue||(null!=l?l.minValue:l))?i:d,typeof i===u?i.call(s,{name:"minValue",hash:{},data:e}):i))+" to "+c((i=null!=(i=t.maxValue||(null!=l?l.maxValue:l))?i:d,typeof i===u?i.call(s,{name:"maxValue",hash:{},data:e}):i))+"\">--\x3e\n        <i id ='tooltip_"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'\' data-toggle="tooltip" title="'+c((i=null!=(i=t.definition||(null!=l?l.definition:l))?i:d,typeof i===u?i.call(s,{name:"definition",hash:{},data:e}):i))+'" class="fas fa-question-circle"></i>\n    </div>\n    <div id="'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_slider_div" background='+c((i=null!=(i=t.color||(null!=l?l.color:l))?i:d,typeof i===u?i.call(s,{name:"color",hash:{},data:e}):i))+"></div>\n\n</div>"},useData:!0}),l.recommendation=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="recommendation" id='+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+' >\n    <div class="headerRec">\n        <div class="recTitle">\n            '+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'\n        </div>\n        <div class="recBy">\n            by\n        </div>\n        <div class="recArtist">\n            '+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+'\n        </div>\n    </div>\n    <div class="contentRec">\n        <div class="leftRec">\n            <div class="recImage" id="recImageDiv_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">\n                <img src="'+c((i=null!=(i=t.image||(null!=l?l.image:l))?i:d,typeof i===u?i.call(s,{name:"image",hash:{},data:e}):i))+'" id="image_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" class="trackImage"  alt="'+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'" style="width:100px; height:\n        100px">\n                <button class=\'playButton fa fa-play-circle\'  id=trackButton_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+' style="font-size: 35px;"></button>\n                <audio id=trackAudio_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+">\n                    <source src="+c((i=null!=(i=t.preview||(null!=l?l.preview:l))?i:d,typeof i===u?i.call(s,{name:"preview",hash:{},data:e}):i))+'>\n                </audio>\n            </div>\n\n            <div class="recAttributes" id="attributes_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">\n                <svg id="rec_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" style="width:300px; height: 100px"></svg>\n            </div>\n\n\n        </div>\n        <div class="rightRec">\n            <button class="thumbUp fa fa-thumbs-o-up" id="thumbUp_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" style="font-size: 35px"></button>\n            <button class="thumbDown fa fa-thumbs-o-down" id="thumbDown_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'"  style="font-size: 35px"></button>\n        </div>\n\n    </div>\n\n\n</div>\n\n'},useData:!0}),l.recommendation1=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="recommendation" id='+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'>\n    <div class="permanent" id="permanent_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" >\n        <div class="buttons" id="buttons_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">\n            <button class="thumbUp fa fa-thumbs-o-up" id="thumbUp_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" style="font-size: 35px"></button>\n            <button class=\'playButton fa fa-play-circle\'  id=trackButton_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+' style="font-size: 35px"></button>\n            <audio id=trackAudio_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+">\n                <source src="+c((i=null!=(i=t.preview||(null!=l?l.preview:l))?i:d,typeof i===u?i.call(s,{name:"preview",hash:{},data:e}):i))+'>\n            </audio>\n            <button class="thumbDown fa fa-thumbs-o-down" id="thumbDown_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'"  style="font-size: 35px"></button>\n        </div>\n        <div class="titleLinkDiv">\n            <p  title="'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+" from "+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+'"   class="titleLink"\n               id="songLink_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'</p>\n            <p class="artistNameRecommendation"><i>'+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+'</i></p>\n        </div>\n    </div>\n    <div class="popUp" id="popUp_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" >\n        <div class="barCharts">\n            <div id="tooltipBarDiv_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" class="tooltipBar"></div>\n            <svg id="popUpSvg_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" class="popUpSvg"></svg>\n            <div id="verbalExplContainer_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'" class="verbalExplContainer"></div>\n            \x3c!--<button class="showScatterplot">'+c((i=null!=(i=t.getShowScatterplotText||(null!=l?l.getShowScatterplotText:l))?i:d,typeof i===u?i.call(s,{name:"getShowScatterplotText",hash:{},data:e}):i))+"</button>--\x3e\n        </div>\n\n    </div>\n\n\n</div>\n\n"},useData:!0}),l.searchResult=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id="result_'+c((i=null!=(i=t.index||(null!=l?l.index:l))?i:d,typeof i===u?i.call(s,{name:"index",hash:{},data:e}):i))+'" class="result">\n    <img src="'+c((i=null!=(i=t.imageSrc||(null!=l?l.imageSrc:l))?i:d,typeof i===u?i.call(s,{name:"imageSrc",hash:{},data:e}):i))+'" alt="'+c((i=null!=(i=t.artistName||(null!=l?l.artistName:l))?i:d,typeof i===u?i.call(s,{name:"artistName",hash:{},data:e}):i))+'" style="width:150px; height: 150px"\n         onclick="appendSearchResult(\''+c((i=null!=(i=t.artistName||(null!=l?l.artistName:l))?i:d,typeof i===u?i.call(s,{name:"artistName",hash:{},data:e}):i))+"' , '"+c((i=null!=(i=t.id||(null!=l?l.id:l))?i:d,typeof i===u?i.call(s,{name:"id",hash:{},data:e}):i))+"', '"+c((i=null!=(i=t.imageSrc||(null!=l?l.imageSrc:l))?i:d,typeof i===u?i.call(s,{name:"imageSrc",hash:{},data:e}):i))+'\')">\n    <div class="artistNameSearch">'+c((i=null!=(i=t.artistName||(null!=l?l.artistName:l))?i:d,typeof i===u?i.call(s,{name:"artistName",hash:{},data:e}):i))+"</div>\n</div>\n"},useData:!0}),l.slider=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return"\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id='"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'\' class="slidecontainer">\n    <div class="sliderInfo">\n        <div id=\''+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_output\' class="sliderOutput">\n            '+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+" : "+c((i=null!=(i=t.startValue||(null!=l?l.startValue:l))?i:d,typeof i===u?i.call(s,{name:"startValue",hash:{},data:e}):i))+" &nbsp;\n        </div>\n        <i id ='tooltip_"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'\' data-toggle="tooltip" title="'+c((i=null!=(i=t.definition||(null!=l?l.definition:l))?i:d,typeof i===u?i.call(s,{name:"definition",hash:{},data:e}):i))+'" class="fas fa-question-circle"></i>\n    </div>\n\n    <input type="range" min="0" max="100" value=\''+c((i=null!=(i=t.startValue||(null!=l?l.startValue:l))?i:d,typeof i===u?i.call(s,{name:"startValue",hash:{},data:e}):i))+"' id= '"+c((i=null!=(i=t.name||(null!=l?l.name:l))?i:d,typeof i===u?i.call(s,{name:"name",hash:{},data:e}):i))+'_Slider\' class="slider" color='+c((i=null!=(i=t.color||(null!=l?l.color:l))?i:d,typeof i===u?i.call(s,{name:"color",hash:{},data:e}):i))+' style=\n            "background: linear-gradient(90deg, '+c((i=null!=(i=t.color||(null!=l?l.color:l))?i:d,typeof i===u?i.call(s,{name:"color",hash:{},data:e}):i))+" "+c((i=null!=(i=t.startValue||(null!=l?l.startValue:l))?i:d,typeof i===u?i.call(s,{name:"startValue",hash:{},data:e}):i))+"%, rgba(53, 53, 53, 1) "+c((i=null!=(i=t.startValue||(null!=l?l.startValue:l))?i:d,typeof i===u?i.call(s,{name:"startValue",hash:{},data:e}):i))+'%)">\n\n</div>'},useData:!0}),l.song=a({compiler:[7,">= 4.0.0"],main:function(a,l,t,n,e){var i,s=null!=l?l:a.nullContext||{},d=t.helperMissing,u="function",c=a.escapeExpression;return'\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div class="buttons" id="buttons_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+"\">\n    <button class='playButton fa fa-play-circle'  id=trackButton_"+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+' style="font-size: 35px"></button>\n    <audio id=trackAudio_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+">\n        <source src="+c((i=null!=(i=t.preview||(null!=l?l.preview:l))?i:d,typeof i===u?i.call(s,{name:"preview",hash:{},data:e}):i))+'>\n    </audio>\n</div>\n\n<div class="titleLinkDiv">\n    <a href='+c((i=null!=(i=t.url||(null!=l?l.url:l))?i:d,typeof i===u?i.call(s,{name:"url",hash:{},data:e}):i))+' target="_blank" title="'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+" from "+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+'"   class="titleLink"\n       id="songLink_'+c((i=null!=(i=t.trackId||(null!=l?l.trackId:l))?i:d,typeof i===u?i.call(s,{name:"trackId",hash:{},data:e}):i))+'">'+c((i=null!=(i=t.title||(null!=l?l.title:l))?i:d,typeof i===u?i.call(s,{name:"title",hash:{},data:e}):i))+'</a>\n    <p class="artistNameRecommendation"><i>'+c((i=null!=(i=t.artist||(null!=l?l.artist:l))?i:d,typeof i===u?i.call(s,{name:"artist",hash:{},data:e}):i))+"</i></p>\n</div>"},useData:!0})}();