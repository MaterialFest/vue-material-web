import{f as y,h as F,i as v,j as I,o as d,c as n,k as f,l as k,a as e,b as l,w as O,u as C,m as V,T as E,p as s,e as c,_ as a,n as x,d as i}from"./index-92e8b1c2.js";const S=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="button-elevated-theme">\r
    <md-elevated-button>Elevated</md-elevated-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.button-elevated-theme {\r
  --md-elevated-button-container-shape: 0px;\r
  --md-elevated-button-label-text-font: system-ui;\r
  --md-sys-color-surface-container-low: #FAFDFC;\r
  --md-sys-color-primary: #191C1C;\r
}\r
</style>\r
`,M=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="button-filled-theme">\r
    <md-filled-button>Filled</md-filled-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.button-filled-theme {\r
  --md-filled-button-container-shape: 0px;\r
  --md-filled-button-label-text-font: system-ui;\r
  --md-sys-color-primary: #006A6A;\r
  --md-sys-color-on-primary: #FFFFFF;\r
}\r
</style>\r
`,L=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="button-filled-tonal-theme">\r
    <md-filled-tonal-button>Tonal</md-filled-tonal-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.button-filled-tonal-theme {\r
  --md-filled-tonal-button-container-shape: 0px;\r
  --md-filled-tonal-button-label-text-font: system-ui;\r
  --md-sys-color-secondary-container: #CCE8E7;\r
  --md-sys-color-on-secondary-container: #051F1F;\r
}\r
</style>\r
`,Z=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div>\r
    <md-filled-tonal-button>\r
      Send\r
      <svg slot="icon" viewBox="0 0 48 48">\r
        <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />\r
      </svg>\r
    </md-filled-tonal-button>\r
\r
    <md-text-button trailing-icon>\r
      Open\r
      <svg slot="icon" viewBox="0 0 48 48">\r
        <path\r
          d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />\r
      </svg>\r
    </md-text-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
md-filled-tonal-button,\r
md-text-button {\r
  margin-right: 10px;\r
}\r
</style>\r
`,A=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="button-outlined-theme">\r
    <md-outlined-button>Outlined</md-outlined-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.button-outlined-theme {\r
  --md-outlined-button-container-shape: 0px;\r
  --md-outlined-button-label-text-font: system-ui;\r
  --md-sys-color-primary: #006A6A;\r
  --md-sys-color-outline: #6F7979;\r
}\r
</style>\r
`,D=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="button-text-theme">\r
    <md-text-button>Text</md-text-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.button-text-theme {\r
  --md-text-button-label-text-font: system-ui;\r
  --md-sys-color-primary: #006A6A;\r
}\r
</style>\r
`,q=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div>\r
    <md-elevated-button>\r
      Elevated\r
    </md-elevated-button>\r
    <md-filled-button>\r
      Filled\r
    </md-filled-button>\r
    <md-filled-tonal-button>\r
      Tonal\r
    </md-filled-tonal-button>\r
    <md-outlined-button>\r
      Outlined\r
    </md-outlined-button>\r
    <md-text-button>\r
      Text\r
    </md-text-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
