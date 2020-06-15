(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e878df3"],{"0e0f":function(e,t,n){var a=n("5f14"),i=n("6d8b");function o(e,t){e.eachSeriesByType("sankey",(function(e){var t=e.getGraph(),n=t.nodes;if(n.length){var o=1/0,r=-1/0;i.each(n,(function(e){var t=e.getLayout().value;t<o&&(o=t),t>r&&(r=t)})),i.each(n,(function(t){var n=new a({type:"color",mappingMethod:"linear",dataExtent:[o,r],visual:e.get("color")}),i=n.mapValueToVisual(t.getLayout().value),u=t.getModel().get("itemStyle.color");null!=u?t.setVisual("color",u):t.setVisual("color",i)}))}}))}e.exports=o},"237f":function(e,t,n){var a=n("6d8b"),i=n("6179"),o=n("7368"),r=n("31d9"),u=n("b1d4"),s=n("2039"),c=n("3301");function d(e,t,n,d,l){for(var f=new o(d),h=0;h<e.length;h++)f.addNode(a.retrieve(e[h].id,e[h].name,h),h);var g=[],p=[],y=0;for(h=0;h<t.length;h++){var v=t[h],x=v.source,m=v.target;f.addEdge(x,m,y)&&(p.push(v),g.push(a.retrieve(v.id,x+" > "+m)),y++)}var b,I=n.get("coordinateSystem");if("cartesian2d"===I||"polar"===I)b=c(e,n);else{var L=s.get(I),w=L&&"view"!==L.type&&L.dimensions||[];a.indexOf(w,"value")<0&&w.concat(["value"]);var _=u(e,{coordDimensions:w});b=new i(_,n),b.initData(e)}var E=new i(["value"],n);return E.initData(p,g),l&&l(b,E),r({mainData:b,struct:f,structAttr:"graph",datas:{node:b,edge:E},datasAttr:{node:"data",edge:"edgeData"}}),f.update(),f}e.exports=d},2634:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sankey"}})},i=[],o=(n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("b0c0"),n("159b"),n("5530")),r=n("2ef0"),u=n.n(r),s=n("3eba"),c=n.n(s),d=(n("311a"),n("a68f")),l=["age_range","xb","period","origin","tran"],f={xb:function(){return{"男":{color:"#3a7ba5"},"女":{color:"#9d4da7"}}}},h={"私家/专车":0,"出租车":1,"3A109航船":2,"深圳湾口岸":3,"航空":4,"不明":5},g={age_range:function(e){return u.a.orderBy(e,(function(e){switch(e.name){case"婴幼儿/青少年(0~15)":return 0;case"青年(16~30)":return 1;case"中青年(30~45)":return 2;case"中年(45~60)":return 3;case"老年(>60)":return 4}}))},origin:function(e){return e.sort((function(e){return-1!==p.indexOf(e.name)?1:-1}))},tran:function(e){return u.a.orderBy(e,(function(e){return h[e.name]}))},period:function(e){return u.a.orderBy(e,(function(e){switch(e.name){case"疫情初期(~1/23)":return 0;case"发展期(1/23~2/6)":return 1;case"国内二次传播期(2/6~2/20)":return 2;case"国外输入期(2/20~)":return 3}}))}},p=["巴西","法国","柬埔寨","澳门","荷兰","菲律宾","俄罗斯","新加坡","西班牙","瑞士","泰国","英国","美国"],y=function(e){return e>=0&&e<=15?"婴幼儿/青少年(0~15)":e>15&&e<=30?"青年(16~30)":e>30&&e<=45?"中青年(30~45)":e>45&&e<=60?"中年(45~60)":e>60?"老年(>60)":void 0},v=["2020/1/23","2020/2/6","2020/2/20"].map((function(e){return new Date(e).getTime()})),x=function(e){var t=new Date(e).getTime();return t<=v[0]?"疫情初期(~1/23)":t>v[0]&&t<v[1]?"发展期(1/23~2/6)":t>v[1]&&t<v[2]?"国内二次传播期(2/6~2/20)":t>=v[2]?"国外输入期(2/20~)":void 0},m={name:"SanKey",methods:{getNodes:function(e){return l.reduce((function(t,n){var a=f[n]&&f[n]()||{},i=u.a.chain(e).map((function(e){return{name:e[n],itemStyle:a[e[n]]}})).uniqBy("name").value();return i=g[n]?g[n](i):i,t.concat(i)}),[])},getLinks:function(e){var t=[];return l.forEach((function(n,a,i){a!==i.length-1&&e.forEach((function(o){var r=o[n],u=o[i[a+1]],s=e.filter((function(e){return e[n]===r&&e[i[a+1]]===u})).length;t.push({source:r,target:u,value:s,lineStyle:{}})}))})),u.a.uniqWith(t,u.a.isEqual)},initData:function(){var e=u.a.chain(d["a"]).filter((function(e){return e.track.length})).map((function(e){var t=e.track,n=e.nl,a=t.length?t[t.length-1].tran:"";a=-1!==a.indexOf("航班")?"航空":a,a=/(私家)|(自驾)|(专车)|(商务车)/.test(a)?"私家/专车":a,a=/(的士)|(出租车)/.test(a)?"出租车":a;var i=y(+n);return u.a.pick(Object(o["a"])(Object(o["a"])({},e),{},{tran:a||"不明",age_range:i,period:x(e.track[e.track.length-1].time)}),l)})).value(),t=this.getNodes(e),n=this.getLinks(e);return{nodes:t,links:n}},initChart:function(){var e=this.initData(),t=e.nodes,n=e.links,a={color:["#87cc7c","#966d4b","#935740","#69277e","#9d4da7"],tooltip:{trigger:"item",triggerOn:"mousemove"},series:{type:"sankey",left:10,right:50,nodeGap:1,layoutIterations:0,data:t,links:n,draggable:!1,focusNodeAdjacency:"allEdges",label:{fontSize:10,color:"rgba(255,255,255,.8)"},lineStyle:{color:"source",curveness:.5}}},i=c.a.init(document.getElementById("sankey"),"light");i.setOption(a)}},mounted:function(){setTimeout(this.initChart)}},b=m,I=(n("88a4"),n("2877")),L=Object(I["a"])(b,a,i,!1,null,"e0578438",null);t["default"]=L.exports},"311a":function(e,t,n){var a=n("3eba");n("d01c"),n("5b69"),n("bdc0");var i=n("81ac"),o=n("0e0f");a.registerLayout(i),a.registerVisual(o)},"31d9":function(e,t,n){var a=n("6d8b"),i=a.each,o="\0__link_datas",r="\0__link_mainData";function u(e){var t=e.mainData,n=e.datas;n||(n={main:t},e.datasAttr={main:"data"}),e.datas=e.mainData=null,h(t,n,e),i(n,(function(n){i(t.TRANSFERABLE_METHODS,(function(t){n.wrapMethod(t,a.curry(s,e))}))})),t.wrapMethod("cloneShallow",a.curry(d,e)),i(t.CHANGABLE_METHODS,(function(n){t.wrapMethod(n,a.curry(c,e))})),a.assert(n[t.dataType]===t)}function s(e,t){if(f(this)){var n=a.extend({},this[o]);n[this.dataType]=t,h(t,n,e)}else g(t,this.dataType,this[r],e);return t}function c(e,t){return e.struct&&e.struct.update(this),t}function d(e,t){return i(t[o],(function(n,a){n!==t&&g(n.cloneShallow(),a,t,e)})),t}function l(e){var t=this[r];return null==e||null==t?t:t[o][e]}function f(e){return e[r]===e}function h(e,t,n){e[o]={},i(t,(function(t,a){g(t,a,e,n)}))}function g(e,t,n,a){n[o][t]=e,e[r]=n,e.dataType=t,a.struct&&(e[a.structAttr]=a.struct,a.struct[a.datasAttr[t]]=e),e.getLinkedData=l}var p=u;e.exports=p},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"5b69":function(e,t,n){var a=n("2306"),i=n("3eba"),o=n("6d8b"),r=["itemStyle","opacity"],u=["emphasis","itemStyle","opacity"],s=["lineStyle","opacity"],c=["emphasis","lineStyle","opacity"];function d(e,t){return e.getVisual("opacity")||e.getModel().get(t)}function l(e,t,n){var a=e.getGraphicEl(),i=d(e,t);null!=n&&(null==i&&(i=1),i*=n),a.downplay&&a.downplay(),a.traverse((function(e){"group"!==e.type&&e.setStyle("opacity",i)}))}function f(e,t){var n=d(e,t),a=e.getGraphicEl();a.traverse((function(e){"group"!==e.type&&e.setStyle("opacity",n)})),a.highlight&&a.highlight()}var h=a.extendShape({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0,orient:""},buildPath:function(e,t){var n=t.extent;e.moveTo(t.x1,t.y1),e.bezierCurveTo(t.cpx1,t.cpy1,t.cpx2,t.cpy2,t.x2,t.y2),"vertical"===t.orient?(e.lineTo(t.x2+n,t.y2),e.bezierCurveTo(t.cpx2+n,t.cpy2,t.cpx1+n,t.cpy1,t.x1+n,t.y1)):(e.lineTo(t.x2,t.y2+n),e.bezierCurveTo(t.cpx2,t.cpy2+n,t.cpx1,t.cpy1+n,t.x1,t.y1+n)),e.closePath()},highlight:function(){this.trigger("emphasis")},downplay:function(){this.trigger("normal")}}),g=i.extendChartView({type:"sankey",_model:null,_focusAdjacencyDisabled:!1,render:function(e,t,n){var i=this,o=e.getGraph(),r=this.group,u=e.layoutInfo,s=u.width,c=u.height,d=e.getData(),l=e.getData("edge"),f=e.get("orient");this._model=e,r.removeAll(),r.attr("position",[u.x,u.y]),o.eachEdge((function(t){var n=new h;n.dataIndex=t.dataIndex,n.seriesIndex=e.seriesIndex,n.dataType="edge";var i,o,u,d,g,p,y,v,x=t.getModel("lineStyle"),m=x.get("curveness"),b=t.node1.getLayout(),I=t.node1.getModel(),L=I.get("localX"),w=I.get("localY"),_=t.node2.getLayout(),E=t.node2.getModel(),D=E.get("localX"),M=E.get("localY"),A=t.getLayout();switch(n.shape.extent=Math.max(1,A.dy),n.shape.orient=f,"vertical"===f?(i=(null!=L?L*s:b.x)+A.sy,o=(null!=w?w*c:b.y)+b.dy,u=(null!=D?D*s:_.x)+A.ty,d=null!=M?M*c:_.y,g=i,p=o*(1-m)+d*m,y=u,v=o*m+d*(1-m)):(i=(null!=L?L*s:b.x)+b.dx,o=(null!=w?w*c:b.y)+A.sy,u=null!=D?D*s:_.x,d=(null!=M?M*c:_.y)+A.ty,g=i*(1-m)+u*m,p=o,y=i*m+u*(1-m),v=d),n.setShape({x1:i,y1:o,x2:u,y2:d,cpx1:g,cpy1:p,cpx2:y,cpy2:v}),n.setStyle(x.getItemStyle()),n.style.fill){case"source":n.style.fill=t.node1.getVisual("color");break;case"target":n.style.fill=t.node2.getVisual("color");break}a.setHoverStyle(n,t.getModel("emphasis.lineStyle").getItemStyle()),r.add(n),l.setItemGraphicEl(t.dataIndex,n)})),o.eachNode((function(t){var n=t.getLayout(),i=t.getModel(),o=i.get("localX"),u=i.get("localY"),l=i.getModel("label"),f=i.getModel("emphasis.label"),h=new a.Rect({shape:{x:null!=o?o*s:n.x,y:null!=u?u*c:n.y,width:n.dx,height:n.dy},style:i.getModel("itemStyle").getItemStyle()}),g=t.getModel("emphasis.itemStyle").getItemStyle();a.setLabelStyle(h.style,g,l,f,{labelFetcher:e,labelDataIndex:t.dataIndex,defaultText:t.id,isRectText:!0}),h.setStyle("fill",t.getVisual("color")),a.setHoverStyle(h,g),r.add(h),d.setItemGraphicEl(t.dataIndex,h),h.dataType="node"})),d.eachItemGraphicEl((function(t,a){var o=d.getItemModel(a);o.get("draggable")&&(t.drift=function(t,o){i._focusAdjacencyDisabled=!0,this.shape.x+=t,this.shape.y+=o,this.dirty(),n.dispatchAction({type:"dragNode",seriesId:e.id,dataIndex:d.getRawIndex(a),localX:this.shape.x/s,localY:this.shape.y/c})},t.ondragend=function(){i._focusAdjacencyDisabled=!1},t.draggable=!0,t.cursor="move"),t.highlight=function(){this.trigger("emphasis")},t.downplay=function(){this.trigger("normal")},t.focusNodeAdjHandler&&t.off("mouseover",t.focusNodeAdjHandler),t.unfocusNodeAdjHandler&&t.off("mouseout",t.unfocusNodeAdjHandler),o.get("focusNodeAdjacency")&&(t.on("mouseover",t.focusNodeAdjHandler=function(){i._focusAdjacencyDisabled||(i._clearTimer(),n.dispatchAction({type:"focusNodeAdjacency",seriesId:e.id,dataIndex:t.dataIndex}))}),t.on("mouseout",t.unfocusNodeAdjHandler=function(){i._focusAdjacencyDisabled||i._dispatchUnfocus(n)}))})),l.eachItemGraphicEl((function(t,a){var o=l.getItemModel(a);t.focusNodeAdjHandler&&t.off("mouseover",t.focusNodeAdjHandler),t.unfocusNodeAdjHandler&&t.off("mouseout",t.unfocusNodeAdjHandler),o.get("focusNodeAdjacency")&&(t.on("mouseover",t.focusNodeAdjHandler=function(){i._focusAdjacencyDisabled||(i._clearTimer(),n.dispatchAction({type:"focusNodeAdjacency",seriesId:e.id,edgeDataIndex:t.dataIndex}))}),t.on("mouseout",t.unfocusNodeAdjHandler=function(){i._focusAdjacencyDisabled||i._dispatchUnfocus(n)}))})),!this._data&&e.get("animation")&&r.setClipPath(p(r.getBoundingRect(),e,(function(){r.removeClipPath()}))),this._data=e.getData()},dispose:function(){this._clearTimer()},_dispatchUnfocus:function(e){var t=this;this._clearTimer(),this._unfocusDelayTimer=setTimeout((function(){t._unfocusDelayTimer=null,e.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t._model.id})}),500)},_clearTimer:function(){this._unfocusDelayTimer&&(clearTimeout(this._unfocusDelayTimer),this._unfocusDelayTimer=null)},focusNodeAdjacency:function(e,t,n,a){var i=e.getData(),d=i.graph,h=a.dataIndex,g=i.getItemModel(h),p=a.edgeDataIndex;if(null!=h||null!=p){var y=d.getNodeByIndex(h),v=d.getEdgeByIndex(p);if(d.eachNode((function(e){l(e,r,.1)})),d.eachEdge((function(e){l(e,s,.1)})),y){f(y,u);var x=g.get("focusNodeAdjacency");"outEdges"===x?o.each(y.outEdges,(function(e){e.dataIndex<0||(f(e,c),f(e.node2,u))})):"inEdges"===x?o.each(y.inEdges,(function(e){e.dataIndex<0||(f(e,c),f(e.node1,u))})):"allEdges"===x&&o.each(y.edges,(function(e){e.dataIndex<0||(f(e,c),e.node1!==y&&f(e.node1,u),e.node2!==y&&f(e.node2,u))}))}v&&(f(v,c),f(v.node1,u),f(v.node2,u))}},unfocusNodeAdjacency:function(e,t,n,a){var i=e.getGraph();i.eachNode((function(e){l(e,r)})),i.eachEdge((function(e){l(e,s)}))}});function p(e,t,n){var i=new a.Rect({shape:{x:e.x-10,y:e.y-10,width:0,height:e.height+20}});return a.initProps(i,{shape:{width:e.width+20}},t,n),i}e.exports=g},"5f14":function(e,t,n){var a=n("6d8b"),i=n("41ef"),o=n("3842"),r=o.linearMap,u=a.each,s=a.isObject,c=-1,d=function(e){var t=e.mappingMethod,n=e.type,i=this.option=a.clone(e);this.type=n,this.mappingMethod=t,this._normalizeData=w[t];var o=l[n];this.applyVisual=o.applyVisual,this.getColorMapper=o.getColorMapper,this._doMap=o._doMap[t],"piecewise"===t?(g(i),f(i)):"category"===t?i.categories?h(i):g(i,!0):(a.assert("linear"!==t||i.dataExtent),g(i))};d.prototype={constructor:d,mapValueToVisual:function(e){var t=this._normalizeData(e);return this._doMap(t,e)},getNormalizer:function(){return a.bind(this._normalizeData,this)}};var l=d.visualHandlers={color:{applyVisual:v("color"),getColorMapper:function(){var e=this.option;return a.bind("category"===e.mappingMethod?function(e,t){return!t&&(e=this._normalizeData(e)),x.call(this,e)}:function(t,n,a){var o=!!a;return!n&&(t=this._normalizeData(t)),a=i.fastLerp(t,e.parsedVisual,a),o?a:i.stringify(a,"rgba")},this)},_doMap:{linear:function(e){return i.stringify(i.fastLerp(e,this.option.parsedVisual),"rgba")},category:x,piecewise:function(e,t){var n=I.call(this,t);return null==n&&(n=i.stringify(i.fastLerp(e,this.option.parsedVisual),"rgba")),n},fixed:m}},colorHue:p((function(e,t){return i.modifyHSL(e,t)})),colorSaturation:p((function(e,t){return i.modifyHSL(e,null,t)})),colorLightness:p((function(e,t){return i.modifyHSL(e,null,null,t)})),colorAlpha:p((function(e,t){return i.modifyAlpha(e,t)})),opacity:{applyVisual:v("opacity"),_doMap:b([0,1])},liftZ:{applyVisual:v("liftZ"),_doMap:{linear:m,category:m,piecewise:m,fixed:m}},symbol:{applyVisual:function(e,t,n){var i=this.mapValueToVisual(e);if(a.isString(i))n("symbol",i);else if(s(i))for(var o in i)i.hasOwnProperty(o)&&n(o,i[o])},_doMap:{linear:y,category:x,piecewise:function(e,t){var n=I.call(this,t);return null==n&&(n=y.call(this,e)),n},fixed:m}},symbolSize:{applyVisual:v("symbolSize"),_doMap:b([0,1])}};function f(e){var t=e.pieceList;e.hasSpecialVisual=!1,a.each(t,(function(t,n){t.originIndex=n,null!=t.visual&&(e.hasSpecialVisual=!0)}))}function h(e){var t=e.categories,n=e.visual,i=e.categoryMap={};if(u(t,(function(e,t){i[e]=t})),!a.isArray(n)){var o=[];a.isObject(n)?u(n,(function(e,t){var n=i[t];o[null!=n?n:c]=e})):o[c]=n,n=L(e,o)}for(var r=t.length-1;r>=0;r--)null==n[r]&&(delete i[t[r]],t.pop())}function g(e,t){var n=e.visual,i=[];a.isObject(n)?u(n,(function(e){i.push(e)})):null!=n&&i.push(n);var o={color:1,symbol:1};t||1!==i.length||o.hasOwnProperty(e.type)||(i[1]=i[0]),L(e,i)}function p(e){return{applyVisual:function(t,n,a){t=this.mapValueToVisual(t),a("color",e(n("color"),t))},_doMap:b([0,1])}}function y(e){var t=this.option.visual;return t[Math.round(r(e,[0,1],[0,t.length-1],!0))]||{}}function v(e){return function(t,n,a){a(e,this.mapValueToVisual(t))}}function x(e){var t=this.option.visual;return t[this.option.loop&&e!==c?e%t.length:e]}function m(){return this.option.visual[0]}function b(e){return{linear:function(t){return r(t,e,this.option.visual,!0)},category:x,piecewise:function(t,n){var a=I.call(this,n);return null==a&&(a=r(t,e,this.option.visual,!0)),a},fixed:m}}function I(e){var t=this.option,n=t.pieceList;if(t.hasSpecialVisual){var a=d.findPieceIndex(e,n),i=n[a];if(i&&i.visual)return i.visual[this.type]}}function L(e,t){return e.visual=t,"color"===e.type&&(e.parsedVisual=a.map(t,(function(e){return i.parse(e)}))),t}var w={linear:function(e){return r(e,this.option.dataExtent,[0,1],!0)},piecewise:function(e){var t=this.option.pieceList,n=d.findPieceIndex(e,t,!0);if(null!=n)return r(n,[0,t.length-1],[0,1],!0)},category:function(e){var t=this.option.categories?this.option.categoryMap[e]:e;return null==t?c:t},fixed:a.noop};function _(e,t,n){return e?t<=n:t<n}d.listVisualTypes=function(){var e=[];return a.each(l,(function(t,n){e.push(n)})),e},d.addVisualHandler=function(e,t){l[e]=t},d.isValidType=function(e){return l.hasOwnProperty(e)},d.eachVisual=function(e,t,n){a.isObject(e)?a.each(e,t,n):t.call(n,e)},d.mapVisual=function(e,t,n){var i,o=a.isArray(e)?[]:a.isObject(e)?{}:(i=!0,null);return d.eachVisual(e,(function(e,a){var r=t.call(n,e,a);i?o=r:o[a]=r})),o},d.retrieveVisuals=function(e){var t,n={};return e&&u(l,(function(a,i){e.hasOwnProperty(i)&&(n[i]=e[i],t=!0)})),t?n:null},d.prepareVisualTypes=function(e){if(s(e)){var t=[];u(e,(function(e,n){t.push(n)})),e=t}else{if(!a.isArray(e))return[];e=e.slice()}return e.sort((function(e,t){return"color"===t&&"color"!==e&&0===e.indexOf("color")?1:-1})),e},d.dependsOn=function(e,t){return"color"===t?!(!e||0!==e.indexOf(t)):e===t},d.findPieceIndex=function(e,t,n){for(var a,i=1/0,o=0,r=t.length;o<r;o++){var u=t[o].value;if(null!=u){if(u===e||"string"===typeof u&&u===e+"")return o;n&&l(u,o)}}for(o=0,r=t.length;o<r;o++){var s=t[o],c=s.interval,d=s.close;if(c){if(c[0]===-1/0){if(_(d[1],e,c[1]))return o}else if(c[1]===1/0){if(_(d[0],c[0],e))return o}else if(_(d[0],c[0],e)&&_(d[1],e,c[1]))return o;n&&l(c[0],o),n&&l(c[1],o)}}if(n)return e===1/0?t.length-1:e===-1/0?0:a;function l(t,n){var o=Math.abs(t-e);o<i&&(i=o,a=n)}};var E=d;e.exports=E},7368:function(e,t,n){var a=n("4e08"),i=(a.__DEV__,n("6d8b")),o=n("625e"),r=o.enableClassCheck;function u(e){return"_EC_"+e}var s=function(e){this._directed=e||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData},c=s.prototype;function d(e,t){this.id=null==e?"":e,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this.dataIndex=null==t?-1:t}function l(e,t,n){this.node1=e,this.node2=t,this.dataIndex=null==n?-1:n}c.type="graph",c.isDirected=function(){return this._directed},c.addNode=function(e,t){e=null==e?""+t:""+e;var n=this._nodesMap;if(!n[u(e)]){var a=new d(e,t);return a.hostGraph=this,this.nodes.push(a),n[u(e)]=a,a}},c.getNodeByIndex=function(e){var t=this.data.getRawIndex(e);return this.nodes[t]},c.getNodeById=function(e){return this._nodesMap[u(e)]},c.addEdge=function(e,t,n){var a=this._nodesMap,i=this._edgesMap;if("number"===typeof e&&(e=this.nodes[e]),"number"===typeof t&&(t=this.nodes[t]),d.isInstance(e)||(e=a[u(e)]),d.isInstance(t)||(t=a[u(t)]),e&&t){var o=e.id+"-"+t.id;if(!i[o]){var r=new l(e,t,n);return r.hostGraph=this,this._directed&&(e.outEdges.push(r),t.inEdges.push(r)),e.edges.push(r),e!==t&&t.edges.push(r),this.edges.push(r),i[o]=r,r}}},c.getEdgeByIndex=function(e){var t=this.edgeData.getRawIndex(e);return this.edges[t]},c.getEdge=function(e,t){d.isInstance(e)&&(e=e.id),d.isInstance(t)&&(t=t.id);var n=this._edgesMap;return this._directed?n[e+"-"+t]:n[e+"-"+t]||n[t+"-"+e]},c.eachNode=function(e,t){for(var n=this.nodes,a=n.length,i=0;i<a;i++)n[i].dataIndex>=0&&e.call(t,n[i],i)},c.eachEdge=function(e,t){for(var n=this.edges,a=n.length,i=0;i<a;i++)n[i].dataIndex>=0&&n[i].node1.dataIndex>=0&&n[i].node2.dataIndex>=0&&e.call(t,n[i],i)},c.breadthFirstTraverse=function(e,t,n,a){if(d.isInstance(t)||(t=this._nodesMap[u(t)]),t){for(var i="out"===n?"outEdges":"in"===n?"inEdges":"edges",o=0;o<this.nodes.length;o++)this.nodes[o].__visited=!1;if(!e.call(a,t,null)){var r=[t];while(r.length){var s=r.shift(),c=s[i];for(o=0;o<c.length;o++){var l=c[o],f=l.node1===s?l.node2:l.node1;if(!f.__visited){if(e.call(a,f,s))return;r.push(f),f.__visited=!0}}}}}},c.update=function(){for(var e=this.data,t=this.edgeData,n=this.nodes,a=this.edges,i=0,o=n.length;i<o;i++)n[i].dataIndex=-1;for(i=0,o=e.count();i<o;i++)n[e.getRawIndex(i)].dataIndex=i;t.filterSelf((function(e){var n=a[t.getRawIndex(e)];return n.node1.dataIndex>=0&&n.node2.dataIndex>=0}));for(i=0,o=a.length;i<o;i++)a[i].dataIndex=-1;for(i=0,o=t.count();i<o;i++)a[t.getRawIndex(i)].dataIndex=i},c.clone=function(){for(var e=new s(this._directed),t=this.nodes,n=this.edges,a=0;a<t.length;a++)e.addNode(t[a].id,t[a].dataIndex);for(a=0;a<n.length;a++){var i=n[a];e.addEdge(i.node1.id,i.node2.id,i.dataIndex)}return e},d.prototype={constructor:d,degree:function(){return this.edges.length},inDegree:function(){return this.inEdges.length},outDegree:function(){return this.outEdges.length},getModel:function(e){if(!(this.dataIndex<0)){var t=this.hostGraph,n=t.data.getItemModel(this.dataIndex);return n.getModel(e)}}},l.prototype.getModel=function(e){if(!(this.dataIndex<0)){var t=this.hostGraph,n=t.edgeData.getItemModel(this.dataIndex);return n.getModel(e)}};var f=function(e,t){return{getValue:function(n){var a=this[e][t];return a.get(a.getDimension(n||"value"),this.dataIndex)},setVisual:function(n,a){this.dataIndex>=0&&this[e][t].setItemVisual(this.dataIndex,n,a)},getVisual:function(n,a){return this[e][t].getItemVisual(this.dataIndex,n,a)},setLayout:function(n,a){this.dataIndex>=0&&this[e][t].setItemLayout(this.dataIndex,n,a)},getLayout:function(){return this[e][t].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[e][t].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[e][t].getRawIndex(this.dataIndex)}}};i.mixin(d,f("hostGraph","data")),i.mixin(l,f("hostGraph","edgeData")),s.Node=d,s.Edge=l,r(d),r(l);var h=s;e.exports=h},"81ac":function(e,t,n){var a=n("f934"),i=n("6d8b"),o=n("e0d3"),r=o.groupData;function u(e,t,n){e.eachSeriesByType("sankey",(function(e){var n=e.get("nodeWidth"),a=e.get("nodeGap"),o=s(e,t);e.layoutInfo=o;var r=o.width,u=o.height,l=e.getGraph(),f=l.nodes,h=l.edges;d(f);var g=i.filter(f,(function(e){return 0===e.getLayout().value})),p=0!==g.length?0:e.get("layoutIterations"),y=e.get("orient"),v=e.get("nodeAlign");c(f,h,n,a,r,u,p,y,v)}))}function s(e,t){return a.getLayoutRect(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()})}function c(e,t,n,a,i,o,r,u,s){l(e,t,n,i,o,u,s),y(e,t,o,i,a,r,u),j(e,u)}function d(e){i.each(e,(function(e){var t=M(e.outEdges,D),n=M(e.inEdges,D),a=e.getValue()||0,i=Math.max(t,n,a);e.setLayout({value:i},!0)}))}function l(e,t,n,a,i,o,r){for(var u=[],s=[],c=[],d=[],l=0,f=0,g=0;g<t.length;g++)u[g]=1;for(g=0;g<e.length;g++)s[g]=e[g].inEdges.length,0===s[g]&&c.push(e[g]);var y=-1;while(c.length){for(var v=0;v<c.length;v++){var x=c[v],m=x.hostGraph.data.getRawDataItem(x.dataIndex),b=null!=m.depth&&m.depth>=0;b&&m.depth>y&&(y=m.depth),x.setLayout({depth:b?m.depth:l},!0),"vertical"===o?x.setLayout({dy:n},!0):x.setLayout({dx:n},!0);for(var I=0;I<x.outEdges.length;I++){var L=x.outEdges[I],w=t.indexOf(L);u[w]=0;var _=L.node2,E=e.indexOf(_);0===--s[E]&&d.indexOf(_)<0&&d.push(_)}}++l,c=d,d=[]}for(g=0;g<u.length;g++)if(1===u[g])throw new Error("Sankey is a DAG, the original data has cycle!");var D=y>l-1?y:l-1;r&&"left"!==r&&h(e,r,o,D);f="vertical"===o?(i-n)/D:(a-n)/D;p(e,f,o)}function f(e){var t=e.hostGraph.data.getRawDataItem(e.dataIndex);return null!=t.depth&&t.depth>=0}function h(e,t,n,a){if("right"===t){var o=[],r=e,u=0;while(r.length){for(var s=0;s<r.length;s++){var c=r[s];c.setLayout({skNodeHeight:u},!0);for(var d=0;d<c.inEdges.length;d++){var l=c.inEdges[d];o.indexOf(l.node1)<0&&o.push(l.node1)}}r=o,o=[],++u}i.each(e,(function(e){f(e)||e.setLayout({depth:Math.max(0,a-e.getLayout().skNodeHeight)},!0)}))}else"justify"===t&&g(e,a)}function g(e,t){i.each(e,(function(e){f(e)||e.outEdges.length||e.setLayout({depth:t},!0)}))}function p(e,t,n){i.each(e,(function(e){var a=e.getLayout().depth*t;"vertical"===n?e.setLayout({y:a},!0):e.setLayout({x:a},!0)}))}function y(e,t,n,a,i,o,r){var u=v(e,r);x(u,t,n,a,i,r),m(u,i,n,a,r);for(var s=1;o>0;o--)s*=.99,b(u,s,r),m(u,i,n,a,r),A(u,s,r),m(u,i,n,a,r)}function v(e,t){var n=[],a="vertical"===t?"y":"x",o=r(e,(function(e){return e.getLayout()[a]}));return o.keys.sort((function(e,t){return e-t})),i.each(o.keys,(function(e){n.push(o.buckets.get(e))})),n}function x(e,t,n,a,o,r){var u=1/0;i.each(e,(function(e){var t=e.length,s=0;i.each(e,(function(e){s+=e.getLayout().value}));var c="vertical"===r?(a-(t-1)*o)/s:(n-(t-1)*o)/s;c<u&&(u=c)})),i.each(e,(function(e){i.each(e,(function(e,t){var n=e.getLayout().value*u;"vertical"===r?(e.setLayout({x:t},!0),e.setLayout({dx:n},!0)):(e.setLayout({y:t},!0),e.setLayout({dy:n},!0))}))})),i.each(t,(function(e){var t=+e.getValue()*u;e.setLayout({dy:t},!0)}))}function m(e,t,n,a,o){var r="vertical"===o?"x":"y";i.each(e,(function(e){var i,u,s;e.sort((function(e,t){return e.getLayout()[r]-t.getLayout()[r]}));for(var c=0,d=e.length,l="vertical"===o?"dx":"dy",f=0;f<d;f++)u=e[f],s=c-u.getLayout()[r],s>0&&(i=u.getLayout()[r]+s,"vertical"===o?u.setLayout({x:i},!0):u.setLayout({y:i},!0)),c=u.getLayout()[r]+u.getLayout()[l]+t;var h="vertical"===o?a:n;if(s=c-t-h,s>0)for(i=u.getLayout()[r]-s,"vertical"===o?u.setLayout({x:i},!0):u.setLayout({y:i},!0),c=i,f=d-2;f>=0;--f)u=e[f],s=u.getLayout()[r]+u.getLayout()[l]+t-c,s>0&&(i=u.getLayout()[r]-s,"vertical"===o?u.setLayout({x:i},!0):u.setLayout({y:i},!0)),c=u.getLayout()[r]}))}function b(e,t,n){i.each(e.slice().reverse(),(function(e){i.each(e,(function(e){if(e.outEdges.length){var a=M(e.outEdges,I,n)/M(e.outEdges,D,n);if(isNaN(a)){var i=e.outEdges.length;a=i?M(e.outEdges,L,n)/i:0}if("vertical"===n){var o=e.getLayout().x+(a-E(e,n))*t;e.setLayout({x:o},!0)}else{var r=e.getLayout().y+(a-E(e,n))*t;e.setLayout({y:r},!0)}}}))}))}function I(e,t){return E(e.node2,t)*e.getValue()}function L(e,t){return E(e.node2,t)}function w(e,t){return E(e.node1,t)*e.getValue()}function _(e,t){return E(e.node1,t)}function E(e,t){return"vertical"===t?e.getLayout().x+e.getLayout().dx/2:e.getLayout().y+e.getLayout().dy/2}function D(e){return e.getValue()}function M(e,t,n){var a=0,i=e.length,o=-1;while(++o<i){var r=+t.call(e,e[o],n);isNaN(r)||(a+=r)}return a}function A(e,t,n){i.each(e,(function(e){i.each(e,(function(e){if(e.inEdges.length){var a=M(e.inEdges,w,n)/M(e.inEdges,D,n);if(isNaN(a)){var i=e.inEdges.length;a=i?M(e.inEdges,_,n)/i:0}if("vertical"===n){var o=e.getLayout().x+(a-E(e,n))*t;e.setLayout({x:o},!0)}else{var r=e.getLayout().y+(a-E(e,n))*t;e.setLayout({y:r},!0)}}}))}))}function j(e,t){var n="vertical"===t?"x":"y";i.each(e,(function(e){e.outEdges.sort((function(e,t){return e.node2.getLayout()[n]-t.node2.getLayout()[n]})),e.inEdges.sort((function(e,t){return e.node1.getLayout()[n]-t.node1.getLayout()[n]}))})),i.each(e,(function(e){var t=0,n=0;i.each(e.outEdges,(function(e){e.setLayout({sy:t},!0),t+=e.getLayout().dy})),i.each(e.inEdges,(function(e){e.setLayout({ty:n},!0),n+=e.getLayout().dy}))}))}e.exports=u},"88a4":function(e,t,n){"use strict";var a=n("fe01"),i=n.n(a);i.a},b64b:function(e,t,n){var a=n("23e7"),i=n("7b0b"),o=n("df75"),r=n("d039"),u=r((function(){o(1)}));a({target:"Object",stat:!0,forced:u},{keys:function(e){return o(i(e))}})},bdc0:function(e,t,n){var a=n("3eba");n("d2a5"),a.registerAction({type:"dragNode",event:"dragnode",update:"update"},(function(e,t){t.eachComponent({mainType:"series",subType:"sankey",query:e},(function(t){t.setNodePosition(e.dataIndex,[e.localX,e.localY])}))}))},c975:function(e,t,n){"use strict";var a=n("23e7"),i=n("4d64").indexOf,o=n("a640"),r=n("ae40"),u=[].indexOf,s=!!u&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!c||!d},{indexOf:function(e){return s?u.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},d01c:function(e,t,n){var a=n("4f85"),i=n("237f"),o=n("eda2"),r=o.encodeHTML,u=n("4319"),s=n("4e08"),c=(s.__DEV__,a.extend({type:"series.sankey",layoutInfo:null,levelModels:null,getInitialData:function(e,t){for(var n=e.edges||e.links,a=e.data||e.nodes,o=e.levels,r=this.levelModels={},s=0;s<o.length;s++)null!=o[s].depth&&o[s].depth>=0&&(r[o[s].depth]=new u(o[s],this,t));if(a&&n){var c=i(a,n,this,!0,d);return c.data}function d(e,t){e.wrapMethod("getItemModel",(function(e,t){return e.customizeGetParent((function(e){var n=this.parentModel,a=n.getData().getItemLayout(t).depth,i=n.levelModels[a];return i||this.parentModel})),e})),t.wrapMethod("getItemModel",(function(e,t){return e.customizeGetParent((function(e){var n=this.parentModel,a=n.getGraph().getEdgeByIndex(t),i=a.node1.getLayout().depth,o=n.levelModels[i];return o||this.parentModel})),e}))}},setNodePosition:function(e,t){var n=this.option.data[e];n.localX=t[0],n.localY=t[1]},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},formatTooltip:function(e,t,n){if("edge"===n){var a=this.getDataParams(e,n),i=a.data,o=i.source+" -- "+i.target;return a.value&&(o+=" : "+a.value),r(o)}if("node"===n){var u=this.getGraph().getNodeByIndex(e),s=u.getLayout().value,d=this.getDataParams(e,n).data.name;if(s)o=d+" : "+s;return r(o)}return c.superCall(this,"formatTooltip",e,t)},optionUpdated:function(){var e=this.option;!0===e.focusNodeAdjacency&&(e.focusNodeAdjacency="allEdges")},getDataParams:function(e,t){var n=c.superCall(this,"getDataParams",e,t);if(null==n.value&&"node"===t){var a=this.getGraph().getNodeByIndex(e),i=a.getLayout().value;n.value=i}return n},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",orient:"horizontal",nodeWidth:20,nodeGap:8,draggable:!0,focusNodeAdjacency:!1,layoutIterations:32,label:{show:!0,position:"right",color:"#000",fontSize:12},levels:[],nodeAlign:"justify",itemStyle:{borderWidth:1,borderColor:"#333"},lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.5}},animationEasing:"linear",animationDuration:1e3}})),d=c;e.exports=d},d2a5:function(e,t,n){var a=n("3eba");a.registerAction({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series:focusNodeAdjacency"},(function(){})),a.registerAction({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series:unfocusNodeAdjacency"},(function(){}))},dbb4:function(e,t,n){var a=n("23e7"),i=n("83ab"),o=n("56ef"),r=n("fc6a"),u=n("06cf"),s=n("8418");a({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,a=r(e),i=u.f,c=o(a),d={},l=0;while(c.length>l)n=i(a,t=c[l++]),void 0!==n&&s(d,t,n);return d}})},e439:function(e,t,n){var a=n("23e7"),i=n("d039"),o=n("fc6a"),r=n("06cf").f,u=n("83ab"),s=i((function(){r(1)})),c=!u||s;a({target:"Object",stat:!0,forced:c,sham:!u},{getOwnPropertyDescriptor:function(e,t){return r(o(e),t)}})},fe01:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7e878df3.9d353697.js.map