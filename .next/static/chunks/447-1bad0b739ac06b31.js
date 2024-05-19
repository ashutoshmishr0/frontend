"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{8646:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},6227:function(e,t,n){n.d(t,{p:function(){return i}});var r=n(2265),u=n(9791),f=n(6219);function i(e){let t=(0,r.useRef)(0),{isStatic:n}=(0,r.useContext)(u._);(0,r.useEffect)(()=>{if(n)return;let r=({timestamp:n,delta:r})=>{t.current||(t.current=n),e(n-t.current,r)};return f.Wi.update(r,!0),()=>(0,f.Pn)(r)},[e])}},8565:function(e,t,n){n.d(t,{N:function(){return i}});var r=n(5282),u=n(9033),f=n(6219);function i(e,t){let n=(0,r.c)(t()),i=()=>n.set(t());return i(),(0,u.L)(()=>{let t=()=>f.Wi.preRender(i,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,f.Pn)(i)}}),n}},4846:function(e,t,n){n.d(t,{Y:function(){return f}});var r=n(8565),u=n(8322);function f(e,...t){let n=e.length;return(0,r.N)(t.filter(u.i),function(){let r="";for(let f=0;f<n;f++){r+=e[f];let n=t[f];n&&(r+=(0,u.i)(n)?n.get():n)}return r})}},5282:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(2265),u=n(804),f=n(9791),i=n(458);function o(e){let t=(0,i.h)(()=>(0,u.BX)(e)),{isStatic:n}=(0,r.useContext)(f._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},6391:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(2265),u=n(8322),f=n(5282),i=n(9791),o=n(9033),c=n(6967),l=n(6219);function a(e,t={}){let{isStatic:n}=(0,r.useContext)(i._),a=(0,r.useRef)(null),s=(0,f.c)((0,u.i)(e)?e.get():e),p=()=>{a.current&&a.current.stop()};return(0,r.useInsertionEffect)(()=>s.attach((e,r)=>{if(n)return r(e);let u=a.current;return u&&0===u.time&&u.sample(l.frameData.delta),p(),a.current=(0,c.y)({keyframes:[s.get(),e],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),s.get()},p),[JSON.stringify(t)]),(0,o.L)(()=>{if((0,u.i)(e))return e.on("change",e=>s.set(parseFloat(e)))},[s]),s}},831:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(2548);let u=e=>e&&"object"==typeof e&&e.mix,f=e=>u(e)?e.mix:void 0;var i=n(8565),o=n(458),c=n(804);function l(e,t,n,u){if("function"==typeof e)return function(e){c.S1.current=[],e();let t=(0,i.N)(c.S1.current,e);return c.S1.current=void 0,t}(e);let o="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,u=e[0+n],i=e[1+n],o=e[2+n],c=e[3+n],l=(0,r.s)(i,o,{mixer:f(o[0]),...c});return t?l(u):l}(t,n,u);return Array.isArray(e)?a(e,o):a([e],([e])=>o(e))}function a(e,t){let n=(0,o.h)(()=>[]);return(0,i.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}},8184:function(e,t,n){n.d(t,{zz:function(){return o}});let r=1/3,u=1/6,f=e=>0|Math.floor(e),i=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function o(e=Math.random){let t=function(e){let t=new Uint8Array(512);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),u=t[n];t[n]=t[r],t[r]=u}for(let e=256;e<512;e++)t[e]=t[e-256];return t}(e),n=new Float64Array(t).map(e=>i[e%12*3]),o=new Float64Array(t).map(e=>i[e%12*3+1]),c=new Float64Array(t).map(e=>i[e%12*3+2]);return function(e,i,l){let a,s,p,y,d,h,g,m,v,A;let w=(e+i+l)*r,_=f(e+w),N=f(i+w),b=f(l+w),x=(_+N+b)*u,E=e-(_-x),S=i-(N-x),k=l-(b-x);E>=S?S>=k?(d=1,h=0,g=0,m=1,v=1,A=0):(E>=k?(d=1,h=0,g=0):(d=0,h=0,g=1),m=1,v=0,A=1):S<k?(d=0,h=0,g=1,m=0,v=1,A=1):E<k?(d=0,h=1,g=0,m=0,v=1,A=1):(d=0,h=1,g=0,m=1,v=1,A=0);let C=E-d+u,F=S-h+u,j=k-g+u,z=E-m+2*u,O=S-v+2*u,P=k-A+2*u,R=E-1+3*u,D=S-1+3*u,L=k-1+3*u,M=255&_,U=255&N,W=255&b,q=.6-E*E-S*S-k*k;if(q<0)a=0;else{let e=M+t[U+t[W]];q*=q,a=q*q*(n[e]*E+o[e]*S+c[e]*k)}let B=.6-C*C-F*F-j*j;if(B<0)s=0;else{let e=M+d+t[U+h+t[W+g]];B*=B,s=B*B*(n[e]*C+o[e]*F+c[e]*j)}let H=.6-z*z-O*O-P*P;if(H<0)p=0;else{let e=M+m+t[U+v+t[W+A]];H*=H,p=H*H*(n[e]*z+o[e]*O+c[e]*P)}let I=.6-R*R-D*D-L*L;if(I<0)y=0;else{let e=M+1+t[U+1+t[W+1]];I*=I,y=I*I*(n[e]*R+o[e]*D+c[e]*L)}return 32*(a+s+p+y)}}}}]);