import{P as l}from"./Preview-f6ee58a9.js";import{_ as n,o,c,p as a,e as i,a as e,k as h,d as b,h as y,F as x,b as s,j as _}from"./index-2b1174e8.js";const $={},u=t=>(a("data-v-266f2719"),t=t(),i(),t),T=u(()=>e("md-elevated-button",null," Elevated ",-1)),g=u(()=>e("md-filled-button",null," Filled ",-1)),B=u(()=>e("md-filled-tonal-button",null," Tonal ",-1)),I=u(()=>e("md-outlined-button",null," Outlined ",-1)),k=u(()=>e("md-text-button",null," Text ",-1)),F=[T,g,B,I,k];function D(t,d){return o(),c("div",null,F)}const w=n($,[["render",D],["__scopeId","data-v-266f2719"]]);const S={},m=t=>(a("data-v-7ae3a98d"),t=t(),i(),t),E=m(()=>e("md-filled-tonal-button",null,[h(" Send "),e("svg",{slot:"icon",viewBox:"0 0 48 48"},[e("path",{d:"M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"})])],-1)),O=m(()=>e("md-text-button",{"trailing-icon":""},[h(" Open "),e("svg",{slot:"icon",viewBox:"0 0 48 48"},[e("path",{d:"M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"})])],-1)),V=[E,O];function M(t,d){return o(),c("div",null,V)}const L=n(S,[["render",M],["__scopeId","data-v-7ae3a98d"]]),p=t=>(a("data-v-5f28a49a"),t=t(),i(),t),N=["disabled"],Z=["disabled"],C=["disabled"],H=["disabled"],P=["disabled"],W={class:"radio-tab"},q=["checked"],A=p(()=>e("label",{for:"default-radio"},"Default",-1)),Q=["checked"],R=p(()=>e("label",{for:"disabled-radio"},"Disabled",-1)),U=b({__name:"ButtonDisabled",setup(t){const d=y("default");return(f,r)=>(o(),c(x,null,[e("div",null,[e("md-elevated-button",{disabled:d.value==="disabled"}," Elevated ",8,N),e("md-filled-button",{disabled:d.value==="disabled"}," Filled ",8,Z),e("md-filled-tonal-button",{disabled:d.value==="disabled"}," Tonal ",8,C),e("md-outlined-button",{disabled:d.value==="disabled"}," Outlined ",8,H),e("md-text-button",{disabled:d.value==="disabled"}," Text ",8,P)]),e("div",W,[e("md-radio",{id:"default-radio",name:"buttonDisabled",value:"default",checked:d.value==="default",onChange:r[0]||(r[0]=v=>d.value="default")},null,40,q),A,e("md-radio",{id:"disabled-radio",name:"buttonDisabled",value:"disabled",checked:d.value==="disabled",onChange:r[1]||(r[1]=v=>d.value="disabled")},null,40,Q),R])],64))}});const j=n(U,[["__scopeId","data-v-5f28a49a"]]);const z={},G=t=>(a("data-v-58a61945"),t=t(),i(),t),J={class:"button-elevated-theme"},K=G(()=>e("md-elevated-button",null,"Elevated",-1)),X=[K];function Y(t,d){return o(),c("div",J,X)}const tt=n(z,[["render",Y],["__scopeId","data-v-58a61945"]]);const et={},dt=t=>(a("data-v-b93e9c72"),t=t(),i(),t),ot={class:"button-filled-theme"},ct=dt(()=>e("md-filled-button",null,"Filled",-1)),lt=[ct];function st(t,d){return o(),c("div",ot,lt)}const nt=n(et,[["render",st],["__scopeId","data-v-b93e9c72"]]);const at={},it=t=>(a("data-v-6c514322"),t=t(),i(),t),_t={class:"button-filled-tonal-theme"},rt=it(()=>e("md-filled-tonal-button",null,"Tonal",-1)),ut=[rt];function ht(t,d){return o(),c("div",_t,ut)}const bt=n(at,[["render",ht],["__scopeId","data-v-6c514322"]]);const mt={},pt=t=>(a("data-v-6189b213"),t=t(),i(),t),ft={class:"button-outlined-theme"},vt=pt(()=>e("md-outlined-button",null,"Outlined",-1)),yt=[vt];function xt(t,d){return o(),c("div",ft,yt)}const $t=n(mt,[["render",xt],["__scopeId","data-v-6189b213"]]);const Tt={},gt=t=>(a("data-v-7f87eb1d"),t=t(),i(),t),Bt={class:"button-text-theme"},It=gt(()=>e("md-text-button",null,"Text",-1)),kt=[It];function Ft(t,d){return o(),c("div",Bt,kt)}const Dt=n(Tt,[["render",Ft],["__scopeId","data-v-7f87eb1d"]]),wt={class:"markdown-body"},St=_("<h2>Buttons 按钮</h2><p>Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.</p><p>There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.</p><h3>Types</h3><h4>button 按钮的基本使用</h4><ol><li>Elevated button</li><li>Filled button</li><li>Filled tonal button</li><li>Outlined button</li><li>Text button</li></ol>",6),Et=e("h3",null,"Icon",-1),Ot=e("h3",null,"disabled",-1),Vt=e("h3",null,"Elevated 自定义样式",-1),Mt=_('<h2>Elevated button tokens</h2><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-elevated-button-container-color</code></td><td><code class="">--md-sys-color-surface</code></td></tr><tr><td><code class="">--md-elevated-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-elevated-button-label-text-color</code></td><td><code class="">--md-sys-color-on-surface</code></td></tr><tr><td><code class="">--md-elevated-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Filled 自定义样式</h3>',3),Lt=_('<h3>Filled button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-filled-button-container-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-filled-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-filled-button-label-text-color</code></td><td><code class="">--md-sys-color-on-primary</code></td></tr><tr><td><code class="">--md-filled-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Filled tonal 自定义样式</h3>',3),Nt=_('<h3>Filled tonal button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-filled-tonal-button-container-color</code></td><td><code class="">--md-sys-color-secondary-container</code></td></tr><tr><td><code class="">--md-filled-tonal-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-filled-tonal-button-label-text-color</code></td><td><code class="">--md-sys-color-on-secondary-container</code></td></tr><tr><td><code class="">--md-filled-tonal-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Outlined 自定义样式</h3>',3),Zt=_('<h3>Outlined button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-outlined-button-outline-color</code></td><td><code class="">--md-sys-color-outline</code></td></tr><tr><td><code class="">--md-outlined-button-container-shape</code></td><td><code class="">9999px</code></td></tr><tr><td><code class="">--md-outlined-button-label-text-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-outlined-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h3>Text 自定义样式</h3>',3),Ct=_('<h3>Outlined button tokens</h3><table><thead><tr><th>Token</th><th>Default value</th></tr></thead><tbody><tr><td><code class="">--md-text-button-label-text-color</code></td><td><code class="">--md-sys-color-primary</code></td></tr><tr><td><code class="">--md-text-button-label-text-font</code></td><td><code class="">--md-sys-typescale-label-large-font</code></td></tr></tbody></table><h2>API</h2><h3>MdElevatedButton <code class="">&lt;md-elevated-button&gt;</code></h3><h3>MdFilledButton <code class="">&lt;md-filled-button&gt;</code></h3><h3>MdFilledTonalButton <code class="">&lt;md-filled-tonal-button&gt;</code></h3><h3>MdOutlinedButton <code class="">&lt;md-outlined-button&gt;</code></h3><h3>MdTextButton <code class="">&lt;md-text-button&gt;</code></h3><table><thead><tr><th>Property</th><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code class="">disabled</code></td><td><code class="">disabled</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether or not the button is disabled.</td></tr><tr><td><code class="">href</code></td><td><code class="">href</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td>The URL that the link button points to.</td></tr><tr><td><code class="">target</code></td><td><code class="">target</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td>Where to display the linked <code class="">href</code> URL for a link button. Common options include <code class="">_blank</code> to open in a new tab.</td></tr><tr><td><code class="">trailingIcon</code></td><td><code class="">trailing-icon</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether to render the icon at the inline end of the label rather than the inline start.<br>Note: Link buttons cannot have trailing icons.</td></tr><tr><td><code class="">hasIcon</code></td><td><code class="">has-icon</code></td><td><code class="">boolean</code></td><td><code class="">false</code></td><td>Whether to display the icon or not.</td></tr><tr><td><code class="">type</code></td><td><code class="">type</code></td><td><code class="">string</code></td><td><code class="">&#39;submit&#39;</code></td><td></td></tr><tr><td><code class="">value</code></td><td><code class="">value</code></td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td><td></td></tr><tr><td><code class="">name</code></td><td></td><td><code class="">string</code></td><td><code class="">undefined</code></td><td></td></tr><tr><td><code class="">form</code></td><td></td><td><code class="">HTMLFormElement</code></td><td><code class="">undefined</code></td><td></td></tr></tbody></table>',9),Wt={},qt="",At=b({__name:"index",setup(t,{expose:d}){return d({frontmatter:{},excerpt:void 0}),(f,r)=>(o(),c("div",wt,[St,s(l,{comp:w,"comp-path":"button/demo/ButtonType"}),Et,s(l,{comp:L,"comp-path":"button/demo/ButtonIcon"}),Ot,s(l,{comp:j,"comp-path":"button/demo/ButtonDisabled"}),Vt,e("figure",null,[s(l,{comp:tt,"comp-path":"button/demo/ButtonElevatedTheme"})]),Mt,e("figure",null,[s(l,{comp:nt,"comp-path":"button/demo/ButtonFilledTheme"})]),Lt,e("figure",null,[s(l,{comp:bt,"comp-path":"button/demo/ButtonFilledToanlTheme"})]),Nt,e("figure",null,[s(l,{comp:$t,"comp-path":"button/demo/ButtonOutlinedTheme"})]),Zt,e("figure",null,[s(l,{comp:Dt,"comp-path":"button/demo/ButtonTextTheme"})]),Ct]))}});export{At as default,qt as excerpt,Wt as frontmatter};
