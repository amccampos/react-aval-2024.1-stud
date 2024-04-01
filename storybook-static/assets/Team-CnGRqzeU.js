import{r as g}from"./index-CsdIBAqE.js";var m={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=g,f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function u(r,a,l){var e,i={},n=null,s=null;l!==void 0&&(n=""+l),a.key!==void 0&&(n=""+a.key),a.ref!==void 0&&(s=a.ref);for(e in a)d.call(a,e)&&!b.hasOwnProperty(e)&&(i[e]=a[e]);if(r&&r.defaultProps)for(e in a=r.defaultProps,a)i[e]===void 0&&(i[e]=a[e]);return{$$typeof:f,type:r,key:n,ref:s,props:i,_owner:p.current}}t.Fragment=c;t.jsx=u;t.jsxs=u;m.exports=t;var o=m.exports;const h=[{id:"cap",name:"Athlético-PR",flag:"athletico-pr.svg"},{id:"acg",name:"Atlético-GO",flag:"atletico-go.svg"},{id:"cam",name:"Atlético-MG",flag:"atletico-mg.svg"},{id:"bah",name:"Bahia",flag:"bahia.svg"},{id:"bot",name:"Botafogo",flag:"botafogo.svg"},{id:"rbb",name:"Bragantino",flag:"bragantino.svg"},{id:"cor",name:"Corinthians",flag:"corinthians.svg"},{id:"cri",name:"Criciúma",flag:"criciuma.svg"},{id:"cru",name:"Cruzeiro",flag:"cruzeiro.svg"},{id:"cui",name:"Cuiabá",flag:"cuiaba.svg"},{id:"fla",name:"Flamengo",flag:"flamengo.svg"},{id:"flu",name:"Fluminense",flag:"fluminense.svg"},{id:"for",name:"Fortaleza",flag:"fortaleza.svg"},{id:"gre",name:"Grêmio",flag:"gremio.svg"},{id:"int",name:"Internacional",flag:"internacional.svg"},{id:"juv",name:"Juventude",flag:"juventude.svg"},{id:"pal",name:"Palmeiras",flag:"palmeiras.svg"},{id:"sao",name:"São Paulo",flag:"sao-paulo.svg"},{id:"vas",name:"Vasco",flag:"vasco.svg"},{id:"vit",name:"Vitória",flag:"vitoria.svg"}];function _({id:r,flag:a}){const l=h.find(n=>n.id===r),e=`/flags/${l==null?void 0:l.flag}`,i=o.jsx("img",{src:e,width:20,height:20,className:"mx-5"});return o.jsxs("div",{className:"flex align-center w-fixed",style:{flexDirection:a==="left"?"row":"row-reverse"},children:[a&&i,o.jsx("span",{children:l==null?void 0:l.name})]})}_.__docgenInfo={description:"Componente para apresentar uma equipe.",methods:[],displayName:"Team",props:{id:{required:!0,tsType:{name:"union",raw:"'cap' | 'acg' | 'cam' | 'bah' | 'bot' | 'rbb' | 'cor' | 'cri' | 'cru' | 'cui' | 'fla' | 'flu' | 'for' | 'gre' | 'int' | 'juv' | 'pal' | 'sao' | 'vas' | 'vit'",elements:[{name:"literal",value:"'cap'"},{name:"literal",value:"'acg'"},{name:"literal",value:"'cam'"},{name:"literal",value:"'bah'"},{name:"literal",value:"'bot'"},{name:"literal",value:"'rbb'"},{name:"literal",value:"'cor'"},{name:"literal",value:"'cri'"},{name:"literal",value:"'cru'"},{name:"literal",value:"'cui'"},{name:"literal",value:"'fla'"},{name:"literal",value:"'flu'"},{name:"literal",value:"'for'"},{name:"literal",value:"'gre'"},{name:"literal",value:"'int'"},{name:"literal",value:"'juv'"},{name:"literal",value:"'pal'"},{name:"literal",value:"'sao'"},{name:"literal",value:"'vas'"},{name:"literal",value:"'vit'"}]},description:""},flag:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};export{_ as T,o as j,h as t};