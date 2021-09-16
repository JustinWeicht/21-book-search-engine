(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,a,t){e.exports=t(147)},136:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(54),m=t.n(u),d=(t(135),t(136),t(67)),b=t(18),p=t(123),g=t(28),v=t.n(g),k=t(46),E=t(25),h=t(158),f=t(159),w=t(168),O=t(113),j=t(160),S=t(161),y=t(174),I=t(110),x=t(111),C=t(98),B=t.n(C),_=new(function(){function e(){Object(I.a)(this,e)}return Object(x.a)(e,[{key:"getProfile",value:function(){return B()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return B()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),F=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},T=t(165),L=t(62),q=t(109),N=Object(q.a)(n||(n=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),$=Object(q.a)(r||(r=Object(L.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          _id\n          authors\n          description\n          title\n          image\n          link\n        }\n      }\n    }\n  }\n"]))),P=Object(q.a)(o||(o=Object(L.a)(["\n  mutation saveBook($input: bookInformation) {\n    saveBook(input: $input) {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          _id\n          authors\n          description\n          title\n          image\n          link\n        }\n    }\n  }\n"]))),D=Object(q.a)(l||(l=Object(L.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          _id\n          authors\n          description\n          title\n          image\n          link\n        }\n    }\n  }\n"]))),G=function(){var e=Object(i.useState)([]),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(E.a)(r,2),l=o[0],c=o[1],u=Object(T.a)(P),m=Object(E.a)(u,1)[0],d=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),b=Object(E.a)(d,2),g=b[0],I=b[1];Object(i.useEffect)((function(){return function(){var e;(e=g).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var x=function(){var e=Object(k.a)(v.a.mark((function e(a){var t,r,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(k.a)(v.a.mark((function e(a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),r=_.loggedIn()?_.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,m(n,r);case 7:if(e.sent.ok){e.next=10;break}throw new Error("something went wrong!");case 10:I([].concat(Object(p.a)(g),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(w.a,{onSubmit:x},s.a.createElement(w.a.Row,null,s.a.createElement(O.a,{xs:12,md:8},s.a.createElement(w.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(O.a,{xs:12,md:4},s.a.createElement(j.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(f.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(S.a,null,t.map((function(e){return s.a.createElement(y.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(y.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(y.a.Body,null,s.a.createElement(y.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(y.a.Text,null,e.description),_.loggedIn()&&s.a.createElement(j.a,{disabled:null===g||void 0===g?void 0:g.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return C(e.bookId)}},(null===g||void 0===g?void 0:g.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},U=Object(q.a)(c||(c=Object(L.a)(["\n  query getMe {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        _id\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),V=t(172),Y=t(166),J=function(){var e=Object(V.a)(U),a=e.loading,t=e.data,n=(null===t||void 0===t?void 0:t.me)||[],r=Object(Y.a)(D).removeBook,o=function(){var e=Object(k.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.loggedIn()?_.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r({variables:{bookId:a}});case 6:F(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(f.a,null,s.a.createElement("h2",null,n.savedBooks.length?"Viewing ".concat(n.savedBooks.length," saved ").concat(1===n.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(S.a,null,n.savedBooks.map((function(e){return s.a.createElement(y.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(y.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(y.a.Body,null,s.a.createElement(y.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(y.a.Text,null,e.description),s.a.createElement(j.a,{className:"btn-block btn-danger",onClick:function(){return o(e.bookId)}},"Delete this Book!")))})))))},K=t(171),z=t(170),A=t(167),M=t(173),H=t(65),R=t(57),W=t(163),Q=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(T.a)($),b=Object(E.a)(d,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(R.a)(Object(R.a)({},t),{},Object(H.a)({},r,o)))},g=function(){var e=Object(k.a)(v.a.mark((function e(a){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(R.a)({},t)});case 6:r=e.sent,o=r.data,_.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:g},s.a.createElement(W.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:t.username,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},X=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(T.a)(N),b=Object(E.a)(d,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(R.a)(Object(R.a)({},t),{},Object(H.a)({},r,o)))},g=function(){var e=Object(k.a)(v.a.mark((function e(a){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(R.a)({},t)});case 6:r=e.sent,o=r.data,_.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:g},s.a.createElement(W.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(i.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(K.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(f.a,{fluid:!0},s.a.createElement(K.a.Brand,{as:d.b,to:"/"},"Google Books Search"),s.a.createElement(K.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(K.a.Collapse,{id:"navbar"},s.a.createElement(z.a,{className:"ml-auto"},s.a.createElement(z.a.Link,{as:d.b,to:"/"},"Search For Books"),_.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a.Link,{as:d.b,to:"/saved"},"See Your Books"),s.a.createElement(z.a.Link,{onClick:_.logout},"Logout")):s.a.createElement(z.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(A.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(M.a.Container,{defaultActiveKey:"login"},s.a.createElement(A.a.Header,{closeButton:!0},s.a.createElement(A.a.Title,{id:"signup-modal"},s.a.createElement(z.a,{variant:"pills"},s.a.createElement(z.a.Item,null,s.a.createElement(z.a.Link,{eventKey:"login"},"Login")),s.a.createElement(z.a.Item,null,s.a.createElement(z.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(A.a.Body,null,s.a.createElement(M.a.Content,null,s.a.createElement(M.a.Pane,{eventKey:"login"},s.a.createElement(X,{handleModalClose:function(){return n(!1)}})),s.a.createElement(M.a.Pane,{eventKey:"signup"},s.a.createElement(Q,{handleModalClose:function(){return n(!1)}})))))))},ee=t(164),ae=new(t(122).a)({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return s.a.createElement(ee.a,{client:ae},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(Z,null),s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/",component:G}),s.a.createElement(b.a,{exact:!0,path:"/saved",component:J}),s.a.createElement(b.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.c02dccd3.chunk.js.map