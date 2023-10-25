import{_ as v,o as l,c as i,F as x,a as e,h as g,f as m,i as w,j as r,k as y,l as u,m as B,b as p,w as C,u as V,n as E,T as k,p as T,e as $,d as q}from"./index-fc1dc6b8.js";const H={},O=e("div",null,[e("md-elevated-button",null," Elevated "),e("md-elevated-button",null," Elevated "),e("md-elevated-button",null," Elevated "),e("md-elevated-button",null," Elevated "),e("md-elevated-button",null," Elevated ")],-1),S=e("md-outlined-button",null,"Back",-1),N=e("md-filled-button",null,"Complete",-1),P=e("md-text-button",{"trailing-icon":""},[g(" Open "),e("svg",{slot:"icon",viewBox:"0 0 48 48"},[e("path",{d:"M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"})])],-1);function j(t,n){return l(),i(x,null,[O,S,N,P],64)}const F=v(H,[["render",j]]),I=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
  </div>\r
  <md-outlined-button>Back</md-outlined-button>\r
  <md-filled-button>Complete</md-filled-button>\r
  <md-text-button trailing-icon>\r
    Open\r
    <svg slot="icon" viewBox="0 0 48 48">\r
      <path\r
        d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />\r
    </svg>\r
  </md-text-button>\r
</template>\r
\r
<style scoped></style>\r
`,_=t=>(T("data-v-3a3d1efd"),t=t(),$(),t),Q={class:"preview-section"},Z={class:"preview-tab"},M={class:"preview-btn"},L=_(()=>e("md-icon",null,"code",-1)),D=[L],K=_(()=>e("md-icon",null,"content_copy",-1)),z=[K],A=m({__name:"Preview",props:{comp:null,compPath:{type:String,default:"",require:!0}},setup(t){const n=t,c=w.component,s=r(!1),a=r(""),h=()=>{s.value=!s.value},b=o=>{navigator.clipboard.writeText(o)},f=()=>{let o=Object.assign({"/src/views/components/button/demo/ButtonType.vue":I});for(let d in o)d.indexOf(n.compPath)!==-1&&(a.value=o[d])};return y(()=>{f()}),(o,d)=>(l(),i("div",Q,[(l(),u(B(n.comp))),e("div",Z,[e("div",M,[e("md-icon-button",{onClick:h},D),e("md-icon-button",{onClick:d[0]||(d[0]=U=>b(a.value))},z)]),p(k,{name:"slide-fade"},{default:C(()=>[s.value?(l(),u(V(c),{key:0,language:"js",code:a.value},null,8,["code"])):E("",!0)]),_:1})])]))}});const G=v(A,[["__scopeId","data-v-3a3d1efd"]]),J={class:"markdown-body"},R=q("<h2>Buttons 按钮</h2><p>Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.</p><p>There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.</p><h3>Types</h3><h4>button 按钮的基本使用</h4><ol><li>Elevated button</li><li>Filled button</li><li>Filled tonal button</li><li>Outlined button</li><li>Text button</li></ol>",6),X={},Y="",ee=m({__name:"index",setup(t,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,s)=>(l(),i("div",J,[R,p(G,{comp:F,"comp-path":"button/demo/ButtonType"})]))}});export{ee as default,Y as excerpt,X as frontmatter};
