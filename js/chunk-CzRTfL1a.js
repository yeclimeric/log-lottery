import{a as e}from"./chunk-Cv_h2SVa.js";import{b as a,s,r as t,l,h as n,w as i,o as r,e as o,f as c,n as m,F as u,y as d,k as v,z as p,j as g}from"./chunk-Dfru-Ds3.js";import{u as f,f as h}from"./chunk-DMoODoeY.js";const k={class:"toast toast-top toast-end"},y={key:0,class:"alert alert-error"},b={key:1,class:"alert alert-success"},w={key:2,class:"alert alert-error"},I={class:""},x={for:"explore"},C=["accept"],j={class:"p-0"},S={class:"flex items-center gap-8"},T={class:"avatar h-14"},_={class:"w-12 h-12 mask mask-squircle hover:w-14 hover:h-14"},q={class:"w-64"},z={class:"overflow-hidden font-bold whitespace-nowrap text-ellipsis"},D=["onClick"],F=a({__name:"ImageConfig",setup(a){const F=f().globalConfig,{getImageList:L}=s(F),N=t("image/*"),U=t(0),A=l.createInstance({name:"imgStore"}),B=async a=>{if(!/image*/.test(a.target.files[0].type))return void(U.value=3);let{dataUrl:s,fileName:t}=await e(a.target.files[0]);A.setItem((new Date).getTime().toString()+"+"+t,s).then((()=>{U.value=1,E()})).catch((()=>{U.value=2}))},E=async()=>{(await A.keys()).length>0&&A.iterate(((e,a)=>{F.addImage({id:a,name:a,url:"Storage"})}))};return n((()=>{})),i((()=>U.value),(e=>{0!==e&&setTimeout((()=>{U.value=0}),2e3)})),(e,a)=>(r(),o(u,null,[c("div",k,[2==U.value?(r(),o("div",y,a[0]||(a[0]=[c("span",null,"上传失败",-1)]))):m("",!0),1==U.value?(r(),o("div",b,a[1]||(a[1]=[c("span",null,"上传成功",-1)]))):m("",!0),3==U.value?(r(),o("div",w,a[2]||(a[2]=[c("span",null,"不是图片",-1)]))):m("",!0)]),c("div",null,[c("div",I,[c("label",x,[c("input",{type:"file",class:"",id:"explore",style:{display:"none"},onChange:B,accept:N.value},null,40,C),a[3]||(a[3]=c("span",{class:"btn btn-primary btn-sm"},"上传图片",-1))])]),c("ul",j,[(r(!0),o(u,null,d(g(L),(e=>(r(),o("li",{key:e.id,class:"mb-3"},[c("div",S,[c("div",T,[c("div",_,[v(h,{imgItem:e},null,8,["imgItem"])])]),c("div",q,[c("div",z,p(e.name),1)]),c("div",null,[c("button",{class:"btn btn-error btn-xs",onClick:a=>(e=>{"Storage"==e.url&&A.removeItem(e.id).then((()=>{F.removeImage(e.id)})),F.removeImage(e.id)})(e)},"删除",8,D)])])])))),128))])])],64))}});export{F as default};
