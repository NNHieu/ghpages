_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n("nKUr"),c=n("cpVT"),i=(n("rZxN"),n("q1tI")),a=n.n(i),l=n("g4pe"),u=n.n(l),o=Object(i.createContext)({setTheme:function(e){},themes:[]}),j=["light","dark"],s="(prefers-color-scheme: dark)",M=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,r=void 0!==n&&n,c=e.enableSystem,l=void 0===c||c,u=e.enableColorScheme,M=void 0===u||u,N=e.storageKey,b=void 0===N?"theme":N,f=e.themes,m=void 0===f?["light","dark"]:f,x=e.defaultTheme,L=void 0===x?l?"system":"light":x,A=e.attribute,O=void 0===A?"data-theme":A,h=e.value,D=e.children,v=Object(i.useState)((function(){return y(b,L)})),z=v[0],T=v[1],w=Object(i.useState)((function(){return y(b)})),p=w[0],S=w[1],C=h?Object.values(h):m,k=Object(i.useCallback)((function(e){var n=I(e);S(n),"system"!==z||t||P(n,!1)}),[z,t]),E=Object(i.useRef)(k);E.current=k;var P=Object(i.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var c=(null==h?void 0:h[e])||e,i=r&&n?g():null;if(t)try{localStorage.setItem(b,e)}catch(e){}if("system"===e&&l){var a=I();c=(null==h?void 0:h[a])||a}if(n){var u,o=document.documentElement;"class"===O?((u=o.classList).remove.apply(u,C),o.classList.add(c)):o.setAttribute(O,c),null==i||i()}}),[]);Object(i.useEffect)((function(){var e=function(){return E.current.apply(E,[].slice.call(arguments))},t=window.matchMedia(s);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var U=Object(i.useCallback)((function(e){t?P(e,!0,!1):P(e),T(e)}),[t]);return Object(i.useEffect)((function(){var e=function(e){e.key===b&&U(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[U]),Object(i.useEffect)((function(){if(M){var e=t&&j.includes(t)?t:z&&j.includes(z)?z:"system"===z&&p||null;document.documentElement.style.setProperty("color-scheme",e)}}),[M,z,p,t]),a.a.createElement(o.Provider,{value:{theme:z,setTheme:U,forcedTheme:t,resolvedTheme:"system"===z?p:z,themes:l?[].concat(m,["system"]):m,systemTheme:l?p:void 0}},a.a.createElement(d,{forcedTheme:t,storageKey:b,attribute:O,value:h,enableSystem:l,defaultTheme:L,attrs:C}),D)},d=Object(i.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,r=e.attribute,c=e.enableSystem,i=e.defaultTheme,l=e.value,o="class"===r?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",j=function(e,t){e=(null==l?void 0:l[e])||e;var n=t?e:"'"+e+"'";return"class"===r?"d.add("+n+")":"d.setAttribute('"+r+"', "+n+")"},M="system"===i;return a.a.createElement(u.a,null,a.a.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+o+j(t)+"}()"}}:c?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+o+"var e=localStorage.getItem('"+n+"');"+(M?"":j(i)+";")+'if("system"===e||(!e&&'+M+')){var t="'+s+'",m=window.matchMedia(t);m.media!==t||m.matches?'+j("dark")+":"+j("light")+"}else if(e) "+(l?"var x="+JSON.stringify(l)+";":"")+j(l?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+o+'var e=localStorage.getItem("'+n+'");if(e){'+(l?"var x="+JSON.stringify(l)+";":"")+j(l?"x[e]":"e",!0)+"}else{"+j(i)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),y=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},I=function(e){return e||(e=window.matchMedia(s)),e.matches?"dark":"light"},N=n("9ixD"),b=n("7+lg"),f=n("bsnj"),m=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],x=n("zBkE"),L=n.n(x),A=n("YNhk"),O=n("Af6x"),h=n("y0sI");function D(){return Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"flex flex-col items-center mt-16",children:[Object(r.jsxs)("div",{className:"flex mb-3 space-x-4",children:[Object(r.jsx)(h.a,{kind:"mail",href:"mailto:".concat(f.email),size:"6"}),Object(r.jsx)(h.a,{kind:"github",href:f.github,size:"6"}),Object(r.jsx)(h.a,{kind:"facebook",href:f.facebook,size:"6"}),Object(r.jsx)(h.a,{kind:"youtube",href:f.youtube,size:"6"}),Object(r.jsx)(h.a,{kind:"linkedin",href:f.linkedin,size:"6"}),Object(r.jsx)(h.a,{kind:"twitter",href:f.twitter,size:"6"})]}),Object(r.jsxs)("div",{className:"flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[Object(r.jsx)("div",{children:f.author}),Object(r.jsx)("div",{children:" \u2022 "}),Object(r.jsx)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),Object(r.jsx)("div",{children:" \u2022 "}),Object(r.jsx)(A.a,{href:"/",children:f.title})]}),Object(r.jsx)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:Object(r.jsx)(A.a,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"Tailwind Nextjs Theme"})})]})})}var v=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1],c=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return Object(r.jsxs)("div",{className:"sm:hidden",children:[Object(r.jsx)("button",{type:"button",className:"w-8 h-8 ml-1 mr-1 rounded","aria-label":"Toggle Menu",onClick:c,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?Object(r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),Object(r.jsxs)("div",{className:"fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ".concat(t?"translate-x-0":"translate-x-full"),children:[Object(r.jsx)("button",{type:"button","aria-label":"toggle modal",className:"fixed w-full h-full cursor-auto focus:outline-none",onClick:c}),Object(r.jsx)("nav",{className:"fixed h-full mt-8",children:m.map((function(e){return Object(r.jsx)("div",{className:"px-12 py-4",children:Object(r.jsx)(A.a,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:c,children:e.title})},e.title)}))})]})]})},z=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1],c=Object(i.useContext)(o),a=c.theme,l=c.setTheme,u=c.resolvedTheme;return Object(i.useEffect)((function(){return n(!0)}),[]),Object(r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:function(){return l("dark"===a||"dark"===u?"light":"dark")},children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==u?Object(r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},T=function(e){var t=e.children;return Object(r.jsx)(O.a,{children:Object(r.jsxs)("div",{className:"flex flex-col justify-between h-screen",children:[Object(r.jsxs)("header",{className:"flex items-center justify-between py-10",children:[Object(r.jsx)("div",{children:Object(r.jsx)(A.a,{href:"/","aria-label":"Tailwind CSS Blog",children:Object(r.jsxs)("div",{className:"flex items-center justify-between",children:[Object(r.jsx)("div",{className:"mr-3",children:Object(r.jsx)(L.a,{})}),"string"===typeof f.headerTitle?Object(r.jsx)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:f.headerTitle}):f.headerTitle]})})}),Object(r.jsxs)("div",{className:"flex items-center text-base leading-5",children:[Object(r.jsx)("div",{className:"hidden sm:block",children:m.map((function(e){return Object(r.jsx)(A.a,{href:e.href,className:"p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",children:e.title},e.title)}))}),Object(r.jsx)(z,{}),Object(r.jsx)(v,{})]})]}),Object(r.jsx)("main",{className:"mb-auto",children:t}),Object(r.jsx)(D,{})]})})};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=e.Component,n=e.pageProps;return Object(r.jsxs)(M,{attribute:"class",children:[Object(r.jsx)(u.a,{children:Object(r.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),Object(r.jsx)(N.b,p({},b.c)),Object(r.jsx)(T,{children:Object(r.jsx)(t,p({},n))})]})}},"2qqW":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPHBhdGggZD0iTTIuMDAzIDUuODg0TDEwIDkuODgybDcuOTk3LTMuOTk4QTIgMiAwIDAwMTYgNEg0YTIgMiAwIDAwLTEuOTk3IDEuODg0eiIgLz4KICA8cGF0aCBkPSJNMTggOC4xMThsLTggNC04LTRWMTRhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWOC4xMTh6IiAvPgo8L3N2Zz4="},Adkf:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4="},Af6x:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr");function c(e){var t=e.children;return Object(r.jsx)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JV8H:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTI0IDEyLjA3M2MwLTYuNjI3LTUuMzczLTEyLTEyLTEycy0xMiA1LjM3My0xMiAxMmMwIDUuOTkgNC4zODggMTAuOTU0IDEwLjEyNSAxMS44NTR2LTguMzg1SDcuMDc4di0zLjQ3aDMuMDQ3VjkuNDNjMC0zLjAwNyAxLjc5Mi00LjY2OSA0LjUzMy00LjY2OSAxLjMxMiAwIDIuNjg2LjIzNSAyLjY4Ni4yMzV2Mi45NTNIMTUuODNjLTEuNDkxIDAtMS45NTYuOTI1LTEuOTU2IDEuODc0djIuMjVoMy4zMjhsLS41MzIgMy40N2gtMi43OTZ2OC4zODVDMTkuNjEyIDIzLjAyNyAyNCAxOC4wNjIgMjQgMTIuMDczeiIvPjwvc3ZnPg=="},ODAy:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW4gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6Ii8+PC9zdmc+"},YFqc:function(e,t,n){e.exports=n("cTJO")},YNhk:function(e,t,n){"use strict";var r=n("cpVT"),c=n("nKUr");function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=n("YFqc"),l=n.n(a);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.href,n=i(e,["href"]),r=t&&t.startsWith("/"),a=t&&t.startsWith("#");return r?Object(c.jsx)(l.a,{href:t,children:Object(c.jsx)("a",o({},n))}):a?Object(c.jsx)("a",o({href:t},n)):Object(c.jsx)("a",o({target:"_blank",rel:"noopener noreferrer",href:t},n))}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var i=c(n("q1tI")),a=n("elyg"),l=n("nOHt"),u=n("vNVm"),o={};function j(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[t+"%"+n+(c?"%"+c:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),c=n&&n.asPath||"/",s=i.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),i=n[0],l=n[1];return{href:i,as:e.as?(0,a.resolveHref)(c,e.as):l||i}}),[c,e.href,e.as]),M=s.href,d=s.as,y=e.children,g=e.replace,I=e.shallow,N=e.scroll,b=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var f=i.Children.only(y),m=f&&"object"===typeof f&&f.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),L=r(x,2),A=L[0],O=L[1],h=i.default.useCallback((function(e){A(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,A]);(0,i.useEffect)((function(){var e=O&&t&&(0,a.isLocalURL)(M),r="undefined"!==typeof b?b:n&&n.locale,c=o[M+"%"+d+(r?"%"+r:"")];e&&!c&&j(n,M,d,{locale:r})}),[d,M,O,b,t,n]);var D={ref:h,onClick:function(e){f.props&&"function"===typeof f.props.onClick&&f.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,i,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:i,locale:u,scroll:l}))}(e,n,M,d,g,I,N,b)},onMouseEnter:function(e){(0,a.isLocalURL)(M)&&(f.props&&"function"===typeof f.props.onMouseEnter&&f.props.onMouseEnter(e),j(n,M,d,{priority:!0}))}};if(e.passHref||"a"===f.type&&!("href"in f.props)){var v="undefined"!==typeof b?b:n&&n.locale,z=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,v,n&&n.locales,n&&n.domainLocales);D.href=z||(0,a.addBasePath)((0,a.addLocale)(d,v,n&&n.defaultLocale))}return i.default.cloneElement(f,D)};t.default=s},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},gbqy:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+WW91VHViZSBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuNDk5IDYuMjAzYTMuMDA4IDMuMDA4IDAgMDAtMi4wODktMi4wODljLTEuODctLjUwMS05LjQtLjUwMS05LjQtLjUwMXMtNy41MDktLjAxLTkuMzk5LjUwMWEzLjAwOCAzLjAwOCAwIDAwLTIuMDg4IDIuMDlBMzEuMjU4IDMxLjI2IDAgMDAwIDEyLjAxYTMxLjI1OCAzMS4yNiAwIDAwLjUyMyA1Ljc4NSAzLjAwOCAzLjAwOCAwIDAwMi4wODggMi4wODljMS44NjkuNTAyIDkuNC41MDIgOS40LjUwMnM3LjUwOCAwIDkuMzk5LS41MDJhMy4wMDggMy4wMDggMCAwMDIuMDg5LTIuMDkgMzEuMjU4IDMxLjI2IDAgMDAuNS01Ljc4NCAzMS4yNTggMzEuMjYgMCAwMC0uNS01LjgwOHptLTEzLjg5MSA5LjRWOC40MDdsNi4yNjYgMy42MDR6Ii8+PC9zdmc+"},mhpu:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTUzIDQuNTdhMTAgMTAgMCAwMS0yLjgyNS43NzUgNC45NTggNC45NTggMCAwMDIuMTYzLTIuNzIzYy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODRhNC45MiA0LjkyIDAgMDAtOC4zODQgNC40ODJDNy42OSA4LjA5NSA0LjA2NyA2LjEzIDEuNjQgMy4xNjJhNC44MjIgNC44MjIgMCAwMC0uNjY2IDIuNDc1YzAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5NmE0LjkwNCA0LjkwNCAwIDAxLTIuMjI4LS42MTZ2LjA2YTQuOTIzIDQuOTIzIDAgMDAzLjk0NiA0LjgyNyA0Ljk5NiA0Ljk5NiAwIDAxLTIuMjEyLjA4NSA0LjkzNiA0LjkzNiAwIDAwNC42MDQgMy40MTcgOS44NjcgOS44NjcgMCAwMS02LjEwMiAyLjEwNWMtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2N2ExMy45OTUgMTMuOTk1IDAgMDA3LjU1NyAyLjIwOWM5LjA1MyAwIDEzLjk5OC03LjQ5NiAxMy45OTgtMTMuOTg1IDAtLjIxIDAtLjQyLS4wMTUtLjYzQTkuOTM1IDkuOTM1IDAgMDAyNCA0LjU5eiIvPjwvc3ZnPg=="},rZxN:function(e,t,n){},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,c.useRef)(),o=(0,c.useState)(!1),j=r(o,2),s=j[0],M=j[1],d=(0,c.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(c))}}(e,(function(e){return e&&M(e)}),{rootMargin:t}))}),[n,t,s]);return(0,c.useEffect)((function(){if(!a&&!s){var e=(0,i.requestIdleCallback)((function(){return M(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[s]),[d,s]};var c=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var l=new Map},y0sI:function(e,t,n){"use strict";var r=n("nKUr"),c=n("2qqW"),i=n.n(c),a=n("Adkf"),l=n.n(a),u=n("JV8H"),o=n.n(u),j=n("gbqy"),s=n.n(j),M=n("ODAy"),d=n.n(M),y=n("mhpu"),g=n.n(y),I={mail:i.a,github:l.a,facebook:o.a,youtube:s.a,linkedin:d.a,twitter:g.a};t.a=function(e){var t=e.kind,n=e.href,c=e.size,i=void 0===c?8:c;if(!n)return null;var a=I[t];return Object(r.jsxs)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[Object(r.jsx)("span",{className:"sr-only",children:t}),Object(r.jsx)(a,{className:"fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-".concat(i," w-").concat(i)})]})}},zBkE:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIzNDQuNTYzOTA5Nzc0NDM2MSAzMzAuMjc4MTk1NDg4NzIxNzQgMTExLjczNjg0MjEwNTI2MzE4IDkxLjIxODA0NTExMjc4MTk3IiB3aWR0aD0iNTMuODciIGhlaWdodD0iNDMuNjEiPjxkZWZzPjxwYXRoIGQ9Ik00NTMuMyAzMzEuMjhMNDUzLjMgMzU5Ljg1TDM4OC42NCA0MTguNUwzODguNjQgMzg4LjQyTDQ1My4zIDMzMS4yOFoiIGlkPSJhRlpmNlQ1RUQiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50YjJUaHFuUDVPcCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MjAuOTciIHkxPSIzMzEuMjgiIHgyPSI0MjAuOTciIHkyPSI0MTguNSI+PHN0b3Agc3R5bGU9InN0b3AtY29sb3I6ICMwNmI2ZDQ7c3RvcC1vcGFjaXR5OiAxIiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3R5bGU9InN0b3AtY29sb3I6ICM2N2U4Zjk7c3RvcC1vcGFjaXR5OiAxIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik00MTAuMjMgMzMxLjI4TDQxMC4yMyAzNTkuODVMMzQ1LjU2IDQxOC41TDM0NS41NiAzODguNDJMNDEwLjIzIDMzMS4yOFoiIGlkPSJhOWZlaGd3Zk0iPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50azF3TlY5T3N0YiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNzcuODkiIHkxPSIzMzEuMjgiIHgyPSIzNzcuODkiIHkyPSI0MTguNSI+PHN0b3Agc3R5bGU9InN0b3AtY29sb3I6ICMwNmI2ZDQ7c3RvcC1vcGFjaXR5OiAxIiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3R5bGU9InN0b3AtY29sb3I6ICM2N2U4Zjk7c3RvcC1vcGFjaXR5OiAxIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhRlpmNlQ1RUQiIG9wYWNpdHk9IjEiIGZpbGw9InVybCgjZ3JhZGllbnRiMlRocW5QNU9wKSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2E5ZmVoZ3dmTSIgb3BhY2l0eT0iMSIgZmlsbD0idXJsKCNncmFkaWVudGsxd05WOU9zdGIpIj48L3VzZT48L2c+PC9nPjwvc3ZnPg=="}},[[0,0,1,2,3]]]);