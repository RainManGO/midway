"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7418],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p="\u5b88\u536b",u={unversionedId:"guard",id:"guard",title:"\u5b88\u536b",description:"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u63d0\u4f9b\u5b88\u536b\u80fd\u529b\u3002",source:"@site/docs/guard.md",sourceDirName:".",slug:"/guard",permalink:"/docs/guard",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/guard.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u5f02\u5e38\u5904\u7406",permalink:"/docs/error_filter"},next:{title:"\u4f7f\u7528\u7ec4\u4ef6",permalink:"/docs/midway_component"}},d={},s=[{value:"\u7f16\u5199\u5b88\u536b",id:"\u7f16\u5199\u5b88\u536b",level:2},{value:"\u4f7f\u7528\u5b88\u536b",id:"\u4f7f\u7528\u5b88\u536b",level:2},{value:"\u8def\u7531\u5b88\u536b",id:"\u8def\u7531\u5b88\u536b",level:3},{value:"\u5168\u5c40\u5b88\u536b",id:"\u5168\u5c40\u5b88\u536b",level:3},{value:"\u81ea\u5b9a\u4e49\u9519\u8bef",id:"\u81ea\u5b9a\u4e49\u9519\u8bef",level:2},{value:"\u57fa\u4e8e\u89d2\u8272\u7684\u9274\u6743\u793a\u4f8b",id:"\u57fa\u4e8e\u89d2\u8272\u7684\u9274\u6743\u793a\u4f8b",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b88\u536b"},"\u5b88\u536b"),(0,o.kt)("p",null,"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u63d0\u4f9b\u5b88\u536b\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u5b88\u536b\u4f1a\u6839\u636e\u8fd0\u884c\u65f6\u51fa\u73b0\u7684\u67d0\u4e9b\u6761\u4ef6\uff08\u4f8b\u5982\u6743\u9650\uff0c\u89d2\u8272\uff0c\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u7b49\uff09\u6765\u786e\u5b9a\u7ed9\u5b9a\u7684\u8bf7\u6c42\u662f\u5426\u7531\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u5904\u7406\u3002 "),(0,o.kt)("p",null,"\u666e\u901a\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4e00\u822c\u4f1a\u5728\u4e2d\u95f4\u4ef6\u4e2d\u5904\u7406\u8fd9\u4e9b\u903b\u8f91\uff0c\u4f46\u662f\u4e2d\u95f4\u4ef6\u7684\u903b\u8f91\u8fc7\u4e8e\u901a\u7528\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5f88\u4f18\u96c5\u7684\u53bb\u548c\u8def\u7531\u65b9\u6cd5\u8fdb\u884c\u7ed3\u5408\uff0c\u4e3a\u6b64\u6211\u4eec\u5728\u4e2d\u95f4\u4ef6\u4e4b\u540e\uff0c\u8fdb\u5165\u8def\u7531\u65b9\u6cd5\u4e4b\u524d\u8bbe\u8ba1\u4e86\u5b88\u536b\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u65b9\u6cd5\u9274\u6743\u7b49\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u5b88\u536b\u4f1a\u5728\u4e2d\u95f4\u4ef6 ",(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u540e"),"\uff0c\u8def\u7531\u65b9\u6cd5 ",(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u524d")," \u6267\u884c\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u5c06\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u4e3e\u4f8b\u3002"),(0,o.kt)("h2",{id:"\u7f16\u5199\u5b88\u536b"},"\u7f16\u5199\u5b88\u536b"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/guard")," \u6587\u4ef6\u5939\u4e2d\u7f16\u5199\u5b88\u536b\u3002"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/guard/auth.guard.ts")," \uff0c\u7528\u4e8e\u9a8c\u8bc1\u8def\u7531\u662f\u5426\u80fd\u88ab\u7528\u6237\u8bbf\u95ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u251c\u2500\u2500 user.controller.ts\n\u2502   \u2502   \u2514\u2500\u2500 home.controller.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u251c\u2500\u2500 guard\n\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"Midway \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Guard")," \u88c5\u9970\u5668\u6807\u8bc6\u5b88\u536b\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canActivate")," \u65b9\u6cd5\u7528\u4e8e\u5728\u8bf7\u6c42\u4e2d\u9a8c\u8bc1\u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\u540e\u7eed\u7684\u65b9\u6cd5\uff0c\u5f53\u8fd4\u56de true \u65f6\uff0c\u540e\u7eed\u7684\u65b9\u6cd5\u4f1a\u88ab\u6267\u884c\uff0c\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"canActivate")," \u8fd4\u56de false \u65f6\uff0c\u4f1a\u629b\u51fa 403 \u9519\u8bef\u7801\u3002 "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u5f53\u524d\u53ea\u6709\u7c7b Controller \u624d\u80fd\u4f7f\u7528\u5b88\u536b\u3002"))),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5b88\u536b"},"\u4f7f\u7528\u5b88\u536b"),(0,o.kt)("p",null,"\u5b88\u536b\u53ef\u4ee5\u88ab\u5e94\u7528\u5230\u4e0d\u540c\u7684\u6846\u67b6\u4e0a\uff0c\u5728 http \u4e0b\uff0c\u53ef\u4ee5\u5e94\u7528\u5230\u5168\u5c40\uff0cController \u548c\u65b9\u6cd5\u4e0a\u3002"),(0,o.kt)("h3",{id:"\u8def\u7531\u5b88\u536b"},"\u8def\u7531\u5b88\u536b"),(0,o.kt)("p",null,"\u5728\u5199\u5b8c\u5b88\u536b\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u628a\u5b83\u5e94\u7528\u5230\u5404\u4e2a\u63a7\u5236\u5668\u8def\u7531\u4e4b\u4e0a\u3002 "),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"UseGuard")," \u88c5\u9970\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u5e94\u7528\u5230\u7c7b\u548c\u65b9\u6cd5\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller } from '@midwayjs/decorator';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@UseGuard(AuthGuard)\n@Controller('/')\nexport class HomeController {\n\n}\n")),(0,o.kt)("p",null,"Midway \u540c\u65f6\u4e5f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Get")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Post")," \u7b49\u8def\u7531\u88c5\u9970\u5668\u4e0a\u90fd\u63d0\u4f9b\u4e86 middleware \u53c2\u6570\uff0c\u65b9\u4fbf\u5bf9\u5355\u4e2a\u8def\u7531\u505a\u4e2d\u95f4\u4ef6\u62e6\u622a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@Controller('/')\nexport class HomeController {\n\n  @UseGuard(AuthGuard)\n  @Get('/', { middleware: [ ReportMiddleware ]})\n  async home() {\n  }\n}\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f20\u5165\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseGuard([AuthGuard, Auth2Guard])\n")),(0,o.kt)("h3",{id:"\u5168\u5c40\u5b88\u536b"},"\u5168\u5c40\u5b88\u536b"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728\u5e94\u7528\u542f\u52a8\u524d\uff0c\u52a0\u5165\u5f53\u524d\u6846\u67b6\u7684\u5b88\u536b\u5217\u8868\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useGuard")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u628a\u5b88\u536b\u52a0\u5165\u5230\u5b88\u536b\u5217\u8868\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { AuthGuard } from './guard/auth.guard';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useGuard(AuthGuard);\n  }\n}\n\n")),(0,o.kt)("p",null,"\u540c\u7406\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u5b88\u536b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  this.app.useGuard([AuthGuard, Auth2Guard]);\n}\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9519\u8bef"},"\u81ea\u5b9a\u4e49\u9519\u8bef"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b88\u536b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"canActivate")," \u65b9\u6cd5\u5f53\u8fd4\u56de false \u65f6\uff0c\u6846\u67b6\u4f1a\u629b\u51fa 403 \u9519\u8bef\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"ForbiddenError"),"\uff09\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u5b88\u536b\u4e2d\u81ea\u884c\u51b3\u5b9a\u9700\u8981\u629b\u51fa\u7684\u9519\u8bef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard, httpError } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // ...\n    if (methodName ==='xxx') {\n      throw new httpError.ForbiddenError();\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"\u57fa\u4e8e\u89d2\u8272\u7684\u9274\u6743\u793a\u4f8b"},"\u57fa\u4e8e\u89d2\u8272\u7684\u9274\u6743\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u628a\u65b9\u6cd5\u8bbf\u95ee\u548c\u89d2\u8272\u5173\u8054\u8d77\u6765\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u7b80\u5355\u5b9e\u73b0\u4e00\u4e2a\u57fa\u4e8e\u7528\u6237\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Role")," \u88c5\u9970\u5668\uff0c\u7528\u4e8e\u8bbe\u5b9a\u65b9\u6cd5\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/role.decorator.ts\nimport { savePropertyMetadata } from '@midwayjs/core';\n\nexport const ROLE_META_KEY = 'role:name'\n\nexport function Role(roleName: string | string[]): MethodDecorator {\n  return (target, propertyKey, descriptor) => {\n    roleName = [].concat(roleName);\n    // \u53ea\u4fdd\u5b58\u5143\u6570\u636e\n    savePropertyMetadata(ROLE_META_KEY, roleName, target, propertyKey);\n  };\n}\n")),(0,o.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a\u5b88\u536b\uff0c\u7528\u4e8e\u89d2\u8272\u9274\u6743\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard, getPropertyMetadata } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // \u4ece\u7c7b\u5143\u6570\u636e\u4e0a\u83b7\u53d6\u89d2\u8272\u4fe1\u606f\n    const roleNameList = getPropertyMetadata<string[]>(suppilerClz, methodName);\n    if (roleNameList && roleNameList.length && ctx.user.role) {\n      // \u5047\u8bbe\u4e2d\u95f4\u4ef6\u5df2\u7ecf\u62ff\u5230\u4e86\u7528\u6237\u89d2\u8272\u4fe1\u606f\uff0c\u4fdd\u5b58\u5230\u4e86 ctx.user.role \u4e2d\n      // \u76f4\u63a5\u5224\u65ad\u662f\u5426\u5305\u542b\u6539\u89d2\u8272\n      return roleNameList.includes(ctx.user.role);\n    }\n    \n    return false;\n  }\n}\n")),(0,o.kt)("p",null,"\u5728\u8def\u7531\u4e0a\u4f7f\u7528\u8be5\u5b88\u536b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@UseGuard(AuthGuard)\n@Controller('/user')\nexport class HomeController {\n\n  // \u53ea\u5141\u8bb8 admin \u8bbf\u95ee\n  @Role(['admin'])\n  @Get('/getUserRoles')\n  async getUserRoles() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"\u53ea\u6709\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user.role")," \u8fd4\u56de\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," \u7684\u65f6\u5019\uff0c\u624d\u4f1a\u88ab\u5141\u8bb8\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"/getUserRoles")," \u8def\u7531\u3002"))}m.isMDXComponent=!0}}]);