import{S as H,i as K,s as X,k as b,l as w,m as k,h as o,b as P,F,X as te,Y as se,o as G,w as ne,q,a as B,y as J,r as E,c as C,z as Q,n as L,E as h,A as W,g as Z,d as $,B as ee,u as ae}from"../chunks/index.ba8c4f3a.js";import{g as le}from"../chunks/navigation.640da136.js";import{l as oe,P as re}from"../chunks/public.56157045.js";import{E as ie}from"../chunks/Elements.5d1cb5c6.js";function ce(i){let t;return{c(){t=b("div")},l(s){t=w(s,"DIV",{}),k(t).forEach(o)},m(s,a){P(s,t,a),i[6](t)},p:F,i:F,o:F,d(s){s&&o(t),i[6](null)}}}function me(i,t,s){let{classes:a={}}=t,{style:n={}}=t,{paymentRequest:l}=t,{element:r=null}=t,{canMakePayment:_=null}=t,d,y;const u=te(),{stripe:D,elements:v}=se("stripe");G(async()=>{y=D.paymentRequest(l);const c={classes:a,style:{paymentRequestButton:n},paymentRequest:y};s(1,r=v.create("paymentRequestButton",c));const A=await y.canMakePayment();return y.on("token",p=>u("token",p)),y.on("cancel",p=>u("cancel",p)),y.on("paymentmethod",p=>u("paymentmethod",p)),y.on("shippingaddresschange",p=>u("shippingaddresschange",p)),y.on("shippingoptionchange",p=>u("shippingoptionchange",p)),A?(s(2,_=!0),r.mount(d)):(s(2,_=!1),s(0,d.style.display="none",d)),()=>r.destroy()});function I(c){ne[c?"unshift":"push"](()=>{d=c,s(0,d)})}return i.$$set=c=>{"classes"in c&&s(3,a=c.classes),"style"in c&&s(4,n=c.style),"paymentRequest"in c&&s(5,l=c.paymentRequest),"element"in c&&s(1,r=c.element),"canMakePayment"in c&&s(2,_=c.canMakePayment)},[d,r,_,a,n,l,I]}class ue extends H{constructor(t){super(),K(this,t,me,ce,X,{classes:3,style:4,paymentRequest:5,element:1,canMakePayment:2})}}function z(i){let t,s=i[1].message+"",a,n;return{c(){t=b("p"),a=q(s),n=q(" Please try again."),this.h()},l(l){t=w(l,"P",{class:!0});var r=k(t);a=E(r,s),n=E(r," Please try again."),r.forEach(o),this.h()},h(){L(t,"class","error svelte-cwv56c")},m(l,r){P(l,t,r),h(t,a),h(t,n)},p(l,r){r&2&&s!==(s=l[1].message+"")&&ae(a,s)},d(l){l&&o(t)}}}function pe(i){let t,s,a;return s=new ue({props:{paymentRequest:i[2]}}),s.$on("paymentmethod",i[3]),{c(){t=b("div"),J(s.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var l=k(t);Q(s.$$.fragment,l),l.forEach(o),this.h()},h(){L(t,"class","wrapper svelte-cwv56c")},m(n,l){P(n,t,l),W(s,t,null),a=!0},p:F,i(n){a||(Z(s.$$.fragment,n),a=!0)},o(n){$(s.$$.fragment,n),a=!1},d(n){n&&o(t),ee(s)}}}function fe(i){let t,s,a,n,l,r,_,d,y,u,D,v,I,c,A,p,M,N,V,S,g,T,f=i[1]&&z(i);return g=new ie({props:{stripe:i[0],$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){t=b("h1"),s=q("Payment Request Example"),a=B(),n=b("p"),l=q("If you see a blank screen, it's because this demo will only work if the TLD is "),r=b("code"),_=q("https://localhost"),d=q(" or if you're using production keys."),y=B(),u=b("p"),D=q("For ApplePay, the production domain must be "),v=b("a"),I=q("submitted to Apple"),c=q("."),A=B(),p=b("nav"),M=b("a"),N=q("View code"),V=B(),f&&f.c(),S=B(),J(g.$$.fragment),this.h()},l(e){t=w(e,"H1",{});var m=k(t);s=E(m,"Payment Request Example"),m.forEach(o),a=C(e),n=w(e,"P",{});var R=k(n);l=E(R,"If you see a blank screen, it's because this demo will only work if the TLD is "),r=w(R,"CODE",{});var O=k(r);_=E(O,"https://localhost"),O.forEach(o),d=E(R," or if you're using production keys."),R.forEach(o),y=C(e),u=w(e,"P",{});var j=k(u);D=E(j,"For ApplePay, the production domain must be "),v=w(j,"A",{href:!0});var x=k(v);I=E(x,"submitted to Apple"),x.forEach(o),c=E(j,"."),j.forEach(o),A=C(e),p=w(e,"NAV",{});var U=k(p);M=w(U,"A",{href:!0});var Y=k(M);N=E(Y,"View code"),Y.forEach(o),U.forEach(o),V=C(e),f&&f.l(e),S=C(e),Q(g.$$.fragment,e),this.h()},h(){L(v,"href","https://support.stripe.com/questions/enable-apple-pay-on-your-stripe-account"),L(M,"href","https://github.com/joshnuss/svelte-stripe/tree/main/src/routes/examples/payment-request")},m(e,m){P(e,t,m),h(t,s),P(e,a,m),P(e,n,m),h(n,l),h(n,r),h(r,_),h(n,d),P(e,y,m),P(e,u,m),h(u,D),h(u,v),h(v,I),h(u,c),P(e,A,m),P(e,p,m),h(p,M),h(M,N),P(e,V,m),f&&f.m(e,m),P(e,S,m),W(g,e,m),T=!0},p(e,[m]){e[1]?f?f.p(e,m):(f=z(e),f.c(),f.m(S.parentNode,S)):f&&(f.d(1),f=null);const R={};m&1&&(R.stripe=e[0]),m&16&&(R.$$scope={dirty:m,ctx:e}),g.$set(R)},i(e){T||(Z(g.$$.fragment,e),T=!0)},o(e){$(g.$$.fragment,e),T=!1},d(e){e&&o(t),e&&o(a),e&&o(n),e&&o(y),e&&o(u),e&&o(A),e&&o(p),e&&o(V),f&&f.d(e),e&&o(S),ee(g,e)}}}async function ye(){const i=await fetch("/examples/payment-request/payment-intent",{method:"POST"}),{clientSecret:t}=await i.json();return t}function he(i,t,s){let a=null,n=null;const l={country:"US",currency:"usd",total:{label:"Demo total",amount:1099},requestPayerName:!0,requestPayerEmail:!0};G(async()=>{s(0,a=await oe(re))});async function r(_){const d=_.detail.paymentMethod,y=await ye();let u=await a.confirmCardPayment(y,{payment_method:d.id});u.error?(_.detail.complete("fail"),s(1,n=u.error)):(_.detail.complete("success"),le("/examples/payment-request/thanks"))}return[a,n,l,r]}class Ee extends H{constructor(t){super(),K(this,t,he,fe,X,{})}}export{Ee as component};