(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[52044],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31486:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Needs More\uff1f"},l={unversionedId:"end-user/components/more",id:"end-user/components/more",isDocsHomePage:!1,title:"Needs More\uff1f",description:"1. Get from capability registry",source:"@site/docs/end-user/components/more.md",sourceDirName:"end-user/components",slug:"/end-user/components/more",permalink:"/docs/next/end-user/components/more",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/more.md",version:"current",lastUpdatedBy:"qiaozp",lastUpdatedAt:1635321614,formattedLastUpdatedAt:"10/27/2021",frontMatter:{title:"Needs More\uff1f"},sidebar:"docs",previous:{title:"Raw Template",permalink:"/docs/next/end-user/components/cue/raw"},next:{title:"Ingress",permalink:"/docs/next/end-user/traits/ingress"}},s=[{value:"1. Get from capability registry",id:"1-get-from-capability-registry",children:[{value:"List",id:"list",children:[]},{value:"Install",id:"install",children:[]}]},{value:"2. Designed by yourself",id:"2-designed-by-yourself",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-get-from-capability-registry"},"1. Get from capability registry"),(0,i.kt)("p",null,"You can get more from official capability registry by using KubeVela ",(0,i.kt)("a",{parentName:"p",href:"../../kubectlplugin"},"plugin"),"\u3002"),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("p",null,"By default, the following command lists capabilities from ",(0,i.kt)("a",{parentName:"p",href:"https://registry.kubevela.net"},"the default registry")," maintained by KubeVela."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela comp --discover\nListing component definition from registry: default\nNAME            REGISTRY        DEFINITION                      STATUS     \nkustomize       default         autodetects.core.oam.dev        installed  \nwebserver       default         deployments.apps                uninstalled\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--discover")," means list components from registry"),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"Then you can install a component like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela comp get webserver\nGetting component definition from registry: default\nInstalling component: webserver\nSuccessfully install component: webserver\n")),(0,i.kt)("h2",{id:"2-designed-by-yourself"},"2. Designed by yourself"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/definition-edit"},"how to edit definitions")," to build your own capability from existing ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/advanced"},"Build your own capability from scratch"),"\nand learn more features about how to ",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/components/custom-component"},"define custom components"),".")))}u.isMDXComponent=!0}}]);