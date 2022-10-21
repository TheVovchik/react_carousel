(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),s=n(2),c=n(1),o=(n(13),n(5)),r=n(6),l=n(8),u=n(7),p=(n(14),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={allPositions:[],currentPosition:0,currentIndex:0,infinity:t.props.infinity},t.carousel=0,t.clickNext=function(){var e=t.state,n=e.allPositions,i=e.currentIndex;e.infinity?i!==n.length-1?i+=1:i=0:t.setState({infinity:!0}),t.setState({currentIndex:i,currentPosition:n[i]})},t.clickPrev=function(){var e=t.state,n=e.allPositions,i=e.currentIndex;e.infinity||t.setState({infinity:!0});var a=i;0!==a?a-=1:a=n.length-1,t.setState({currentIndex:a,currentPosition:n[a]})},t.clickAuto=function(){var e=t.state,n=e.allPositions,i=e.currentIndex,a=e.infinity,s=t.props.animationDuration;if(a){t.setState({infinity:!1});var c=n,o=i;t.carousel=window.setInterval((function(){t.setState({currentPosition:c[o]}),o!==c.length-1?o+=1:o=0,t.setState({currentIndex:o})}),s)}},t.clickStop=function(){t.state.infinity||t.setState({infinity:!0})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,c=e.animationDuration,o=this.calculateCheckPoints(n,i,a,s),r=0;this.state.infinity||(this.carousel=window.setInterval((function(){t.setState({currentPosition:o[r]}),r!==o.length-1?r+=1:r=0,t.setState({currentIndex:r})}),c))}},{key:"componentDidUpdate",value:function(t){var e=this,n=this.state.infinity,i=this.props,a=i.images,s=i.step,c=i.frameSize,o=i.itemWidth,r=i.animationDuration;if(n&&window.clearInterval(this.carousel),t.itemWidth!==this.props.itemWidth||t.step!==this.props.step||t.frameSize!==this.props.frameSize||t.animationDuration!==this.props.animationDuration){var l=this.calculateCheckPoints(a,s,c,o),u=0;this.setState({allPositions:l}),n||(window.clearInterval(this.carousel),this.carousel=window.setInterval((function(){e.setState({currentPosition:l[u]}),u!==l.length-1?u+=1:u=0,e.setState({currentIndex:u})}),r))}}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.carousel)}},{key:"calculateCheckPoints",value:function(t,e,n,i){for(var a=[],s=i*t.length,c=i*e,o=s-i*n,r=0;r<s;r+=c){if(r>o){a.push(o-2*o);break}a.push(r-2*r)}return this.setState({allPositions:a}),a}},{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,i=t.itemWidth,a=t.animationDuration,s=this.state.currentPosition;return Object(p.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*i,"px")},children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(s,"px)"),transitionDuration:"".concat(a,"ms")},children:e.map((function(t,e){return Object(p.jsx)("li",{className:"Carousel__item",children:Object(p.jsx)("img",{src:t,alt:"".concat(e+1),style:{width:"".concat(i,"px")}})},t)}))}),Object(p.jsxs)("div",{className:"Carousel__buttons-box navigation",children:[Object(p.jsx)("button",{type:"button",className:"navigation__button button-56",onClick:this.clickPrev,children:"PREV"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",className:"navigation__button button-56",onClick:this.clickAuto,children:"AUTO"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",className:"navigation__button button-56",onClick:this.clickStop,children:"STOP"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",className:"navigation__button button-56",onClick:this.clickNext,children:"NEXT"})]})]})}}]),n}(c.Component),d=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],h=function(){var t=Object(c.useState)(3),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(3),o=Object(s.a)(a,2),r=o[0],l=o[1],u=Object(c.useState)(130),h=Object(s.a)(u,2),b=h[0],j=h[1],f=Object(c.useState)(1e3),x=Object(s.a)(f,2),g=x[0],O=x[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(d.length," images")}),Object(p.jsx)("p",{className:"App__description",children:"Buttons:"}),Object(p.jsx)("p",{className:"App__description",children:"prev - move slider one step back and stop auto rotation"}),Object(p.jsx)("p",{className:"App__description",children:"auto - start auto rotation"}),Object(p.jsx)("p",{className:"App__description",children:"stop - stop auto rotation"}),Object(p.jsx)("p",{className:"App__description",children:"next - move slider one step forward and stop auto rotation"}),Object(p.jsx)(m,{images:d,step:n,frameSize:r,itemWidth:b,animationDuration:g,infinity:!1}),Object(p.jsxs)("form",{className:"App__form form",children:[Object(p.jsxs)("label",{className:"form__label",htmlFor:"step",children:["Step - slides spinned in window",Object(p.jsx)("br",{}),"(between 1 and ".concat(d.length,")")]}),Object(p.jsxs)("div",{className:"form__input",children:[Object(p.jsx)("input",{type:"range",id:"step",name:"step",value:"".concat(n),min:"1",max:"".concat(d.length-1),step:"1",onChange:function(t){return i(Number(t.currentTarget.value))}}),Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("label",{className:"form__label",htmlFor:"frameSize",children:["Frame size - slides shown in window",Object(p.jsx)("br",{}),"(between 1 and ".concat(d.length,")")]}),Object(p.jsxs)("div",{className:"form__input",children:[Object(p.jsx)("input",{type:"range",id:"frameSize",name:"frameSize",value:"".concat(r),min:"1",max:"".concat(d.length),step:"1",onChange:function(t){return l(Number(t.currentTarget.value))}}),Object(p.jsx)("span",{children:r})]}),Object(p.jsxs)("label",{className:"form__label",htmlFor:"itemWidth",children:["Item width - width of one slide in window",Object(p.jsx)("br",{}),"(between 80px and 250px)"]}),Object(p.jsxs)("div",{className:"form__input",children:[Object(p.jsx)("input",{type:"range",id:"itemWidth",name:"itemWidth",value:"".concat(b),min:"80",max:"250",step:"10",onChange:function(t){return j(Number(t.currentTarget.value))}}),Object(p.jsx)("span",{children:"".concat(b,"px")})]}),Object(p.jsxs)("label",{className:"form__label",htmlFor:"animationDuration",children:["Animation duration - speed of slides changes",Object(p.jsx)("br",{}),"(between 500ms and 3000ms)"]}),Object(p.jsxs)("div",{className:"form__input",children:[Object(p.jsx)("input",{type:"range",id:"animationDuration",name:"animationDuration",value:"".concat(g),min:"500",max:"3000",step:"100",onChange:function(t){return O(Number(t.currentTarget.value))}}),Object(p.jsx)("span",{children:"".concat(g,"ms")})]})]})]})};a.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5c70ac05.chunk.js.map