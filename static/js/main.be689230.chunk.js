(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(8),s=n(10),i=n(9),r=n(0),o=n.n(r),u=n(20),j=n.n(u),l=n(14),b=n(2),d=(n(26),n(11)),h=(n(27),n(1)),m=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).createTasks=c.createTasks.bind(Object(d.a)(c)),c}return Object(c.a)(n,[{key:"createTasks",value:function(e){var t=this;return Object(h.jsx)("li",{onClick:function(){return t.delete(e.key)},children:e.text},e.key)}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(h.jsx)("ul",{className:"theList",children:e})}}]),n}(r.Component),O=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={items:[]},c.addItem=c.addItem.bind(Object(d.a)(c)),c.deleteItem=c.deleteItem.bind(Object(d.a)(c)),c}return Object(c.a)(n,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"todoListMain",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("form",{onSubmit:this.addItem,children:[Object(h.jsx)("input",{ref:function(t){return e._inputElement=t},placeholder:"Enter ToDo"}),Object(h.jsx)("button",{type:"submit",children:"add"})]})}),Object(h.jsx)(m,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(r.Component),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"This is Home Page"})}}]),n}(o.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"This is About Page"})}}]),n}(o.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("span",{className:"menuItem",children:Object(h.jsx)(l.b,{to:"/",children:"Home"})}),Object(h.jsx)("span",{className:"menuItem",children:Object(h.jsx)(l.b,{to:"/todolist",children:"TodoList"})}),Object(h.jsx)("span",{className:"menuItem",children:Object(h.jsx)(l.b,{to:"/about",children:"About"})})]}),Object(h.jsx)(b.a,{exact:!0,path:"/",component:p}),Object(h.jsx)(b.a,{path:"/todolist",component:O}),Object(h.jsx)(b.a,{path:"/about",component:v})]})})}}]),n}(o.a.Component),x=document.querySelector("#container");j.a.render(Object(h.jsx)(f,{}),x)}},[[34,1,2]]]);
//# sourceMappingURL=main.be689230.chunk.js.map