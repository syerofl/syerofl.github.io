import{o as j,b as c,d,u as O,e as f,f as _,n as $,r as B,t as y,g as u,i as g,w as h,m as P,j as V,k as U,l as D,p as G,q as z,s as K,F as R}from"./vendor-vue.0da6d4ac.js";import{_ as q}from"./vite.c27b6911.js";const F={__name:"MetaPixel",props:{metaPixelId:{type:String,default:""}},setup(n){const e=n;return j(()=>{(function(t,i,o,a,s,r,l){t.fbq||(s=t.fbq=function(){s.callMethod?s.callMethod.apply(s,arguments):s.queue.push(arguments)},t._fbq||(t._fbq=s),s.push=s,s.loaded=!0,s.version="2.0",s.queue=[],r=i.createElement(o),r.async=!0,r.src=a,l=i.getElementsByTagName(o)[0],l.parentNode.insertBefore(r,l))})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init",e==null?void 0:e.metaPixelId),fbq("track","PageView")}),(t,i)=>(c(),d("noscript",null,`<img
      height="1"
      width="1"
      style="display: none"
      :src="\`https://www.facebook.com/tr?id=\${metaPixelId}&ev=PageView&noscript=1\`"
  />`))}},H=["src"],W={__name:"GoogleTagManager",props:{gtmId:{type:String,default:""}},setup(n){const e=n;if(j(()=>{(function(t,i,o,a,s){t[a]=t[a]||[],t[a].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var r=i.getElementsByTagName(o)[0],l=i.createElement(o),m=a!="dataLayer"?"&l="+a:"";l.async=!0,l.src="https://www.googletagmanager.com/gtm.js?id="+s+m,r.parentNode.insertBefore(l,r)})(window,document,"script","dataLayer",e==null?void 0:e.gtmId)}),e!=null&&e.gtmId){let t=function(){window!=null&&window.dataLayer&&dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",e==null?void 0:e.gtmId)}return(t,i)=>(c(),d("iframe",{src:`https://www.googletagmanager.com/ns.html?id=${e==null?void 0:e.gtmId}`,height:"0",width:"0",style:{display:"none",visibility:"hidden"}},null,8,H))}},Y={__name:"GoogleAnalytics",props:{g4aId:{type:String,default:""}},setup(n){const e=n;O({script:{src:`https://www.googletagmanager.com/gtag/js?id='${e==null?void 0:e.g4aId}');`,async:!0}}),window.dataLayer=window.dataLayer||[];function t(){window!=null&&window.dataLayer&&dataLayer.push(arguments)}return e!=null&&e.g4aId&&(t("js",new Date),t("config",e==null?void 0:e.g4aId)),(i,o)=>null}},J={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},Q=f("path",{fill:"currentColor",d:"M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8zm4.789 11.461L13.06 14.79L10 11.729l-3.061 3.06L5.21 13.06L8.272 10L5.211 6.939L6.94 5.211L10 8.271l3.061-3.061l1.729 1.729L11.728 10l3.061 3.061z"},null,-1),X=[Q];function Z(n,e){return c(),d("svg",J,X)}const ee={name:"entypo-circle-with-cross",render:Z};const te={name:"UiLoader",props:{iconColorClass:{type:String,default:"text-brand-primary"},textColorClass:{type:String,default:"text-slate-800"},label:{type:String,default:"Loading..."},size:{type:String,default:"base"}},data(){return{classObject:{[`ui-loader-${this.size}`]:this.size,[this.textColorClass]:this.textColorClass}}}},ne={key:0};function ae(n,e,t,i,o,a){const s=ee;return c(),d("div",{class:$(["flex items-center font-extrabold animate-pulse",o.classObject])},[_(s,{class:$(["animate-spin ui-loader-icon",t.iconColorClass])},null,8,["class"]),B(n.$slots,"default",{},()=>[t.label?(c(),d("span",ne,y(t.label),1)):u("v-if",!0)])],2)}const M=q(te,[["render",ae]]),se={components:{UiLoader:M},props:{danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingLabel:{type:String,default:""},loadingClass:{type:String,default:"text-white"},size:{type:String,default:"base"},theme:{type:String,default:"primary"},to:{type:String,default:""}},data(){return{classObject:{[`ui-button-${this.size}`]:this.size,[`ui-button-${this.theme}`]:this.theme,"ui-button-danger":this.danger},loaderClassObject:{[`ui-loader-${this.theme}`]:this.theme}}},computed:{is(){var n,e;return(n=this==null?void 0:this.$attrs)!=null&&n.href?"a":(e=this==null?void 0:this.$props)!=null&&e.to?"router-link":"button"},type(){var n,e;return(n=this==null?void 0:this.$attrs)!=null&&n.type?(e=this==null?void 0:this.$attrs)==null?void 0:e.type:(this==null?void 0:this.is)==="button"?"button":null}}};function ie(n,e,t,i,o,a){const s=M;return c(),g(V(a.is),P({to:t.to,class:["ui-button",o.classObject]},n.$attrs,{type:a.type,disabled:t.loading||t.disabled}),{default:h(()=>[t.loading?(c(),g(s,{key:0,textColorClass:t.loadingClass,iconColorClass:t.loadingClass,label:t.loadingLabel,size:t.size,class:"!font-semibold"},null,8,["textColorClass","iconColorClass","label","size"])):B(n.$slots,"default",{key:1})]),_:3},16,["to","class","type","disabled"])}const oe=q(se,[["render",ie]]),le={key:0,class:"pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-6"},ce={class:"pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10"},re={class:"text-sm leading-6 text-gray-900"},de={class:"mt-4 flex items-center gap-x-4"},ue=U({__name:"CookieConsent",props:{content:{type:String,default:""},policyLabel:{type:String,default:""},policyLink:{type:String,default:""},storageKey:{type:String,required:!0},visible:{type:Boolean,default:!1}},emits:["consent"],setup(n,{emit:e}){const t=n,[i]=D();let o=null;o=window==null?void 0:window.localStorage.getItem(t==null?void 0:t.storageKey),t!=null&&t.visible&&o===null&&(i.value=!0);const a=()=>{i.value=!1,window==null||window.localStorage.setItem(t==null?void 0:t.storageKey,"true"),e("consent",!0)};return(s,r)=>{const l=oe;return G(i)?(c(),d("div",le,[f("div",ce,[f("p",re,y(n.content),1),f("div",de,[_(l,{theme:"primary",onClick:a},{default:h(()=>[z(" Accept all ")]),_:1}),_(l,{theme:"link",href:n.policyLink,class:"text-secondary"},{default:h(()=>[z(y(n.policyLabel),1)]),_:1},8,["href"]),u(` <button
          @click="onReject"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button> `)])])])):u("v-if",!0)}}}),_e=U({__name:"ScriptLoader",props:{siteConfig:{type:Object,default(){return{}}},siteUrl:{type:String,default:""}},setup(n){var r,l,m,w,C;const e=n;window!=null&&window.zaraz&&window.zaraz.set("ignore_gtm",!0);const t=(e==null?void 0:e.siteUrl)&&new URL(e==null?void 0:e.siteUrl),i=`${(r=t==null?void 0:t.hostname)==null?void 0:r.replace("www.","")}${t==null?void 0:t.pathname}-cookie-accept`;let o=null;o=window==null?void 0:window.localStorage.getItem(i);const a=K(!1);(m=(l=e==null?void 0:e.siteConfig)==null?void 0:l.cookieConsent)!=null&&m.visible&&o==="true"?a.value=!0:(C=(w=e==null?void 0:e.siteConfig)==null?void 0:w.cookieConsent)!=null&&C.visible?a.value=!1:a.value=!0;const s=b=>{b===!0&&(a.value=!0)};return(b,ge)=>{var x,p,v,L,k,I,S;const N=ue,A=Y,T=W,E=F;return c(),d(R,null,[_(N,P((x=n.siteConfig)==null?void 0:x.cookieConsent,{onConsent:s,storageKey:i}),null,16),a.value&&((p=n.siteConfig)!=null&&p.g4aId)?(c(),g(A,{key:0,g4aId:(v=n.siteConfig)==null?void 0:v.g4aId},null,8,["g4aId"])):u("v-if",!0),a.value&&((L=n.siteConfig)!=null&&L.gtmId)?(c(),g(T,{key:1,gtmId:(k=n.siteConfig)==null?void 0:k.gtmId},null,8,["gtmId"])):u("v-if",!0),a.value&&((I=n.siteConfig)!=null&&I.metaPixelId)?(c(),g(E,{key:2,metaPixelId:(S=n.siteConfig)==null?void 0:S.metaPixelId},null,8,["metaPixelId"])):u("v-if",!0)],64)}}});export{_e as _};
