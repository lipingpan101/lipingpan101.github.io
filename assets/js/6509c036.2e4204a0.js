"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[194],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(u,".").concat(m)]||p[m]||h[m]||a;return o?r.createElement(f,i(i({ref:t},l),{},{components:o})):r.createElement(f,i({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9952:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"React Router"},i=void 0,s={permalink:"/blog/2023/03/01/react-router",editUrl:"https://lipingpan101.github.io/blog/2023-03-01-react-router.md",source:"@site/blog/2023-03-01-react-router.md",title:"React Router",description:"React Router is a powerful library that allows you to implement front-end routing in your React applications. It offers a wide range of components and features that make it easy to create single-page applications with multiple routes and views. One of the most useful features of React Router is the Router Hook API, which allows you to interact with the routing system programmatically.",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[],readingTime:2.155,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React Router"},nextItem:{title:"Git Basics",permalink:"/blog/2023/02/25/git-basics"}},u={authorsImageUrls:[]},c=[],l={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React Router is a powerful library that allows you to implement front-end routing in your React applications. It offers a wide range of components and features that make it easy to create single-page applications with multiple routes and views. One of the most useful features of React Router is the Router Hook API, which allows you to interact with the routing system programmatically."),(0,n.kt)("p",null,"The Router Hook API provides a set of hooks that allow you to access the current location, navigate to different routes, and listen for changes to the route. Let's take a look at some of the most useful hooks in the Router Hook API:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"useHistory(): This hook returns the history object, which you can use to navigate to different routes programmatically. For example, you can use history.push('/my-route') to navigate to the 'my-route' route."),(0,n.kt)("li",{parentName:"ol"},"useLocation(): This hook returns the current location object, which contains information about the current URL. You can use this hook to get the current pathname, search, and hash values."),(0,n.kt)("li",{parentName:"ol"},"useParams(): This hook returns an object containing the dynamic parameters in the current URL. For example, if you have a route defined as '/users/:userId', you can use useParams() to get the value of ':userId' in the current URL."),(0,n.kt)("li",{parentName:"ol"},"useRouteMatch(): This hook returns an object containing information about the current route match. You can use this hook to get the current path, URL, and params for the matched route.")),(0,n.kt)("p",null,"Using these hooks, you can create custom navigation components, implement authentication and authorization logic, and handle complex routing scenarios. For example, you can use the Router Hook API to redirect users to a login page if they try to access a protected route without authentication."),(0,n.kt)("p",null,"In addition to the Router Hook API, React Router also provides a wide range of components for implementing routing in your application. The most commonly used components include:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"<Router>"),": This component is the top-level component for the routing system. It provides the context and history objects that are used by other routing components."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"<Route>"),": This component is used to define a route in your application. You can specify the path, component, and other options for the route."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"<Link>"),": This component is used to create links between routes in your application. It provides a declarative way to navigate between routes.")),(0,n.kt)("p",null,"An example can be found ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/react/react_router.asp"},"here"),"."),(0,n.kt)("p",null,"Overall, React Router is an essential library for any React developer who wants to implement front-end routing in their applications. With the Router Hook API and other components, you can create powerful routing systems that are flexible and easy to use."))}h.isMDXComponent=!0}}]);