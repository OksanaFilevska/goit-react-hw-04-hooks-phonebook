(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__2IJOy",span:"Filter_span__jWdbR",input:"Filter_input__X2cwo"}},12:function(t,e,n){t.exports={container:"Container_container__3Zu0C"}},18:function(t,e,n){},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=(n(18),n(13)),i=n(4),u=(n(19),n(12)),l=n.n(u),b=n(0);var j=function(t){var e=t.children;return Object(b.jsx)("div",{className:l.a.container,children:e})},m=n(2),d=n.n(m),h=n(3),p=n.n(h);var f=function(t){var e=t.onSubmit,n=t.contacts,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),j=l[0],m=l[1],h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=d.a.generate(),O=d.a.generate(),x=function(){o(""),m("")};return Object(b.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),e({name:s,number:j},n),x()},children:[Object(b.jsxs)("label",{htmlFor:f,children:[Object(b.jsx)("span",{className:p.a.span,children:"Name"}),Object(b.jsx)("input",{className:p.a.input,type:"text",name:"name",value:s,onChange:h,id:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{htmlFor:O,children:[Object(b.jsx)("span",{className:p.a.span,children:"Number"}),Object(b.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:j,onChange:h,id:O,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:p.a.btn,type:"submit",children:"Add contact"})]})},O=n(9),x=n.n(O),_=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:"s.list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:x.a.item,children:[Object(b.jsxs)("p",{className:"s.contacts",children:[a,": ",Object(b.jsx)("span",{children:c})]}),Object(b.jsx)("button",{type:"button",className:x.a.btnList,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},C=n(10),g=n.n(C),v=d.a.generate(),F=function(t){var e=t.filter,n=t.onChangeFilter;return Object(b.jsxs)("label",{htmlFor:v,children:[Object(b.jsx)("span",{className:g.a.span,children:"Find contacts by name and number"}),Object(b.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n,id:v})]})};var N=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],l=s[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e)}))}(n,u);return Object(b.jsxs)(j,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{contacts:n,onSubmit:function(t,e){var n=t.name,a=t.number,r={name:n,number:a,id:d.a.generate()};e.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):c([r].concat(Object(o.a)(e)))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(F,{filter:u,onChangeFilter:function(t){l(t.currentTarget.value)}}),Object(b.jsx)(_,{contacts:m,onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),w()},3:function(t,e,n){t.exports={input:"ContactForm_input__qJbs5",span:"ContactForm_span__1Tj3_",btn:"ContactForm_btn__2mHUO"}},9:function(t,e,n){t.exports={list:"ContactList_list__drFd3",item:"ContactList_item__16gFA",btnList:"ContactList_btnList__2tXm2"}}},[[29,1,2]]]);
//# sourceMappingURL=main.ff75114d.chunk.js.map