md-elevated-button,\r
md-filled-button,\r
md-filled-tonal-button,\r
md-outlined-button,\r
md-text-button {\r
  margin-right: 10px;\r
}\r
</style>\r
`,g=t=>(s("data-v-1a2935c0"),t=t(),c(),t),H={class:"preview-section"},P={class:"preview-tab"},N={class:"preview-btn"},j=g(()=>e("md-icon",null,"code",-1)),Q=[j],W=g(()=>e("md-icon",null,"content_copy",-1)),R=[W],U=y({__name:"Preview",props:{comp:null,compPath:{type:String,default:"",require:!0}},setup(t){const o=t,b=F.component,h=v(!1),p=v(""),$=()=>{h.value=!h.value},B=u=>{navigator.clipboard.writeText(u)},w=()=>{let u=Object.assign({"/src/views/components/button/demo/ButtonElevatedTheme.vue":S,"/src/views/components/button/demo/ButtonFilledTheme.vue":M,"/src/views/components/button/demo/ButtonFilledTonalTheme.vue":L,"/src/views/components/button/demo/ButtonIcon.vue":Z,"/src/views/components/button/demo/ButtonOutlinedTheme.vue":A,"/src/views/components/button/demo/ButtonTextTheme.vue":D,"/src/views/components/button/demo/ButtonType.vue":q});for(let _ in u)_.indexOf(o.compPath)!==-1&&(p.value=u[_])};return I(()=>{w()}),(u,_)=>(d(),n("div",H,[(d(),f(k(o.comp))),e("div",P,[e("div",N,[e("md-icon-button",{onClick:$},Q),e("md-icon-button",{onClick:_[0]||(_[0]=Yt=>B(p.value))},R)]),l(E,{name:"slide-fade"},{default:O(()=>[h.value?(d(),f(C(b),{key:0,language:"js",code:p.value},null,8,["code"])):V("",!0)]),_:1})])]))}});const r=a(U,[["__scopeId","data-v-1a2935c0"]]);const K={},m=t=>(s("data-v-266f2719"),t=t(),c(),t),z=m(()=>e("md-elevated-button",null," Elevated ",-1)),G=m(()=>e("md-filled-button",null," Filled ",-1)),J=m(()=>e("md-filled-tonal-button",null," Tonal ",-1)),X=m(()=>e("md-outlined-button",null," Outlined ",-1)),Y=m(()=>e("md-text-button",null," Text ",-1)),tt=[z,G,J,X,Y];function et(t,o){return d(),n("div",null,tt)}const ot=a(K,[["render",et],["__scopeId","data-v-266f2719"]]);const dt={},T=t=>(s("data-v-7ae3a98d"),t=t(),c(),t),nt=T(()=>e("md-filled-tonal-button",null,[x(" Send "),e("svg",{slot:"icon",viewBox:"0 0 48 48"},[e("path",{d:"M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"})])],-1)),lt=T(()=>e("md-text-button",{"trailing-icon":""},[x(" Open "),e("svg",{slot:"icon",viewBox:"0 0 48 48"},[e("path",{d:"M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"})])],-1)),st=[nt,lt];function ct(t,o){return d(),n("div",null,st)}const at=a(dt,[["render",ct],["__scopeId","data-v-7ae3a98d"]]);const rt={},it=t=>(s("data-v-58a61945"),t=t(),c(),t),ut={class:"button-elevated-theme"},_t=it(()=>e("md-elevated-button",null,"Elevated",-1)),mt=[_t];function ht(t,o){return d(),n("div",ut,mt)}const pt=a(rt,[["render",ht],["__scopeId","data-v-58a61945"]]);const bt={},vt=t=>(s("data-v-b93e9c72"),t=t(),c(),t),ft={class:"button-filled-theme"},yt=vt(()=>e("md-filled-button",null,"Filled",-1)),xt=[yt];function gt(t,o){return d(),n("div",ft,xt)}const Tt=a(bt,[["render",gt],["__scopeId","data-v-b93e9c72"]]);const $t={},Bt=t=>(s("data-v-6c514322"),t=t(),c(),t),wt={class:"button-filled-tonal-theme"},Ft=Bt(()=>e("md-filled-tonal-button",null,"Tonal",-1)),It=[Ft];function kt(t,o){return d(),n("div",wt,It)}const Ot=a($t,[["render",kt],["__scopeId","data-v-6c514322"]]);const Ct={},Vt=t=>(s("data-v-6189b213"),t=t(),c(),t),Et={class:"button-outlined-theme"},St=Vt(()=>e("md-outlined-button",null,"Outlined",-1)),Mt=[St];function Lt(t,o){return d(),n("div",Et,Mt)}const Zt=a(Ct,[["render",Lt],["__scopeId","data-v-6189b213"]]);const At={},Dt=t=>(s("data-v-7f87eb1d"),t=t(),c(),t),qt={class:"button-text-theme"},Ht=Dt(()=>e("md-text-button",null,"Text",-1)),Pt=[Ht];function Nt(t,o){return d(),n("div",qt,Pt)}const jt=a(At,[["render",Nt],["__scopeId","data-v-7f87eb1d"]]),Qt={class:"markdown-body"},Wt=i("<h2>Buttons 按钮</h2><p>Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.</p><p>There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.</p><h3>Types</h3><h4>button 按钮的基本使用</h4><ol><li>Elevated button</li><li>Filled button</li><li>Filled tonal button</li><li>Outlined button</li><li>Text button</li></ol>",6),Rt=e("h3",null,"Icon",-1),Ut=e("h3",null,"Elevated 自定义样式",-1),Kt=i('<h2>Elevated button tokens</h2><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-elevated-button-container-color</code></td><td><code class="">--md-sys-color-surface</code></td></tr><tr><td><code class="">--md-elevated-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-elevated-button-label-text-color</code></td><td><code class="">--md-sys-color-on-surface</code></td></tr><tr><td><code class="">--md-elevated-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Filled 自定义样式</h3>',3),zt=i('<h3>Filled button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-filled-button-container-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-filled-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-filled-button-label-text-color</code></td><td><code class="">--md-sys-color-on-primary</code></td></tr><tr><td><code class="">--md-filled-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Filled tonal 自定义样式</h3>',3),Gt=i('<h3>Filled tonal button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-filled-tonal-button-container-color</code></td><td><code class="">--md-sys-color-secondary-container</code></td></tr><tr><td><code class="">--md-filled-tonal-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-filled-tonal-button-label-text-color</code></td><td><code class="">--md-sys-color-on-secondary-container</code></td></tr><tr><td><code class="">--md-filled-tonal-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Outlined 自定义样式</h3>',3),Jt=i('<h3>Outlined button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-outlined-button-outline-color</code></td><td><code class="">--md-sys-color-outline</code></td></tr><tr><td><code class="">--md-outlined-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-outlined-button-label-text-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-outlined-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Text 自定义样式</h3>',3),Xt=i('<h3>Outlined button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-text-button-label-text-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-text-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h2>API</h2><h3>MdElevatedButton <code class="">&lt;md-elevated-button&gt;</code></h3><h3>MdFilledButton <code class="">&lt;md-filled-button&gt;</code></h3><h3>MdFilledTonalButton <code class="">&lt;md-filled-tonal-button&gt;</code></h3><h3>MdOutlinedButton <code class="">&lt;md-outlined-button&gt;</code></h3><h3>MdTextButton <code class="">&lt;md-text-button&gt;</code></h3><table><thead><tr><th>Property</th><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">disabled</code></td><td><code class="">disabled</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether or not the button is disabled.</td></tr><tr><td><code class="">href</code></td><td><code class="">href</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td>The URL that the link button points to.</td></tr><tr><td><code class="">target</code></td><td><code class="">target</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td>Where to display the linked <code class="">href</code> URL for a link button. Common options include <code class="">_blank</code> to open in a new tab.</td></tr><tr><td><code class="">trailingIcon</code></td><td><code class="">trailing-icon</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether to render the icon at the inline end of the label rather than the inline start.<br>Note: Link buttons cannot have trailing icons.</td></tr><tr><td><code class="">hasIcon</code></td><td><code class="">has-icon</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether to display the icon or not.</td></tr><tr><td><code class="">type</code></td><td><code class="">type</code></td><td><code class="">string</code></td><td><code class="">&#39;submit&#39;</code></td><td></td></tr><tr><td><code class="">value</code></td><td><code class="">value</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td></td></tr><tr><td><code class="">name</code></td><td></td><td><code class="">string</code></td><td><code class="">undefined</code></td><td></td></tr><tr><td><code class="">form</code></td><td></td><td><code class="">HTMLFormElement</code></td><td><code class="">undefined</code></td><td></td></tr></tbody></table>',9),ee={},oe="",de=y({__name:"index",setup(t,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(b,h)=>(d(),n("div",Qt,[Wt,l(r,{comp:ot,"comp-path":"button/demo/ButtonType"}),Rt,l(r,{comp:at,"comp-path":"button/demo/ButtonIcon"}),Ut,e("figure",null,[l(r,{comp:pt,"comp-path":"button/demo/ButtonElevatedTheme"})]),Kt,e("figure",null,[l(r,{comp:Tt,"comp-path":"button/demo/ButtonFilledTheme"})]),zt,e("figure",null,[l(r,{comp:Ot,"comp-path":"button/demo/ButtonFilledToanlTheme"})]),Gt,e("figure",null,[l(r,{comp:Zt,"comp-path":"button/demo/ButtonOutlinedTheme"})]),Jt,e("figure",null,[l(r,{comp:jt,"comp-path":"button/demo/ButtonTextTheme"})]),Xt]))}});export{de as default,oe as excerpt,ee as frontmatter};
