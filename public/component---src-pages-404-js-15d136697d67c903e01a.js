(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(152),c=a(167);e.default=function(){return i.a.createElement(r.a,null,i.a.createElement(c.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return j}),a.d(e,"StaticQueryContext",function(){return N}),a.d(e,"StaticQuery",function(){return L});var n=a(0),i=a.n(n),r=a(4),c=a.n(r),u=a(148),o=a.n(u);a.d(e,"Link",function(){return o.a}),a.d(e,"withPrefix",function(){return u.withPrefix}),a.d(e,"navigate",function(){return u.navigate}),a.d(e,"push",function(){return u.push}),a.d(e,"replace",function(){return u.replace}),a.d(e,"navigateTo",function(){return u.navigateTo});var l=a(151),s=a.n(l);a.d(e,"PageRenderer",function(){return s.a});var M=a(32);a.d(e,"parsePath",function(){return M.a});var N=i.a.createContext({}),L=function(t){return i.a.createElement(N.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(t,e,a){"use strict";var n=a(0),i=a.n(n);a(166);e.a=function(t){var e=t.children;return i.a.createElement("div",{className:"page__section"},i.a.createElement("div",{className:"page__section__content"},e))}},151:function(t,e,a){var n;t.exports=(n=a(156))&&n.default||n},152:function(t,e,a){"use strict";var n=a(155),i=a(0),r=a.n(i),c=a(4),u=a.n(c),o=a(149),l=a(7),s=a.n(l),M=a(157),N=a.n(M),L=(a(158),a(159)),j=a.n(L),m=a(160),g=a.n(m),y=a(161),d=a.n(y),I=a(162),T=a.n(I),p=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={},a}return s()(e,t),e.prototype.render=function(){var t=this.props.data;return r.a.createElement("footer",{className:"footer"},r.a.createElement("h3",null,"Stay in Touch"),r.a.createElement("p",null,"Subscribe to my mailing list to receive updates and promotional offers."),r.a.createElement("div",{className:"signup"},r.a.createElement("form",{action:""},r.a.createElement("input",{type:"text"}),r.a.createElement("button",{className:"submit"},"+"))),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:'"mailto:'+t.contatEmail}," ",r.a.createElement("img",{src:T.a,width:"17",height:"17",alt:"email icon"})),r.a.createElement("a",{href:t.faceBookLink}," ",r.a.createElement("img",{src:j.a,width:"17",height:"17",alt:"facebook logo"})),r.a.createElement("a",{href:t.twitterLink}," ",r.a.createElement("img",{src:d.a,width:"17",height:"17",alt:"twitter logo"})),r.a.createElement("a",{href:t.instagramkLink}," ",r.a.createElement("img",{src:g.a,width:"17",height:"17",alt:"instagram logo"}))),"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"https://www.purpleandbold"},r.a.createElement("img",{src:N.a,width:"50",height:"35",alt:""})))},e}(i.Component),D=(a(163),a(51)),S=a.n(D),E=(a(165),a(150)),w=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={navlinks:[{title:"Home",link:"/"},{title:"Memoir",link:"memoir"},{title:"About",link:"about"},{title:"Excerpt",link:"excerpt"},{title:"Photo gallery",link:"photo-gallery"},{title:"Contact",link:"contact"}],navOpen:!1},a.toggleNav=a.toggleNav.bind(S()(S()(a))),a}s()(e,t);var a=e.prototype;return a.toggleNav=function(){var t=this.state.navOpen;this.setState({navOpen:!t})},a.render=function(){var t=this;return r.a.createElement("div",{className:"header__wrapper"},r.a.createElement(E.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement(o.Link,{to:"/"},this.props.siteTitle)),r.a.createElement("div",{className:"desktop"},r.a.createElement("nav",{className:"nav"},this.state.navlinks.map(function(t,e){return r.a.createElement("div",{className:"nav__link"},r.a.createElement(o.Link,{to:t.link,key:e},t.title))}))),r.a.createElement("div",{className:"mobile "+(this.state.navOpen?"nav__open":"nav__closed")},r.a.createElement("button",{className:"dot",onClick:function(){return t.toggleNav()}},r.a.createElement("div",{className:"dot__one"}),r.a.createElement("div",{className:"dot__two"}),r.a.createElement("div",{className:"dot__three"})),r.a.createElement("nav",{className:"nav"},this.state.navlinks.map(function(t,e){return r.a.createElement("div",{className:"nav__link"},r.a.createElement(o.Link,{to:t.link,key:e},t.title))}))))))},e}(i.Component),v=function(t){var e=t.children;return r.a.createElement(o.StaticQuery,{query:"1314472495",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{siteTitle:t.contentfulSiteMisc.siteTitle}),r.a.createElement("div",null,r.a.createElement("main",null,e),r.a.createElement(p,{data:t.contentfulSiteMisc})))},data:n})};v.propTypes={children:u.a.node.isRequired};e.a=v},155:function(t){t.exports={data:{contentfulSiteMisc:{siteTitle:"Lisa Brener",faceBookLink:"google.com",contactEmail:"LisaBrener@gmail.com",twitterLink:"google.com",instagramLink:"google.com"}}}},156:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),i=a.n(n),r=a(4),c=a.n(r),u=a(53),o=a(2),l=function(t){var e=t.location,a=o.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(u.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},157:function(t,e,a){t.exports=a.p+"static/purp-268b01859e1ac09373760b36405f28b4.png"},158:function(t,e,a){},159:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOSA4aC0zdjRoM3YxMmg1di0xMmgzLjY0MmwuMzU4LTRoLTR2LTEuNjY3YzAtLjk1NS4xOTItMS4zMzMgMS4xMTUtMS4zMzNoMi44ODV2LTVoLTMuODA4Yy0zLjU5NiAwLTUuMTkyIDEuNTgzLTUuMTkyIDQuNjE1djMuMzg1eiIvPjwvc3ZnPg=="},160:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg=="},161:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="},162:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzEzbC0xMS45ODUtOS43MTNoMjMuOTdsLTExLjk4NSA5LjcxM3ptMCAyLjU3NGwtMTItOS43MjV2MTUuNDM4aDI0di0xNS40MzhsLTEyIDkuNzI1eiIvPjwvc3ZnPg=="},165:function(t,e,a){},166:function(t,e,a){},167:function(t,e,a){"use strict";var n=a(168),i=a(0),r=a.n(i),c=a(4),u=a.n(c),o=a(169),l=a.n(o),s=a(149);function M(t){var e=t.description,a=t.lang,i=t.meta,c=t.keywords,u=t.title;return r.a.createElement(s.StaticQuery,{query:N,render:function(t){var n=e||t.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(i)})},data:n})}M.defaultProps={lang:"en",meta:[],keywords:[]},M.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},e.a=M;var N="1025518380"},168:function(t){t.exports={data:{site:{siteMetadata:{title:"lyn lorem",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-15d136697d67c903e01a.js.map