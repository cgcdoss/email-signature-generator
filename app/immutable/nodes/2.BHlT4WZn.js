import{s as et,n as oe,r as nt,f as ze}from"../chunks/scheduler.DypdDQBO.js";import{S as tt,i as lt,e as f,c as d,y as N,g as A,d as c,s as p,u as at,t as re,z as st,f as h,a as T,v as it,b as ue,o as u,A as Qe,h as o,B as U,w as ot,C as j,j as ge,k as rt,l as ut,x as ft}from"../chunks/index.Jla9k6K_.js";const dt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ct(n){let e,i='<div class="mt-4 p-2 bg-gray-300 w-48"></div> <div class="mt-1 p-2 bg-gray-300 w-36"></div> <div class="mt-1 p-2 bg-gray-300 w-28"></div>';return{c(){e=f("div"),e.innerHTML=i},l(t){e=d(t,"DIV",{"data-svelte-h":!0}),N(e)!=="svelte-1oh3mpv"&&(e.innerHTML=i)},m(t,l){A(t,e,l)},p:oe,i:oe,o:oe,d(t){t&&c(e)}}}class pt extends tt{constructor(e){super(),lt(this,e,null,ct,et,{})}}function ht(n){const e=document.createElement("canvas"),i=e.getContext("2d"),t=800,l=600;let s=n.width,a=n.height;return s>a?s>t&&(a*=t/s,s=t):a>l&&(s*=l/a,a=l),e.width=s,e.height=a,i.drawImage(n,0,0,s,a),e.toDataURL("image/jpeg",.7)}const{document:We}=dt;function Ye(n){let e,i="Limpar",t,l;return{c(){e=f("button"),e.textContent=i,this.h()},l(s){e=d(s,"BUTTON",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-jqkl3"&&(e.textContent=i),this.h()},h(){u(e,"class","bg-slate-300 p-1")},m(s,a){A(s,e,a),t||(l=j(e,"click",n[7]),t=!0)},p:oe,d(s){s&&c(e),t=!1,l()}}}function $e(n){let e,i="Copiar assinatura",t,l;return{c(){e=f("button"),e.textContent=i,this.h()},l(s){e=d(s,"BUTTON",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-18cln9n"&&(e.textContent=i),this.h()},h(){u(e,"class","bg-slate-600 text-white hover:bg-slate-700 p-4 transition-colors")},m(s,a){A(s,e,a),t||(l=j(e,"click",_t),t=!0)},p:oe,d(s){s&&c(e),t=!1,l()}}}function Je(n){let e,i,t,l;return{c(){e=f("td"),i=f("div"),t=f("img"),this.h()},l(s){e=d(s,"TD",{});var a=T(e);i=d(a,"DIV",{});var I=T(i);t=d(I,"IMG",{src:!0,alt:!0,width:!0,height:!0}),I.forEach(c),a.forEach(c),this.h()},h(){ze(t.src,l=n[0]||n[1])||u(t,"src",l),u(t,"alt","logo assinatura"),u(t,"width","150"),u(t,"height","150")},m(s,a){A(s,e,a),o(e,i),o(i,t)},p(s,a){a&3&&!ze(t.src,l=s[0]||s[1])&&u(t,"src",l)},d(s){s&&c(e)}}}function Ke(n){let e,i,t,l=n[4]&&Xe(n);return{c(){e=f("h3"),i=re(n[3]),t=p(),l&&l.c(),this.h()},l(s){e=d(s,"H3",{class:!0});var a=T(e);i=ue(a,n[3]),t=h(a),l&&l.l(a),a.forEach(c),this.h()},h(){u(e,"class","text-lg")},m(s,a){A(s,e,a),o(e,i),o(e,t),l&&l.m(e,null)},p(s,a){a&8&&ge(i,s[3]),s[4]?l?l.p(s,a):(l=Xe(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&c(e),l&&l.d()}}}function Xe(n){let e,i;return{c(){e=re("em "),i=re(n[4])},l(t){e=ue(t,"em "),i=ue(t,n[4])},m(t,l){A(t,e,l),A(t,i,l)},p(t,l){l&16&&ge(i,t[4])},d(t){t&&(c(e),c(i))}}}function Ze(n){let e,i;return{c(){e=f("p"),i=re(n[5])},l(t){e=d(t,"P",{});var l=T(e);i=ue(l,n[5]),l.forEach(c)},m(t,l){A(t,e,l),o(e,i)},p(t,l){l&32&&ge(i,t[5])},d(t){t&&c(e)}}}function mt(n){let e,i,t='<h1 class="text-2xl text-white">Gerar Assinatura de E-mail</h1>',l,s,a,I,J="Preencha as informações abaixo e depois clique em Copiar assinatura",te,H,fe=`Depois basta colar (Ctrl + V) no campo de texto do seu serviço de
            e-mail`,le,L,de="Geral",ne,v,k,G,ae,x,Le="ou",be,M,ce,Ce,we,R,Ee,S,ye,V,Te,B,Ie,ke,K,g,z,Re="Novo email",Pe,Q,Se="De",De,W,Ve="Para",Ne,Y,Ae,$,Be="Atenciosamente,",xe,X,se,ie,q,pe,P,Z,he,Ue,me,F,He,Me,b=n[1]&&Ye(n),C=n[2]&&$e();Y=new pt({});let w=(n[0]||n[1])&&Je(n),E=(n[3]||n[3]&&n[4])&&Ke(n),y=n[5]&&Ze(n);return{c(){e=p(),i=f("header"),i.innerHTML=t,l=p(),s=f("main"),a=f("section"),I=f("h2"),I.textContent=J,te=p(),H=f("p"),H.textContent=fe,le=p(),L=f("div"),L.textContent=de,ne=p(),v=f("div"),k=f("input"),ae=p(),x=f("p"),x.textContent=Le,be=p(),M=f("input"),Ce=p(),b&&b.c(),we=p(),R=f("input"),Ee=p(),S=f("input"),ye=p(),V=f("input"),Te=p(),B=f("input"),Ie=p(),C&&C.c(),ke=p(),K=f("section"),g=f("div"),z=f("h2"),z.textContent=Re,Pe=p(),Q=f("p"),Q.textContent=Se,De=p(),W=f("p"),W.textContent=Ve,Ne=p(),at(Y.$$.fragment),Ae=p(),$=f("p"),$.textContent=Be,xe=p(),X=f("div"),se=f("table"),ie=f("tbody"),q=f("tr"),w&&w.c(),pe=p(),P=f("td"),Z=f("h2"),he=re(n[2]),Ue=p(),E&&E.c(),me=p(),y&&y.c(),this.h()},l(r){st("svelte-7fn4hk",We.head).forEach(c),e=h(r),i=d(r,"HEADER",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-pi6oar"&&(i.innerHTML=t),l=h(r),s=d(r,"MAIN",{class:!0});var _e=T(s);a=d(_e,"SECTION",{class:!0});var _=T(a);I=d(_,"H2",{class:!0,"data-svelte-h":!0}),N(I)!=="svelte-e199i6"&&(I.textContent=J),te=h(_),H=d(_,"P",{class:!0,"data-svelte-h":!0}),N(H)!=="svelte-1th4bnl"&&(H.textContent=fe),le=h(_),L=d(_,"DIV",{class:!0,"data-svelte-h":!0}),N(L)!=="svelte-10yzbyx"&&(L.textContent=de),ne=h(_),v=d(_,"DIV",{class:!0});var O=T(v);k=d(O,"INPUT",{type:!0,placeholder:!0}),ae=h(O),x=d(O,"P",{class:!0,"data-svelte-h":!0}),N(x)!=="svelte-g8ofx0"&&(x.textContent=Le),be=h(O),M=d(O,"INPUT",{type:!0,accept:!0}),Ce=h(O),b&&b.l(O),O.forEach(c),we=h(_),R=d(_,"INPUT",{type:!0,placeholder:!0}),Ee=h(_),S=d(_,"INPUT",{type:!0,placeholder:!0}),ye=h(_),V=d(_,"INPUT",{type:!0,placeholder:!0}),Te=h(_),B=d(_,"INPUT",{type:!0,placeholder:!0}),Ie=h(_),C&&C.l(_),_.forEach(c),ke=h(_e),K=d(_e,"SECTION",{class:!0});var qe=T(K);g=d(qe,"DIV",{class:!0});var D=T(g);z=d(D,"H2",{class:!0,"data-svelte-h":!0}),N(z)!=="svelte-1m578nd"&&(z.textContent=Re),Pe=h(D),Q=d(D,"P",{class:!0,"data-svelte-h":!0}),N(Q)!=="svelte-11dpcw2"&&(Q.textContent=Se),De=h(D),W=d(D,"P",{class:!0,"data-svelte-h":!0}),N(W)!=="svelte-1wusp3m"&&(W.textContent=Ve),Ne=h(D),it(Y.$$.fragment,D),Ae=h(D),$=d(D,"P",{class:!0,"data-svelte-h":!0}),N($)!=="svelte-1hnhhb0"&&($.textContent=Be),xe=h(D),X=d(D,"DIV",{id:!0});var Fe=T(X);se=d(Fe,"TABLE",{});var Oe=T(se);ie=d(Oe,"TBODY",{});var je=T(ie);q=d(je,"TR",{});var ve=T(q);w&&w.l(ve),pe=h(ve),P=d(ve,"TD",{class:!0});var ee=T(P);Z=d(ee,"H2",{class:!0});var Ge=T(Z);he=ue(Ge,n[2]),Ge.forEach(c),Ue=h(ee),E&&E.l(ee),me=h(ee),y&&y.l(ee),ee.forEach(c),ve.forEach(c),je.forEach(c),Oe.forEach(c),Fe.forEach(c),D.forEach(c),qe.forEach(c),_e.forEach(c),this.h()},h(){We.title="Gerar assintatura de e-mail (sem cadastro)",u(i,"class","p-4 bg-gray-600"),u(I,"class","text-xl"),u(H,"class","mb-2"),u(L,"class","p-2 px-4 bg-gray-200 -mx-4 mb-2"),u(k,"type","text"),u(k,"placeholder","URL da imagem"),k.disabled=G=!!n[1],u(x,"class","text-center"),u(M,"type","file"),u(M,"accept","image/*"),M.disabled=ce=!!n[0],u(v,"class","flex max-sm:flex-col sm:items-center max-sm:mb-3 gap-2"),u(R,"type","text"),u(R,"placeholder","Nome"),u(S,"type","text"),u(S,"placeholder","Cargo"),u(V,"type","text"),u(V,"placeholder","Empresa"),u(B,"type","text"),u(B,"placeholder","Telefone"),u(a,"class","form flex flex-col gap-2 col-span-3 px-4 py-8 sm:h-full shadow-md"),u(z,"class","bg-blue-200 pl-2"),u(Q,"class","border-b my-2"),u(W,"class","border-b"),u($,"class","my-4"),u(Z,"class","text-xl font-bold"),u(P,"class","align-top pl-2"),Qe(P,"pl-2",n[0]||n[1]),u(X,"id","signature"),u(g,"class","fake-email w-11/12 sm:w-1/2 sm:h-1/2 bg-white shadow-md p-2"),u(K,"class","result flex flex-1 col-span-7 sm:h-full bg-gray-300 items-center justify-center py-8"),u(s,"class","flex flex-col sm:grid grid-cols-1 sm:grid-cols-10 min-h-[calc(100vh-64px)]")},m(r,m){A(r,e,m),A(r,i,m),A(r,l,m),A(r,s,m),o(s,a),o(a,I),o(a,te),o(a,H),o(a,le),o(a,L),o(a,ne),o(a,v),o(v,k),U(k,n[0]),o(v,ae),o(v,x),o(v,be),o(v,M),o(v,Ce),b&&b.m(v,null),o(a,we),o(a,R),U(R,n[2]),o(a,Ee),o(a,S),U(S,n[3]),o(a,ye),o(a,V),U(V,n[4]),o(a,Te),o(a,B),U(B,n[5]),o(a,Ie),C&&C.m(a,null),o(s,ke),o(s,K),o(K,g),o(g,z),o(g,Pe),o(g,Q),o(g,De),o(g,W),o(g,Ne),ot(Y,g,null),o(g,Ae),o(g,$),o(g,xe),o(g,X),o(X,se),o(se,ie),o(ie,q),w&&w.m(q,null),o(q,pe),o(q,P),o(P,Z),o(Z,he),o(P,Ue),E&&E.m(P,null),o(P,me),y&&y.m(P,null),F=!0,He||(Me=[j(k,"input",n[8]),j(M,"change",n[6]),j(R,"input",n[9]),j(S,"input",n[10]),j(V,"input",n[11]),j(B,"input",n[12])],He=!0)},p(r,[m]){(!F||m&2&&G!==(G=!!r[1]))&&(k.disabled=G),m&1&&k.value!==r[0]&&U(k,r[0]),(!F||m&1&&ce!==(ce=!!r[0]))&&(M.disabled=ce),r[1]?b?b.p(r,m):(b=Ye(r),b.c(),b.m(v,null)):b&&(b.d(1),b=null),m&4&&R.value!==r[2]&&U(R,r[2]),m&8&&S.value!==r[3]&&U(S,r[3]),m&16&&V.value!==r[4]&&U(V,r[4]),m&32&&B.value!==r[5]&&U(B,r[5]),r[2]?C?C.p(r,m):(C=$e(),C.c(),C.m(a,null)):C&&(C.d(1),C=null),r[0]||r[1]?w?w.p(r,m):(w=Je(r),w.c(),w.m(q,pe)):w&&(w.d(1),w=null),(!F||m&4)&&ge(he,r[2]),r[3]||r[3]&&r[4]?E?E.p(r,m):(E=Ke(r),E.c(),E.m(P,me)):E&&(E.d(1),E=null),r[5]?y?y.p(r,m):(y=Ze(r),y.c(),y.m(P,null)):y&&(y.d(1),y=null),(!F||m&3)&&Qe(P,"pl-2",r[0]||r[1])},i(r){F||(rt(Y.$$.fragment,r),F=!0)},o(r){ut(Y.$$.fragment,r),F=!1},d(r){r&&(c(e),c(i),c(l),c(s)),b&&b.d(),C&&C.d(),ft(Y),w&&w.d(),E&&E.d(),y&&y.d(),He=!1,nt(Me)}}}function _t(){var i,t,l;const n=document.getElementById("signature"),e=document.createRange();e.selectNode(n),(i=window.getSelection())==null||i.removeAllRanges(),(t=window.getSelection())==null||t.addRange(e),document.execCommand("copy"),(l=window.getSelection())==null||l.removeAllRanges(),alert("Assinatura copiada para a área de transferência!")}function vt(n,e,i){let t="",l,s="",a="",I="",J="";function te(v){const k=v.target.files[0];if(k){const G=new FileReader;G.onload=ae=>{const x=new Image;x.onload=()=>{i(1,l=ht(x))},x.src=ae.target.result},G.readAsDataURL(k)}}function H(){const v=document.querySelector('input[type="file"]');v.value="",i(1,l="")}function fe(){t=this.value,i(0,t)}function le(){s=this.value,i(2,s)}function L(){a=this.value,i(3,a)}function de(){I=this.value,i(4,I)}function ne(){J=this.value,i(5,J)}return[t,l,s,a,I,J,te,H,fe,le,L,de,ne]}class Ct extends tt{constructor(e){super(),lt(this,e,vt,mt,et,{})}}export{Ct as component};
