!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.artist=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,i){var t,s=null!=l?l:a.nullContext||{},d=n.helperMissing,u="function",c=a.escapeExpression;return'\n<div class="artistDiv" id='+c((t=null!=(t=n.id||(null!=l?l.id:l))?t:d,typeof t===u?t.call(s,{name:"id",hash:{},data:i}):t))+'>\n    \x3c!--<div class="checkbox" id=\'checkbox_'+c((t=null!=(t=n.id||(null!=l?l.id:l))?t:d,typeof t===u?t.call(s,{name:"id",hash:{},data:i}):t))+"'  >--\x3e\n        \x3c!--<div class=\"checkSlider\" id='checkSlider_"+c((t=null!=(t=n.id||(null!=l?l.id:l))?t:d,typeof t===u?t.call(s,{name:"id",hash:{},data:i}):t))+'\'></div>--\x3e\n    \x3c!--</div>--\x3e\n    <i class="fas fa-thumbtack" id='+c((t=null!=(t=n.id||(null!=l?l.id:l))?t:d,typeof t===u?t.call(s,{name:"id",hash:{},data:i}):t))+'_thumbtack></i>\n    <div class="artistName"> '+c((t=null!=(t=n.name||(null!=l?l.name:l))?t:d,typeof t===u?t.call(s,{name:"name",hash:{},data:i}):t))+' </div>\n    <i class="far fa-times-circle" id='+c((t=null!=(t=n.id||(null!=l?l.id:l))?t:d,typeof t===u?t.call(s,{name:"id",hash:{},data:i}):t))+"_delete></i>\n</div>\n"},useData:!0}),l.slider=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,i){var t,s=null!=l?l:a.nullContext||{},d=n.helperMissing,u="function",c=a.escapeExpression;return"\x3c!--run handlebars -m views/partials/Components/ -f  public/js/templates.js--\x3e\n<div id='"+c((t=null!=(t=n.name||(null!=l?l.name:l))?t:d,typeof t===u?t.call(s,{name:"name",hash:{},data:i}):t))+'\' class="slidecontainer">'+c((t=null!=(t=n.name||(null!=l?l.name:l))?t:d,typeof t===u?t.call(s,{name:"name",hash:{},data:i}):t))+" : "+c((t=null!=(t=n.startValue||(null!=l?l.startValue:l))?t:d,typeof t===u?t.call(s,{name:"startValue",hash:{},data:i}):t))+' </div>\n<input type="range" min="0" max="100" value=\''+c((t=null!=(t=n.startValue||(null!=l?l.startValue:l))?t:d,typeof t===u?t.call(s,{name:"startValue",hash:{},data:i}):t))+"' id= '"+c((t=null!=(t=n.name||(null!=l?l.name:l))?t:d,typeof t===u?t.call(s,{name:"name",hash:{},data:i}):t))+"_Slider' class=\"slider\">\n<div id='"+c((t=null!=(t=n.name||(null!=l?l.name:l))?t:d,typeof t===u?t.call(s,{name:"name",hash:{},data:i}):t))+'_tooltip\' class="tooltip">'+c((t=null!=(t=n.definition||(null!=l?l.definition:l))?t:d,typeof t===u?t.call(s,{name:"definition",hash:{},data:i}):t))+" </div>"},useData:!0}),l.song=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,i){return"<div></div>"},useData:!0})}();