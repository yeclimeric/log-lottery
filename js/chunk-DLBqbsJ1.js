import{b as l,c as a,o as t,e,f as n,F as s,y as u,z as o,A as r}from"./chunk-Dfru-Ds3.js";const c={class:"overflow-x-auto"},y={class:"table min-w-[600px]"},d={key:0},p={key:0},i={key:1},k=["onClick"],b={key:1},f=l({__name:"index",props:{data:{type:Array,default:[]},tableColumns:{type:Array,default:[]}},setup(l){const f=l,m=a((()=>f.tableColumns.filter((l=>!l.actions)))),h=a((()=>f.tableColumns.filter((l=>l.actions))));return(a,f)=>(t(),e("div",c,[n("table",y,[n("thead",null,[n("tr",null,[f[0]||(f[0]=n("th",null,null,-1)),(t(!0),e(s,null,u(m.value,((l,a)=>(t(),e("th",{key:a},o(l.label),1)))),128)),(t(!0),e(s,null,u(h.value,((l,a)=>(t(),e("th",{key:a},"操作")))),128)),f[1]||(f[1]=n("th",null,null,-1))])]),l.data.length>0?(t(),e("tbody",d,[(t(!0),e(s,null,u(l.data,(l=>(t(),e("tr",{class:"hover",key:l.id},[n("th",null,o(l.id),1),(t(!0),e(s,null,u(m.value,((a,n)=>(t(),e("td",{key:n},[a.formatValue?(t(),e("span",p,o(a.formatValue(l)),1)):(t(),e("span",i,o(l[a.props]),1))])))),128)),(t(!0),e(s,null,u(h.value,((a,n)=>(t(),e("td",{key:n,class:"flex gap-2"},[(t(!0),e(s,null,u(a.actions,(a=>(t(),e("button",{class:r(["btn btn-xs",a.type]),key:a.name,onClick:t=>a.onClick(l)},o(a.label),11,k)))),128))])))),128))])))),128))])):(t(),e("tbody",b,f[2]||(f[2]=[n("tr",null,[n("td",{colspan:"5",class:"text-center"},"暂无数据")],-1)])))])]))}});export{f as _};
