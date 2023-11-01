import{f as v,j as h,i as a,k as _,o as l,c as x,l as i,m as f,a as t,b as y,w as g,u as k,n as w,T as C,p as T,e as F,_ as S}from"./index-eb2ecc0b.js";const B=`<script setup lang="ts">\r
import { ref } from "vue"\r
\r
const disabledStatus = ref("default")\r
<\/script>\r
\r
<template>\r
  <div>\r
    <md-elevated-button :disabled="disabledStatus === 'disabled'">\r
      Elevated\r
    </md-elevated-button>\r
    <md-filled-button :disabled="disabledStatus === 'disabled'">\r
      Filled\r
    </md-filled-button>\r
    <md-filled-tonal-button :disabled="disabledStatus === 'disabled'">\r
      Tonal\r
    </md-filled-tonal-button>\r
    <md-outlined-button :disabled="disabledStatus === 'disabled'">\r
      Outlined\r
    </md-outlined-button>\r
    <md-text-button :disabled="disabledStatus === 'disabled'">\r
      Text\r
    </md-text-button>\r
  </div>\r
  <div class="radio-tab">\r
    <md-radio id="default-radio" name="buttonDisabled" value="default" :checked="disabledStatus === 'default'"\r
      @change="disabledStatus = 'default'"></md-radio>\r
    <label for="default-radio">Default</label>\r
\r
    <md-radio id="disabled-radio" name="buttonDisabled" value="disabled" :checked="disabledStatus === 'disabled'"\r
      @change="disabledStatus = 'disabled'"></md-radio>\r
    <label for="disabled-radio">Disabled</label>\r
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
\r
.radio-tab {\r
  margin-top: 20px;\r
}\r
\r
label {\r
  margin: 0 20px 0 10px;\r
}\r
</style>\r
`,V=`<script setup lang="ts">\r
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
`,O=`<script setup lang="ts">\r
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
`,A=`<script setup lang="ts">\r
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
`,D=`<script setup lang="ts">\r
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
`,E=`<script setup lang="ts">\r
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
`,P=`<script setup lang="ts">\r
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
`,I=`<script setup lang="ts">\r
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
`,Z=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div>\r
    <md-checkbox touch-target="wrapper"></md-checkbox>\r
    <md-checkbox touch-target="wrapper" checked></md-checkbox>\r
    <md-checkbox touch-target="wrapper" indeterminate></md-checkbox>\r
  </div>\r
</template>\r
\r
<style scoped></style>\r
`,j=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="checkbox-tab">\r
    <label style="display: flex; align-items: center;">\r
      <md-checkbox touch-target="wrapper"></md-checkbox>\r
      Checkbox one\r
    </label>\r
\r
    <md-checkbox id="checkbox-two" touch-target="wrapper"></md-checkbox>\r
    <label for="checkbox-two">Checkbox two</label>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.checkbox-tab {\r
  display: flex;\r
  align-items: center;\r
}\r
</style>\r
`,q=`<script setup lang="ts">\r
<\/script>\r
\r
<template>\r
  <div class="checkbox-theme">\r
    <md-checkbox touch-target="wrapper"></md-checkbox>\r
    <md-checkbox touch-target="wrapper" checked></md-checkbox>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.checkbox-theme {\r
  /* System tokens */\r
  --md-sys-color-primary: #006a6a;\r
  --md-sys-color-on-primary: #ffffff;\r
  --md-sys-color-on-surface-variant: #3f4948;\r
\r
  /* Component tokens */\r
  --md-checkbox-container-shape: 0px;\r
}\r
</style>\r
`,c=e=>(T("data-v-1a2935c0"),e=e(),F(),e),L={class:"preview-section"},H={class:"preview-tab"},M={class:"preview-btn"},N=c(()=>t("md-icon",null,"code",-1)),Q=[N],K=c(()=>t("md-icon",null,"content_copy",-1)),$=[K],z=v({__name:"Preview",props:{comp:null,compPath:{type:String,default:"",require:!0}},setup(e){const s=e,m=h.component,o=a(!1),d=a(""),u=()=>{o.value=!o.value},b=n=>{navigator.clipboard.writeText(n)},p=()=>{let n=Object.assign({"/src/views/components/button/demo/ButtonDisabled.vue":B,"/src/views/components/button/demo/ButtonElevatedTheme.vue":V,"/src/views/components/button/demo/ButtonFilledTheme.vue":O,"/src/views/components/button/demo/ButtonFilledTonalTheme.vue":A,"/src/views/components/button/demo/ButtonIcon.vue":D,"/src/views/components/button/demo/ButtonOutlinedTheme.vue":E,"/src/views/components/button/demo/ButtonTextTheme.vue":P,"/src/views/components/button/demo/ButtonType.vue":I,"/src/views/components/checkbox/demo/CheckboxBasic.vue":Z,"/src/views/components/checkbox/demo/CheckboxLabel.vue":j,"/src/views/components/checkbox/demo/CheckboxTheme.vue":q});for(let r in n)r.indexOf(s.compPath)!==-1&&(d.value=n[r])};return _(()=>{p()}),(n,r)=>(l(),x("div",L,[(l(),i(f(s.comp))),t("div",H,[t("div",M,[t("md-icon-button",{onClick:u},Q),t("md-icon-button",{onClick:r[0]||(r[0]=G=>b(d.value))},$)]),y(C,{name:"slide-fade"},{default:g(()=>[o.value?(l(),i(k(m),{key:0,language:"js",code:d.value},null,8,["code"])):w("",!0)]),_:1})])]))}});const R=S(z,[["__scopeId","data-v-1a2935c0"]]);export{R as P};
