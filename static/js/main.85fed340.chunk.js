(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{247:function(e,t,n){e.exports=n(274)},252:function(e,t,n){},258:function(e,t){},259:function(e,t){},267:function(e,t){},270:function(e,t){},271:function(e,t){},272:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var r=n(64),a=n.n(r),c=n(226),i=n.n(c),o=(n(252),n(5)),u=n.n(o),s=n(13),f=(n(273),n(246)),l=n(245),h=n.n(l),d=(n(272),n(8)),p=function(e,t){e.forEach((function(e){var n=Object(d.a)(e.bbox,4),r=n[0],a=n[1],c=n[2],i=n[3],o=e.class;t.strokeStyle="green",t.font="18px Arial",t.fillStyle="green",t.beginPath(),t.fillText(o,r,a),t.rect(r,a,c,i),t.stroke()}))};var v=function(){var e=0,t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=function(){var t=Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a();case 2:n=t.sent,setInterval((function(){i(n),e+=1e3}),1e3);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var r=Object(s.a)(u.a.mark((function r(a){var c,i,o,s,f;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){r.next=15;break}return c=t.current.video,i=t.current.video.videoWidth,o=t.current.video.videoHeight,t.current.video.width=i,t.current.video.height=o,n.current.width=i,n.current.height=o,r.next=10,a.detect(c);case 10:s=r.sent,console.log(s),f=n.current.getContext("2d"),p(s,f),3e3==e&&(s.forEach((function(e){var t=e.class,n=new SpeechSynthesisUtterance(t);window.speechSynthesis.speak(n)})),e=0);case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(h.a,{ref:t,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),a.a.createElement("canvas",{ref:n,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.85fed340.chunk.js.map