import{a5 as q,r as Ge,j as h,m as K,a6 as Lt,F as Ze,a7 as It,a8 as Nt,a9 as Ot,aa as Rt,ab as Pt,ac as Ut,$ as qt,ad as Bt,ae as zt,d as P,l as Le}from"./index-Bnp4YoXJ.js";var ye=e=>e.type==="checkbox",ie=e=>e instanceof Date,N=e=>e==null;const yt=e=>typeof e=="object";var k=e=>!N(e)&&!Array.isArray(e)&&yt(e)&&!ie(e),Ht=e=>k(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,Wt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$t=(e,s)=>e.has(Wt(s)),Kt=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Ie=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ie&&(e instanceof Blob||a))&&(r||k(e)))if(s=r?[]:{},!r&&!Kt(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=M(e[l]));else return e;return s}var we=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,g=(e,s,r)=>{if(!s||!k(e))return r;const a=we(s.split(/[,[\].]+?/)).reduce((l,n)=>N(l)?l:l[n],e);return D(a)||a===e?D(e[s])?r:e[s]:a},$=e=>typeof e=="boolean",Ne=e=>/^\w*$/.test(e),mt=e=>we(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,r)=>{let a=-1;const l=Ne(s)?[s]:mt(s),n=l.length,c=n-1;for(;++a<n;){const y=l[a];let j=r;if(a!==c){const L=e[y];j=k(L)||Array.isArray(L)?L:isNaN(+l[a+1])?{}:[]}if(y==="__proto__"||y==="constructor"||y==="prototype")return;e[y]=j,e=e[y]}};const Qe={BLUR:"blur",FOCUS_OUT:"focusout"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var Xt=(e,s,r,a=!0)=>{const l={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(l,n,{get:()=>{const c=n;return s._proxyFormState[c]!==B.all&&(s._proxyFormState[c]=!a||B.all),e[c]}});return l},Me=e=>N(e)||!yt(e);function re(e,s){if(Me(e)||Me(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const l of r){const n=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const c=s[l];if(ie(n)&&ie(c)||k(n)&&k(c)||Array.isArray(n)&&Array.isArray(c)?!re(n,c):n!==c)return!1}}return!0}var X=e=>typeof e=="string",Jt=(e,s,r,a,l)=>X(e)?(a&&s.watch.add(e),g(r,e,l)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),g(r,n))):(a&&(s.watchAll=!0),r),Yt=(e,s,r,a,l)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:l||!0}}:{},ue=e=>Array.isArray(e)?e:[e],et=()=>{let e=[];return{get observers(){return e},next:l=>{for(const n of e)n.next&&n.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(n=>n!==l)}}),unsubscribe:()=>{e=[]}}},I=e=>k(e)&&!Object.keys(e).length,Oe=e=>e.type==="file",z=e=>typeof e=="function",ve=e=>{if(!Ie)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},gt=e=>e.type==="select-multiple",Re=e=>e.type==="radio",Gt=e=>Re(e)||ye(e),De=e=>ve(e)&&e.isConnected;function Zt(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=D(e)?a++:e[s[a++]];return e}function Qt(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Ne(s)?[s]:mt(s),a=r.length===1?e:Zt(e,r),l=r.length-1,n=r[l];return a&&delete a[n],l!==0&&(k(a)&&I(a)||Array.isArray(a)&&Qt(a))&&E(e,r.slice(0,-1)),e}var xt=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function pe(e,s={}){const r=Array.isArray(e);if(k(e)||r)for(const a in e)Array.isArray(e[a])||k(e[a])&&!xt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},pe(e[a],s[a])):N(e[a])||(s[a]=!0);return s}function vt(e,s,r){const a=Array.isArray(e);if(k(e)||a)for(const l in e)Array.isArray(e[l])||k(e[l])&&!xt(e[l])?D(s)||Me(r[l])?r[l]=Array.isArray(e[l])?pe(e[l],[]):{...pe(e[l])}:vt(e[l],N(s)?{}:s[l],r[l]):r[l]=!re(e[l],s[l]);return r}var de=(e,s)=>vt(e,s,pe(s));const tt={value:!1,isValid:!1},rt={value:!0,isValid:!0};var pt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?rt:{value:e[0].value,isValid:!0}:rt:tt}return tt},bt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>D(e)?e:s?e===""?NaN:e&&+e:r&&X(e)?new Date(e):a?a(e):e;const st={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,st):st;function it(e){const s=e.ref;return Oe(s)?s.files:Re(s)?wt(e.refs).value:gt(s)?[...s.selectedOptions].map(({value:r})=>r):ye(s)?pt(e.refs).value:bt(D(s.value)?e.ref.value:s.value,e)}var er=(e,s,r,a)=>{const l={};for(const n of e){const c=g(s,n);c&&V(l,n,c._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:a}},be=e=>e instanceof RegExp,ce=e=>D(e)?e:be(e)?e.source:k(e)?be(e.value)?e.value.source:e.value:e,at=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched});const nt="AsyncFunction";var tr=e=>!!e&&!!e.validate&&!!(z(e.validate)&&e.validate.constructor.name===nt||k(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===nt)),rr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ot=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const fe=(e,s,r,a)=>{for(const l of r||Object.keys(e)){const n=g(e,l);if(n){const{_f:c,...y}=n;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],l)&&!a)return!0;if(c.ref&&s(c.ref,c.name)&&!a)return!0;if(fe(y,s))break}else if(k(y)&&fe(y,s))break}}};function lt(e,s,r){const a=g(e,r);if(a||Ne(r))return{error:a,name:r};const l=r.split(".");for(;l.length;){const n=l.join("."),c=g(s,n),y=g(e,n);if(c&&!Array.isArray(c)&&r!==n)return{name:r};if(y&&y.type)return{name:n,error:y};l.pop()}return{name:r}}var sr=(e,s,r,a)=>{r(e);const{name:l,...n}=e;return I(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(c=>s[c]===(!a||B.all))},ir=(e,s,r)=>!e||!s||e===s||ue(e).some(a=>a&&(r?a===s:a.startsWith(s)||s.startsWith(a))),ar=(e,s,r,a,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(s||e):(r?a.isOnBlur:l.isOnBlur)?!e:(r?a.isOnChange:l.isOnChange)?e:!0,nr=(e,s)=>!we(g(e,s)).length&&E(e,s),or=(e,s,r)=>{const a=ue(g(e,r));return V(a,"root",s[r]),V(e,r,a),e},xe=e=>X(e);function dt(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||$(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var ae=e=>k(e)&&!be(e)?e:{value:e,message:""},ct=async(e,s,r,a,l,n)=>{const{ref:c,refs:y,required:j,maxLength:L,minLength:F,min:x,max:v,pattern:me,validate:ee,name:O,valueAsNumber:_e,mount:J}=e._f,p=g(r,O);if(!J||s.has(O))return{};const Y=y?y[0]:c,G=_=>{l&&Y.reportValidity&&(Y.setCustomValidity($(_)?"":_||""),Y.reportValidity())},C={},ne=Re(c),oe=ye(c),Fe=ne||oe,H=(_e||Oe(c))&&D(c.value)&&D(p)||ve(c)&&c.value===""||p===""||Array.isArray(p)&&!p.length,se=Yt.bind(null,O,a,C),Z=(_,b,A,R=Q.maxLength,U=Q.minLength)=>{const W=_?b:A;C[O]={type:_?R:U,message:W,ref:c,...se(_?R:U,W)}};if(n?!Array.isArray(p)||!p.length:j&&(!Fe&&(H||N(p))||$(p)&&!p||oe&&!pt(y).isValid||ne&&!wt(y).isValid)){const{value:_,message:b}=xe(j)?{value:!!j,message:j}:ae(j);if(_&&(C[O]={type:Q.required,message:b,ref:Y,...se(Q.required,b)},!a))return G(b),C}if(!H&&(!N(x)||!N(v))){let _,b;const A=ae(v),R=ae(x);if(!N(p)&&!isNaN(p)){const U=c.valueAsNumber||p&&+p;N(A.value)||(_=U>A.value),N(R.value)||(b=U<R.value)}else{const U=c.valueAsDate||new Date(p),W=ge=>new Date(new Date().toDateString()+" "+ge),te=c.type=="time",le=c.type=="week";X(A.value)&&p&&(_=te?W(p)>W(A.value):le?p>A.value:U>new Date(A.value)),X(R.value)&&p&&(b=te?W(p)<W(R.value):le?p<R.value:U<new Date(R.value))}if((_||b)&&(Z(!!_,A.message,R.message,Q.max,Q.min),!a))return G(C[O].message),C}if((L||F)&&!H&&(X(p)||n&&Array.isArray(p))){const _=ae(L),b=ae(F),A=!N(_.value)&&p.length>+_.value,R=!N(b.value)&&p.length<+b.value;if((A||R)&&(Z(A,_.message,b.message),!a))return G(C[O].message),C}if(me&&!H&&X(p)){const{value:_,message:b}=ae(me);if(be(_)&&!p.match(_)&&(C[O]={type:Q.pattern,message:b,ref:c,...se(Q.pattern,b)},!a))return G(b),C}if(ee){if(z(ee)){const _=await ee(p,r),b=dt(_,Y);if(b&&(C[O]={...b,...se(Q.validate,b.message)},!a))return G(b.message),C}else if(k(ee)){let _={};for(const b in ee){if(!I(_)&&!a)break;const A=dt(await ee[b](p,r),Y,b);A&&(_={...A,...se(b,A.message)},G(A.message),a&&(C[O]=_))}if(!I(_)&&(C[O]={ref:Y,..._},!a))return C}}return G(!0),C};const lr={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function dr(e={}){let s={...lr,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1};const a={};let l=k(s.defaultValues)||k(s.values)?M(s.values||s.defaultValues)||{}:{},n=s.shouldUnregister?{}:M(l),c={action:!1,mount:!1,watch:!1},y={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},j,L=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let x={...F};const v={array:et(),state:et()},me=at(s.mode),ee=at(s.reValidateMode),O=s.criteriaMode===B.all,_e=t=>i=>{clearTimeout(L),L=setTimeout(t,i)},J=async t=>{if(!s.disabled&&(F.isValid||x.isValid||t)){const i=s.resolver?I((await H()).errors):await Z(a,!0);i!==r.isValid&&v.state.next({isValid:i})}},p=(t,i)=>{!s.disabled&&(F.isValidating||F.validatingFields||x.isValidating||x.validatingFields)&&((t||Array.from(y.mount)).forEach(o=>{o&&(i?V(r.validatingFields,o,i):E(r.validatingFields,o))}),v.state.next({validatingFields:r.validatingFields,isValidating:!I(r.validatingFields)}))},Y=(t,i=[],o,f,u=!0,d=!0)=>{if(f&&o&&!s.disabled){if(c.action=!0,d&&Array.isArray(g(a,t))){const m=o(g(a,t),f.argA,f.argB);u&&V(a,t,m)}if(d&&Array.isArray(g(r.errors,t))){const m=o(g(r.errors,t),f.argA,f.argB);u&&V(r.errors,t,m),nr(r.errors,t)}if((F.touchedFields||x.touchedFields)&&d&&Array.isArray(g(r.touchedFields,t))){const m=o(g(r.touchedFields,t),f.argA,f.argB);u&&V(r.touchedFields,t,m)}(F.dirtyFields||x.dirtyFields)&&(r.dirtyFields=de(l,n)),v.state.next({name:t,isDirty:b(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(n,t,i)},G=(t,i)=>{V(r.errors,t,i),v.state.next({errors:r.errors})},C=t=>{r.errors=t,v.state.next({errors:r.errors,isValid:!1})},ne=(t,i,o,f)=>{const u=g(a,t);if(u){const d=g(n,t,D(o)?g(l,t):o);D(d)||f&&f.defaultChecked||i?V(n,t,i?d:it(u._f)):U(t,d),c.mount&&J()}},oe=(t,i,o,f,u)=>{let d=!1,m=!1;const w={name:t};if(!s.disabled){if(!o||f){(F.isDirty||x.isDirty)&&(m=r.isDirty,r.isDirty=w.isDirty=b(),d=m!==w.isDirty);const S=re(g(l,t),i);m=!!g(r.dirtyFields,t),S?E(r.dirtyFields,t):V(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,d=d||(F.dirtyFields||x.dirtyFields)&&m!==!S}if(o){const S=g(r.touchedFields,t);S||(V(r.touchedFields,t,o),w.touchedFields=r.touchedFields,d=d||(F.touchedFields||x.touchedFields)&&S!==o)}d&&u&&v.state.next(w)}return d?w:{}},Fe=(t,i,o,f)=>{const u=g(r.errors,t),d=(F.isValid||x.isValid)&&$(i)&&r.isValid!==i;if(s.delayError&&o?(j=_e(()=>G(t,o)),j(s.delayError)):(clearTimeout(L),j=null,o?V(r.errors,t,o):E(r.errors,t)),(o?!re(u,o):u)||!I(f)||d){const m={...f,...d&&$(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...m},v.state.next(m)}},H=async t=>{p(t,!0);const i=await s.resolver(n,s.context,er(t||y.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return p(t),i},se=async t=>{const{errors:i}=await H(t);if(t)for(const o of t){const f=g(i,o);f?V(r.errors,o,f):E(r.errors,o)}else r.errors=i;return i},Z=async(t,i,o={valid:!0})=>{for(const f in t){const u=t[f];if(u){const{_f:d,...m}=u;if(d){const w=y.array.has(d.name),S=u._f&&tr(u._f);S&&F.validatingFields&&p([f],!0);const T=await ct(u,y.disabled,n,O,s.shouldUseNativeValidation&&!i,w);if(S&&F.validatingFields&&p([f]),T[d.name]&&(o.valid=!1,i))break;!i&&(g(T,d.name)?w?or(r.errors,T,d.name):V(r.errors,d.name,T[d.name]):E(r.errors,d.name))}!I(m)&&await Z(m,i,o)}}return o.valid},_=()=>{for(const t of y.unMount){const i=g(a,t);i&&(i._f.refs?i._f.refs.every(o=>!De(o)):!De(i._f.ref))&&Ae(t)}y.unMount=new Set},b=(t,i)=>!s.disabled&&(t&&i&&V(n,t,i),!re(Pe(),l)),A=(t,i,o)=>Jt(t,y,{...c.mount?n:D(i)?l:X(t)?{[t]:i}:i},o,i),R=t=>we(g(c.mount?n:l,t,s.shouldUnregister?g(l,t,[]):[])),U=(t,i,o={})=>{const f=g(a,t);let u=i;if(f){const d=f._f;d&&(!d.disabled&&V(n,t,bt(i,d)),u=ve(d.ref)&&N(i)?"":i,gt(d.ref)?[...d.ref.options].forEach(m=>m.selected=u.includes(m.value)):d.refs?ye(d.ref)?d.refs.length>1?d.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(u)?!!u.find(w=>w===m.value):u===m.value)):d.refs[0]&&(d.refs[0].checked=!!u):d.refs.forEach(m=>m.checked=m.value===u):Oe(d.ref)?d.ref.value="":(d.ref.value=u,d.ref.type||v.state.next({name:t,values:M(n)})))}(o.shouldDirty||o.shouldTouch)&&oe(t,u,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&Ve(t)},W=(t,i,o)=>{for(const f in i){const u=i[f],d=`${t}.${f}`,m=g(a,d);(y.array.has(t)||k(u)||m&&!m._f)&&!ie(u)?W(d,u,o):U(d,u,o)}},te=(t,i,o={})=>{const f=g(a,t),u=y.array.has(t),d=M(i);V(n,t,d),u?(v.array.next({name:t,values:M(n)}),(F.isDirty||F.dirtyFields||x.isDirty||x.dirtyFields)&&o.shouldDirty&&v.state.next({name:t,dirtyFields:de(l,n),isDirty:b(t,d)})):f&&!f._f&&!N(d)?W(t,d,o):U(t,d,o),ot(t,y)&&v.state.next({...r}),v.state.next({name:c.mount?t:void 0,values:M(n)})},le=async t=>{c.mount=!0;const i=t.target;let o=i.name,f=!0;const u=g(a,o),d=m=>{f=Number.isNaN(m)||ie(m)&&isNaN(m.getTime())||re(m,g(n,o,m))};if(u){let m,w;const S=i.type?it(u._f):Ht(t),T=t.type===Qe.BLUR||t.type===Qe.FOCUS_OUT,Ct=!rr(u._f)&&!s.resolver&&!g(r.errors,o)&&!u._f.deps||ar(T,g(r.touchedFields,o),r.isSubmitted,ee,me),je=ot(o,y,T);V(n,o,S),T?(u._f.onBlur&&u._f.onBlur(t),j&&j(0)):u._f.onChange&&u._f.onChange(t);const Se=oe(o,S,T),Tt=!I(Se)||je;if(!T&&v.state.next({name:o,type:t.type,values:M(n)}),Ct)return(F.isValid||x.isValid)&&(s.mode==="onBlur"?T&&J():T||J()),Tt&&v.state.next({name:o,...je?{}:Se});if(!T&&je&&v.state.next({...r}),s.resolver){const{errors:Je}=await H([o]);if(d(S),f){const Mt=lt(r.errors,a,o),Ye=lt(Je,a,Mt.name||o);m=Ye.error,o=Ye.name,w=I(Je)}}else p([o],!0),m=(await ct(u,y.disabled,n,O,s.shouldUseNativeValidation))[o],p([o]),d(S),f&&(m?w=!1:(F.isValid||x.isValid)&&(w=await Z(a,!0)));f&&(u._f.deps&&Ve(u._f.deps),Fe(o,w,m,Se))}},ge=(t,i)=>{if(g(r.errors,i)&&t.focus)return t.focus(),1},Ve=async(t,i={})=>{let o,f;const u=ue(t);if(s.resolver){const d=await se(D(t)?t:u);o=I(d),f=t?!u.some(m=>g(d,m)):o}else t?(f=(await Promise.all(u.map(async d=>{const m=g(a,d);return await Z(m&&m._f?{[d]:m}:m)}))).every(Boolean),!(!f&&!r.isValid)&&J()):f=o=await Z(a);return v.state.next({...!X(t)||(F.isValid||x.isValid)&&o!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:o}:{},errors:r.errors}),i.shouldFocus&&!f&&fe(a,ge,t?u:y.mount),f},Pe=t=>{const i={...c.mount?n:l};return D(t)?i:X(t)?g(i,t):t.map(o=>g(i,o))},Ue=(t,i)=>({invalid:!!g((i||r).errors,t),isDirty:!!g((i||r).dirtyFields,t),error:g((i||r).errors,t),isValidating:!!g(r.validatingFields,t),isTouched:!!g((i||r).touchedFields,t)}),Vt=t=>{t&&ue(t).forEach(i=>E(r.errors,i)),v.state.next({errors:t?r.errors:{}})},qe=(t,i,o)=>{const f=(g(a,t,{_f:{}})._f||{}).ref,u=g(r.errors,t)||{},{ref:d,message:m,type:w,...S}=u;V(r.errors,t,{...S,...i,ref:f}),v.state.next({name:t,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&f&&f.focus&&f.focus()},At=(t,i)=>z(t)?v.state.subscribe({next:o=>t(A(void 0,i),o)}):A(t,i,!0),Be=t=>v.state.subscribe({next:i=>{ir(t.name,i.name,t.exact)&&sr(i,t.formState||F,Et,t.reRenderRoot)&&t.callback({values:{...n},...r,...i})}}).unsubscribe,kt=t=>(c.mount=!0,x={...x,...t.formState},Be({...t,formState:x})),Ae=(t,i={})=>{for(const o of t?ue(t):y.mount)y.mount.delete(o),y.array.delete(o),i.keepValue||(E(a,o),E(n,o)),!i.keepError&&E(r.errors,o),!i.keepDirty&&E(r.dirtyFields,o),!i.keepTouched&&E(r.touchedFields,o),!i.keepIsValidating&&E(r.validatingFields,o),!s.shouldUnregister&&!i.keepDefaultValue&&E(l,o);v.state.next({values:M(n)}),v.state.next({...r,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&J()},ze=({disabled:t,name:i})=>{($(t)&&c.mount||t||y.disabled.has(i))&&(t?y.disabled.add(i):y.disabled.delete(i))},ke=(t,i={})=>{let o=g(a,t);const f=$(i.disabled)||$(s.disabled);return V(a,t,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:t}},name:t,mount:!0,...i}}),y.mount.add(t),o?ze({disabled:$(i.disabled)?i.disabled:s.disabled,name:t}):ne(t,!0,i.value),{...f?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:t,onChange:le,onBlur:le,ref:u=>{if(u){ke(t,i),o=g(a,t);const d=D(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,m=Gt(d),w=o._f.refs||[];if(m?w.find(S=>S===d):d===o._f.ref)return;V(a,t,{_f:{...o._f,...m?{refs:[...w.filter(De),d,...Array.isArray(g(l,t))?[{}]:[]],ref:{type:d.type,name:t}}:{ref:d}}}),ne(t,!1,void 0,d)}else o=g(a,t,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!($t(y.array,t)&&c.action)&&y.unMount.add(t)}}},He=()=>s.shouldFocusError&&fe(a,ge,y.mount),jt=t=>{$(t)&&(v.state.next({disabled:t}),fe(a,(i,o)=>{const f=g(a,o);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(u=>{u.disabled=f._f.disabled||t}))},0,!1))},We=(t,i)=>async o=>{let f;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=M(n);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:m}=await H();r.errors=d,u=m}else await Z(a);if(y.disabled.size)for(const d of y.disabled)V(u,d,void 0);if(E(r.errors,"root"),I(r.errors)){v.state.next({errors:{}});try{await t(u,o)}catch(d){f=d}}else i&&await i({...r.errors},o),He(),setTimeout(He);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},St=(t,i={})=>{g(a,t)&&(D(i.defaultValue)?te(t,M(g(l,t))):(te(t,i.defaultValue),V(l,t,M(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?b(t,M(g(l,t))):b()),i.keepError||(E(r.errors,t),F.isValid&&J()),v.state.next({...r}))},$e=(t,i={})=>{const o=t?M(t):l,f=M(o),u=I(t),d=u?l:f;if(i.keepDefaultValues||(l=o),!i.keepValues){if(i.keepDirtyValues){const m=new Set([...y.mount,...Object.keys(de(l,n))]);for(const w of Array.from(m))g(r.dirtyFields,w)?V(d,w,g(n,w)):te(w,g(d,w))}else{if(Ie&&D(t))for(const m of y.mount){const w=g(a,m);if(w&&w._f){const S=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(ve(S)){const T=S.closest("form");if(T){T.reset();break}}}}for(const m of y.mount)te(m,g(d,m))}n=M(d),v.array.next({values:{...d}}),v.state.next({values:{...d}})}y={mount:i.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,c.watch=!!s.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:u?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!re(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?{}:i.keepDirtyValues?i.keepDefaultValues&&n?de(l,n):r.dirtyFields:i.keepDefaultValues&&t?de(l,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ke=(t,i)=>$e(z(t)?t(n):t,i),Dt=(t,i={})=>{const o=g(a,t),f=o&&o._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&z(u.select)&&u.select())}},Et=t=>{r={...r,...t}},Xe={control:{register:ke,unregister:Ae,getFieldState:Ue,handleSubmit:We,setError:qe,_subscribe:Be,_runSchema:H,_getWatch:A,_getDirty:b,_setValid:J,_setFieldArray:Y,_setDisabledField:ze,_setErrors:C,_getFieldArray:R,_reset:$e,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(t=>{Ke(t,s.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:_,_disableForm:jt,_subjects:v,_proxyFormState:F,get _fields(){return a},get _formValues(){return n},get _state(){return c},set _state(t){c=t},get _defaultValues(){return l},get _names(){return y},set _names(t){y=t},get _formState(){return r},get _options(){return s},set _options(t){s={...s,...t}}},subscribe:kt,trigger:Ve,register:ke,handleSubmit:We,watch:At,setValue:te,getValues:Pe,reset:Ke,resetField:St,clearErrors:Vt,unregister:Ae,setError:qe,setFocus:Dt,getFieldState:Ue};return{...Xe,formControl:Xe}}const cr=typeof window<"u"?q.useLayoutEffect:q.useEffect;function ur(e={}){const s=q.useRef(void 0),r=q.useRef(void 0),[a,l]=q.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...e.formControl?e.formControl:dr(e),formState:a},e.formControl&&e.defaultValues&&!z(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const n=s.current.control;return n._options=e,cr(()=>{const c=n._subscribe({formState:n._proxyFormState,callback:()=>l({...n._formState}),reRenderRoot:!0});return l(y=>({...y,isReady:!0})),n._formState.isReady=!0,c},[n]),q.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),q.useEffect(()=>{e.mode&&(n._options.mode=e.mode),e.reValidateMode&&(n._options.reValidateMode=e.reValidateMode),e.errors&&!I(e.errors)&&n._setErrors(e.errors)},[n,e.errors,e.mode,e.reValidateMode]),q.useEffect(()=>{e.shouldUnregister&&n._subjects.state.next({values:n._getWatch()})},[n,e.shouldUnregister]),q.useEffect(()=>{if(n._proxyFormState.isDirty){const c=n._getDirty();c!==a.isDirty&&n._subjects.state.next({isDirty:c})}},[n,a.isDirty]),q.useEffect(()=>{e.values&&!re(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,l(c=>({...c}))):n._resetDefaultValues()},[n,e.values]),q.useEffect(()=>{n._state.mount||(n._setValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Xt(a,n),s.current}const he={_origin:"https://api.emailjs.com"},fr=(e,s="https://api.emailjs.com")=>{he._userID=e,he._origin=s},_t=(e,s,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ut{constructor(s){this.status=s.status,this.text=s.responseText}}const Ft=(e,s,r={})=>new Promise((a,l)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:c})=>{const y=new ut(c);y.status===200||y.text==="OK"?a(y):l(y)}),n.addEventListener("error",({target:c})=>{l(new ut(c))}),n.open("POST",he._origin+e,!0),Object.keys(r).forEach(c=>{n.setRequestHeader(c,r[c])}),n.send(s)}),hr=(e,s,r,a)=>{const l=a||he._userID;return _t(l,e,s),Ft("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:e,template_id:s,template_params:r}),{"Content-type":"application/json"})},yr=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},mr=(e,s,r,a)=>{const l=a||he._userID,n=yr(r);_t(l,e,s);const c=new FormData(n);return c.append("lib_version","3.2.0"),c.append("service_id",e),c.append("template_id",s),c.append("user_id",l),Ft("/api/v1.0/email/send-form",c)},gr={init:fr,send:hr,sendForm:mr};function xr(){const e=["#5b8cff","#8b5cf6","#d946ef","#2dd4bf","#fbbf24","#f43f5e"],s=document.createElement("canvas");s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5000;",document.body.appendChild(s);const r=s.getContext("2d"),a=s.width=window.innerWidth,l=s.height=window.innerHeight,n=Array.from({length:130},()=>({x:Math.random()*a,y:-20-Math.random()*l*.3,w:6+Math.random()*8,h:8+Math.random()*12,color:e[Math.floor(Math.random()*e.length)],vy:2+Math.random()*4,vx:-2+Math.random()*4,rot:Math.random()*Math.PI,vr:-.25+Math.random()*.5})),c=performance.now(),y=j=>{const L=j-c;r.clearRect(0,0,a,l);const F=Math.max(0,1-(L-2e3)/600);n.forEach(x=>{x.x+=x.vx,x.y+=x.vy,x.rot+=x.vr,r.save(),r.globalAlpha=F,r.translate(x.x,x.y),r.rotate(x.rot),r.fillStyle=x.color,r.fillRect(-x.w/2,-x.h/2,x.w,x.h),r.restore()}),L<2600?requestAnimationFrame(y):s.remove()};requestAnimationFrame(y)}const vr=Le`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,pr=Le`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,ft=Le`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(24px, -18px) scale(1.08); }
`,br=P.section`
  padding: 110px 0;
  position: relative;
  overflow: hidden;
`,ht=P.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;

  &.glow-1 {
    width: 420px;
    height: 420px;
    top: -120px;
    right: -140px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.22), transparent 70%);
    animation: ${ft} 14s ease-in-out infinite;
  }

  &.glow-2 {
    width: 380px;
    height: 380px;
    bottom: -120px;
    left: -120px;
    background: radial-gradient(circle, rgba(91, 140, 255, 0.2), transparent 70%);
    animation: ${ft} 18s ease-in-out infinite reverse;
  }
`,wr=P.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 46px;
  }
`,_r=P.div`
  position: relative;
  border-radius: 28px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    background: conic-gradient(
      from 0deg,
      var(--primary),
      var(--accent),
      var(--highlight),
      var(--primary)
    );
    animation: ${vr} 7s linear infinite;
  }
`,Fr=P(K.form)`
  position: relative;
  z-index: 1;
  margin: 2px;
  padding: 36px;
  border-radius: 26px;
  background: var(--bg-elevated);
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .form-hint {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 28px;
  }
`,Ee=P.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  span {
    color: #f87171;
    font-size: 0.78rem;
    display: block;
    margin-top: 6px;
  }
`,Ce=P.div`
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    font-size: 1.05rem;
    transition: color 0.3s ease;
  }

  &.area svg {
    top: 20px;
    transform: none;
  }

  &:focus-within svg {
    color: var(--primary);
  }

  input,
  textarea {
    width: 100%;
    padding: 13px 16px 13px 46px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--surface);
    color: var(--text);
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: var(--text-muted);
      opacity: 0.55;
    }

    &:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(91, 140, 255, 0.18), 0 8px 24px rgba(91, 140, 255, 0.12);
      background: var(--surface-hover);
    }
  }
`,Vr=P(K.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 32px;
  width: 100%;
  background: var(--gradient);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  box-shadow: 0 10px 28px var(--shadow-color);
  margin-top: 6px;
  transition: box-shadow 0.3s ease;

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`,Ar=P.span`
  width: 17px;
  height: 17px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  display: inline-block;
  animation: ${pr} 0.7s linear infinite;
`,kr=P.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 14px;
  }

  .info-sub {
    color: var(--text-muted);
    margin-bottom: 30px;
    font-size: 0.98rem;
  }
`,jr=P(K.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 18px;
  border-radius: 999px;
  background: rgba(45, 212, 191, 0.08);
  border: 1px solid rgba(45, 212, 191, 0.3);
  color: var(--highlight);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 26px;

  svg {
    font-size: 1rem;
  }
`,Te=P(K.div)`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  margin-bottom: 16px;
  border-radius: 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateX(6px);
    box-shadow: 0 12px 30px rgba(91, 140, 255, 0.14);
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background: var(--gradient);
    color: #fff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 8px 18px var(--shadow-color);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 2px;
  }

  p,
  a {
    color: var(--text-muted);
    font-size: 0.92rem;
    word-break: break-word;
  }

  a:hover {
    color: var(--primary);
  }
`,Sr=P(K.div)`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.92rem;
  color: #fff;
  background: ${({type:e})=>e==="success"?"#10b981":"#ef4444"};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);

  svg {
    font-size: 1.3rem;
  }
`,Dr=P(K.button)`
  margin-left: auto;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 11px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: var(--gradient);
    border-color: transparent;
  }
`;function Tr(){const{register:e,handleSubmit:s,formState:{errors:r,isSubmitting:a},reset:l}=ur(),n=Ge.useRef(),[c,y]=Ge.useState(null),j=(x,v)=>{y({type:x,message:v}),setTimeout(()=>y(null),4e3)},L=()=>{navigator.clipboard&&navigator.clipboard.writeText("dayashankaradhikari@gmail.com").then(()=>j("success","Email copied to clipboard!")).catch(()=>{})},F=x=>{gr.send("service_m6r29e8","template_qovcriv",x,"9-pjF8yDJMKh5GWBX").then(()=>{j("success","Message sent successfully!"),xr(),l()}).catch(()=>{j("error","Failed to send. Please try again.")})};return h.jsxs(br,{id:"contact",children:[h.jsx(ht,{className:"glow-1"}),h.jsx(ht,{className:"glow-2"}),h.jsxs("div",{className:"container",children:[h.jsx(K.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:h.jsx("span",{className:"gradient-text",children:"Let's Work Together"})}),h.jsx(K.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"Have a project in mind or just want to say hi? Drop me a message."}),h.jsxs(wr,{children:[h.jsx(_r,{children:h.jsxs(Fr,{onSubmit:s(F),ref:n,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[h.jsx("h3",{children:h.jsx("span",{className:"gradient-text",children:"Send a Message"})}),h.jsx("p",{className:"form-hint",children:"Fill in the form and I'll get back to you soon."}),h.jsxs(Ee,{children:[h.jsx("label",{htmlFor:"name",children:"Name"}),h.jsxs(Ce,{children:[h.jsx(Lt,{}),h.jsx("input",{id:"name",type:"text",placeholder:"Your name",...e("name",{required:"Name is required"})})]}),r.name&&h.jsx("span",{children:r.name.message})]}),h.jsxs(Ee,{children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsxs(Ce,{children:[h.jsx(Ze,{}),h.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",...e("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Invalid email address"}})})]}),r.email&&h.jsx("span",{children:r.email.message})]}),h.jsxs(Ee,{children:[h.jsx("label",{htmlFor:"message",children:"Message"}),h.jsxs(Ce,{className:"area",children:[h.jsx(It,{}),h.jsx("textarea",{id:"message",rows:"5",placeholder:"Tell me about your project...",...e("message",{required:"Message is required"})})]}),r.message&&h.jsx("span",{children:r.message.message})]}),h.jsx(Vr,{type:"submit",disabled:a,whileHover:a?void 0:{scale:1.02},whileTap:a?void 0:{scale:.97},children:a?h.jsxs(h.Fragment,{children:[h.jsx(Ar,{})," Sending..."]}):h.jsxs(h.Fragment,{children:[h.jsx(Nt,{})," Send Message"]})})]})}),h.jsxs(kr,{children:[h.jsx(K.h3,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},children:"Contact Details"}),h.jsx(K.p,{className:"info-sub",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"I usually respond within 24 hours. Let's build something great."}),h.jsxs(jr,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.15},viewport:{once:!0},children:[h.jsx(Ot,{})," Currently available for new projects"]}),h.jsxs(Te,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[h.jsx("div",{className:"icon",children:h.jsx(Rt,{})}),h.jsxs("div",{children:[h.jsx("h4",{children:"Location"}),h.jsx("p",{children:"Narephat, Kathmandu-32, Nepal"})]})]}),h.jsxs(Te,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:[h.jsx("div",{className:"icon",children:h.jsx(Pt,{})}),h.jsxs("div",{children:[h.jsx("h4",{children:"Phone"}),h.jsx("a",{href:"tel:+9779844330051",children:"+977-9844330051"})]})]}),h.jsxs(Te,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[h.jsx("div",{className:"icon",children:h.jsx(Ze,{})}),h.jsxs("div",{children:[h.jsx("h4",{children:"Email"}),h.jsx("a",{href:"mailto:dayashankaradhikari@gmail.com",children:"dayashankaradhikari@gmail.com"})]}),h.jsx(Dr,{onClick:L,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Copy email",children:h.jsx(Ut,{})})]})]})]})]}),h.jsx(qt,{children:c&&h.jsxs(Sr,{type:c.type,initial:{opacity:0,y:-24,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-24,scale:.9},children:[c.type==="success"?h.jsx(Bt,{}):h.jsx(zt,{}),c.message]},c.message)})]})}export{Tr as default};
