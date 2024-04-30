"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[374],{4374:(Qt,C,l)=>{l.r(C),l.d(C,{DashboardModule:()=>Yt});var p=l(6895),t=l(8256),f=l(5925),u=l(5604),b=l(8333);function Z(a,o){1&a&&(t.TgZ(0,"h1",3),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Surveillance"))}function w(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",9),t._uU(2),t.qZA(),t._UZ(3,"app-pie-chart",10),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.hij("",e.title," "),t.xp6(1),t.Q6J("pieChrtModel",n.getDonutData(e))}}function y(a,o){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,w,4,2,"div",8),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.surveillancePageData.length>0)}}function I(a,o){1&a&&(t.TgZ(0,"div",11)(1,"h1",12),t._uU(2,"No Data"),t.qZA()())}function T(a,o){if(1&a&&(t.TgZ(0,"div",4),t.YNc(1,y,2,1,"div",5),t.YNc(2,I,3,0,"div",6),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.surveillancePageData),t.xp6(1),t.Q6J("ngIf",e.surveillancePageData.length<1)}}function D(a,o){1&a&&(t.TgZ(0,"div",13)(1,"h2"),t._uU(2,"Please select filter"),t.qZA()())}let A=(()=>{class a{constructor(e,n){this.dataService=e,this.auth=n,this.dataLoaded=!1,this.objectData={},this.subs=[]}ngOnInit(){const e=this.dataService.filter.subscribe(n=>{if(n){this.dataLoaded=!1;const r=this.dataService.getDashData(n).subscribe(c=>{c.data.length>0&&(this.dataLoaded=!0,this.surveillancePageData=c.data.filter(i=>i.code.startsWith("2")).sort((i,s)=>i.code-s.code))});this.subs.push(r)}});this.subs.push(e)}getDonutData(e){let n=[];return e.x_value.forEach((r,c)=>{n.push({value:e.y_value[c],name:r})}),{data:n,title:{text:"",left:"left"},isDounte:!0,radius:["40%","70%"],showLegend:!0}}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.D),t.Y36(u.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-surveillance"]],decls:3,vars:3,consts:[["class"," mt-5 mb-5 card-title",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"mt-5","mb-5","card-title"],[1,"grid","grid-cols-12","gap-5"],["class","col-span-12 lg:col-span-4  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12 graph-card",4,"ngIf"],[1,"col-span-12","lg:col-span-4","graph-card"],[4,"ngIf"],[1,"gray-title"],[3,"pieChrtModel"],[1,"col-span-12","lg:col-span-12","graph-card"],[1,"no-data-card"],[1,"no-data"]],template:function(e,n){1&e&&(t.YNc(0,Z,2,1,"h1",0),t.YNc(1,T,3,2,"div",1),t.YNc(2,D,3,0,"div",2)),2&e&&(t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",!n.dataLoaded))},dependencies:[p.sg,p.O5,b.J],styles:["th[_ngcontent-%COMP%]{width:50%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left}h1[_ngcontent-%COMP%]{font-size:1.2rem;color:#2c47aa;font-weight:700}.no-data-card[_ngcontent-%COMP%]{text-align:center;color:gray}"]}),a})();class _{constructor(){this.chartDate=[],this.xAxisDate=[],this.backgroundColor=""}}class P extends _{}class O{constructor(){this.chartDate=[],this.chartMultiDate=[],this.xAxisDate=[],this.backgroundColor="",this.areaStyle={}}}var v=l(9901),m=l(4783),M=l(8637);function S(a,o){1&a&&(t.TgZ(0,"h1",3),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("IPC Program"))}function q(a,o){if(1&a&&(t.TgZ(0,"div")(1,"p",10),t._uU(2),t.qZA(),t._UZ(3,"div",11),t.TgZ(4,"p",12),t._uU(5),t.qZA()()),2&a){const e=o.$implicit,n=t.oxw(2);t.Gre("container graph-card card-top ",n.getColorClass(e.y_value),""),t.xp6(2),t.hij(" ",e.title,""),t.xp6(3),t.Oqu(null==e?null:e.y_value)}}function N(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",15),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart",16),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getBarChart(e))}}function F(a,o){if(1&a&&(t.TgZ(0,"div",13),t.YNc(1,N,4,2,"div",14),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageFirstRow.length>0)}}function R(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",15),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart-many",16),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getManyBarChart(e))}}function J(a,o){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,R,4,2,"div",14),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageSecondRow.length>0)}}function Y(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",15),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart-many",16),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getManyBarChart(e))}}function Q(a,o){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,Y,4,2,"div",14),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageThirdRow.length>0)}}function U(a,o){1&a&&(t.TgZ(0,"div",17)(1,"h1",18),t._uU(2,"No Data"),t.qZA()())}function L(a,o){if(1&a&&(t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,q,6,5,"div",6),t.qZA(),t.YNc(3,F,2,1,"div",7),t.YNc(4,J,2,1,"div",8),t.YNc(5,Q,2,1,"div",8),t.YNc(6,U,3,0,"div",9),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.thirdPageZeroRow),t.xp6(1),t.Q6J("ngForOf",e.thirdPageFirstRow),t.xp6(1),t.Q6J("ngForOf",e.thirdPageSecondRow),t.xp6(1),t.Q6J("ngForOf",e.thirdPageThirdRow),t.xp6(1),t.Q6J("ngIf",e.thirdPageZeroRow.length<1&&e.thirdPageSecondRow.length<1&&e.thirdPageFirstRow.length<1&&e.thirdPageThirdRow.length<1)}}function k(a,o){1&a&&(t.TgZ(0,"div",19)(1,"h2"),t._uU(2,"Please select filter"),t.qZA()())}let B=(()=>{class a{constructor(e,n){this.dataService=e,this.auth=n,this.lebels=v,this.title="Needle Stick Injury",this.dataLoaded=!1,this.objectData={},this.subs=[]}ngOnInit(){const e=this.dataService.filter.subscribe(n=>{if(n){this.dataLoaded=!1;const r=this.dataService.getDashData(n).subscribe(c=>{c.data.length>0&&(this.dataLoaded=!0,this.firstPageIPCAuditProgramScores=c.data.filter(i=>i.code.startsWith("30")),this.thirdPageZeroRow=c.data.filter(i=>i.code.startsWith("30")).sort((i,s)=>i.code-s.code),this.thirdPageFirstRow=c.data.filter(i=>i.code.startsWith("31")).sort((i,s)=>i.code-s.code),this.thirdPageSecondRow=c.data.filter(i=>i.code.startsWith("32")).sort((i,s)=>i.code-s.code),this.thirdPageThirdRow=c.data.filter(i=>i.code.startsWith("33")).sort((i,s)=>i.code-s.code))});this.subs.push(r)}});this.subs.push(e)}getBarChart(e,n=!1){let r=new _;if(r.chartDate=e.y_value,r.xAxisDate=e.x_value,r.backgroundColor="rgba(180, 180, 180, 0.2)",r.title={text:"",left:"left"},n){let c=[];e.x_value.forEach((i,s)=>{c.push({value:e.y_value[s],name:i})}),r.chartDate=e.data}else r.chartDate=e.y_value;return r}getManyBarChart(e){let n=[],r=new P;return Object.keys(e.y_value).forEach(c=>{n.push({name:c,data:e.y_value[c],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}})}),r.chartDate=n,r.xAxisDate=e.x_value,r.backgroundColor="rgba(180, 180, 180, 0.2)",r.title={text:"",left:"left"},r}getColorClass(e){return e>=80?"color1":e>=60&&e<80?"color2":e>40&&e<60?"color3":"color4"}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.D),t.Y36(u.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ipc-program"]],decls:3,vars:3,consts:[["class"," mt-5 mb-5 card-title",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"mt-5","mb-5","card-title"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12","lg:col-span-12","card-container"],[3,"class",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-6  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12 graph-card",4,"ngIf"],[1,"top-text","title"],[1,"spacer"],[1,"bottom-text","number"],[1,"col-span-12","lg:col-span-6","graph-card"],[4,"ngIf"],[1,"gray-title"],[3,"barChartModel"],[1,"col-span-12","lg:col-span-12","graph-card"],[1,"no-data-card"],[1,"no-data"]],template:function(e,n){1&e&&(t.YNc(0,S,2,1,"h1",0),t.YNc(1,L,7,5,"div",1),t.YNc(2,k,3,0,"div",2)),2&e&&(t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",!n.dataLoaded))},dependencies:[p.sg,p.O5,m.u,M.a],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e40af}.graph-card[_ngcontent-%COMP%]{border-radius:15px;padding:1rem;background:#fff}.card-container[_ngcontent-%COMP%]{display:flex;gap:1.25rem;flex-wrap:wrap}.card-title[_ngcontent-%COMP%]{font-size:1.5rem;color:#000!important;font-size:1.25rem}.gray-title[_ngcontent-%COMP%]{color:#666;margin-bottom:5px}.card-top[_ngcontent-%COMP%]{border-radius:0;flex:1;padding-left:1rem;padding-right:1rem}.card-top.color1[_ngcontent-%COMP%]{border-bottom:3px solid green}.card-top.color2[_ngcontent-%COMP%]{border-bottom:3px solid #f2f082}.card-top.color3[_ngcontent-%COMP%]{border-bottom:3px solid #fdbb31}.card-top.color4[_ngcontent-%COMP%]{border-bottom:3px solid #ff4d4d}.card-top[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#666;margin-bottom:16px}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]{width:32px;border-radius:50%;height:32px;display:flex;align-items:center;justify-content:center;background-color:#4eb33f}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{background-color:#fff;height:calc(100% - 4px);width:calc(100% - 4px);border-radius:50%;display:flex;align-items:center;justify-content:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700;font-size:28px;display:flex}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;border-radius:5px}.spacer[_ngcontent-%COMP%]{flex-grow:1}.top-text[_ngcontent-%COMP%]{margin-top:0}.bottom-text[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700;font-size:28px}.no-data-card[_ngcontent-%COMP%]{text-align:center;color:gray}"]}),a})();var z=l(7414),j=l(5224);function W(a,o){1&a&&(t.TgZ(0,"h1",3),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Key Indicators"))}function E(a,o){if(1&a&&(t.TgZ(0,"div")(1,"p",11),t._uU(2),t.qZA(),t._UZ(3,"div",12),t.TgZ(4,"p",13),t._uU(5),t.qZA()()),2&a){const e=o.$implicit,n=t.oxw(2);t.Gre("container graph-card card-top ",n.getColorClass(e.y_value),""),t.xp6(2),t.hij(" ",e.title,""),t.xp6(3),t.Oqu(null==e?null:e.y_value)}}function $(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h1",15),t._uU(2,"No Data"),t.qZA()())}function G(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",18),t._uU(2),t.qZA(),t._UZ(3,"app-line-chart",19),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(null==e?null:e.title),t.xp6(1),t.Q6J("lineChartModel",n.getLineChart(e,!0))}}function X(a,o){if(1&a&&(t.TgZ(0,"div",16),t.YNc(1,G,4,2,"div",17),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.firstPageSecondRowData.length>0)}}function H(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h1",15),t._uU(2,"No Data"),t.qZA()())}function K(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",18),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart",20),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getBarChart(e))}}function V(a,o){if(1&a&&(t.TgZ(0,"div",16),t.YNc(1,K,4,2,"div",17),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.firstPageThirdRowData.length>0)}}function tt(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h1",15),t._uU(2,"No Data"),t.qZA()())}function et(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",18),t._uU(2),t.qZA(),t._UZ(3,"app-line-chart",19),t.qZA()),2&a){const e=o.$implicit,n=t.oxw(3);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("lineChartModel",n.getBasicLineChart(e))}}function at(a,o){if(1&a&&(t.TgZ(0,"div",14),t.YNc(1,et,4,2,"div",21),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.firstPageFourthRowData)}}function nt(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h1",15),t._uU(2,"No Data"),t.qZA()())}function ot(a,o){if(1&a&&(t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,E,6,5,"div",6),t.qZA(),t.YNc(3,$,3,0,"div",7),t.TgZ(4,"div",8)(5,"h1",9),t._uU(6),t.qZA()(),t.YNc(7,X,2,1,"div",10),t.YNc(8,H,3,0,"div",7),t.TgZ(9,"div",8)(10,"h1",9),t._uU(11),t.qZA()(),t.YNc(12,V,2,1,"div",10),t.YNc(13,tt,3,0,"div",7),t.TgZ(14,"div",8)(15,"h1",9),t._uU(16),t.qZA()(),t.YNc(17,at,2,1,"div",7),t.YNc(18,nt,3,0,"div",7),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.firstPageFirstRowData),t.xp6(1),t.Q6J("ngIf",e.firstPageFirstRowData.length<1),t.xp6(3),t.Oqu("HAI Surveillance Results"),t.xp6(1),t.Q6J("ngForOf",e.firstPageSecondRowData),t.xp6(1),t.Q6J("ngIf",e.firstPageThirdRowData.length<1),t.xp6(3),t.Oqu("IPC Audit Program Scores"),t.xp6(1),t.Q6J("ngForOf",e.firstPageThirdRowData),t.xp6(1),t.Q6J("ngIf",e.firstPageThirdRowData.length<1),t.xp6(3),t.Oqu("Needle Stick Injury"),t.xp6(1),t.Q6J("ngIf",e.firstPageFourthRowData.length>0),t.xp6(1),t.Q6J("ngIf",e.firstPageFourthRowData.length<1)}}function it(a,o){1&a&&(t.TgZ(0,"div",22)(1,"h2"),t._uU(2,"Please select filter"),t.qZA()())}let rt=(()=>{class a{constructor(e,n){this.dataService=e,this.auth=n,this.title="dashboard",this.firstPageFirstRowData=[],this.firstPageSecondRowData=[],this.firstPageThirdRowData=[],this.firstPageFourthRowData=[],this.lebels=v,this.dataLoaded=!1,this.subs=[];const r=this.dataService.filter.subscribe(c=>{if(c.length>0){this.dataLoaded=!1;const i=this.dataService.getDashData(c).pipe((0,z.V)(1e4)).subscribe(s=>{s.data.length>0&&(this.dataLoaded=!0,this.firstPageFirstRowData=s.data.filter(d=>d.code.startsWith("11")).sort((d,g)=>d.code-g.code),s.data.filter(d=>d.code.startsWith("12")).sort((d,g)=>d.code-g.code).forEach(d=>{this.firstPageSecondRowData.push(this.dataService.removeGraphRecordIfZero(d))}),this.firstPageThirdRowData=s.data.filter(d=>d.code.startsWith("13")).sort((d,g)=>d.code-g.code),this.firstPageFourthRowData=s.data.filter(d=>d.code.startsWith("14")).sort((d,g)=>d.code-g.code),this.firstPageFirstRowData[3].y_value=this.dataService.removeGraphRecordsWithZeroNeedleStick(this.firstPageFourthRowData[0]).y_value.reduce((d,g)=>d+g,0))});this.subs.push(i)}});this.subs.push(r)}ngOnInit(){}getColorClass(e){return e>=80?"color1":e>=60&&e<80?"color2":e>40&&e<60?"color3":"color4"}getLineChart(e,n){let r=new O;if(n){let c=[];return Object.keys(e.y_value).forEach(i=>{c.push({name:i,type:"line",data:e.y_value[i]})}),r={xAxisDate:e.x_value,title:{text:""},backgroundColor:"rgba(180, 180, 180, 0.2)",areaStyle:null,isStackedLine:!0,chartMultiDate:c,chartDate:[],isSmooth:!0},r}return r}getBasicLineChart(e){let n=new O;return n.chartDate=e.y_value,n.xAxisDate=e.x_value,n.backgroundColor="rgba(180, 180, 180, 0.2)",n.areaStyle=null,n.isStackedLine=!1,n.title={text:"",left:"center"},n}getBarChart(e,n=!1){let r=new _;if(r.chartDate=e.y_value,r.xAxisDate=e.x_value,r.backgroundColor="rgba(180, 180, 180, 0.2)",r.title={text:"",left:"left"},n){let c=[];e.x_value.forEach((i,s)=>{c.push({value:e.y_value[s],name:i})}),r.chartDate=e.data}else r.chartDate=e.y_value;return r}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.D),t.Y36(u.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-main-page"]],decls:3,vars:3,consts:[["class"," mt-5 mb-5 card-title",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"mt-5","mb-5","card-title"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12","lg:col-span-12","card-container"],[3,"class",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12 graph-card",4,"ngIf"],[1,"col-span-12","lg:col-span-12"],[1,"card-title"],["class","col-span-12 lg:col-span-6  graph-card",4,"ngFor","ngForOf"],[1,"top-text","title"],[1,"spacer"],[1,"bottom-text","number"],[1,"col-span-12","lg:col-span-12","graph-card"],[1,"no-data-card"],[1,"col-span-12","lg:col-span-6","graph-card"],[4,"ngIf"],[1,"gray-title"],[3,"lineChartModel"],[3,"barChartModel"],[4,"ngFor","ngForOf"],[1,"no-data"]],template:function(e,n){1&e&&(t.YNc(0,W,2,1,"h1",0),t.YNc(1,ot,19,11,"div",1),t.YNc(2,it,3,0,"div",2)),2&e&&(t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",!n.dataLoaded))},dependencies:[p.sg,p.O5,m.u,j.D],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e40af}.graph-card[_ngcontent-%COMP%]{border-radius:15px;padding:1rem;background:#fff}.card-container[_ngcontent-%COMP%]{display:flex;gap:1.25rem;flex-wrap:wrap}.card-title[_ngcontent-%COMP%]{font-size:1.5rem;color:#000!important;font-size:1.25rem}.gray-title[_ngcontent-%COMP%]{color:#666;margin-bottom:5px}.card-top[_ngcontent-%COMP%]{border-radius:0;flex:1;padding-left:1rem;padding-right:1rem}.card-top.color1[_ngcontent-%COMP%]{border-bottom:3px solid green}.card-top.color2[_ngcontent-%COMP%]{border-bottom:3px solid #f2f082}.card-top.color3[_ngcontent-%COMP%]{border-bottom:3px solid #fdbb31}.card-top.color4[_ngcontent-%COMP%]{border-bottom:3px solid #ff4d4d}.card-top[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#666;margin-bottom:16px}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]{width:32px;border-radius:50%;height:32px;display:flex;align-items:center;justify-content:center;background-color:#4eb33f}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{background-color:#fff;height:calc(100% - 4px);width:calc(100% - 4px);border-radius:50%;display:flex;align-items:center;justify-content:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700;font-size:28px;display:flex}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;border-radius:5px}.spacer[_ngcontent-%COMP%]{flex-grow:1}.top-text[_ngcontent-%COMP%]{margin-top:0}.bottom-text[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700;font-size:28px}.no-data-card[_ngcontent-%COMP%]{text-align:center;color:gray}"]}),a})();var x=l(9155);function ct(a,o){1&a&&(t.TgZ(0,"h1",3),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu("Needle Stick Injury"))}function st(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",9),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart",10),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getBarChart(e))}}function dt(a,o){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,st,4,2,"div",8),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fourthPageFirstRow.length>0)}}function lt(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",9),t._uU(2),t.qZA(),t._UZ(3,"app-pie-chart",11),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("pieChrtModel",n.getDonutData(e))}}function gt(a,o){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,lt,4,2,"div",8),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fourthPageSecondRow.length>0)}}const pt=function(){return{HBV:"#7eb364",HIV:"#eabd53",HCB:"#596ba4"}};function ht(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",9),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart",10),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getBarChart(e,!1,t.DdM(2,pt)))}}function ut(a,o){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,ht,4,3,"div",8),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fourthPageThirdRow.length>0)}}function ft(a,o){1&a&&(t.TgZ(0,"div",12)(1,"h1",13),t._uU(2,"No Data"),t.qZA()())}function _t(a,o){if(1&a&&(t.TgZ(0,"div",4),t.YNc(1,dt,2,1,"div",5),t.YNc(2,gt,2,1,"div",5),t.YNc(3,ut,2,1,"div",5),t.YNc(4,ft,3,0,"div",6),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.fourthPageFirstRow),t.xp6(1),t.Q6J("ngForOf",e.fourthPageSecondRow),t.xp6(1),t.Q6J("ngForOf",e.fourthPageThirdRow),t.xp6(1),t.Q6J("ngIf",e.fourthPageFirstRow.length<1&&e.fourthPageSecondRow.length<1&&e.fourthPageThirdRow.length<1)}}function mt(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h2"),t._uU(2,"Please select filter"),t.qZA()())}let xt=(()=>{class a{constructor(e,n){this.dataService=e,this.auth=n,this.dataLoaded=!1,this.objectData={},this.subs=[]}ngOnInit(){const e=this.dataService.filter.subscribe(n=>{if(n){this.dataLoaded=!1;const r=this.dataService.getDashData(n).subscribe(c=>{c.data.length>0&&(this.dataLoaded=!0,this.fourthPageFirstRow=c.data.filter(i=>i.code.startsWith("41")).sort((i,s)=>i.code-s.code).map(i=>{const s=Object.values(i.y_value).reduce((d,g)=>d+g),h=i.y_value.map(d=>(d/s*100).toFixed(2));return{...i,y_value:h}}),this.fourthPageSecondRow=c.data.filter(i=>i.code.startsWith("42")).sort((i,s)=>i.code-s.code).map(i=>{const s=Object.values(i.y_value).reduce((d,g)=>d+g),h=i.y_value.map(d=>(d/s*100).toFixed(2));return{...i,y_value:h}}),this.fourthPageThirdRow=c.data.filter(i=>i.code.startsWith("44")).sort((i,s)=>i.code-s.code).map(i=>{const s=Object.values(i.y_value).reduce((d,g)=>d+g),h=i.y_value.map(d=>(d/s*100).toFixed(2));return{...i,y_value:h}}))});this.subs.push(r)}});this.subs.push(e)}getBarChart(e,n=!1,r){let c=new _;if(c.chartDate=e.y_value,c.xAxisDate=e.x_value,c.barColors=r,c.backgroundColor="rgba(180, 180, 180, 0.2)",c.title={text:"",left:"left"},n){let i=[];e.x_value.forEach((s,h)=>{i.push({value:e.y_value[h],name:s})}),c.chartDate=e.data}else c.chartDate=e.y_value;return c}getDonutData(e){let n=[];return e.x_value.forEach((r,c)=>{n.push({value:e.y_value[c],name:r})}),{data:n,title:{text:"",left:"left"},isDounte:!0,radius:["40%","70%"],showLegend:!0}}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.D),t.Y36(u.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-needle-stick-injury"]],decls:3,vars:3,consts:[["class"," mt-5 mb-5 card-title",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"mt-5","mb-5","card-title"],[1,"grid","grid-cols-12","gap-5"],["class","col-span-12 lg:col-span-6  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12 graph-card",4,"ngIf"],[1,"col-span-12","lg:col-span-6","graph-card"],[4,"ngIf"],[1,"gray-title"],[3,"barChartModel"],[3,"pieChrtModel"],[1,"col-span-12","lg:col-span-12","graph-card"],[1,"no-data-card"],[1,"no-data"]],template:function(e,n){1&e&&(t.YNc(0,ct,2,1,"h1",0),t.YNc(1,_t,5,4,"div",1),t.YNc(2,mt,3,0,"div",2)),2&e&&(t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",!n.dataLoaded))},dependencies:[p.sg,p.O5,m.u,b.J],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e40af}.no-data-card[_ngcontent-%COMP%]{text-align:center;color:gray}"]}),a})();var vt=l(6224),Ct=l(5839),bt=l(1218);function Mt(a,o){1&a&&(t.TgZ(0,"h1",3),t._uU(1),t.qZA()),2&a&&(t.xp6(1),t.Oqu(" Internal IPC Program"))}function Zt(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",10),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart",11),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getBarChart(e))}}function wt(a,o){if(1&a&&(t.TgZ(0,"div",8),t.YNc(1,Zt,4,2,"div",9),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageFirstRow.length>0)}}function yt(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",10),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart-many",11),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getManyBarChart(e))}}function It(a,o){if(1&a&&(t.TgZ(0,"div",12),t.YNc(1,yt,4,2,"div",9),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageSecondRow.length>0)}}function Tt(a,o){if(1&a&&(t.TgZ(0,"div")(1,"h2",10),t._uU(2),t.qZA(),t._UZ(3,"app-bar-chart-many",11),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("barChartModel",n.getManyBarChart(e))}}function Dt(a,o){if(1&a&&(t.TgZ(0,"div",12),t.YNc(1,Tt,4,2,"div",9),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.thirdPageThirdRow.length>0)}}function At(a,o){1&a&&(t.TgZ(0,"div",12)(1,"h1",13),t._uU(2,"No Data"),t.qZA()())}function St(a,o){if(1&a&&(t.TgZ(0,"div",4),t.YNc(1,wt,2,1,"div",5),t.YNc(2,It,2,1,"div",6),t.YNc(3,Dt,2,1,"div",6),t.YNc(4,At,3,0,"div",7),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.thirdPageFirstRow),t.xp6(1),t.Q6J("ngForOf",e.thirdPageSecondRow),t.xp6(1),t.Q6J("ngForOf",e.thirdPageThirdRow),t.xp6(1),t.Q6J("ngIf",e.thirdPageSecondRow.length<1&&e.thirdPageFirstRow.length<1&&e.thirdPageThirdRow.length<1)}}function qt(a,o){1&a&&(t.TgZ(0,"div",14)(1,"h2"),t._uU(2,"Please select filter"),t.qZA()())}const Nt=[{path:"",component:(()=>{class a{constructor(e){this.document=e,this.isClose=!0}toggalMobileMune(e){this.isOpend=e}ngOnInit(){this.document.body.classList.remove("login")}closeSidebar(e){this.isClose=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.K0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],decls:8,vars:2,consts:[[3,"onOpenClosed"],[1,"flex","mt-[5.7rem]","md:mt-0"],[1,"app-sidebar",3,"onSidebarClosed"],[1,"content"],[1,"grid","grid-cols-12","gap-6"],[1,"col-span-12","2xl:col-span-12"]],template:function(e,n){1&e&&(t.TgZ(0,"app-mobile-menu",0),t.NdJ("onOpenClosed",function(c){return n.toggalMobileMune(c)}),t.qZA(),t.TgZ(1,"div",1)(2,"app-sidebar",2),t.NdJ("onSidebarClosed",function(c){return n.closeSidebar(c)}),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"app-topbar"),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"router-outlet"),t.qZA()()()()),2&e&&(t.xp6(2),t.ekj("small-side-nav",n.isClose))},dependencies:[x.lC,vt.k,Ct.o,bt.f],styles:[".small-side-nav[_ngcontent-%COMP%]{width:85px!important}"]}),a})(),canActivate:[(()=>{class a{constructor(e,n){this.auth=e,this.router=n}canActivate(e,n){return console.log("Auth",e.queryParamMap.get("token")),this.auth.checkUser(),!(!this.auth.userData.token&&!e.queryParamMap.get("token")&&(this.router.navigateByUrl("/account"),1))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(u.e),t.LFG(x.F0))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()],children:[{path:"main-page",component:rt},{path:"needle-stick-injury",component:xt},{path:"ipc-program",component:B},{path:"surveillance",component:A},{path:"internal-ipc-program",component:(()=>{class a{constructor(e,n){this.dataService=e,this.auth=n,this.lebels=v,this.title="Needle Stick Injury",this.dataLoaded=!1,this.objectData={},this.subs=[]}ngOnInit(){const e=this.dataService.filter.subscribe(n=>{if(n){this.dataLoaded=!1;const r=this.dataService.getDashData(n).subscribe(c=>{c.data.length>0&&(this.dataLoaded=!0,this.thirdPageFirstRow=c.data.filter(i=>i.code.startsWith("51")).sort((i,s)=>i.code-s.code),this.thirdPageSecondRow=c.data.filter(i=>i.code.startsWith("52")).sort((i,s)=>i.code-s.code),this.thirdPageThirdRow=c.data.filter(i=>i.code.startsWith("53")).sort((i,s)=>i.code-s.code))});this.subs.push(r)}});this.subs.push(e)}getBarChart(e,n=!1){let r=new _;if(r.chartDate=e.y_value,r.xAxisDate=e.x_value,r.backgroundColor="rgba(180, 180, 180, 0.2)",r.title={text:"",left:"left"},n){let c=[];e.x_value.forEach((i,s)=>{c.push({value:e.y_value[s],name:i})}),r.chartDate=e.data}else r.chartDate=e.y_value;return r}getManyBarChart(e){let n=[],r=new P;return Object.keys(e.y_value).forEach(c=>{n.push({name:c,data:e.y_value[c],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}})}),r.chartDate=n,r.xAxisDate=e.x_value,r.backgroundColor="rgba(180, 180, 180, 0.2)",r.title={text:"",left:"left"},r}getColorClass(e){return e>=80?"color1":e>=60&&e<80?"color2":e>40&&e<60?"color3":"color4"}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.D),t.Y36(u.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-internal-ipc"]],decls:3,vars:3,consts:[["class"," mt-5 mb-5 card-title",4,"ngIf"],["class","grid grid-cols-12 gap-5",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"mt-5","mb-5","card-title"],[1,"grid","grid-cols-12","gap-5"],["class","col-span-12 lg:col-span-6  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12  graph-card",4,"ngFor","ngForOf"],["class","col-span-12 lg:col-span-12 graph-card",4,"ngIf"],[1,"col-span-12","lg:col-span-6","graph-card"],[4,"ngIf"],[1,"gray-title"],[3,"barChartModel"],[1,"col-span-12","lg:col-span-12","graph-card"],[1,"no-data-card"],[1,"no-data"]],template:function(e,n){1&e&&(t.YNc(0,Mt,2,1,"h1",0),t.YNc(1,St,5,4,"div",1),t.YNc(2,qt,3,0,"div",2)),2&e&&(t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",n.dataLoaded),t.xp6(1),t.Q6J("ngIf",!n.dataLoaded))},dependencies:[p.sg,p.O5,m.u,M.a],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e40af}.graph-card[_ngcontent-%COMP%]{border-radius:15px;padding:1rem;background:#fff}.card-container[_ngcontent-%COMP%]{display:flex;gap:1.25rem;flex-wrap:wrap}.card-title[_ngcontent-%COMP%]{font-size:1.5rem;color:#000!important;font-size:1.25rem}.gray-title[_ngcontent-%COMP%]{color:#666;margin-bottom:5px}.card-top[_ngcontent-%COMP%]{border-radius:0;flex:1;padding-left:1rem;padding-right:1rem}.card-top.color1[_ngcontent-%COMP%]{border-bottom:3px solid green}.card-top.color2[_ngcontent-%COMP%]{border-bottom:3px solid #f2f082}.card-top.color3[_ngcontent-%COMP%]{border-bottom:3px solid #fdbb31}.card-top.color4[_ngcontent-%COMP%]{border-bottom:3px solid #ff4d4d}.card-top[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#666;margin-bottom:16px}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]{width:32px;border-radius:50%;height:32px;display:flex;align-items:center;justify-content:center;background-color:#4eb33f}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .cricle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{background-color:#fff;height:calc(100% - 4px);width:calc(100% - 4px);border-radius:50%;display:flex;align-items:center;justify-content:center}.card-top[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700;font-size:28px;display:flex}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;border-radius:5px}.spacer[_ngcontent-%COMP%]{flex-grow:1}.top-text[_ngcontent-%COMP%]{margin-top:0}.bottom-text[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700;font-size:28px}.no-data-card[_ngcontent-%COMP%]{text-align:center;color:gray}"]}),a})()},{path:"",redirectTo:"main-page",pathMatch:"full"}]},{path:"",redirectTo:"",pathMatch:"full"}];let Ft=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[x.Bz.forChild(Nt),x.Bz]}),a})();var Rt=l(2234),Jt=l(3201);let Yt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,Ft,Jt.m,Rt.m]}),a})()}}]);