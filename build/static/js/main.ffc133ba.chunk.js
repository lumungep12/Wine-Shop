(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),i=s(13),l=s.n(i),r=s(14),o=s(3),h=s(4),d=s(7),j=s(6),b=s(5),u=s(27),m=s.n(u),O=(s(52),s(9)),p=function(e){return"Ksh "+Number(e.toFixed(2)).toLocaleString()+" "},x=s(10),v=s.n(x),f=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this)).handleCheck=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.openCheckout=function(e){a.setState({showCheckout:!0})},a.closeCheckout=function(e){a.setState({showCheckout:!1})},a.createOrder=function(e){e.preventDefault();var t={fullname:a.state.fullname,mobile:a.state.mobile,email:a.state.email,address:a.state.address,deliveryNote:a.state.deliveryNote,cartItems:a.props.cartItems};a.props.createOrder(t),a.setState({showCheckout:!1})},a.state={showCheckout:!1,fullname:"",mobile:"",email:"",address:"",deliveryNote:""},a}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.props.cartItems,s=this.props.caseAmount,c=this.props.bottleAmount,n=c,i=t.reduce((function(e,t){return e+t.cost.bottle*c}),0)+t.reduce((function(e,t){return e+t.cost.case*s}),0);return Object(a.jsxs)("div",{className:"container cart-component",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"delivery-info",children:[Object(a.jsx)("h4",{className:"text-success",children:"Delivery Info: "}),"Fullname: ",Object(a.jsxs)("span",{children:[" ",this.props.fullname," "]})," ",Object(a.jsx)("br",{}),"Mobile: ",Object(a.jsxs)("span",{children:[" ",this.props.mobile," "]})," ",Object(a.jsx)("br",{}),"Email: ",Object(a.jsxs)("span",{children:[" ",this.props.email," "]})," ",Object(a.jsx)("br",{}),"Address: ",Object(a.jsxs)("span",{children:[" ",this.props.address," "]})," ",Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"checkout",children:this.state.showCheckout&&Object(a.jsxs)(v.a,{isOpen:!0,onRequestClose:this.closeCheckout,className:"checkout-modal",children:[Object(a.jsx)("button",{className:"close-checkout",onClick:this.closeCheckout,children:"X"}),Object(a.jsxs)("form",{onSubmit:this.createOrder,className:"delivery-form",children:[Object(a.jsx)("small",{children:"Enter Your Details To Proceed With Purchase"}),Object(a.jsx)("div",{className:"pb-2",children:Object(a.jsx)("input",{name:"fullname",className:"form-control",type:"text",placeholder:"full names...",onChange:this.handleCheck})}),Object(a.jsx)("div",{className:"pb-2",children:Object(a.jsx)("input",{name:"mobile",className:"form-control",type:"number",placeholder:"Mobile...",onChange:this.handleCheck})}),Object(a.jsx)("div",{className:"pb-2",children:Object(a.jsx)("input",{name:"email",className:"form-control",type:"email",placeholder:"Email Address...",onChange:this.handleCheck})}),Object(a.jsx)("div",{className:"pb-2",children:Object(a.jsx)("input",{name:"address",className:"form-control",type:"text",placeholder:"Location, buruburu...",onChange:this.handleCheck})}),Object(a.jsx)("div",{className:"pb-2",children:Object(a.jsx)("textarea",{name:"deliveryNote",className:"form-control",cols:"20",rows:"3",placeholder:"Delivery text here...",onChange:this.handleCheck})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"buy-btn",children:"Purchase"})})]})]})})]}),Object(a.jsxs)("div",{className:"cart-column",children:[Object(a.jsx)("div",{className:"bottles mr-4",children:0===t.length?Object(a.jsxs)("h1",{children:[t.length," ",Object(a.jsx)("br",{})," Bottles"]}):Object(a.jsxs)("h1",{children:[n,Object(a.jsx)("br",{})," Bottles"]})}),Object(a.jsxs)("div",{className:"prices mr-4",children:[Object(a.jsxs)("div",{className:"amount",children:[Object(a.jsxs)("h5",{children:[c," x Wine Bottle"]}),Object(a.jsxs)("h5",{children:[s," x Wine Case"]})]}),Object(a.jsx)("div",{className:"price",children:Object(a.jsx)("h4",{children:p(i)})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)("button",{className:"filter-btn",onClick:this.props.clearCart,children:"Clear Cart"})}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("button",{className:"cart-btn",onClick:function(){e.setState({showCheckout:!0})},children:"Check Out"})})]})]})}}]),s}(c.Component),C=s(28),N=s.n(C),g=s.p+"static/media/remi-inconnu-Champagne-bottle.3e5a3a5c.svg",k=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this)).openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a.state={isModalOpen:!1},a}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.state.isModalOpen;return Object(a.jsx)("div",{className:"wines",children:this.props.wines.map((function(s){return Object(a.jsxs)("div",{className:"wine",children:[Object(a.jsx)("div",{className:"wine-image",children:Object(a.jsx)("img",{src:g,alt:s.name})}),Object(a.jsxs)("div",{className:"wine-details",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("h4",{children:[" ",Object(a.jsx)("span",{className:"wine-number",children:s.no})," ",Object(a.jsx)("br",{})," ",s.name]})}),Object(a.jsxs)("div",{className:"wine-main",children:[Object(a.jsxs)("div",{className:"bottle",children:[Object(a.jsx)("h4",{children:"Bottle"}),p(s.cost.bottle),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",value:e.bottleAmount,onChange:e.props.handleBottleChange})," QTY"]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"case",children:[Object(a.jsx)("h4",{children:"Case"}),p(s.cost.case),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",value:e.caseAmount,onChange:e.props.handleCaseChange})," QTY"]})]}),Object(a.jsxs)("div",{className:"wine-buttons",children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)("button",{className:"filter-btn",onClick:function(){return e.openModal(s)},children:"Details"})}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("button",{className:"cart-btn",onClick:function(){return e.props.addToCart(s)},children:"Add to Cart"})})]})]}),t&&Object(a.jsx)(v.a,{className:"details-modal",isOpen:!0,onRequestClose:e.closeModal,children:Object(a.jsxs)(N.a,{className:"details",children:[Object(a.jsx)("button",{onClick:e.closeModal,className:"close-modal",children:"X"}),Object(a.jsx)("p",{children:s.details})]})})]},s.no)}))})}}]),s}(c.Component),w=(s(66),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"filter-component",children:Object(a.jsxs)("div",{className:"filter-content",children:[Object(a.jsxs)("div",{className:"order mb-4",children:[Object(a.jsxs)("div",{className:"filter-header",children:[Object(a.jsx)("span",{children:"Show Me"}),Object(a.jsx)("span",{children:"Show All"})]}),Object(a.jsxs)("div",{className:"filter-buttons",children:[Object(a.jsx)("button",{className:"filter-btn",value:"white",onClick:this.props.filterWines,children:"White"}),Object(a.jsx)("button",{className:"filter-btn",value:"red",onClick:this.props.filterWines,children:"Red"}),Object(a.jsx)("button",{className:"filter-btn",value:"sparkling",onClick:this.props.filterWines,children:"Sparkling"})]})]}),Object(a.jsx)("div",{className:"order",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[" Order by "," "," "]}),Object(a.jsx)("button",{className:"filter-btn",value:"bottle-price",onClick:this.props.sortWines,children:"Price"}),Object(a.jsx)("button",{className:"filter-btn",value:"case-price",onClick:this.props.sortWines,children:"Vintage"})]})})]})})}}]),s}(c.Component)),y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).createOrder=function(t){e.setState({fullname:t.fullname,cartItems:t.cartItems,mobile:t.mobile,email:t.email,address:t.address}),alert("Your Order Was Placed Successfully")},e.componentDidMount=function(){m.a.get("https://storage.googleapis.com/wineshop-assets/wine-shop.json").then((function(t){var s=t.data;console.log(s),e.setState({wines:s}),localStorage.setItem("allWines",JSON.stringify(s))})).catch((function(e){console.log(e)}))},e.addToCart=function(t){var s=e.state.cartItems.slice(),a=!1;s.forEach((function(e){e.no===t.no&&(e.count++,a=!0)})),a||s.push(Object(r.a)(Object(r.a)({},t),{},{count:1})),e.setState({cartItems:s})},e.clearCart=function(){e.setState({cartItems:[],bottleAmount:"",caseAmount:"",fullname:"",mobile:"",email:"",address:""})},e.filterWines=function(t){console.log(t.target.value),""===t.target.value?e.setState({variety:t.target.value,wines:e.state.wines}):e.setState({variety:t.target.value,wines:e.state.wines.filter((function(e){return e.tags.indexOf(t.target.value)>=0}))})},e.sortWines=function(t){var s=t.target.value;e.setState((function(t){return{sort:s,wines:e.state.wines.sort((function(e,t){return"bottle-price"===s?e.cost.bottle>t.cost.bottle?1:-1:"case-price"===s?e.cost.case>t.cost.case?1:-1:e.no>t.no?1:-1}))}}))},e.state={wines:localStorage.getItem("allWines")?JSON.parse(localStorage.getItem("allWines")):[],cartItems:[],bottleAmount:"",caseAmount:"",variety:"",sort:"",fullname:"",mobile:"",email:"",address:""},e.handleBottleChange=e.handleBottleChange.bind(Object(d.a)(e)),e.handleCaseChange=e.handleCaseChange.bind(Object(d.a)(e)),e}return Object(h.a)(s,[{key:"handleBottleChange",value:function(e){this.setState({bottleAmount:e.target.value})}},{key:"handleCaseChange",value:function(e){this.setState({caseAmount:e.target.value})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Wine Shop"}),Object(a.jsx)("p",{children:"wineshop.com"})]}),Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(w,{count:this.state.wines.length,variety:this.state.variety,sort:this.state.sort,filterWines:this.filterWines,sortWines:this.sortWines}),Object(a.jsx)("div",{className:"cart",children:Object(a.jsx)(f,{count:this.state.wines,fullname:this.state.fullname,mobile:this.state.mobile,email:this.state.email,address:this.state.address,cartItems:this.state.cartItems,clearCart:this.clearCart,bottleAmount:this.state.bottleAmount,caseAmount:this.state.caseAmount,createOrder:this.createOrder})})]}),Object(a.jsx)("div",{className:"wines",children:Object(a.jsx)(k,{addToCart:this.addToCart,wines:this.state.wines,bottleAmount:this.state.bottleAmount,caseAmount:this.state.caseAmount,handleCaseChange:this.handleCaseChange,handleBottleChange:this.handleBottleChange})})]}),Object(a.jsx)("footer",{children:Object(a.jsx)("p",{children:"Copyright Wine Shop 2020"})})]})}}]),s}(n.a.Component);l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ffc133ba.chunk.js.map