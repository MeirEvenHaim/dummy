import './polyfills.server.mjs';
import{A as w,B as F,C as I,D as ae,E as le,F as ue,G as S,I as Fe,N as Ie,P as ce,Q as N,R as m,S as de,U as Se,V as Ne,W as Oe,Z as xe,a as be,b as Me,ba as Pe,c as j,d as Ae,e as T,ea as he,f as M,g as ee,h as d,i as _,j as Ee,k as B,l as h,m as l,n as te,o as ie,p as A,q as ne,r as re,s as o,t as se,u as E,v as p,w as we,x as oe,y as c,z as f}from"./chunk-JT6FYL2C.mjs";import{a,b as u}from"./chunk-5XUXGTUW.mjs";var Le=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(se),o(ne))}}static{this.\u0275dir=l({type:i})}}return i})(),at=(()=>{class i extends Le{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ie(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[p]})}}return i})(),We=new _("");var lt={provide:We,useExisting:M(()=>Z),multi:!0};function ut(){let i=de()?de().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ct=new _(""),Z=(()=>{class i extends Le{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(se),o(ne),o(ct,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&F("input",function(g){return r._handleInput(g.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(g){return r._compositionEnd(g.target.value)})},features:[S([lt]),p]})}}return i})();function dt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var pe=new _(""),$e=new _("");function ht(i){return dt(i.value)?{required:!0}:null}function ke(i){return null}function qe(i){return i!=null}function ze(i){return Fe(i)?Me(i):i}function Ze(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Xe(i,e){return e.map(t=>t(i))}function ft(i){return!i.validate}function Ye(i){return i.map(e=>ft(e)?e:t=>e.validate(t))}function pt(i){if(!i)return null;let e=i.filter(qe);return e.length==0?null:function(t){return Ze(Xe(t,e))}}function me(i){return i!=null?pt(Ye(i)):null}function mt(i){if(!i)return null;let e=i.filter(qe);return e.length==0?null:function(t){let n=Xe(t,e).map(ze);return Ae(n).pipe(j(Ze))}}function ge(i){return i!=null?mt(Ye(i)):null}function Re(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function gt(i){return i._rawValidators}function _t(i){return i._rawAsyncValidators}function fe(i){return i?Array.isArray(i)?i:[i]:[]}function H(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ge(i,e){let t=fe(e);return fe(i).forEach(r=>{H(t,r)||t.push(r)}),t}function je(i,e){return fe(e).filter(t=>!H(i,t))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=me(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},C=class extends L{get formDirective(){return null}get path(){return null}},G=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ai=u(a({},vt),{"[class.ng-submitted]":"isSubmitted"}),Ke=(()=>{class i extends W{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(G,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&oe("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[p]})}}return i})(),Je=(()=>{class i extends W{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(C,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&oe("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[p]})}}return i})();var O="VALID",U="INVALID",v="PENDING",x="DISABLED",V=class{},$=class extends V{constructor(e,t){super(),this.value=e,this.source=t}},k=class extends V{constructor(e,t){super(),this.pristine=e,this.source=t}},R=class extends V{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends V{constructor(e,t){super(),this.status=e,this.source=t}};function Qe(i){return(X(i)?i.validators:i)||null}function yt(i){return Array.isArray(i)?me(i):i||null}function et(i,e){return(X(e)?e.asyncValidators:i)||null}function Ct(i){return Array.isArray(i)?ge(i):i||null}function X(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Vt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new T(1e3,"");if(!n[t])throw new T(1001,"")}function Dt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new T(1002,"")})}var q=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N(()=>this.statusReactive()),this.statusReactive=E(void 0),this._pristine=N(()=>this.pristineReactive()),this.pristineReactive=E(!0),this._touched=N(()=>this.touchedReactive()),this.touchedReactive=E(!1),this._events=new be,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==v}get disabled(){return this.status===x}get enabled(){return this.status!==x}get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new R(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new R(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new k(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new k(!0,n))}markAsPending(e={}){this.status=v;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(n=>{n.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new k(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}},z=class extends q{constructor(e,t,n){super(Qe(t),et(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Dt(this,!0,e),Object.keys(e).forEach(n=>{Vt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var _e=new _("CallSetDisabledState",{providedIn:"root",factory:()=>ve}),ve="always";function bt(i,e){return[...e.path,i]}function tt(i,e,t=ve){it(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),At(i,e),wt(i,e),Et(i,e),Mt(i,e)}function Te(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Mt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function it(i,e){let t=gt(i);e.validator!==null?i.setValidators(Re(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=_t(i);e.asyncValidator!==null?i.setAsyncValidators(Re(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Te(e._rawValidators,r),Te(e._rawAsyncValidators,r)}function At(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&nt(i,e)})}function Et(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&nt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function nt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function wt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ft(i,e){i==null,it(i,e)}function It(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function St(i){return Object.getPrototypeOf(i.constructor)===at}function Nt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Ot(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Z?t=s:St(s)?n=s:r=s}),r||n||t||null}var xt={provide:C,useExisting:M(()=>ye)},P=Promise.resolve(),ye=(()=>{class i extends C{get submitted(){return m(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=N(()=>this.submittedReactive()),this.submittedReactive=E(!1),this._directives=new Set,this.ngSubmit=new A,this.form=new z({},me(t),ge(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){P.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),tt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){P.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){P.then(()=>{let n=this._findContainer(t.path),r=new z({});Ft(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){P.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){P.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Nt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(pe,10),o($e,10),o(_e,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&F("submit",function(g){return r.onSubmit(g)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([xt]),p]})}}return i})();function Be(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ue(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Pt=class extends q{constructor(e=null,t,n){super(Qe(t),et(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var kt={provide:G,useExisting:M(()=>Ce)},He=Promise.resolve(),Ce=(()=>{class i extends G{constructor(t,n,r,s,g,ot){super(),this._changeDetectorRef=g,this.callSetDisabledState=ot,this.control=new Pt,this._registered=!1,this.name="",this.update=new A,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ot(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),It(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){tt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){He.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ce(n);He.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?bt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(C,9),o(pe,10),o($e,10),o(We,10),o(Ie,8),o(_e,8))}}static{this.\u0275dir=l({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([kt]),p,te]})}}return i})(),rt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Rt=(()=>{class i{constructor(){this._validator=ke}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ke,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,features:[te]})}}return i})();var Gt={provide:pe,useExisting:M(()=>Ve),multi:!0};var Ve=(()=>{class i extends Rt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=ce,this.createValidator=t=>ht}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ie(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&we("required",r._enabled?"":null)},inputs:{required:"required"},features:[S([Gt]),p]})}}return i})();var jt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=h({type:i})}static{this.\u0275inj=d({})}}return i})();var st=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:_e,useValue:t.callSetDisabledState??ve}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=h({type:i})}static{this.\u0275inj=d({imports:[jt]})}}return i})();var b=class i{title="frontend";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=B({type:i,selectors:[["app-root"]],decls:2,vars:0,template:function(t,n){t&1&&(c(0,"router-outlet"),w(1,"router-outlet"),f())},dependencies:[Pe]})};var Y=class i{constructor(e){this.http=e}apiUrl="http://127.0.0.1:8000/login/";login(e,t){return this.http.post(this.apiUrl,{username:e,password:t}).pipe(j(n=>(n.access&&n.refresh&&(localStorage.setItem("access_token",n.access),localStorage.setItem("refresh_token",n.refresh)),n)))}getAccessToken(){return localStorage.getItem("access_token")}logout(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}isAuthenticated(){return!!this.getAccessToken()}static \u0275fac=function(t){return new(t||i)(Ee(Se))};static \u0275prov=ee({token:i,factory:i.\u0275fac,providedIn:"root"})};var K=class i{constructor(e){this.authService=e}username="";password="";onLogin(){this.authService.login(this.username,this.password).subscribe(e=>{console.log("Login successful!",e)},e=>{console.error("Login failed",e)})}static \u0275fac=function(t){return new(t||i)(o(Y))};static \u0275cmp=B({type:i,selectors:[["app-login"]],decls:14,vars:2,consts:[[1,"login-container"],[3,"submit"],["for","username"],["type","text","name","username","required","","placeholder","Enter your username",3,"ngModelChange","ngModel"],["for","password"],["type","password","name","password","required","","placeholder","Enter your password",3,"ngModelChange","ngModel"],["type","submit"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"h2"),I(2,"Login"),f(),c(3,"form",1),F("submit",function(){return n.onLogin()}),c(4,"label",2),I(5,"Username:"),f(),c(6,"input",3),ue("ngModelChange",function(s){return le(n.username,s)||(n.username=s),s}),f(),w(7,"br"),c(8,"label",4),I(9,"Password:"),f(),c(10,"input",5),ue("ngModelChange",function(s){return le(n.password,s)||(n.password=s),s}),f(),w(11,"br"),c(12,"button",6),I(13,"Login"),f()()()),t&2&&(re(6),ae("ngModel",n.username),re(4),ae("ngModel",n.password))},dependencies:[rt,Z,Ke,Je,Ve,Ce,ye]})};var Ht=[{path:"login",component:K},{path:"",redirectTo:"/login",pathMatch:"full"}],J=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=h({type:i});static \u0275inj=d({imports:[he.forRoot(Ht),he]})};var Q=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=h({type:i,bootstrap:[b]});static \u0275inj=d({imports:[Oe,Ne,st,J]})};var De=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=h({type:i,bootstrap:[b]});static \u0275inj=d({imports:[Q,xe]})};export{De as a};
