import{F as v,G as y,H as S,z as k,B}from"./element-plus.ab437b1e.js";import{_ as E}from"./index.12bcf11d.js";import{d as N,Y as P,t as x,w as s,o,Q as i,R as p,b as g,c as u,a3 as C,O as _,D as T,aa as R,ab as F,u as n}from"./@vue.e7449577.js";const U=N({props:{data:null,columns:null,pagination:null},emits:["changePage","changePageSize"],setup(r,{emit:c}){const t=r,a=P(x(t.pagination));return s(()=>t.pagination,()=>{a.pageNo=t.pagination.pageNo,a.pageSize=t.pagination.pageSize,a.total=t.pagination.total},{immediate:!0}),s(()=>a.pageNo,()=>{c("changePage",a.pageNo)}),s(()=>a.pageSize,()=>{c("changePageSize",a.pageSize)}),(m,l)=>{const b=v,d=y,z=S,f=B,h=k;return o(),i(h,{class:"content"},{default:p(()=>[g(z,{data:r.data,border:!0},{empty:p(()=>[g(b,{description:"description"})]),default:p(()=>[(o(!0),u(_,null,C(r.columns,e=>(o(),u(_,{key:e.prop},[e.format?(o(),i(d,{key:1,label:e.label,width:e.width},{default:p(w=>[T(m.$slots,e.prop,R(F(w)),void 0,!0)]),_:2},1032,["label","width"])):(o(),i(d,{key:0,prop:e.prop,label:e.label,width:e.width},null,8,["prop","label","width"]))],64))),128))]),_:3},8,["data"]),g(f,{class:"pages",background:"",layout:"prev, pager, next",total:n(a).total,"page-size":n(a).pageSize,"onUpdate:page-size":l[0]||(l[0]=e=>n(a).pageSize=e),"current-page":n(a).pageNo,"onUpdate:current-page":l[1]||(l[1]=e=>n(a).pageNo=e),"hide-on-single-page":!0},null,8,["total","page-size","current-page"])]),_:3})}}});var I=E(U,[["__scopeId","data-v-268f2e6a"]]);export{I as B};
