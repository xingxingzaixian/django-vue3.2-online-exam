var k=(U,d,g)=>new Promise((e,s)=>{var B=n=>{try{E(g.next(n))}catch(f){s(f)}},b=n=>{try{E(g.throw(n))}catch(f){s(f)}},E=n=>n.done?e(n.value):Promise.resolve(n.value).then(B,b);E((g=g.apply(U,d)).next())});import{I as Z,J as ee,s as te,u as ue,K as le,L as oe,M as ae,t as se}from"./element-plus.ab437b1e.js";import{d as ie,Y as _,r as y,x as h,o as c,c as F,a as x,U as W,u as t,b as a,R as i,K as L,L as Q,O as q,a3 as R,Q as S,a0 as J}from"./@vue.e7449577.js";import{a as re,u as ne}from"./vue-router.c4a42318.js";import{W as K}from"./WangEditor.80fe785c.js";import{e as pe,f as de,h as me,a as M,i as _e,j as ce,k as ge}from"./index.ef4027e9.js";import{s as j}from"./message.36004809.js";import{v as z}from"./utils.71d7fae8.js";import{_ as Ee}from"./index.12bcf11d.js";import"./@vueuse.61020c9f.js";import"./dayjs.bfe651f5.js";import"./axios.70cb0bcf.js";import"./@element-plus.e118e8a4.js";import"./lodash-es.da5d5253.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@wangeditor.9c5418dd.js";import"./pinia.9c2a34da.js";import"./vue-demi.b3a9cad9.js";import"./@icon-park.23ccbfe9.js";/* empty css                    */const fe={class:"edit"},ve={class:"form"},Be={class:"question"},be={class:"step"},ye=J("\u4E0A\u4E00\u6B65"),he=ie({setup(U){const d=re(),g=ne(),e=_({content:"",description:"",option_ids:[],anser_ids:[],level_tag:"",type_tag:"",category_tag:""}),s=y(0),B=!!(d.params&&d.params.id),b=y(),E=y(),n=y(),f=_([]),N=_([]),O=_([]),v=_([]),V=_({content:[{validator:z,required:!0,trigger:"blur"}],description:[{validator:z,required:!0,trigger:"blur"}],option_ids:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u76EE\u9009\u9879",trigger:"blur"}],anser_ids:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u76EE\u9009\u9879",trigger:"blur"}],type_tag:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u76EE\u7C7B\u578B",trigger:"blur"}],level_tag:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u76EE\u96BE\u5EA6",trigger:"blur"}],category_tag:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u76EE\u5206\u7C7B",trigger:"blur"}]}),D=_({total:0,pageNo:1,pageSize:500}),Y=h(()=>d.meta.title),$=h(()=>s.value>=2?"\u63D0\u4EA4":"\u4E0B\u4E00\u6B65");pe().then(u=>{O.push(...u)}),de().then(u=>{f.push(...u)}),me().then(u=>{N.push(...u)}),M(D).then(u=>{v.splice(0,v.length,...u.results)});const G=u=>{M(D,{content__icontains:u}).then(o=>{v.splice(0,v.length,...o.results)})},H=h(()=>v.map(u=>({label:u.text,value:u.id}))),P=h(()=>e.option_ids.map(u=>{const o=v.find(p=>p.id===u);if(o)return{label:o.text,value:o.id}})),X=()=>k(this,null,function*(){var u,o,p;s.value===2?(u=n.value)==null||u.validate((m,r)=>k(this,null,function*(){m&&(B?(yield ce(Number(d.params.id),e),j("\u66F4\u65B0\u6210\u529F")):(yield ge(e),j("\u6DFB\u52A0\u6210\u529F")),g.push({name:"Question"}))})):(s.value===0&&((o=b.value)==null||o.validate((m,r)=>{console.log(e.content),m?s.value+=1:console.log("submit error!",r)})),s.value===1&&((p=E.value)==null||p.validate((m,r)=>{m?s.value+=1:console.log("submit error!",r)})))});return B&&_e(Number(d.params.id)).then(u=>{e.content=u.content,e.description=u.description,e.option_ids=u.option_ids,e.anser_ids=u.anser_ids,e.level_tag=u.level_tag,e.type_tag=u.type_tag,e.category_tag=u.category_tag}),(u,o)=>{const p=Z,m=ee,r=te,w=ue,A=le,C=oe,I=ae,T=se;return c(),F("div",fe,[x("h1",null,W(t(Y)),1),x("div",ve,[a(m,{active:s.value,"align-center":"","finish-status":"success",class:"step"},{default:i(()=>[a(p,{title:"\u9898\u76EE\u5185\u5BB9",description:"\u586B\u5199\u9898\u76EE\u4FE1\u606F"}),a(p,{title:"\u9898\u76EE\u5206\u7C7B\u4FE1\u606F",description:"\u7C7B\u578B\u3001\u5206\u7C7B\u3001\u96BE\u5EA6"}),a(p,{title:"\u9898\u76EE\u9009\u9879",description:"\u9898\u76EE\u9009\u9879\u548C\u7B54\u6848"})]),_:1},8,["active"]),x("div",Be,[L(a(w,{ref_key:"rule1FormRef",ref:b,model:t(e),rules:t(V),"label-width":"60px"},{default:i(()=>[a(r,{label:"\u5185\u5BB9",prop:"content"},{default:i(()=>[a(K,{html:t(e).content,"onUpdate:html":o[0]||(o[0]=l=>t(e).content=l),mode:"simple",style:{"min-width":"800px"}},null,8,["html"])]),_:1}),a(r,{label:"\u63CF\u8FF0",prop:"description"},{default:i(()=>[a(K,{html:t(e).description,"onUpdate:html":o[1]||(o[1]=l=>t(e).description=l),mode:"simple",style:{"min-width":"800px"}},null,8,["html"])]),_:1})]),_:1},8,["model","rules"]),[[Q,s.value===0]]),L(a(w,{ref_key:"rule2FormRef",ref:E,model:t(e),rules:t(V),"label-width":"60px"},{default:i(()=>[a(r,{label:"\u5206\u7C7B",prop:"category_tag"},{default:i(()=>[a(C,{modelValue:t(e).category_tag,"onUpdate:modelValue":o[2]||(o[2]=l=>t(e).category_tag=l),placeholder:"\u9009\u62E9\u9898\u76EE\u5206\u7C7B",style:{width:"240px"}},{default:i(()=>[(c(!0),F(q,null,R(t(f),l=>(c(),S(A,{key:l.tag,label:l.name,value:l.tag},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u96BE\u5EA6",prop:"level_tag"},{default:i(()=>[a(C,{modelValue:t(e).level_tag,"onUpdate:modelValue":o[3]||(o[3]=l=>t(e).level_tag=l),placeholder:"\u9009\u62E9\u9898\u76EE\u96BE\u5EA6",style:{width:"240px"}},{default:i(()=>[(c(!0),F(q,null,R(t(N),l=>(c(),S(A,{key:l.tag,label:l.name,value:l.tag},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u7C7B\u578B",prop:"type_tag"},{default:i(()=>[a(C,{modelValue:t(e).type_tag,"onUpdate:modelValue":o[4]||(o[4]=l=>t(e).type_tag=l),placeholder:"\u9009\u62E9\u9898\u76EE\u7C7B\u578B",style:{width:"240px"}},{default:i(()=>[(c(!0),F(q,null,R(t(O),l=>(c(),S(A,{key:l.tag,label:l.name,value:l.tag},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),[[Q,s.value===1]]),L(a(w,{ref_key:"rule3FormRef",ref:n,rules:t(V),model:t(e),"label-width":"60px"},{default:i(()=>[a(r,{label:"\u9009\u9879",prop:"option_ids"},{default:i(()=>[a(I,{modelValue:t(e).option_ids,"onUpdate:modelValue":o[5]||(o[5]=l=>t(e).option_ids=l),options:t(H),placeholder:"\u9009\u62E9\u9898\u76EE\u9009\u9879",style:{width:"440px"},multiple:"",filterable:"",remote:"","remote-method":G},null,8,["modelValue","options"])]),_:1}),a(r,{label:"\u7B54\u6848",prop:"anser_ids"},{default:i(()=>[a(I,{modelValue:t(e).anser_ids,"onUpdate:modelValue":o[6]||(o[6]=l=>t(e).anser_ids=l),options:t(P),placeholder:"\u9009\u62E9\u9898\u76EE\u7B54\u6848",style:{width:"440px"},multiple:"","multiple-limit":t(e).type_tag==="S"?1:t(e).option_ids.length},null,8,["modelValue","options","multiple-limit"])]),_:1})]),_:1},8,["rules","model"]),[[Q,s.value===2]])]),x("div",be,[a(T,{onClick:o[7]||(o[7]=l=>s.value-=1),disabled:s.value===0},{default:i(()=>[ye]),_:1},8,["disabled"]),a(T,{type:"primary",onClick:X,disabled:s.value===3},{default:i(()=>[J(W(t($)),1)]),_:1},8,["disabled"])])])])}}});var $e=Ee(he,[["__scopeId","data-v-2ec42bd8"]]);export{$e as default};
