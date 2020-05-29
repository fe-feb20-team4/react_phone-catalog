(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),l=a(10),s=a(2),i=a(3),u=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement(s.b,{to:"/",className:"logo__link"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo__img"})))},m=function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container footer__container"},c.a.createElement(u,null),c.a.createElement("div",{className:"footer__links"},c.a.createElement(s.b,{to:"/",className:"footer__link"},"Github"),c.a.createElement(s.b,{to:"/",className:"footer__link"},"Contacts"),c.a.createElement(s.b,{to:"/",className:"footer__link"},"Rights")),c.a.createElement("div",{className:"footer__top-button-container"},c.a.createElement("p",{className:"footer__paragraph"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e}))))},d=function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:a,exact:n,className:"nav__link",activeClassName:"nav__link--active"},t))},p=[{title:"Home",link:"/",exact:!0},{title:"Phones",link:"/phones",exact:!1},{title:"Tablets",link:"/tablets",exact:!1},{title:"Accessories",link:"/accessories",exact:!1}],_=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},p.map((function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement(d,{key:t,title:t,link:a,exact:n})}))))},b=function(){return c.a.createElement("div",{className:"favorites"},c.a.createElement(s.b,{to:"/",className:"favorites__button"}))},f=function(){return c.a.createElement("div",{className:"cart"},c.a.createElement(s.b,{to:"/",className:"cart__button"}))},E=a(4),h=a.n(E),g=function(e){var t=e.inputValue,a=e.searchProducts,r=e.searchReset,o=Object(n.useRef)(null),l=Object(n.useCallback)((function(){r(),o&&o.current&&o.current.focus()}),[r]);return c.a.createElement("div",{className:"search"},c.a.createElement("input",{ref:o,type:"text",value:t,className:"search__input",placeholder:"Search in products...",onChange:a}),c.a.createElement("button",{type:"button","aria-label":"Clear input",className:h()({search__button:!0,"search__button--clear":t}),onClick:l,disabled:0===t.length}))},v=a(8);var N,O=function(e,t){var a;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];clearTimeout(a),a=setTimeout((function(){e.apply(void 0,c)}),t)}},j=a(11),k=a.n(j),y=a(15),C=a(12),w=a(25),P=a(26),S=function(e){return{type:"SET_PRODUCTS",products:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return t.products;default:return e}},T="https://mate-academy.github.io/react_phone-catalog/api/products",R=function(){var e=Object(y.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,".json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(C.combineReducers)({products:M}),A=function(e){return e.products},F=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:a=e.sent,t(S(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=Object(C.createStore)(x,Object(w.composeWithDevTools)(Object(C.applyMiddleware)(P.a)));!function(e){e.NEWEST="Newest",e.FROM_A_TO_Z="From-A-to-Z",e.FROM_Z_TO_A="From-Z-to-A",e.CHEAPEST="Cheapest"}(N||(N={}));var q=function(){var e=Object(i.f)(),t=Object(i.g)(),a=Object(l.b)(),c=new URLSearchParams(t.search),r=Object(n.useMemo)((function(){return c.get("query")||""}),[c]),o=c.get("sortBy"),s=Object(n.useState)(r),u=Object(v.a)(s,2),m=u[0],d=u[1],p=Object(l.c)(A);Object(n.useEffect)((function(){return a(F()),function(){return d("")}}),[a,t.pathname]);var _=Object(n.useCallback)(O((function(t){c.set("query",t.toLowerCase()),c.get("query")||c.delete("query"),e.push({search:c.toString()})}),500),[]),b=Object(n.useCallback)((function(e){var t=e.target.value;d(t),_(t)}),[_]),f=Object(n.useMemo)((function(){return p.filter((function(e){return e.name.toLowerCase().includes(r)})).slice().sort((function(e,t){switch(o){case N.NEWEST:return e.age-t.age;case N.FROM_A_TO_Z:return e.name.localeCompare(t.name);case N.FROM_Z_TO_A:return t.name.localeCompare(e.name);case N.CHEAPEST:return e.price-t.price;default:return 0}}))}),[p,r,o]),E=Object(n.useCallback)((function(){d(""),c.get("query")||c.delete("query"),e.push({search:""})}),[c,e]);return{inputValue:m,searchProducts:b,searchedProducts:f,location:t,history:e,search:c,searchReset:E}},B=function(){var e=q(),t=e.inputValue,a=e.searchProducts,n=e.searchReset,r=e.location;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(u,null)),c.a.createElement("div",{className:"header__nav"},c.a.createElement(_,null))),c.a.createElement("div",{className:"header__flex-wrap"},"/"!==r.pathname&&c.a.createElement(g,{inputValue:t,searchProducts:a,searchReset:n}),c.a.createElement(b,null),c.a.createElement(f,null)))},D=function(e){var t=e.name,a=e.imageUrl,r=e.price,o=e.screen,l=e.capacity,s=e.ram,i=e.discount,u=e.id,m=e.productCardRef,d=Object(n.useMemo)((function(){return o.replace(" inches",'"')}),[o]),p=Object(n.useMemo)((function(){return r*(i/100)+r}),[r,i]),_=Object(n.useMemo)((function(){return"".concat(parseInt(l||"32000",10)," MB")}),[l]),b=Object(n.useMemo)((function(){return"".concat(parseInt(s||"1000",10)," MB")}),[s]);return c.a.createElement("article",{className:"product",ref:m},c.a.createElement("img",{className:"product__image",src:a,alt:t}),c.a.createElement("p",{className:"product__title"},t),c.a.createElement("div",{className:"product__price-container"},c.a.createElement("span",{className:"product__price"},"$".concat(r)),i>0&&c.a.createElement("span",{className:"product__discount"},"$".concat(p))),c.a.createElement("span",{className:"product__split-line"}),c.a.createElement("div",{className:"product__details"},c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Screen"),c.a.createElement("span",{className:"product__details-info"},d)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Capacity"),c.a.createElement("span",{className:"product__details-info"},_)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"RAM"),c.a.createElement("span",{className:"product__details-info"},b))),c.a.createElement("div",{className:"product__buttons__container"},c.a.createElement("button",{className:"product__button",type:"button"},"Add to cart"),c.a.createElement("label",{className:"product__button-favorite",htmlFor:"button-favorite-".concat(u)},c.a.createElement("input",{className:"product__button-favorite-input",type:"checkbox",id:"button-favorite-".concat(u)}),c.a.createElement("span",{className:"product__button-favorite-checkmark"}))))},Z=function(e){var t=e.products,a=e.position,n=e.animationDuration,r=e.productCardRef;return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__list",style:{transform:"translateX(".concat(a,"px)"),transition:"transform ".concat(n,"ms")}},t.map((function(e){return c.a.createElement(D,Object.assign({key:e.id},e,{productCardRef:r}))}))))},W=a(27),H="left",I="right",G="Items on page",U="Sort by",V=[{option:N.NEWEST},{option:N.FROM_A_TO_Z},{option:N.FROM_Z_TO_A},{option:N.CHEAPEST}],z=[{option:"All"},{option:"4"},{option:"8"},{option:"16"}],J=function(e){var t=e.handleSlide,a=e.direction,n=e.position,r=e.maxPosition,o=a===H,l=a===I,s=0===n,i=n===r;return c.a.createElement("button",{type:"button","aria-label":"Slide ".concat(a),className:h()(Object(W.a)({slider__button:!0},"slider__button-".concat(a),!0)),onClick:function(){return t(a)},disabled:o&&s||l&&i})},X=function(e){var t=e.title;return c.a.createElement("h2",{className:"section__heading heading"},t)},$=function(e){var t=e.title,a=function(e){var t=Object(l.b)(),a=Object(l.c)(A),c=Object(n.useState)(0),r=Object(v.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)(0),u=Object(v.a)(i,2),m=u[0],d=u[1];Object(n.useEffect)((function(){t(F())}),[t]);var p=Object(n.useMemo)((function(){return m+16}),[m]),_=Object(n.useMemo)((function(){return a.filter((function(e){return 0!==e.discount}))}),[a]),b=Object(n.useMemo)((function(){return a.filter((function(e){return e.age<10&&!e.discount}))}),[a]),f=Object(n.useMemo)((function(){switch(e){case"Hot prices":return _;case"Brand new models":return b;default:return[]}}),[e,_,b]),E=Object(n.useMemo)((function(){return 2*p}),[p]),h=Object(n.useMemo)((function(){return 4*p}),[p]),g=Object(n.useMemo)((function(){return p*f.length}),[p,f]),N=Object(n.useMemo)((function(){return h-g}),[h,g]),O=Object(n.useCallback)((function(e){null!==e&&d(e.getBoundingClientRect().width)}),[]),j=Object(n.useCallback)((function(e){s(e===H?o+E>0?0:o+E:o-E<N?N:o-E)}),[o,N,E]);return{currentProducts:f,position:o,step:2,itemWidth:p,animationDuration:700,handleSlide:j,maxPosition:N,productCardRef:O,frameSize:4}}(t),r=a.currentProducts,o=a.position,s=a.step,i=a.itemWidth,u=a.animationDuration,m=a.handleSlide,d=a.maxPosition,p=a.productCardRef,_=a.frameSize;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__heading-container"},c.a.createElement(X,{title:t}),c.a.createElement("div",{className:"slider__controls"},c.a.createElement(J,{handleSlide:m,direction:H,position:o,maxPosition:d}),c.a.createElement(J,{handleSlide:m,direction:I,position:o,maxPosition:d}))),c.a.createElement(Z,{products:r,position:o,step:s,itemWidth:i,frameSize:_,animationDuration:u,productCardRef:p}))},K=function(e){var t=e.slides,a=e.toMove,n=e.duration;return c.a.createElement("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-a,"px)"),transitionDuration:"".concat(n,"s")}},t.map((function(e){var t=e.id,a=e.name,n=e.src;return c.a.createElement("li",{key:t,className:"carousel__item"},c.a.createElement("img",{className:"carousel__image",src:n,alt:a}))})))},Q=function(e){var t=e.slides,a=e.active,n=e.goToSlide;return c.a.createElement("div",{className:"carousel__rectangles"},t.map((function(e,t){return c.a.createElement("button",{key:e.id,type:"button","aria-label":"Got to ".concat(t+1," slide"),onClick:function(){return n(t)},className:h()({carousel__rectangle:!0,"carousel__rectangle--active":a===t})})})))},Y=function(e){var t=e.changeSlide,a=e.direction;return c.a.createElement("button",{type:"button",className:"carousel__btn carousel__btn--".concat(a),"aria-label":"Slide ".concat(a),onClick:function(){return t(a)}})},ee=[{id:1,name:"phones",src:"./img/showcase-carousel/first.jpg"},{id:2,name:"tablets",src:"./img/showcase-carousel/second.jpg"},{id:3,name:"accessories",src:"./img/showcase-carousel/third.jpg"}],te=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),l=Object(v.a)(o,2),s=l[0],i=l[1],u=Object(n.useState)(0),m=Object(v.a)(u,2),d=m[0],p=m[1],_=ee.length-1,b=Object(n.useCallback)((function(e){null!==e&&p(e.getBoundingClientRect().width)}),[]),f=Object(n.useCallback)((function(e){e===H&&(a<=0?(r(a+d*_),i(_)):(r(a-d),i(s-1))),e===I&&(a>=d*_?(r(0),i(0)):(r(a+d),i(s+1)))}),[a,d,s,_]);Object(n.useEffect)((function(){var e=setInterval((function(){return f(I)}),4e3);return function(){return clearInterval(e)}}),[f]);var E=Object(n.useCallback)((function(e){r(e<s?a-d*(s-e):a+d*(e-s)),i(e)}),[s,a,d]);return c.a.createElement("div",{className:"carousel section__carousel"},c.a.createElement("div",{className:"carousel__container",ref:b},c.a.createElement(Y,{changeSlide:f,direction:"left"}),c.a.createElement(Y,{changeSlide:f,direction:"right"}),c.a.createElement(K,{slides:ee,toMove:a,duration:.7}),c.a.createElement(Q,{slides:ee,active:s,goToSlide:E})))},ae=function(){var e=q(),t=e.searchedProducts,a=e.history,c=e.search,r=e.location,o=Object(n.useMemo)((function(){return t.filter((function(e){return"phone"===e.type}))}),[t]),l=Object(n.useMemo)((function(){return t.filter((function(e){return"tablet"===e.type}))}),[t]),s=Number(c.get("page"))||1,i=Number(c.get("perPage"))||t.length,u=Object(n.useMemo)((function(){return s*i}),[s,i]),m=Object(n.useMemo)((function(){return u-i}),[u,i]),d=Object(n.useMemo)((function(){return"/phones"===r.pathname?{numberOfProducts:o.length,currentProducts:o.slice(m,u)}:{numberOfProducts:l.length,currentProducts:l.slice(m,u)}}),[o,l,m,u,r.pathname]),p=d.numberOfProducts,_=void 0===p?0:p,b=d.currentProducts;return{currentProducts:void 0===b?t:b,numberOfProducts:_,changePage:function(e){c.set("page",e.toString()),a.push({search:c.toString()})},queryCondition:Object(n.useCallback)((function(){return c.get("query")?"result":"model"}),[c]),perPage:i,page:s,search:c,phones:o,tablets:l,location:r}},ne=function(e){var t=e.title,a=ae(),n=a.phones,r=a.tablets,o=a.queryCondition,l=0,s=t.toLowerCase();return s.includes("phones")&&(l=n.length),s.includes("tablets")&&(l=r.length),c.a.createElement("p",{className:"products-amount categories__amount"},l," ",o(),1!==l&&"s")},ce=function(e){var t=e.title,a=e.link;return c.a.createElement("div",{className:"categories__category"},c.a.createElement(s.b,{to:"/".concat(a),className:"categories__link"},c.a.createElement("div",{className:"categories__photo"},c.a.createElement("img",{className:"categories__image",src:"./img/categories/category-".concat(a,".jpg"),alt:a})),c.a.createElement("h3",{className:"categories__title"},t),c.a.createElement(ne,{title:t})))},re=[{title:"Mobile phones",link:"phones"},{title:"Tablets",link:"tablets"},{title:"Accessories",link:"accessories"}],oe=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(X,{title:"Shop by category"}),c.a.createElement("div",{className:"categories"},re.map((function(e){var t=e.title,a=e.link;return c.a.createElement(ce,{key:t,title:t,link:a})}))))},le=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"visually-hidden"},"React Products Catalog"),c.a.createElement("section",{className:"section"},c.a.createElement(te,null)),c.a.createElement("section",{className:"section"},c.a.createElement($,{title:"Hot prices"})),c.a.createElement("section",{className:"section"},c.a.createElement(oe,null)),c.a.createElement("section",{className:"section"},c.a.createElement($,{title:"Brand new models"})))},se=function(e){for(var t=e.total,a=e.perPage,n=e.page,r=e.changePage,o=[],l=1;l<=Math.ceil(t/a);l+=1)o.push(l);return c.a.createElement("div",{className:"pagination section__pagination"},c.a.createElement("button",{type:"button","aria-label":"Go left",className:"pagination__button pagination__button--left",onClick:function(){return r(n-1)},disabled:1===n}),c.a.createElement("ul",{className:"pagination__list"},o.map((function(e){return c.a.createElement("li",{className:"pagination__item",key:e},c.a.createElement("button",{type:"button",onClick:function(){return r(e)},className:h()({pagination__button:!0,"pagination__button--active":n===e})},e))}))),c.a.createElement("button",{type:"button","aria-label":"Go right",className:"pagination__button pagination__button--right",onClick:function(){return r(n+1)},disabled:n===o.length}))},ie=function(e){var t=e.to,a=e.label,n=e.isLast;return c.a.createElement("li",{className:"breadcrumbs__item"},c.a.createElement("span",{className:"breadcrumbs__arrow"}),n?c.a.createElement("span",{className:"breadcrumbs__last"},a):c.a.createElement(s.c,{to:t,className:"breadcrumbs__link",activeClassName:"breadcrumbs__link--active"},a))},ue=[{to:"/phones",label:"Phones"},{to:"/tablets",label:"Tablets"},{to:"/favourites",label:"Favourites"}],me=function(){var e=Object(i.g)(),t=Object(n.useMemo)((function(){return ue.filter((function(t){return t.to===e.pathname}))}),[e]);return c.a.createElement("ul",{className:"breadcrumbs section__breadcrumbs"},c.a.createElement(s.c,{to:"/",className:"breadcrumbs__item breadcrumbs__home",activeClassName:"breadcrumb__link--active"}),t.map((function(e,a){return c.a.createElement(ie,Object.assign({},e,{key:e.to,isLast:a===t.length-1}))})))},de=function(e){var t=e.isListOpen;return c.a.createElement("span",{className:h()({dropdown__arrow:!0,"dropdown__arrow--up":t})})},pe=function(e){var t=e.list,a=e.heading,r=function(e,t){var a=Object(n.useState)(!1),c=Object(v.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(e[0].option),s=Object(v.a)(l,2),i=s[0],u=s[1],m=Object(n.useCallback)((function(){return o(!1)}),[o]),d=q(),p=d.search,_=d.history;Object(n.useEffect)((function(){r?window.addEventListener("click",m):window.removeEventListener("click",m)}),[r,m]);var b=Object(n.useCallback)((function(){return o(!r)}),[r]),f=Object(n.useCallback)((function(e){u(e),t===U&&p.set("sortBy",e.split(" ").join("-")),t===G&&p.set("perPage",e),p.delete("page"),_.push({search:p.toString()})}),[_,p,t]);return{toggleList:b,selectedOption:i,isListOpen:r,handleSort:f}}(t,a),o=r.toggleList,l=r.selectedOption,s=r.isListOpen,i=r.handleSort,u=Object(n.useCallback)((function(e,t){e.preventDefault(),i(t)}),[i]);return c.a.createElement("div",{className:"dropdown"},c.a.createElement("p",{className:"dropdown__heading"},a),c.a.createElement("div",{className:"dropdown__wrapper"},c.a.createElement("button",{type:"button",className:"dropdown__header",onClick:o},l,c.a.createElement(de,{isListOpen:s})),c.a.createElement("ul",{className:h()({dropdown__list:!0,"dropdown__list--is-open":s})},t.map((function(e){var t=e.option;return c.a.createElement("li",{key:t},c.a.createElement("a",{href:"#!",className:h()({"dropdown__list-item":!0,"dropdown__list-item--active":l===t}),onClick:function(e){return u(e,t)}},t))})))))},_e=function(){var e=ae(),t=e.currentProducts,a=e.numberOfProducts;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"products section__products"},t.map((function(e){return c.a.createElement(D,Object.assign({key:e.id},e))}))):c.a.createElement("p",{className:"section__no-products-info"},"No products with such title...try again."))},be=function(){var e=ae(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,o=e.search,l=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:h()({section:!0,pt24:"/"!==l.pathname})},!o.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement(X,{title:"Mobile phones"})),0!==t&&c.a.createElement(ne,{title:"phones"}),!o.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(pe,{heading:U,list:V}),c.a.createElement(pe,{heading:G,list:z})),c.a.createElement(_e,null),t>n&&c.a.createElement(se,{total:t,perPage:n,page:r,changePage:a})))},fe=function(){var e=ae(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,o=e.search,l=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:h()({section:!0,pt24:"/"!==l.pathname})},!o.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement(X,{title:"Tablets"})),0!==t&&c.a.createElement(ne,{title:"tablets"}),!o.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(pe,{heading:U,list:V}),c.a.createElement(pe,{heading:G,list:z})),c.a.createElement(_e,null),t>n&&c.a.createElement(se,{total:t,perPage:n,page:r,changePage:a})))},Ee=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(B,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(le,null)),c.a.createElement(i.a,{path:"/phones"},c.a.createElement(be,null)),c.a.createElement(i.a,{path:"/tablets"},c.a.createElement(fe,null))),c.a.createElement(m,null))};a(39);o.a.render(c.a.createElement(l.a,{store:L},c.a.createElement(s.a,null,c.a.createElement(Ee,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7a5411f4.chunk.js.map