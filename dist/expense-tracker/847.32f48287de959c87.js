"use strict";(self.webpackChunkexpense_tracker=self.webpackChunkexpense_tracker||[]).push([[847],{8058:(I,x,o)=>{o.d(x,{T:()=>O});var a=o(5412),t=o(4650),h=o(384),m=o(7009),v=o(9299),d=o(6895),g=o(4859),E=o(8686);function P(i,p){if(1&i){const r=t.EpF();t.TgZ(0,"div")(1,"h1",2),t._uU(2,"Leaving So Soon???"),t.qZA(),t.TgZ(3,"div",3),t._uU(4,"Logged out for now, but the journey continues. See you soon! \u{1f44b}\u{1f604}"),t.qZA(),t.TgZ(5,"div",4)(6,"button",5),t._uU(7,"Stay"),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(r);const u=t.oxw();return t.KtG(u.onLogout())}),t._uU(9," Leave "),t.qZA()()()}}function Z(i,p){1&i&&(t.TgZ(0,"div")(1,"h1",2),t._uU(2,"Wrong File Choosen"),t.qZA(),t.TgZ(3,"div",3),t._uU(4,"Use Chrome Browser Or Please Choose only CSV (.csv) Files !!"),t.qZA(),t.TgZ(5,"div",4)(6,"button",7),t._uU(7,"OK"),t.qZA()()())}function f(i,p){if(1&i){const r=t.EpF();t.TgZ(0,"div")(1,"h1",2),t._uU(2,"Warning!!"),t.qZA(),t.TgZ(3,"div",3),t._uU(4,"Are your sure? Remember this action can't be "),t.TgZ(5,"b"),t._uU(6,"undo"),t.qZA(),t._uU(7,"."),t.qZA(),t.TgZ(8,"div",4)(9,"button",5),t._uU(10,"Stay"),t.qZA(),t.TgZ(11,"button",6),t.NdJ("click",function(){t.CHM(r);const u=t.oxw();return t.KtG(u.onDeleteAccount())}),t._uU(12," Delete "),t.qZA()()()}}function T(i,p){1&i&&(t.TgZ(0,"div")(1,"h1",2),t._uU(2,"Wrong Action!!"),t.qZA(),t.TgZ(3,"div",3),t._uU(4,"Wrong Action this Account can't be deleted. As this is account created by "),t.TgZ(5,"b"),t._uU(6,"Admin.."),t.qZA(),t._uU(7," Thank You.."),t.qZA(),t.TgZ(8,"div",3)(9,"p"),t._uU(10,"Please Create your account to use the functionality.."),t.qZA()(),t.TgZ(11,"div",4)(12,"button",8),t._uU(13,"OK"),t.qZA()()())}function A(i,p){if(1&i){const r=t.EpF();t.TgZ(0,"div")(1,"h1",2),t._uU(2,"Session Expired"),t.qZA(),t.TgZ(3,"div",3),t._uU(4,"Your current session expired!! Please login again to continue"),t.qZA(),t.TgZ(5,"div",4)(6,"button",9),t.NdJ("click",function(){t.CHM(r);const u=t.oxw();return t.KtG(u.onNavigateWelcome())}),t._uU(7,"OK"),t.qZA()()()}}function M(i,p){1&i&&(t.TgZ(0,"div",10),t._UZ(1,"app-welcome-loader"),t.qZA())}let O=(()=>{class i{constructor(r,_,u,U,D){this.authService=r,this.data=_,this.snackBar=u,this.dialog=U,this.route=D,this.isLoading=!1}ngOnInit(){this.type=this.data.type,this.userId=sessionStorage.getItem("Id")?.split(" ")[1]}onLogout(){this.authService.onLogout()}onDeleteAccount(){if(this.isLoading=!0,"6558727029c0dacee0900c6a"===this.userId)return this.dialog.open(i,{data:{type:"admin"}}),void(this.isLoading=!1);this.authService.deleteUserAccount().subscribe(r=>{this.isLoading=!1,this.onLogout(),this.snackBar.open("Account Deleted Successfully","",{duration:2e3})})}onNavigateWelcome(){this.route.navigate(["welcome"])}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(h.e),t.Y36(a.WI),t.Y36(m.ux),t.Y36(a.uw),t.Y36(v.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-alert-box"]],decls:6,vars:6,consts:[[4,"ngIf"],["class","loaderRelay",4,"ngIf"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["mat-raised-button","","color","primary","mat-dialog-close","",3,"click"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","mat-dialog-close",""],["mat-raised-button","","mat-dialog-close","",3,"click"],[1,"loaderRelay"]],template:function(r,_){1&r&&(t.YNc(0,P,10,0,"div",0),t.YNc(1,Z,8,0,"div",0),t.YNc(2,f,13,0,"div",0),t.YNc(3,T,14,0,"div",0),t.YNc(4,A,8,0,"div",0),t.YNc(5,M,2,0,"div",1)),2&r&&(t.Q6J("ngIf","alert"===_.type),t.xp6(1),t.Q6J("ngIf","error"===_.type),t.xp6(1),t.Q6J("ngIf","delete"===_.type),t.xp6(1),t.Q6J("ngIf","admin"===_.type),t.xp6(1),t.Q6J("ngIf","expire"===_.type),t.xp6(1),t.Q6J("ngIf",_.isLoading))},dependencies:[d.O5,g.lW,a.ZT,a.uh,a.xY,a.H8,E.R],styles:[".loaderRelay[_ngcontent-%COMP%]{background-color:#00000080;z-index:2;position:fixed;width:100%;height:100%;left:0;top:0;display:flex;justify-content:center;align-items:center}"]}),i})()},9047:(I,x,o)=>{o.d(x,{R:()=>h});var a=o(4650),t=o(1572);let h=(()=>{class m{constructor(){this.mode="determinate",this.value=50,this.progressVal=5,this.progressEndVal=100,this.speed=90}ngOnInit(){let d=setInterval(()=>{this.progressVal++,this.progressVal==this.progressEndVal&&clearInterval(d)},70)}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-loader"]],decls:6,vars:3,consts:[[1,"loader"],[1,"processing"],["color","accent",1,"example-margin",3,"mode","value"],[1,"progressper"]],template:function(d,g){1&d&&(a.TgZ(0,"div",0)(1,"p",1),a._uU(2,"Processing..."),a.qZA(),a._UZ(3,"mat-progress-spinner",2),a.TgZ(4,"p",3),a._uU(5),a.qZA()()),2&d&&(a.xp6(3),a.Q6J("mode",g.mode)("value",g.progressVal),a.xp6(2),a.hij("",g.progressVal,"%"))},dependencies:[t.Ou],styles:[".loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:200px}.progressper[_ngcontent-%COMP%]{padding-top:15px;padding-left:4px;font-size:1.8rem;font-weight:700;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.processing[_ngcontent-%COMP%]{font-size:1.1rem}"]}),m})()},5266:(I,x,o)=>{o.d(x,{d:()=>b});var a=o(8058),t=o(4650),h=o(9717),m=o(384),v=o(7009),d=o(5412),g=o(6895),E=o(266),P=o(4859),Z=o(7392),f=o(3546),T=o(4006),A=o(3162);function M(n,c){1&n&&t._UZ(0,"mat-progress-bar",7)}function O(n,c){if(1&n&&(t.TgZ(0,"div",15)(1,"p"),t._uU(2),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("Name: ",e.name,"")}}function i(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",15)(1,"p"),t._uU(2,"Name:"),t.qZA(),t.TgZ(3,"input",16),t.NdJ("ngModelChange",function(l){t.CHM(e);const C=t.oxw(2);return t.KtG(C.newName=l)}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("value",e.name)("ngModel",e.newName)}}function p(n,c){if(1&n&&(t.TgZ(0,"div",15)(1,"p"),t._uU(2),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("UserName: ",e.user_name,"")}}function r(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",15)(1,"p"),t._uU(2,"UserName:"),t.qZA(),t.TgZ(3,"input",17),t.NdJ("ngModelChange",function(l){t.CHM(e);const C=t.oxw(2);return t.KtG(C.newUsername=l)}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("value",e.name)("ngModel",e.newUsername)}}function _(n,c){if(1&n&&(t.TgZ(0,"div",18)(1,"p",19),t._uU(2),t.qZA(),t.TgZ(3,"p",20),t._uU(4),t.qZA()()),2&n){const e=c.$implicit;t.xp6(2),t.Oqu(e.content),t.xp6(2),t.Oqu(e.text)}}function u(n,c){if(1&n&&(t.TgZ(0,"mat-card-content")(1,"div",8),t._UZ(2,"p"),t.qZA(),t.TgZ(3,"div",9),t._UZ(4,"img",10),t.qZA(),t.TgZ(5,"div",11),t.YNc(6,O,3,1,"div",12),t.YNc(7,i,4,2,"div",12),t.YNc(8,p,3,1,"div",12),t.YNc(9,r,4,2,"div",12),t.qZA(),t.TgZ(10,"div",13),t.YNc(11,_,5,2,"div",14),t.qZA()()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngIf",!e.isEdit),t.xp6(1),t.Q6J("ngIf",e.isEdit),t.xp6(1),t.Q6J("ngIf",!e.isEdit),t.xp6(1),t.Q6J("ngIf",e.isEdit),t.xp6(2),t.Q6J("ngForOf",e.lines)}}function U(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card-actions")(1,"button",21),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onDeleteAccount())}),t._uU(2,"Delete Account"),t.qZA()()}}function D(n,c){1&n&&(t.TgZ(0,"mat-card-actions")(1,"button",22),t._uU(2,"Ok"),t.qZA()())}function y(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card-actions",23)(1,"button",24),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.saveData())}),t._uU(2,"Save"),t.qZA()()}}let b=(()=>{class n{constructor(e,s,l,C){this.businessData=e,this.authService=s,this.snackBar=l,this.dialog=C,this.user_name="",this.editable=!1,this.isProcess=!0,this.name="",this.lines=[],this.isEdit=!1}ngOnInit(){this.userId=sessionStorage.getItem("Id")?.split(" ")[1],this.isProcess=!0,this.authService.getAllSaveData().subscribe(e=>{setTimeout(()=>{this.isProcess=!1,this.editable=!0,"6558727029c0dacee0900c6a"===this.userId&&(this.editable=!1)},1e3);let s=e.data.firstLoginDate.toString().split("T")[0],l=e.data.lastLoginDate.toString().split("T")[0];this.lines=[{content:"User Since",text:s},{content:"Expense Logged",text:e.data.expenseLogged},{content:"Last Login",text:l}],this.name=e.data.name,this.user_name=e.data.username,this.newName=e.data.name,this.newUsername=e.data.username})}editField(){this.isEdit=!this.isEdit}saveData(){let e={username:this.newUsername,name:this.newName};this.authService.updateProfile(e).subscribe(s=>{s&&(this.authService.updateWholeInfo(e).subscribe(l=>{}),this.snackBar.open("Profile Updated","",{duration:2e3}))},s=>{this.snackBar.open("Server Error","",{duration:2e3})})}onDeleteAccount(){this.dialog.open(a.T,{data:{type:"delete"}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.k),t.Y36(m.e),t.Y36(v.ux),t.Y36(d.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-profile"]],decls:17,vars:6,consts:[[1,"example-card"],[1,"example-header"],["mat-raised-button","","color","primary","matTooltip","Edit",3,"disabled","click"],["mode","indeterminate",4,"ngIf"],[4,"ngIf"],[2,"display","flex","flex-direction","row","justify-content","space-between"],["align","end",4,"ngIf"],["mode","indeterminate"],[1,"liner"],[1,"main"],["src","../../../assets/image/man.png","alt","man image","height","60px","width","60px"],[1,"row"],["class","col-sm-6 col-xs-6 names",4,"ngIf"],[1,"row","row-col-3","mains"],["class","col",4,"ngFor","ngForOf"],[1,"col-sm-6","col-xs-6","names"],["type","text",3,"value","ngModel","ngModelChange"],["type","text","width","50%",3,"value","ngModel","ngModelChange"],[1,"col"],[2,"text-align","center","font-size","18px","font-family","cursive","font-weight","bold"],[2,"text-align","center","font-size","22px"],["mat-raised-button","","mat-dialog-close","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial","","color","primary"],["align","end"],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial","","color","primary",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div")(1,"mat-card",0)(2,"mat-card-header",1)(3,"mat-card-title"),t._uU(4,"User Information "),t.TgZ(5,"mat-icon"),t._uU(6,"verified_user"),t.qZA()(),t.TgZ(7,"button",2),t.NdJ("click",function(){return s.editField()}),t.TgZ(8,"mat-icon"),t._uU(9,"edit"),t.qZA(),t._uU(10,"Edit"),t.qZA()(),t.YNc(11,M,1,0,"mat-progress-bar",3),t.YNc(12,u,12,5,"mat-card-content",4),t.TgZ(13,"div",5),t.YNc(14,U,3,0,"mat-card-actions",4),t.YNc(15,D,3,0,"mat-card-actions",4),t.qZA(),t.YNc(16,y,3,0,"mat-card-actions",6),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("disabled",!s.editable),t.xp6(4),t.Q6J("ngIf",s.isProcess),t.xp6(1),t.Q6J("ngIf",!s.isProcess),t.xp6(2),t.Q6J("ngIf",!s.isEdit),t.xp6(1),t.Q6J("ngIf",!s.isEdit),t.xp6(1),t.Q6J("ngIf",s.isEdit))},dependencies:[g.sg,g.O5,E.gM,P.lW,Z.Hw,f.a8,f.hq,f.dn,f.dk,f.n5,d.ZT,T.Fj,T.JJ,T.On,A.pW],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:10px}.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid grey;border-radius:50px}.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2);transition:.5s}.main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-top:8px;font-size:18px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:700}.mains[_ngcontent-%COMP%]{display:flex;padding:20px 0}mat-card-header[_ngcontent-%COMP%]{border-bottom:2px solid black}.names[_ngcontent-%COMP%]{margin:10px 0;display:flex;justify-content:center}.names[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.example-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:10px}"]}),n})()}}]);