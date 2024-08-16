import{d as _,r as L,C as c,o as a,c as m,k as y,f as $,b as u,A as h,F as P,ah as I,i as k,l as v,g as C,h as g,q as N,s as b,e as D}from"../modules/vue-D2pOHkaZ.js";import{a as A,aa as T}from"../index-DsuDDjy0.js";import{_ as M}from"./title-renderer.md_vue_type_script_setup_true_lang-BKmv626Z.js";import{u as S,f as B}from"./context-DgN9fkBL.js";import{I as H}from"./default-DWydssHI.js";import"../modules/shiki-DHScOeNh.js";import"../modules/unplugin-icons-Dg93X4Nm.js";const V=["href","innerHTML"],z=["href"],F=_({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=A();return(s,o)=>{const l=L("RouterLink");return!c(r)&&s.title?(a(),m(l,{key:0,to:String(s.to),onClick:o[0]||(o[0]=i=>i.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!c(r)&&!s.title?(a(),m(l,{key:1,to:String(s.to),onClick:o[1]||(o[1]=i=>i.target.blur())},{default:y(()=>[$(s.$slots,"default")]),_:3},8,["to"])):c(r)&&s.title?(a(),u("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,V)):(a(),u("a",{key:3,href:`#${s.to}`},[$(s.$slots,"default")],8,z))}}}),O=["start"],R=_({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,s=h(()=>[...T(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),o=h(()=>[...T(r.listStyle||[])]);return(l,i)=>{const p=F,e=L("TocList",!0);return l.list&&l.list.length>0?(a(),u("ol",{key:0,class:k(s.value),start:l.level===1?l.start:void 0,style:g(o.value.length>=l.level?`list-style:${o.value[l.level-1]}`:void 0)},[(a(!0),u(P,null,I(l.list,t=>(a(),u("li",{key:t.path,class:k(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[v(p,{to:t.path},{default:y(()=>[v(c(M),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(a(),m(e,{key:0,level:l.level+1,"list-style":l.listStyle,list:t.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):C("v-if",!0)],2))),128))],14,O)):C("v-if",!0)}}}),E=_({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:s}=S();function o(e,t=1){if(t>Number(r.maxDepth))return[];if(t<Number(r.minDepth)){const n=e.find(f=>f.active||f.activeParent);return n?o(n.children,t+1):[]}return e.map(n=>({...n,children:o(n.children,t+1)}))}function l(e){return e.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:l(t.children)}))}function i(e){const t=e.some(n=>n.active||n.activeParent||n.hasActiveParent);return e.filter(()=>t).map(n=>({...n,children:i(n.children)}))}const p=h(()=>{const e=s==null?void 0:s.nav.tocTree;if(!e)return[];let t=o(e);return r.mode==="onlyCurrentTree"?t=l(t):r.mode==="onlySiblings"&&(t=i(t)),t});return(e,t)=>{const n=R;return a(),u("div",{class:"slidev-toc",style:g(`column-count:${e.columns}`)},[v(n,{level:1,start:e.start,"list-style":e.listStyle,list:p.value,"list-class":e.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),j=D("h1",null,"重构升级内容",-1),q={__name:"content.md__slidev_3",setup(d){const{$slidev:r,$nav:s,$clicksContext:o,$clicks:l,$page:i,$renderContext:p,$frontmatter:e}=S();return o.setup(),(t,n)=>{const f=E;return a(),m(H,N(b(c(B)(c(e),2))),{default:y(()=>[j,v(f,{columns:1,minDepth:2,mode:"onlyCurrentTree"})]),_:1},16)}}},W=q;export{W as default};
