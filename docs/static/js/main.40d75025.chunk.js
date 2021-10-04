(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(13),n=t.n(s),r=t(3),i=t(7),l=(t(20),t(2)),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,origin:e.origin.name,episode:e.episode,status:e.status,id:e.id}}))}))},o=t(0),d=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",{className:"filter__inputText",type:"text",name:"name",placeholder:"Search here by name!",value:e.searchName,onChange:e.handleSearchName})})},h=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("select",{className:"filter__inputSelect",name:"species",id:"species",value:e.searchSpecies,onChange:e.handleSearchSpecies,children:[Object(o.jsx)("option",{value:"All",children:"Selected by species"}),Object(o.jsx)("option",{value:"Human",children:"Human"}),Object(o.jsx)("option",{value:"Alien",children:"Alien"})]})})},b=(t(22),function(e){return Object(o.jsx)("section",{className:"filter",children:Object(o.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)(d,{searchName:e.searchName,handleSearchName:e.handleSearchName}),Object(o.jsx)(h,{searchSpecies:e.searchSpecies,handleSearchSpecies:e.handleSearchSpecies})]})})}),u=(t(23),function(e){return Object(o.jsx)("button",{className:e.className,children:e.text})}),m=t.p+"static/media/human-mind.64af08c6.png",x=t.p+"static/media/ufo.4439d8a8.png",O=function(e){var c="Alien"===e.each.species?x:m;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"card__image",src:e.each.image,alt:"character"}),Object(o.jsxs)("div",{className:"card__paragraphs",children:[Object(o.jsx)("p",{className:"card__text",children:"Name: ".concat(e.each.name)}),Object(o.jsx)("p",{className:"card__text",children:"Species: ".concat(e.each.species)})]}),Object(o.jsxs)("section",{className:"card__circles",children:[Object(o.jsx)("div",{className:"card__species",children:Object(o.jsx)("img",{className:"card__species--icon",src:c,alt:"species"})}),Object(o.jsx)(r.b,{to:"/characters/".concat(e.each.id),children:Object(o.jsx)(u,{className:"card__button",text:"See more here!"})})]})]})},p=(t(12),function(){return Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsx)("h1",{children:"Try again, this character does not exist!"}),Object(o.jsx)(r.b,{to:"/characters",children:Object(o.jsx)(u,{className:"notFound__button",text:"Back"})})]})}),f=(t(32),function(e){return Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("ul",{className:"main__list",children:0===e.characters.length?Object(o.jsx)(p,{}):e.characters.map((function(e){return Object(o.jsx)("li",{className:"main__list--item",children:Object(o.jsx)(r.b,{to:"/characters/".concat(e.id),children:Object(o.jsx)(O,{each:e})})},e.id)}))})})}),_=(t(33),function(e){if(console.log(e.selectedCharacter),void 0===e.selectedCharacter)return Object(o.jsx)(p,{});var c=1===e.selectedCharacter.episode.length?"episode":"episodes",t="";return t="Dead"===e.selectedCharacter.status?"fas fa-cross detail__icon":"Alive"===e.selectedCharacter.status?"fas fa-heart detail__icon":"fas fa-question-circle detail__icon",Object(o.jsx)("section",{className:"detail",children:Object(o.jsxs)("div",{className:"detail__card",children:[Object(o.jsx)("div",{className:"detail__back",children:Object(o.jsx)(r.b,{to:"/characters",children:Object(o.jsx)("i",{className:"fas fa-times-circle detail__back--cross"})})}),Object(o.jsx)("img",{className:"detail__image",src:e.selectedCharacter.image,alt:"profile"}),Object(o.jsxs)("p",{className:"detail__text",children:["Hi, my name is ",Object(o.jsx)("span",{children:e.selectedCharacter.name}),". I'm just an ordinary ",Object(o.jsx)("span",{children:e.selectedCharacter.species}),". My origin is ",Object(o.jsx)("span",{children:e.selectedCharacter.origin}),". I am a celebrity because I appeared in",Object(o.jsx)("span",{children:" ".concat(e.selectedCharacter.episode.length," ").concat(c)})," ","of Rick & Morty."]}),Object(o.jsxs)("div",{className:"detail__icon--container",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:t})}),Object(o.jsx)("p",{className:"detail__text",children:"Status: ".concat(e.selectedCharacter.status)})]})]})})}),N=t.p+"static/media/red.4099ed46.png",g=(t(34),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("img",{className:"header__logo",src:N,alt:"character"})})}),v=(t(35),function(){return Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"hero__text",children:"All about"}),Object(o.jsx)("img",{className:"hero__logo",src:N,alt:"character"})]}),Object(o.jsx)(r.b,{to:"/characters",children:Object(o.jsx)(u,{className:"hero__button",text:"Start!"})})]})}),S=(t(36),function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("p",{className:"footer__name",children:"Ana Montegrifo"}),Object(o.jsx)("p",{className:"footer__text",children:"Evaluaci\xf3n final React - Adalab"}),Object(o.jsxs)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://github.com/Adalab/modulo-3-evaluacion-final-anamontegrifo",children:["Repo en Github ",Object(o.jsx)("i",{className:"fab fa-github-alt"})]})]})}),C=function(){return Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsx)("h1",{children:"This page does not exist!"}),Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)(u,{className:"notFound__button",text:"Home"})})]})};var k=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),d=r[0],h=r[1],u=Object(a.useState)("All"),m=Object(i.a)(u,2),x=m[0],O=m[1];Object(a.useEffect)((function(){j().then((function(e){s(e)}))}),[]);var p=t.sort((function(e,c){return e.name>c.name?1:e.name<c.name?-1:0})).filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"All"===x||x===e.species})),N=Object(l.f)("/characters/:id"),k=null!==N?parseInt(N.params.id):"",y=t.find((function(e){return e.id===k}));return console.log(y),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"container",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{path:"/characters/:id",children:[Object(o.jsx)(g,{}),Object(o.jsx)(_,{selectedCharacter:y}),Object(o.jsx)(S,{})]}),Object(o.jsxs)(l.a,{exact:!0,path:"/characters",children:[Object(o.jsx)(g,{}),Object(o.jsx)(b,{searchName:d,handleSearchName:function(e){h(e.currentTarget.value)},searchSpecies:x,handleSearchSpecies:function(e){O(e.currentTarget.value)}}),Object(o.jsx)(f,{characters:p}),Object(o.jsx)(S,{})]}),Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(v,{})}),Object(o.jsx)(l.a,{children:Object(o.jsx)(C,{})})]})})})};n.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.40d75025.chunk.js.map