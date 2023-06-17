"use strict";(self.webpackChunkamazon_clone_react=self.webpackChunkamazon_clone_react||[]).push([[514],{6468:function(e,n,r){r.d(n,{Z:function(){return o}});r(2791);var s=r(9434),a=r(8755),t=r(688),c=r(7621),i=r(184),o=function(e){var n=e.id,r=e.title,o=e.image,l=e.rating,d=e.price,u=e.hideButton,h=(0,s.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"checkout-product",children:[(0,i.jsx)("img",{src:o,alt:"",className:"checkout-product-image"}),(0,i.jsxs)("div",{className:"checkout-product-info",children:[(0,i.jsx)("p",{className:"checkout-product-title",children:r}),(0,i.jsxs)("p",{className:"checkout-product-price",children:[(0,i.jsx)("strong",{children:"\u20b9"}),(0,i.jsx)("strong",{children:d})]}),(0,i.jsx)("div",{className:"checkout-product-rating",children:Array(l).fill().map((function(e,n){return(0,i.jsx)("p",{children:(0,i.jsx)("img",{src:c,alt:""})},n)}))}),!u&&(0,i.jsxs)("button",{onClick:function(){h((0,t.Er)(n))},children:[(0,i.jsxs)("i",{children:[" ",(0,i.jsx)(a.Z,{})," "]})," Remove From Basket"]})]})]})})}},6014:function(e,n,r){r.d(n,{Z:function(){return u}});r(2791);var s=r(3880),a=r(2369),t=r(8755),c=r(1087),i=r(9434),o=r(688),l=r(7892),d=r(184),u=function(){var e=(0,i.v9)((function(e){return e.data})),n=e.user,r=e.basket,u=(0,i.I0)();return(0,d.jsxs)("nav",{className:"header",children:[(0,d.jsx)(c.rU,{to:"/",children:(0,d.jsx)("img",{className:"header-logo",src:l,alt:"amazon_logo"})}),(0,d.jsx)("div",{className:"header-option",style:{marginRight:"-10px"},children:(0,d.jsx)(a.Z,{})}),(0,d.jsxs)("div",{className:"header-option",children:[(0,d.jsx)("span",{className:"header-option1",children:"Hello"}),(0,d.jsx)("span",{className:"header-option2",children:"Select Your Address"})]}),(0,d.jsxs)("div",{className:"search",children:[(0,d.jsx)("select",{children:(0,d.jsx)("option",{children:"All"})}),(0,d.jsx)("input",{type:"text",className:"searchInput"}),(0,d.jsx)(s.Z,{className:"searchIcon"})]}),(0,d.jsxs)("div",{className:"header-nav",children:[(0,d.jsx)(c.rU,{to:"".concat(n?"/":"/login"),className:"header-link",children:(0,d.jsxs)("div",{className:"header-option",onClick:function(){u((0,o.Zf)())},children:[(0,d.jsxs)("span",{className:"header-option1",children:["Hello ",n?n.email:"Guest"]}),(0,d.jsx)("span",{className:"header-option2",children:n?"Sign Out":"Sign In"})]})}),(0,d.jsx)(c.rU,{to:"/orders",className:"header-link",children:(0,d.jsxs)("div",{className:"header-option",children:[(0,d.jsx)("span",{className:"header-option1",children:"Returns"}),(0,d.jsx)("span",{className:"header-option2",children:"& Orders"})]})}),(0,d.jsx)(c.rU,{to:"/login",className:"header-link",children:(0,d.jsxs)("div",{className:"header-option",children:[(0,d.jsx)("span",{className:"header-option1",children:"Your"}),(0,d.jsx)("span",{className:"header-option2",children:"Prime"})]})}),(0,d.jsx)(c.rU,{to:"/checkout",className:"header-link",children:(0,d.jsxs)("div",{className:"header-basket",children:[(0,d.jsx)(t.Z,{}),(0,d.jsx)("span",{className:"header-option2 basket-count",children:r&&r.length})]})})]})]})}},2883:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var s=r(4165),a=r(5861),t=r(9439),c=r(2791),i=r(6014),o=r(9434),l=r(948),d=r(6468),u=r(5389),h=r(7689),p=r(1087),m=r(6599),x=r.p+"static/media/Amazon_Logo.19e5df3e3e8811e0564a.png",j=r(4569),f=r.n(j)().create({baseURL:"https://backend-production-0b83.up.railway.app/"}),v=r(688),N=r(184),y=function(){var e=(0,o.v9)((function(e){return e.data})),n=e.basket,r=e.user,j=(0,h.s0)(),y=(0,o.I0)(),g=(0,c.useState)(!1),k=(0,t.Z)(g,2),b=k[0],Z=k[1],w=(0,c.useState)(null),_=(0,t.Z)(w,2),z=_[0],S=_[1],I=(0,c.useState)(""),C=(0,t.Z)(I,2),R=C[0],A=C[1],T=(0,c.useState)(!1),U=(0,t.Z)(T,2),O=U[0],P=U[1];function F(e){return new Promise((function(n){var r=document.createElement("script");r.src=e,r.onload=function(){n(!0)},r.onerror=function(){n(!1)},document.body.appendChild(r)}))}function B(){return D.apply(this,arguments)}function D(){return D=(0,a.Z)((0,s.Z)().mark((function e(){var t,c,i,o,l,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:return e.next=8,f.post("/payment/orders",{amount:100*(0,u.V)(n),currency:"INR"});case 8:if(t=e.sent){e.next=12;break}return alert("Server error. Are you online?"),e.abrupt("return");case 12:A(!1),P(!1),c=t.data,i=c.amount,o=c.id,l=c.currency,d={key:"rzp_test_18CXMPFKIV8fNM",amount:i.toString(),currency:l,name:"Ecommerce Corp.",description:"Test Transaction",image:{logo:x},order_id:o,handler:function(){var e=(0,a.Z)((0,s.Z)().mark((function e(a){var t,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={orderCreationId:o,razorpayPaymentId:a.razorpay_payment_id,razorpayOrderId:a.razorpay_order_id,razorpaySignature:a.razorpay_signature},e.next=3,f.post("/payment/success",t);case 3:c=e.sent,console.log(c.data),console.log(c),A(!1),"OK"==c.statusText||""==c.statusText?(console.log("successfull"),m.db.collection("users").doc(r&&r.uid).collection("orders").doc(o).set({basket:n,amount:i,created:c.data.created}),Z(!0),S(!1),A(!1),y((0,v.vs)()),j("/orders")):(console.log("not succesfull"),alert(c.data.msg),Z(!1),S(!0));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),prefill:{name:r.name,email:r.email,contact:r.phoneNumber},notes:{address:"Ecommerce Corporate Office"},theme:{color:"#61dafb"}},new window.Razorpay(d).open();case 18:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var E=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),A(!0),P(!0),B();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.Z,{}),(0,N.jsx)("div",{className:"payment",children:(0,N.jsxs)("div",{className:"payment-container",children:[(0,N.jsxs)("h1",{children:["Checkout ",(0,N.jsxs)(p.rU,{to:"/checkout",children:[n.length," items"]})]}),(0,N.jsxs)("div",{className:"payment-section",children:[(0,N.jsx)("div",{className:"payment-title",children:(0,N.jsx)("h3",{children:"Delivery Address"})}),(0,N.jsxs)("div",{className:"payment-address",children:[(0,N.jsx)("p",{children:r&&r.email}),(0,N.jsx)("p",{children:"House no. 230 Near Botnical Garden"}),(0,N.jsx)("p",{children:"Lucknow, India"})]})]}),(0,N.jsxs)("div",{className:"payment-section",children:[(0,N.jsx)("div",{className:"payment-title",children:(0,N.jsx)("h3",{children:"Review items and Delivery"})}),(0,N.jsx)("div",{className:"payment-items",children:n&&n.map((function(e){return(0,N.jsx)(d.Z,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating},e.id)}))})]}),(0,N.jsxs)("div",{className:"payment-section",children:[(0,N.jsx)("div",{className:"payment-title",children:(0,N.jsx)("h3",{children:"Payment Method"})}),(0,N.jsx)("div",{className:"payment-details",children:(0,N.jsxs)("form",{onSubmit:E,children:[(0,N.jsxs)("div",{className:"payment-container",children:[(0,N.jsx)(l.Z,{renderText:function(e){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("h3",{children:["Order Total: ",e]})})},decimalScale:2,value:(0,u.V)(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),(0,N.jsx)("button",{disabled:R||O||b,children:(0,N.jsx)("span",{children:R?(0,N.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),z&&(0,N.jsx)("div",{children:z})]})})]})]})})]})}},5389:function(e,n,r){r.d(n,{V:function(){return s}});var s=function(e){return e.reduce((function(e,n){return n.price+e}),0)}},7892:function(e,n,r){e.exports=r.p+"static/media/ecom_logo.a2f4100cc773e4d43fbb.png"},7621:function(e,n,r){e.exports=r.p+"static/media/star.c2e39f37b0b81e6f545b.png"}}]);
//# sourceMappingURL=514.fa682a46.chunk.js.map