import{d,r as m,o as p,c as _,a as t,t as i,F as f,b as n,p as h,e as g,f as v,g as y}from"./vendor.28e52bbc.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};b();var V="/assets/logo.03d6d6da.png";var k=(r,s)=>{const a=r.__vccOpts||r;for(const[l,e]of s)a[l]=e;return a};const c=r=>(h("data-v-389274f6"),r=r(),g(),r),D=n(" \u6D4B\u8BD5\u63D0\u4EA4 "),S=c(()=>t("p",null,[n(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),n(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),E=c(()=>t("p",null,[n("See "),t("code",null,"README.md"),n(" for more information.")],-1)),x=c(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),n(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),I=c(()=>t("p",null,[n(" Edit "),t("code",null,"components/HelloWorld.vue"),n(" to test hot module replacement. ")],-1)),N=d({props:{msg:null},setup(r){const s=m(0);return(a,l)=>(p(),_(f,null,[t("h1",null,i(r.msg),1),D,S,E,x,t("button",{type:"button",onClick:l[0]||(l[0]=e=>s.value++)},"count is: "+i(s.value),1),I],64))}});var A=k(N,[["__scopeId","data-v-389274f6"]]);const B=t("img",{alt:"Vue logo",src:V},null,-1),L=d({setup(r){return(s,a)=>(p(),_(f,null,[B,v(A,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});y(L).mount("#app");
