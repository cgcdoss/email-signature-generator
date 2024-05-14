import{s as Ke,n as oe,r as et,f as je}from"../chunks/scheduler.DypdDQBO.js";import{S as Xe,i as Ze,e as f,c as d,y as U,g as L,d as c,s as p,u as tt,t as re,z as lt,f as h,a as I,v as nt,b as ue,o as u,A as Me,h as s,B as R,w as at,C as j,j as ve,k as st,l as it,x as ot}from"../chunks/index.Jla9k6K_.js";const rt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ut(n){let t,a='<div class="mt-4 p-2 bg-gray-300 w-48"></div> <div class="mt-1 p-2 bg-gray-300 w-36"></div> <div class="mt-1 p-2 bg-gray-300 w-28"></div>';return{c(){t=f("div"),t.innerHTML=a},l(e){t=d(e,"DIV",{"data-svelte-h":!0}),U(t)!=="svelte-1oh3mpv"&&(t.innerHTML=a)},m(e,l){L(e,t,l)},p:oe,i:oe,o:oe,d(e){e&&c(t)}}}class ft extends Xe{constructor(t){super(),Ze(this,t,null,ut,Ke,{})}}function dt(n){const t=document.createElement("canvas"),a=t.getContext("2d"),e=800,l=600;let i=n.width,r=n.height;return i>r?i>e&&(r*=e/i,i=e):r>l&&(i*=l/r,r=l),t.width=i,t.height=r,a.drawImage(n,0,0,i,r),t.toDataURL("image/jpeg",.7)}const{document:Ge}=rt;function ze(n){let t,a="Limpar",e,l;return{c(){t=f("button"),t.textContent=a,this.h()},l(i){t=d(i,"BUTTON",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-jqkl3"&&(t.textContent=a),this.h()},h(){u(t,"class","bg-slate-300 p-1")},m(i,r){L(i,t,r),e||(l=j(t,"click",n[7]),e=!0)},p:oe,d(i){i&&c(t),e=!1,l()}}}function Qe(n){let t,a="Copiar assinatura",e,l;return{c(){t=f("button"),t.textContent=a,this.h()},l(i){t=d(i,"BUTTON",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-18cln9n"&&(t.textContent=a),this.h()},h(){u(t,"class","bg-slate-600 text-white hover:bg-slate-700 p-4 transition-colors")},m(i,r){L(i,t,r),e||(l=j(t,"click",pt),e=!0)},p:oe,d(i){i&&c(t),e=!1,l()}}}function We(n){let t,a,e,l;return{c(){t=f("td"),a=f("div"),e=f("img"),this.h()},l(i){t=d(i,"TD",{});var r=I(t);a=d(r,"DIV",{});var T=I(a);e=d(T,"IMG",{src:!0,alt:!0,width:!0,height:!0}),T.forEach(c),r.forEach(c),this.h()},h(){je(e.src,l=n[0]||n[1])||u(e,"src",l),u(e,"alt","logo assinatura"),u(e,"width","150"),u(e,"height","150")},m(i,r){L(i,t,r),s(t,a),s(a,e)},p(i,r){r&3&&!je(e.src,l=i[0]||i[1])&&u(e,"src",l)},d(i){i&&c(t)}}}function Ye(n){let t,a,e,l=n[4]&&$e(n);return{c(){t=f("h3"),a=re(n[3]),e=p(),l&&l.c(),this.h()},l(i){t=d(i,"H3",{class:!0});var r=I(t);a=ue(r,n[3]),e=h(r),l&&l.l(r),r.forEach(c),this.h()},h(){u(t,"class","text-lg")},m(i,r){L(i,t,r),s(t,a),s(t,e),l&&l.m(t,null)},p(i,r){r&8&&ve(a,i[3]),i[4]?l?l.p(i,r):(l=$e(i),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(i){i&&c(t),l&&l.d()}}}function $e(n){let t,a;return{c(){t=re("em "),a=re(n[4])},l(e){t=ue(e,"em "),a=ue(e,n[4])},m(e,l){L(e,t,l),L(e,a,l)},p(e,l){l&16&&ve(a,e[4])},d(e){e&&(c(t),c(a))}}}function Je(n){let t,a;return{c(){t=f("p"),a=re(n[5])},l(e){t=d(e,"P",{});var l=I(t);a=ue(l,n[5]),l.forEach(c)},m(e,l){L(e,t,l),s(t,a)},p(e,l){l&32&&ve(a,e[5])},d(e){e&&c(t)}}}function ct(n){let t,a,e,l,i="Preencha as informações abaixo e depois clique em Copiar assinatura",r,T,$=`Depois basta colar (Ctrl + V) no campo de texto do seu serviço de
            e-mail`,te,S,fe="Geral",le,E,P,J,M,A,ne="ou",ae,N,de,ge,be,H,Ce,V,we,x,ye,B,Ee,Ie,K,v,G,Re="Novo email",Te,z,Le="De",ke,Q,Se="Para",Pe,W,Ne,Y,He="Atenciosamente,",De,X,se,ie,q,ce,k,Z,pe,Ue,he,F,Ae,Ve,g=n[1]&&ze(n),b=n[2]&&Qe();W=new ft({});let C=(n[0]||n[1])&&We(n),w=(n[3]||n[3]&&n[4])&&Ye(n),y=n[5]&&Je(n);return{c(){t=p(),a=f("main"),e=f("section"),l=f("h2"),l.textContent=i,r=p(),T=f("p"),T.textContent=$,te=p(),S=f("div"),S.textContent=fe,le=p(),E=f("div"),P=f("input"),M=p(),A=f("p"),A.textContent=ne,ae=p(),N=f("input"),ge=p(),g&&g.c(),be=p(),H=f("input"),Ce=p(),V=f("input"),we=p(),x=f("input"),ye=p(),B=f("input"),Ee=p(),b&&b.c(),Ie=p(),K=f("section"),v=f("div"),G=f("h2"),G.textContent=Re,Te=p(),z=f("p"),z.textContent=Le,ke=p(),Q=f("p"),Q.textContent=Se,Pe=p(),tt(W.$$.fragment),Ne=p(),Y=f("p"),Y.textContent=He,De=p(),X=f("div"),se=f("table"),ie=f("tbody"),q=f("tr"),C&&C.c(),ce=p(),k=f("td"),Z=f("h2"),pe=re(n[2]),Ue=p(),w&&w.c(),he=p(),y&&y.c(),this.h()},l(o){lt("svelte-7fn4hk",Ge.head).forEach(c),t=h(o),a=d(o,"MAIN",{class:!0});var me=I(a);e=d(me,"SECTION",{class:!0});var _=I(e);l=d(_,"H2",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-e199i6"&&(l.textContent=i),r=h(_),T=d(_,"P",{class:!0,"data-svelte-h":!0}),U(T)!=="svelte-1th4bnl"&&(T.textContent=$),te=h(_),S=d(_,"DIV",{class:!0,"data-svelte-h":!0}),U(S)!=="svelte-10yzbyx"&&(S.textContent=fe),le=h(_),E=d(_,"DIV",{class:!0});var O=I(E);P=d(O,"INPUT",{type:!0,placeholder:!0}),M=h(O),A=d(O,"P",{class:!0,"data-svelte-h":!0}),U(A)!=="svelte-g8ofx0"&&(A.textContent=ne),ae=h(O),N=d(O,"INPUT",{type:!0,accept:!0}),ge=h(O),g&&g.l(O),O.forEach(c),be=h(_),H=d(_,"INPUT",{type:!0,placeholder:!0}),Ce=h(_),V=d(_,"INPUT",{type:!0,placeholder:!0}),we=h(_),x=d(_,"INPUT",{type:!0,placeholder:!0}),ye=h(_),B=d(_,"INPUT",{type:!0,placeholder:!0}),Ee=h(_),b&&b.l(_),_.forEach(c),Ie=h(me),K=d(me,"SECTION",{class:!0});var xe=I(K);v=d(xe,"DIV",{class:!0});var D=I(v);G=d(D,"H2",{class:!0,"data-svelte-h":!0}),U(G)!=="svelte-1m578nd"&&(G.textContent=Re),Te=h(D),z=d(D,"P",{class:!0,"data-svelte-h":!0}),U(z)!=="svelte-11dpcw2"&&(z.textContent=Le),ke=h(D),Q=d(D,"P",{class:!0,"data-svelte-h":!0}),U(Q)!=="svelte-1wusp3m"&&(Q.textContent=Se),Pe=h(D),nt(W.$$.fragment,D),Ne=h(D),Y=d(D,"P",{class:!0,"data-svelte-h":!0}),U(Y)!=="svelte-1hnhhb0"&&(Y.textContent=He),De=h(D),X=d(D,"DIV",{id:!0});var Be=I(X);se=d(Be,"TABLE",{});var qe=I(se);ie=d(qe,"TBODY",{});var Fe=I(ie);q=d(Fe,"TR",{});var _e=I(q);C&&C.l(_e),ce=h(_e),k=d(_e,"TD",{class:!0});var ee=I(k);Z=d(ee,"H2",{class:!0});var Oe=I(Z);pe=ue(Oe,n[2]),Oe.forEach(c),Ue=h(ee),w&&w.l(ee),he=h(ee),y&&y.l(ee),ee.forEach(c),_e.forEach(c),Fe.forEach(c),qe.forEach(c),Be.forEach(c),D.forEach(c),xe.forEach(c),me.forEach(c),this.h()},h(){Ge.title="Gerar assintatura de e-mail (sem cadastro)",u(l,"class","text-xl"),u(T,"class","mb-2"),u(S,"class","p-2 px-4 bg-gray-200 -mx-4 mb-2"),u(P,"type","text"),u(P,"placeholder","URL da imagem"),P.disabled=J=!!n[1],u(A,"class","text-center"),u(N,"type","file"),u(N,"accept","image/*"),N.disabled=de=!!n[0],u(E,"class","flex max-sm:flex-col sm:items-center max-sm:mb-3 gap-2"),u(H,"type","text"),u(H,"placeholder","Nome"),u(V,"type","text"),u(V,"placeholder","Cargo"),u(x,"type","text"),u(x,"placeholder","Empresa"),u(B,"type","text"),u(B,"placeholder","Telefone"),u(e,"class","form flex flex-col gap-2 col-span-3 px-4 py-8 sm:min-h-[100vh] shadow-md"),u(G,"class","bg-blue-200 pl-2"),u(z,"class","border-b my-2"),u(Q,"class","border-b"),u(Y,"class","my-4"),u(Z,"class","text-xl font-bold"),u(k,"class","align-top pl-2"),Me(k,"pl-2",n[0]||n[1]),u(X,"id","signature"),u(v,"class","fake-email w-11/12 sm:w-1/2 sm:h-1/2 bg-white shadow-md p-2"),u(K,"class","result flex flex-1 col-span-7 sm:min-h-[100vh] bg-gray-300 items-center justify-center py-8"),u(a,"class","flex flex-col sm:grid grid-cols-1 sm:grid-cols-10 min-h-[100vh]")},m(o,m){L(o,t,m),L(o,a,m),s(a,e),s(e,l),s(e,r),s(e,T),s(e,te),s(e,S),s(e,le),s(e,E),s(E,P),R(P,n[0]),s(E,M),s(E,A),s(E,ae),s(E,N),s(E,ge),g&&g.m(E,null),s(e,be),s(e,H),R(H,n[2]),s(e,Ce),s(e,V),R(V,n[3]),s(e,we),s(e,x),R(x,n[4]),s(e,ye),s(e,B),R(B,n[5]),s(e,Ee),b&&b.m(e,null),s(a,Ie),s(a,K),s(K,v),s(v,G),s(v,Te),s(v,z),s(v,ke),s(v,Q),s(v,Pe),at(W,v,null),s(v,Ne),s(v,Y),s(v,De),s(v,X),s(X,se),s(se,ie),s(ie,q),C&&C.m(q,null),s(q,ce),s(q,k),s(k,Z),s(Z,pe),s(k,Ue),w&&w.m(k,null),s(k,he),y&&y.m(k,null),F=!0,Ae||(Ve=[j(P,"input",n[8]),j(N,"change",n[6]),j(H,"input",n[9]),j(V,"input",n[10]),j(x,"input",n[11]),j(B,"input",n[12])],Ae=!0)},p(o,[m]){(!F||m&2&&J!==(J=!!o[1]))&&(P.disabled=J),m&1&&P.value!==o[0]&&R(P,o[0]),(!F||m&1&&de!==(de=!!o[0]))&&(N.disabled=de),o[1]?g?g.p(o,m):(g=ze(o),g.c(),g.m(E,null)):g&&(g.d(1),g=null),m&4&&H.value!==o[2]&&R(H,o[2]),m&8&&V.value!==o[3]&&R(V,o[3]),m&16&&x.value!==o[4]&&R(x,o[4]),m&32&&B.value!==o[5]&&R(B,o[5]),o[2]?b?b.p(o,m):(b=Qe(),b.c(),b.m(e,null)):b&&(b.d(1),b=null),o[0]||o[1]?C?C.p(o,m):(C=We(o),C.c(),C.m(q,ce)):C&&(C.d(1),C=null),(!F||m&4)&&ve(pe,o[2]),o[3]||o[3]&&o[4]?w?w.p(o,m):(w=Ye(o),w.c(),w.m(k,he)):w&&(w.d(1),w=null),o[5]?y?y.p(o,m):(y=Je(o),y.c(),y.m(k,null)):y&&(y.d(1),y=null),(!F||m&3)&&Me(k,"pl-2",o[0]||o[1])},i(o){F||(st(W.$$.fragment,o),F=!0)},o(o){it(W.$$.fragment,o),F=!1},d(o){o&&(c(t),c(a)),g&&g.d(),b&&b.d(),ot(W),C&&C.d(),w&&w.d(),y&&y.d(),Ae=!1,et(Ve)}}}function pt(){var a,e,l;const n=document.getElementById("signature"),t=document.createRange();t.selectNode(n),(a=window.getSelection())==null||a.removeAllRanges(),(e=window.getSelection())==null||e.addRange(t),document.execCommand("copy"),(l=window.getSelection())==null||l.removeAllRanges(),alert("Assinatura copiada para a área de transferência!")}function ht(n,t,a){let e="",l,i="",r="",T="",$="";function te(M){const A=M.target.files[0];if(A){const ne=new FileReader;ne.onload=ae=>{const N=new Image;N.onload=()=>{a(1,l=dt(N))},N.src=ae.target.result},ne.readAsDataURL(A)}}function S(){const M=document.querySelector('input[type="file"]');M.value="",a(1,l="")}function fe(){e=this.value,a(0,e)}function le(){i=this.value,a(2,i)}function E(){r=this.value,a(3,r)}function P(){T=this.value,a(4,T)}function J(){$=this.value,a(5,$)}return[e,l,i,r,T,$,te,S,fe,le,E,P,J]}class vt extends Xe{constructor(t){super(),Ze(this,t,ht,ct,Ke,{})}}export{vt as component};
