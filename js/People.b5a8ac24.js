(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["People"],{"0982":function(e,t,n){},1029:function(e,t,n){"use strict";n("678c")},"205e":function(e,t,n){"use strict";var c=n("7a23"),i={class:"carousel-slide"};function r(e,t,n,r,a,s){return Object(c["p"])(),Object(c["e"])(c["b"],{name:n.direction,mode:"in-out"},{default:Object(c["D"])((function(){return[Object(c["E"])(Object(c["g"])("div",i,[Object(c["w"])(e.$slots,"default")],512),[[c["B"],n.visibleSlide===n.index]])]})),_:3},8,["name"])}var a={props:["visibleSlide","index","direction"],data:function(){return{}}};n("943a");a.render=r;t["a"]=a},3693:function(e,t,n){"use strict";var c=n("7a23"),i=Object(c["F"])("data-v-8fcab934");Object(c["s"])("data-v-8fcab934");var r={class:"carousel"},a=Object(c["g"])("span",{class:"img-cover"},null,-1),s={class:"arrows"},o={class:"arrows__sm"};Object(c["q"])();var d=i((function(e,t,n,i,d,l){var u=Object(c["x"])("ArrowRight"),b=Object(c["x"])("ArrowLeft"),v=Object(c["x"])("ArrowLeftSm"),f=Object(c["x"])("ArrowRightSm");return Object(c["p"])(),Object(c["e"])("section",r,[Object(c["w"])(e.$slots,"default",{},(function(){return[a]})),Object(c["g"])("span",s,[Object(c["g"])("span",{onClick:t[1]||(t[1]=function(){return l.next&&l.next.apply(l,arguments)}),class:"arrow arrow__next"},[Object(c["g"])(u)]),Object(c["g"])("span",{onClick:t[2]||(t[2]=function(){return l.prev&&l.prev.apply(l,arguments)}),class:"arrow arrow__prev"},[Object(c["g"])(b)])]),Object(c["g"])("span",o,[Object(c["g"])("span",{onClick:t[3]||(t[3]=function(){return l.prev&&l.prev.apply(l,arguments)}),class:"arrow__sm"},[Object(c["g"])(v)]),Object(c["g"])("span",{onClick:t[4]||(t[4]=function(){return l.next&&l.next.apply(l,arguments)}),class:"arrow__sm"},[Object(c["g"])(f)])])])})),l={width:"42",height:"302",viewBox:"0 0 42 302",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u=Object(c["g"])("path",{d:"M1.5 151L41 1V31L11 151L41 271V301L1.5 151Z",fill:"#440d3d",stroke:"#440d3d"},null,-1);function b(e,t,n,i,r,a){return Object(c["p"])(),Object(c["e"])("svg",l,[u])}var v={name:"ArrowLeft"};n("846a");v.render=b;var f=v,j={width:"42",height:"302",viewBox:"0 0 42 302",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=Object(c["g"])("path",{d:"M40.5 151L1 1V31L31 151L1 271V301L40.5 151Z",fill:"#440d3d",stroke:"#440d3d"},null,-1);function p(e,t,n,i,r,a){return Object(c["p"])(),Object(c["e"])("svg",j,[O])}var g={name:"ArrowRight"};g.render=p;var w=g,h=Object(c["F"])("data-v-c5528dfa");Object(c["s"])("data-v-c5528dfa");var m={width:"131",height:"61",viewBox:"0 0 131 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_=Object(c["g"])("path",{d:"M1 30.5L130 1V6.9L32.0253 30.5L130 54.1V60L1 30.5Z",fill:"#440d3d",stroke:"#440d3d"},null,-1);Object(c["q"])();var x=h((function(e,t,n,i,r,a){return Object(c["p"])(),Object(c["e"])("svg",m,[_])})),L={name:"ArrowLeftSm"};n("1029");L.render=x,L.__scopeId="data-v-c5528dfa";var S=L,k=Object(c["F"])("data-v-eb211e60");Object(c["s"])("data-v-eb211e60");var A={width:"131",height:"61",viewBox:"0 0 131 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y=Object(c["g"])("path",{d:"M130 30.5L1 1V6.9L98.9747 30.5L1 54.1V60L130 30.5Z",fill:"#440d3d",stroke:"#440d3d"},null,-1);Object(c["q"])();var C=k((function(e,t,n,i,r,a){return Object(c["p"])(),Object(c["e"])("svg",A,[y])})),V={name:"ArrowRightSm"};n("a9b8");V.render=C,V.__scopeId="data-v-eb211e60";var I=V,R={components:{ArrowLeft:f,ArrowRight:w,ArrowLeftSm:S,ArrowRightSm:I},mounted:function(){document.addEventListener("keyup",this.keyUp)},methods:{next:function(){this.$emit("next")},prev:function(){this.$emit("prev")},keyUp:function(){37===event.keyCode?this.prev():39===event.keyCode&&this.next()}}};n("49e6");R.render=d,R.__scopeId="data-v-8fcab934";t["a"]=R},"49e6":function(e,t,n){"use strict";n("a5da")},"678c":function(e,t,n){},"846a":function(e,t,n){"use strict";n("0982")},"943a":function(e,t,n){"use strict";n("eb8a")},"99b8":function(e,t,n){"use strict";var c=n("7a23"),i=Object(c["F"])("data-v-33869492");Object(c["s"])("data-v-33869492");var r={class:"sidenav"},a=Object(c["f"])("Animals"),s=Object(c["f"])("Landscapes"),o=Object(c["f"])("People"),d=Object(c["f"])("Cities");Object(c["q"])();var l=i((function(e,t,n,l,u,b){var v=Object(c["x"])("router-link");return Object(c["p"])(),Object(c["e"])("nav",r,[Object(c["g"])(v,{class:"sidenav__item",to:"/Animals"},{default:i((function(){return[a]})),_:1}),Object(c["g"])(v,{class:"sidenav__item",to:"/Landscapes"},{default:i((function(){return[s]})),_:1}),Object(c["g"])(v,{class:"sidenav__item",to:"/People"},{default:i((function(){return[o]})),_:1}),Object(c["g"])(v,{class:"sidenav__item",to:"/Cities"},{default:i((function(){return[d]})),_:1})])})),u={name:"SideNav"};n("fdc4");u.render=l,u.__scopeId="data-v-33869492";t["a"]=u},a5da:function(e,t,n){},a9b8:function(e,t,n){"use strict";n("d458")},bea6:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),i=Object(c["F"])("data-v-4604c90a");Object(c["s"])("data-v-4604c90a");var r={class:"container"},a={class:"slide"},s={class:"textbox"};Object(c["q"])();var o=i((function(e,t,n,o,d,l){var u=Object(c["x"])("SideNav"),b=Object(c["x"])("carousel-slide"),v=Object(c["x"])("carousel");return Object(c["p"])(),Object(c["e"])("div",r,[Object(c["g"])(u),Object(c["g"])(v,{onNext:l.next,onPrev:l.prev},{default:i((function(){return[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(d.slides,(function(e,t){return Object(c["p"])(),Object(c["e"])(b,{key:e.imgId,index:t,visibleSlide:d.visibleSlide,direction:d.direction},{default:i((function(){return[Object(c["g"])("article",a,[Object(c["g"])("img",{src:e.imgUrl},null,8,["src"]),Object(c["g"])("div",s,[Object(c["g"])("h3",null,Object(c["z"])(e.imgDesc),1),Object(c["g"])("p",null,Object(c["z"])(e.imgLocal),1)])])]})),_:2},1032,["index","visibleSlide","direction"])})),128))]})),_:1},8,["onNext","onPrev"])])})),d=n("99b8"),l=n("76a5"),u=n("3693"),b=n("205e"),v={components:{SideNav:d["a"],Carousel:u["a"],CarouselSlide:b["a"]},data:function(){return{images:l["a"],slides:l["a"][2].pics,visibleSlide:0,direction:"left"}},computed:{slidesLength:function(){return this.slides.length}},methods:{next:function(){this.visibleSlide>=this.slidesLength-1?this.visibleSlide=0:this.visibleSlide++,this.direction="left"},prev:function(){this.visibleSlide<=0?this.visibleSlide=this.slidesLength-1:this.visibleSlide--,this.direction="right"}}};n("cc69");v.render=o,v.__scopeId="data-v-4604c90a";t["default"]=v},c737:function(e,t,n){},cc69:function(e,t,n){"use strict";n("e11c")},d458:function(e,t,n){},e11c:function(e,t,n){},eb8a:function(e,t,n){},fdc4:function(e,t,n){"use strict";n("c737")}}]);
//# sourceMappingURL=People.b5a8ac24.js.map