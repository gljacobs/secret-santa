(this["webpackJsonpsecret-santa"]=this["webpackJsonpsecret-santa"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),s=a.n(r),c=(a(14),a(15),a(8)),o=a(1),i=a(2),m=a(4),d=a(3),u=a(5),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleClick=function(e){a.props.handleAddSanta(e),a.setState({value:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{id:"ssIn",type:"text",className:"form-control",placeholder:"Enter a participant for Secret Santa...",value:this.state.value,onChange:this.handleChange}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-success",type:"button",id:"button-addon2",onClick:function(){return e.handleClick(e.state.value)}},"+")))}}]),t}(l.a.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={santas:[{num:1,name:"Gabriel",reveal:!0,secret:"Mariah"},{num:2,name:"Mariah",reveal:!0,secret:"Gabriel"}],revealTarget:null},a.handleAddSanta=function(e){a.setState({santas:[].concat(Object(c.a)(a.state.santas),[{num:a.state.santas.length+1,name:e,reveal:!1,secret:null}]),value:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement(h,{handleAddSanta:this.handleAddSanta}),l.a.createElement("table",{className:"table table-striped table-bordered table-dark"},l.a.createElement("thead",{className:"bg-success"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Secret"))),l.a.createElement("tbody",null,this.state.santas.map((function(t){return l.a.createElement("tr",{key:t.num},l.a.createElement("th",{scope:"row"},t.num),l.a.createElement("td",null,t.name),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-success float-right btn-sm",onClick:function(){return e.setState({revealTarget:t.num})},"data-toggle":"modal","data-target":"#exampleModalCenter"},"Reveal")))})))),l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalCenterTitle"},"Merry Christmas!"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},this.state.revealTarget?this.state.santas[this.state.revealTarget-1].name+" has "+this.state.santas[this.state.revealTarget-1].secret+"...":"..."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),t}(l.a.Component);var p=function(){return l.a.createElement("nav",{className:"navbar text-white bg-success d-flex justify-content-center"},l.a.createElement("img",{src:"https://test.ialottery.com/images/Promotions/SecretSanta/SecretSantaLogo_300px.png",height:"60"}))};var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.35572f32.chunk.js.map