import{a as N,b as s,c as j,d as L,e as E,f as $,g as B,h as I,i as d,j as f}from"./chunk-LFCTBK2H.js";import{B as c,C as m,G as h,H as p,J as r,K as i,L as u,N as x,S as a,T as y,W as b,X as S,Y as F,Z as G,c as M,da as w,fa as R,g as V,ga as Z,k as q,ma as l,na as k,o as P,oa as A,qa as C,r as U,s as v,t as O}from"./chunk-3BHVRULU.js";var Y=()=>["/auth/register"];function ee(e,_){if(e&1&&(r(0,"span",10),a(1),i()),e&2){let o=_.$implicit;c(),y(o)}}var H=(()=>{class e{userService;formBuilder;router;errors$=new M;formGroup;constructor(o,n,t){this.userService=o,this.formBuilder=n,this.router=t}ngOnInit(){this.formGroup=this.buildFormGroup()}login(o){if(o.preventDefault(),this.formGroup.invalid){Object.keys(this.formGroup.controls).forEach(t=>this.formGroup.controls[t].markAsTouched());return}let n=this.formGroup.value;this.userService.loginUser(n).subscribe({next:t=>{this.errors$.next(t),t.filter(g=>g.length>0).length===0&&this.router.navigateByUrl("/actions/home")}})}buildFormGroup(){return this.formBuilder.group({username:["",[s.required,s.pattern(/^([a-zA-Z]|\d)+$/)]],password:["",[s.required,s.pattern(/^([a-zA-Z]|\d|\s|(\$|\*|_))*$/)]]})}static \u0275fac=function(n){return new(n||e)(m(f),m(I),m(l))};static \u0275cmp=v({type:e,selectors:[["app-login-page"]],standalone:!0,features:[b],decls:16,vars:6,consts:[[1,"container"],[3,"submit","formGroup"],["for","username"],["type","text","id","username","formControlName","username"],["for","password"],["type","password","id","password","formControlName","password"],[1,"errors"],["class","error",4,"ngFor","ngForOf"],["type","submit","value","Login"],["routerLinkActive","active",3,"routerLink"],[1,"error"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"h1"),a(2,"Login"),i(),r(3,"form",1),x("submit",function(D){return t.login(D)}),r(4,"label",2),a(5,"Username"),i(),u(6,"input",3),r(7,"label",4),a(8,"Password"),i(),u(9,"input",5),r(10,"div",6),h(11,ee,2,1,"span",7),F(12,"async"),i(),u(13,"input",8),r(14,"a",9),a(15,"Don't have an account?"),i()()()),n&2&&(c(3),p("formGroup",t.formGroup),c(8),p("ngForOf",G(12,3,t.errors$)),c(3),p("routerLink",S(5,Y)))},dependencies:[k,A,w,R,d,E,N,j,L,$,B],styles:[".container[_ngcontent-%COMP%]{background-color:#adffe5;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:30px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{background-color:#75ffd3;width:300px;border:1px solid black;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:10px;font-size:15px;font-weight:500}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .errors[_ngcontent-%COMP%]{color:red;display:flex;flex-direction:column;gap:8px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{padding:5px;border-radius:5px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus{outline:none}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[type=submit][_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[type=submit][_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:none}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:visited{color:#000}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#1f1f1f}"]})}return e})();var te=()=>["/auth/login"];function ne(e,_){if(e&1&&(r(0,"span",10),a(1),i()),e&2){let o=_.$implicit;c(),y(o)}}var J=(()=>{class e{userService;formBuilder;router;errors$=new M;formGroup;constructor(o,n,t){this.userService=o,this.formBuilder=n,this.router=t}ngOnInit(){this.formGroup=this.buildFormGroup()}register(o){if(o.preventDefault(),this.formGroup.invalid){Object.keys(this.formGroup.controls).forEach(t=>this.formGroup.controls[t].markAsTouched());return}let n=this.formGroup.value;this.userService.registerUser(n).subscribe({next:t=>{this.errors$.next(t),t.filter(g=>g.length>0).length===0&&this.router.navigateByUrl("/actions/home")}})}buildFormGroup(){return this.formBuilder.group({username:["",[s.required,s.pattern(/^([a-zA-Z]|\d)+$/)]],password:["",[s.required,s.pattern(/^([a-zA-Z]|\d|\s|(\$|\*|_))*$/)]]})}static \u0275fac=function(n){return new(n||e)(m(f),m(I),m(l))};static \u0275cmp=v({type:e,selectors:[["app-register-page"]],standalone:!0,features:[b],decls:16,vars:6,consts:[[1,"container"],[3,"submit","formGroup"],["for","username"],["type","text","id","username","formControlName","username"],["for","password"],["type","password","id","password","formControlName","password"],[1,"errors"],["class","error",4,"ngFor","ngForOf"],["type","submit","value","Register"],["routerLinkActive","active",3,"routerLink"],[1,"error"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"h1"),a(2,"Registration"),i(),r(3,"form",1),x("submit",function(D){return t.register(D)}),r(4,"label",2),a(5,"Username"),i(),u(6,"input",3),r(7,"label",4),a(8,"Password"),i(),u(9,"input",5),r(10,"div",6),h(11,ne,2,1,"span",7),F(12,"async"),i(),u(13,"input",8),r(14,"a",9),a(15,"Already have an account?"),i()()()),n&2&&(c(3),p("formGroup",t.formGroup),c(8),p("ngForOf",G(12,3,t.errors$)),c(3),p("routerLink",S(5,te)))},dependencies:[k,A,w,d,E,N,j,L,$,B,R],styles:[".container[_ngcontent-%COMP%]{background-color:#adffe5;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:30px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{background-color:#75ffd3;width:300px;border:1px solid black;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:10px;font-size:15px;font-weight:500}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .errors[_ngcontent-%COMP%]{color:red;display:flex;flex-direction:column;gap:8px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{padding:5px;border-radius:5px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus{outline:none}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[type=submit][_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[type=submit][_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:none}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:visited{color:#000}.container[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#1f1f1f}"]})}return e})();var z=(e,_)=>{let o=U(f),n=U(l);return o.loadUserInfo().pipe(V(t=>!t),q(t=>!t&&n.navigateByUrl("/actions/home")))};var oe=[{path:"login",component:H,canActivate:[z]},{path:"register",component:J,canActivate:[z]}],K=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=P({imports:[C.forChild(oe),C]})}return e})();var Ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=P({imports:[C,Z,K,d]})}return e})();export{Ge as AuthModule};