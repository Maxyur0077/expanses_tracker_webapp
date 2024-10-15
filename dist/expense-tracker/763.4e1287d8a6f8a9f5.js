"use strict";(self.webpackChunkexpense_tracker=self.webpackChunkexpense_tracker||[]).push([[763],{4763:(xt,T,c)=>{c.r(T),c.d(T,{HeaderModule:()=>vt});var h=c(6895),I=c(8032),b=c(8058),A=c(5266),t=c(4650),C=c(9299),x=c(5412),N=c(384),y=c(9717),Y=c(9047),w=c(3267),q=c(3683),g=c(4859),Z=c(7392);let E=(()=>{class e{constructor(n){this.businessData=n,this.app_version=sessionStorage.getItem("Version")}onGithub(){this.businessData.onGithub()}onLinkedin(){this.businessData.onLinkedin()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:1,vars:0,consts:[[1,"mains"]],template:function(n,o){1&n&&t._UZ(0,"div",0)},styles:[".mains[_ngcontent-%COMP%]{border-top:1px solid black;border-bottom:1px solid black}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mains[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px}"]}),e})();var m=c(3546),D=c(7009),l=c(7155),f=c(6257);function M(e,a){1&e&&t._uU(0,"Import")}function R(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Name"),t.qZA())}function F(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Required"),t.qZA())}function O(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Amount"),t.qZA())}function J(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Required"),t.qZA())}function S(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Expense Date"),t.qZA())}function H(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Required Format (DD/MM/YYYY)"),t.qZA())}function P(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Expense Category"),t.qZA())}function Q(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Optional(default - Unassigned)"),t.qZA())}function K(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Payment Type"),t.qZA())}function L(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Optional(default - Card)"),t.qZA())}function B(e,a){1&e&&(t.TgZ(0,"th",26),t._uU(1,"Comment"),t.qZA())}function G(e,a){1&e&&(t.TgZ(0,"td",27),t._uU(1,"Optional(default - Unassigned)"),t.qZA())}function V(e,a){1&e&&t._UZ(0,"tr",28)}function j(e,a){1&e&&t._UZ(0,"tr",29)}function z(e,a){1&e&&t._uU(0,"Review")}function X(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"Please Procced with Save Button.."),t.qZA())}function $(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"Please Reupload File in CSV format with Back Button"),t.qZA())}function W(e,a){1&e&&t._uU(0,"Done")}let tt=(()=>{class e{constructor(n,o,r,s){this.route=n,this.dialog=o,this.snackBar=r,this.businessData=s,this.isCorrect=!1,this.displayedColumns=["name","amount","date","category","payment","comment"],this.dataSource=[{name:"",amount:"",date:"",category:"",payment:"",comment:""}],this.propertyNames=[],this.dataRows=[],this.header=!1}ngOnInit(){}onView(){this.route.navigate(["dashboard"])}onSaveImport(){this.propertyNames=this.csvRecords[0];let n={},o=!1,r=!1,s=!1,p=!1,_=!1,u=!1;for(let d=1;d<this.csvRecords.length-1;d++){n={},o=!1,r=!1,p=!1,s=!1,_=!1,u=!1;for(let i=0;i<this.propertyNames.length;i++)this.propertyNames[i].toLowerCase(),"name"===this.propertyNames[i]||"expense_name"===this.propertyNames[i]||"expense name"===this.propertyNames[i]?this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.expense_name=this.csvRecords[d][i],o=!0):"amount"===this.propertyNames[i]||"amounts"===this.propertyNames[i]?this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.amount=parseInt(this.csvRecords[d][i]),r=!0):"expense date"===this.propertyNames[i]||"date"===this.propertyNames[i]||"expense_date"===this.propertyNames[i]?this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.expense_date=this.csvRecords[d][i],s=!0):"payment"===this.propertyNames[i]||"payment_type"===this.propertyNames[i]||"payment type"===this.propertyNames[i]?this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.payment_type=this.csvRecords[d][i],_=!0):"expense_category"===this.propertyNames[i]||"expense category"===this.propertyNames[i]||"category"===this.propertyNames[i]?this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.expense_category=this.csvRecords[d][i],p=!0):("comments"===this.propertyNames[i]||"comment"===this.propertyNames[i])&&this.csvRecords[d][i]&&(""!=this.csvRecords[d][i]||" "!=this.csvRecords[d][i])&&(n.comment=this.csvRecords[d][i],u=!0);if(!o||!r||!s)return void this.snackBar.open("Please Mention required Fields Properly","",{duration:2e3});if(4!=n.expense_date.split("/")[2].length)return void this.snackBar.open("Date Format DD/MM/YYYY","",{duration:2e3});if(parseInt(n.expense_date.split("/")[1])>12)return void this.snackBar.open("Date Format DD/MM/YYYY","",{duration:2e3});p||(n.expense_category="Unassigned"),_||(n.payment_type="Card"),u||(n.comment="Unassigned Expense"),this.onSaveExpense(n)}}onSaveExpense(n){this.businessData.onImportExpense(n).subscribe(o=>{!0===o.status&&console.log("Added")},o=>{this.snackBar.open(o.message," ",{duration:2e3})})}importDataFromCSV(n){if("text/csv"!==n.target.files[0].type)return void this.dialog.open(b.T,{data:{type:"error"}});let r=n.target.files[0];var s=new FileReader;s.readAsText(r),s.onload=p=>{let _=p.target.result;_=_.toString();let u=_.split(/\r\n|\n/);u[0].split(",");for(let i=0;i<u.length-1;i++)u[i]=u[i].split(",");this.csvRecords=u}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.F0),t.Y36(x.uw),t.Y36(D.ux),t.Y36(y.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-import"]],decls:47,vars:5,consts:[["linear","true"],["stepper",""],["editable","true"],["matStepLabel",""],[1,"tables"],[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","date"],["matColumnDef","category"],["matColumnDef","payment"],["matColumnDef","comment"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"padding-top","10px"],["mat-raised-button","","color","accent","matStepperNext","","type","button",3,"click"],["type","file","hidden","",3,"change"],["filePicker",""],[4,"ngIf"],["mat-raised-button","","matStepperPrevious",""],["mat-raised-button","","matStepperNext","","color","primary",3,"click"],[1,"view"],["mat-raised-button","","color","primary",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"mat-stepper",0,1)(2,"mat-step",2),t.YNc(3,M,1,0,"ng-template",3),t.TgZ(4,"div",4)(5,"div",5)(6,"table",6),t.ynx(7,7),t.YNc(8,R,2,0,"th",8),t.YNc(9,F,2,0,"td",9),t.BQk(),t.ynx(10,10),t.YNc(11,O,2,0,"th",8),t.YNc(12,J,2,0,"td",9),t.BQk(),t.ynx(13,11),t.YNc(14,S,2,0,"th",8),t.YNc(15,H,2,0,"td",9),t.BQk(),t.ynx(16,12),t.YNc(17,P,2,0,"th",8),t.YNc(18,Q,2,0,"td",9),t.BQk(),t.ynx(19,13),t.YNc(20,K,2,0,"th",8),t.YNc(21,L,2,0,"td",9),t.BQk(),t.ynx(22,14),t.YNc(23,B,2,0,"th",8),t.YNc(24,G,2,0,"td",9),t.BQk(),t.YNc(25,V,1,0,"tr",15),t.YNc(26,j,1,0,"tr",16),t.qZA()()(),t.TgZ(27,"div",17)(28,"button",18),t.NdJ("click",function(){t.CHM(r);const p=t.MAs(31);return t.KtG(p.click())}),t._uU(29," Import File "),t.qZA(),t.TgZ(30,"input",19,20),t.NdJ("change",function(p){return o.importDataFromCSV(p)}),t.qZA()()(),t.TgZ(32,"mat-step",2),t.YNc(33,z,1,0,"ng-template",3),t.TgZ(34,"div",17),t.YNc(35,X,2,0,"p",21),t.YNc(36,$,2,0,"p",21),t.qZA(),t.TgZ(37,"div")(38,"button",22),t._uU(39,"Back"),t.qZA(),t.TgZ(40,"button",23),t.NdJ("click",function(){return o.onSaveImport()}),t._uU(41," Save "),t.qZA()()(),t.TgZ(42,"mat-step"),t.YNc(43,W,1,0,"ng-template",3),t.TgZ(44,"div",24)(45,"button",25),t.NdJ("click",function(){return o.onView()}),t._uU(46," View Expenses "),t.qZA()()()()}2&n&&(t.xp6(6),t.Q6J("dataSource",o.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(9),t.Q6J("ngIf",o.isCorrect),t.xp6(1),t.Q6J("ngIf",!o.isCorrect))},dependencies:[h.O5,g.lW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,f.C0,f.VY,f.Vq,f.Ic,f.fd],styles:[".mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-mdc-form-field[_ngcontent-%COMP%]{margin-top:16px}.view[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}table[_ngcontent-%COMP%]{width:100%;overflow-x:hidden}.table-container[_ngcontent-%COMP%]{max-width:100%;overflow-x:scroll}.tables[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:contents}"]}),e})();var et=c(266),k=c(9549),v=c(7331);function nt(e,a){1&e&&(t.TgZ(0,"mat-card-content",9)(1,"div",10)(2,"span",11),t._uU(3,"Loading..."),t.qZA()(),t.TgZ(4,"div",12)(5,"span",11),t._uU(6,"Loading..."),t.qZA()(),t.TgZ(7,"div",10)(8,"span",11),t._uU(9,"Loading..."),t.qZA()()())}function ot(e,a){if(1&e&&(t.TgZ(0,"mat-chip-row"),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n," ")}}function at(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-chip-row",20),t.NdJ("removed",function(){const s=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.removeKeyword(s))}),t._uU(1),t.TgZ(2,"button",21)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n," ")}}function it(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card-content",13)(1,"mat-form-field",14)(2,"mat-label"),t._uU(3,"Avaiable Expense Categories"),t.qZA(),t.TgZ(4,"mat-chip-grid",15,16),t.YNc(6,ot,2,1,"mat-chip-row",17),t.YNc(7,at,5,1,"mat-chip-row",18),t.qZA(),t.TgZ(8,"input",19),t.NdJ("matChipInputTokenEnd",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.add(r))}),t.qZA()()()}if(2&e){const n=t.MAs(5),o=t.oxw();t.xp6(6),t.Q6J("ngForOf",o.keywords),t.xp6(1),t.Q6J("ngForOf",o.newKeywords),t.xp6(1),t.Q6J("matChipInputFor",n)}}function rt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-chip-row",20),t.NdJ("removed",function(){const s=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.removeKeywordEdit(s))}),t._uU(1),t.TgZ(2,"button",21)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n," ")}}function st(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card-content",13)(1,"mat-form-field",14)(2,"mat-label"),t._uU(3,"Avaiable Expense Categories"),t.qZA(),t.TgZ(4,"mat-chip-grid",15,16),t.YNc(6,rt,5,1,"mat-chip-row",18),t.qZA(),t.TgZ(7,"input",22),t.NdJ("matChipInputTokenEnd",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.add(r))}),t.qZA()()()}if(2&e){const n=t.MAs(5),o=t.oxw();t.xp6(6),t.Q6J("ngForOf",o.keywords),t.xp6(1),t.Q6J("matChipInputFor",n)("disabled",o.isEdit)}}function dt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onReset())}),t.TgZ(1,"mat-icon"),t._uU(2,"autorenew"),t.qZA(),t._uU(3,"Reset "),t.qZA()}}function ct(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onSave())}),t.TgZ(1,"mat-icon"),t._uU(2,"save"),t.qZA(),t._uU(3," Save "),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("disabled",0===n.newKeywords.length)}}function pt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onSaveEditCategories())}),t._uU(1," Save "),t.qZA()}}function mt(e,a){1&e&&(t.TgZ(0,"button",25),t._UZ(1,"span",26),t._uU(2," Saving... "),t.qZA())}let lt=(()=>{class e{constructor(n){this.businesData=n,this.categoryAdded=new t.vpe,this.keywords=[],this.newKeywords=[],this.CategoryLoad=!0,this.isSaving=!1,this.isEdit=!1}ngOnInit(){this.onGetCategory()}onGetCategory(){this.CategoryLoad=!0,this.isSaving=!1,this.businesData.onGetAllCategory().subscribe(n=>{n&&(this.CategoryLoad=!1,this.keywords=n.data)})}removeKeyword(n){const o=this.newKeywords.indexOf(n);o>=0&&this.newKeywords.splice(o,1)}removeKeywordEdit(n){const o=this.keywords.indexOf(n);o>=4&&this.keywords.splice(o,1)}onSaveEditCategories(){this.isSaving=!0,this.businesData.onEditCategory(this.keywords).subscribe(n=>{n&&(this.newKeywords=[],this.isSaving=!1,this.isEdit=!1,this.categoryAdded.emit(this.keywords),this.onGetCategory())})}add(n){const o=(n.value||"").trim();o&&this.newKeywords.push(o),n.chipInput.clear()}onSave(){this.isSaving=!0,this.categoryAdded.emit(this.keywords),this.businesData.onCreateCategory(this.newKeywords).subscribe(n=>{n&&(this.keywords.push(...this.newKeywords),this.newKeywords=[],this.isSaving=!1)})}onReset(){this.newKeywords=[]}onEditCategories(){this.isEdit=!this.isEdit}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-category"]],outputs:{categoryAdded:"categoryAdded"},decls:22,vars:8,consts:[[1,"example-card"],[2,"display","flex","padding","0px 16px"],["style","padding-top: 15px;display: flex; justify-content: center;align-items: center;",4,"ngIf"],["style","padding-top: 15px",4,"ngIf"],["align","end"],["mat-icon-button","","aria-label","edit","matTooltip","Edit Categories",3,"disabled","click"],["mat-raised-button","",3,"click",4,"ngIf"],["mat-raised-button","",3,"disabled","click",4,"ngIf"],["class","btn btn-success","type","button","disabled","",4,"ngIf"],[2,"padding-top","15px","display","flex","justify-content","center","align-items","center"],["role","status",1,"spinner-grow","text-danger"],[1,"visually-hidden"],["role","status",1,"spinner-grow","text-danger",2,"margin","0px 5px"],[2,"padding-top","15px"],["appearance","outline",1,"example-form-field"],["aria-label","Enter New Category"],["chipGrid",""],[4,"ngFor","ngForOf"],[3,"removed",4,"ngFor","ngForOf"],["placeholder","Click enter to add...",2,"border","2px solid black",3,"matChipInputFor","matChipInputTokenEnd"],[3,"removed"],["matChipRemove","","aria-label","'remove ' + keyword"],["placeholder","Click enter to add...",2,"border","2px solid black",3,"matChipInputFor","disabled","matChipInputTokenEnd"],["mat-raised-button","",3,"click"],["mat-raised-button","",3,"disabled","click"],["type","button","disabled","",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"div")(4,"p"),t._uU(5,"Add Expense Category "),t.TgZ(6,"mat-icon"),t._uU(7,"note_add"),t.qZA()()()()(),t.TgZ(8,"mat-card-subtitle",1),t._uU(9,"Add/Remove Expense Categories"),t.qZA(),t.YNc(10,nt,10,0,"mat-card-content",2),t.YNc(11,it,9,3,"mat-card-content",3),t.YNc(12,st,8,3,"mat-card-content",3),t.TgZ(13,"mat-card-actions",4)(14,"div")(15,"button",5),t.NdJ("click",function(){return o.onEditCategories()}),t.TgZ(16,"mat-icon"),t._uU(17,"edit"),t.qZA()()(),t.YNc(18,dt,4,0,"button",6),t.YNc(19,ct,4,1,"button",7),t.YNc(20,pt,2,0,"button",6),t.YNc(21,mt,3,0,"button",8),t.qZA()()),2&n&&(t.xp6(10),t.Q6J("ngIf",o.CategoryLoad&&!o.isEdit),t.xp6(1),t.Q6J("ngIf",!o.CategoryLoad&&!o.isEdit),t.xp6(1),t.Q6J("ngIf",!o.CategoryLoad&&o.isEdit),t.xp6(3),t.Q6J("disabled",o.isEdit),t.xp6(3),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",!o.isSaving&&!o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit&&!o.isSaving),t.xp6(1),t.Q6J("ngIf",o.isSaving))},dependencies:[h.sg,h.O5,et.gM,g.lW,g.RK,Z.Hw,k.KE,k.hX,m.a8,m.hq,m.dn,m.dk,m.$j,m.n5,v.RA,v.oH,v.qH,v.z3],styles:[".example-form-field[_ngcontent-%COMP%]{width:100%}.example-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:0 12px}.myCard[_ngcontent-%COMP%]{margin-top:25px}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}"]}),e})();var ut=c(9656);let gt=(()=>{class e{constructor(n,o){this.route=n,this.dialog=o}ngOnInit(){}handleCategory(n){this.keywords=n}openDialog(){this.dialog.open(A.d,{width:"600px"})}onView(){this.route.navigate(["dashboard"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.F0),t.Y36(x.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:41,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","col-md-6","offset-md-3","myCard"],[1,"example-card"],["align","end"],["mat-button","",3,"click"],[3,"categoryAdded"],[3,"tags"],[1,"col-12","col-md-6","offset-md-3","myCard",2,"margin-bottom","30px"],["href","https://drive.google.com/file/d/1-i_q2joBrYUqi2jYuiOmD6OeFHH9rwQL/view?usp=sharing"],[2,"font-size","20px","width","20px","height","20px"],["mat-mini-fab","","color","accent",1,"btns",3,"click"],[1,"footers"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-header")(5,"mat-card-title"),t._uU(6,"User Information "),t.TgZ(7,"mat-icon"),t._uU(8,"verified_user"),t.qZA()()(),t.TgZ(9,"mat-card-actions",4)(10,"button",5),t.NdJ("click",function(){return o.openDialog()}),t.TgZ(11,"mat-icon"),t._uU(12,"launch"),t.qZA()()()()(),t.TgZ(13,"div",2)(14,"app-add-category",6),t.NdJ("categoryAdded",function(s){return o.handleCategory(s)}),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",2),t._UZ(17,"app-add-expense",7),t.qZA(),t.TgZ(18,"div",8)(19,"mat-card")(20,"mat-card-header")(21,"mat-card-title")(22,"div")(23,"p"),t._uU(24,"Import CSV Expenses "),t.qZA()()()(),t.TgZ(25,"mat-card-content")(26,"div")(27,"p"),t._uU(28,"Download "),t.TgZ(29,"a",9),t._uU(30,"Sample"),t.qZA(),t._uU(31," File "),t.TgZ(32,"mat-icon",10),t._uU(33,"downloading"),t.qZA()()(),t._UZ(34,"app-import"),t.qZA()()()(),t.TgZ(35,"div")(36,"button",11),t.NdJ("click",function(){return o.onView()}),t.TgZ(37,"mat-icon"),t._uU(38,"equalizer"),t.qZA()()()(),t.TgZ(39,"div",12),t._UZ(40,"app-footer"),t.qZA()),2&n&&(t.xp6(17),t.Q6J("tags",o.keywords))},dependencies:[E,g.lW,g.nh,Z.Hw,m.a8,m.hq,m.dn,m.dk,m.n5,tt,lt,ut.K],styles:[".container-fluid[_ngcontent-%COMP%]{background-image:url(ruppe2.109e51fa52318799.png);background-size:cover;background-repeat:no-repeat;width:100%}.example-form-field[_ngcontent-%COMP%]{width:100%}.example-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:0 12px}.myCard[_ngcontent-%COMP%]{margin-top:25px}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}"]}),e})();function _t(e,a){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-loader"),t.qZA())}function ht(e,a){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-dashboard"),t.qZA())}let ft=(()=>{class e{constructor(n,o,r,s){this.route=n,this.dialog=o,this.authService=r,this.businessData=s,this.isLoading=!0,this.app_version=sessionStorage.getItem("Version")}ngOnInit(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},4e3);const n=sessionStorage.getItem("LEAD_ID");this.authService.authAfterReferesh(!0,n)}openDialog(){this.dialog.open(A.d,{width:"600px"})}onView(){this.route.navigate(["dashboard"])}onLogout(){this.dialog.open(b.T,{data:{type:"alert"}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.F0),t.Y36(x.uw),t.Y36(N.e),t.Y36(y.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:38,vars:3,consts:[["hasBackdrop","True","autosize","",1,"example-container",2,"height","100vh"],["mode","over",1,"example-sidenav",2,"height","100%"],["drawer",""],[2,"border-bottom","2px solid red","font-family","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"],[2,"margin-top","20px"],["mat-raised-button","","color","primary",3,"click"],[2,"padding-top","10px"],[2,"font-size","12px"],[2,"border-bottom","1px solid black"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[1,"example-spacer"],["mat-raised-button","","color","accent",3,"click"],[4,"ngIf"]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"h2",3),t._uU(4," Expense Tracker "),t.qZA(),t.TgZ(5,"div")(6,"div",4)(7,"button",5),t.NdJ("click",function(){return o.openDialog()}),t.TgZ(8,"mat-icon"),t._uU(9,"perm_identity"),t.qZA(),t._uU(10,"Profile "),t.qZA()(),t.TgZ(11,"div",4)(12,"button",5),t.NdJ("click",function(){return o.onView()}),t.TgZ(13,"mat-icon"),t._uU(14,"equalizer"),t.qZA(),t._uU(15,"View Expenses "),t.qZA()(),t.TgZ(16,"div",4)(17,"button",5),t.NdJ("click",function(){return o.onLogout()}),t.TgZ(18,"mat-icon"),t._uU(19,"logout"),t.qZA(),t._uU(20,"Logout "),t.qZA()()(),t.TgZ(21,"div",6)(22,"p",7),t._uU(23),t.qZA()()(),t.TgZ(24,"div")(25,"mat-toolbar",8)(26,"button",9),t.NdJ("click",function(){t.CHM(r);const p=t.MAs(2);return t.KtG(p.toggle())}),t.TgZ(27,"mat-icon"),t._uU(28,"list"),t.qZA()(),t.TgZ(29,"span"),t._uU(30,"Expense Tracker"),t.qZA(),t._UZ(31,"span",10),t.TgZ(32,"button",11),t.NdJ("click",function(){return o.onLogout()}),t.TgZ(33,"mat-icon"),t._uU(34,"logout"),t.qZA(),t._uU(35,"Logout "),t.qZA()()(),t.YNc(36,_t,2,0,"div",12),t.YNc(37,ht,2,0,"div",12),t.qZA()}2&n&&(t.xp6(23),t.hij("Application Version: ",o.app_version,""),t.xp6(13),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},dependencies:[h.O5,Y.R,w.jA,w.kh,q.Ye,g.lW,g.RK,Z.Hw,gt],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{padding-left:50px;padding-right:100px;padding-top:50px}"]}),e})();var Ct=c(3870),U=c(4006);const yt=[{path:"",component:ft,canActivate:[Ct.a],title:"Home | ExpenseTracker"}];let vt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,I.m,U.UX,U.u5,C.Bz.forChild(yt)]}),e})()}}]);