(this.webpackJsonpwageb=this.webpackJsonpwageb||[]).push([[0],{58:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(22),s=n(7),r=n(15),a=n(9),o=(n(58),n(2)),i=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Confiez vos r\xeaves \xe0 des experts du Web"}),Object(o.jsx)("p",{children:"Gr\xe2ce \xe0 notre savoir-faire, notre exp\xe9rience et notre \xe9coute, nous accompagnons nos clients dans la cr\xe9ation de site internet: \xe9tude, UX, conception, design, d\xe9veloppement, SEO.  \n  Notre agence web est capable de r\xe9pondre \xe0 tous vos besoins et d'\xe9laborer une v\xe9ritable strat\xe9gie digitale."})]})},l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Websitic est une Agence de communication digitale \xe0 paris ayant pour mission de vous accompagner sur vos projets digitaux."}),Object(o.jsx)("p",{children:'De l\u2019\xe9tape d\u2019avant projet web au lancement effectif du site, nous somme l\xe0 pour vous. Tout au long de la dur\xe9e de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des strat\xe9gies digitales efficaces et vous permettre d\u2019atteindre vos objectifs.  \n  Laissez votre projet entre des mains dignes de confiance, ayant accompagn\xe9 "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.'})]})},j=n(0),u=Object(j.createContext)(),d=function(e){var t=e.projects,n=Object(j.useContext)(u);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"nav_studies",children:t.map((function(e){return Object(o.jsx)(r.b,{to:"/work/".concat(e.slug),children:Object(o.jsxs)("div",{className:"card_study ".concat(n.theme),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("p",{children:["with ",Object(o.jsx)("span",{children:e.client})]})]},e.slug)})}))})})},b=function(e){var t=e.projects,n=Object(j.useContext)(u);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"nav_studies",children:t.map((function(e){return Object(o.jsxs)("li",{className:"".concat(n.theme),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)(r.b,{to:"/work/".concat(e.slug),children:"en savoir plus"})]},e.slug)}))})})},h=function(e){var t=e.projects,n=Object(a.f)().studySlug,s=Object(j.useState)(void 0),r=Object(c.a)(s,2),i=r[0],l=r[1];return Object(j.useEffect)((function(){var e=t.find((function(e){return e.slug===n}));l(e)}),[n]),Object(o.jsx)(o.Fragment,{children:i&&Object(o.jsxs)("section",{className:"study",children:[Object(o.jsx)("h2",{children:i.title}),Object(o.jsx)("p",{children:i.description})]})})},m=n(100),p=function(){var e=[{title:"Le Challenge",client:"Platon",slug:"platon",description:"Platon a d\xe9cid\xe9 de se lancer \xe0 l'\xe9poque malgr\xe9 une crise \xe9conomique difficile.  \n      Nous avons \xe9t\xe9 derri\xe8re eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."},{title:"Solane est le premier vendeur de fraises du Poitou-Charentes",client:"Solane",slug:"solane",description:"Et c'est gr\xe2ce \xe0 nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du march\xe9 ont fonctionn\xe9.\n      "},{title:"Sedal, l'entreprise qui a commenc\xe9 tout en bas... Et qui est toujours tout en bas",client:"Sedal",slug:"sedal",description:'Malgr\xe9 nos conseils et notre site web cr\xe9\xe9 sur Wix, Sedal semble ne pas vouloir d\xe9coller. Mais comme un grand homme et une grande femme l\'ont dit, "les derniers seront les premiers".\n      '}],t={list:Object(o.jsx)(b,{projects:e}),block:Object(o.jsx)(d,{projects:e})},n=Object(j.useState)(!0),s=Object(c.a)(n,2),i=s[0],l=s[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Au fil des ann\xe9es, nous avons pu accompagner les meilleurs."}),Object(o.jsx)("p",{children:"D\xe9couvrez pas \xe0 pas comment nous avons \xe9t\xe9 pr\xe9sent pour lancer vos marques pr\xe9f\xe9r\xe9es."}),Object(o.jsx)(m.a,{checked:i,onChange:function(){l(!i)},inputProps:{"aria-label":"secondary checkbox"}}),Object(o.jsxs)(r.a,{children:[i?t.block:t.list,Object(o.jsx)(a.c,{children:Object(o.jsx)(a.a,{path:"/work/:studySlug",children:Object(o.jsx)(h,{projects:e})})})]})]})},O=n(49),x=n.n(O),g=n(98),v=n(99),f=n(101),k=function(){var e=Object(j.useState)(null),t=Object(c.a)(e,2),n=t[0],s=t[1],a=Object(j.useContext)(u),i=function(){s(null)};return Object(o.jsxs)("nav",{className:"nav_menu ".concat(a.theme),children:[Object(o.jsx)(g.a,{value:"list",onClick:function(e){s(e.currentTarget)},"aria-controls":"simple-menu","aria-haspopup":"true","aria-label":"list",children:Object(o.jsx)(x.a,{})}),Object(o.jsxs)(v.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,children:[Object(o.jsx)(f.a,{onClick:i,children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)(f.a,{onClick:i,children:Object(o.jsx)(r.b,{to:"/about",children:"L'agence"})}),Object(o.jsx)(f.a,{onClick:i,children:Object(o.jsx)(r.b,{to:"/works",children:"Projects"})}),Object(o.jsx)(f.a,{children:Object(o.jsx)(m.a,{checked:"dark"===a.theme,onChange:a.changeTheme,inputProps:{"aria-label":"secondary checkbox"}})})]})]})},w=function(){var e=Object(j.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)(u.Provider,{value:{theme:n,changeTheme:function(){return s("dark"===n?"light":"dark")}},children:Object(o.jsx)("div",{className:"app ".concat(n),children:Object(o.jsx)(r.a,{children:Object(o.jsxs)("main",{className:n,children:[Object(o.jsx)(k,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/",exact:!0,children:Object(o.jsx)(i,{})}),Object(o.jsx)(a.a,{path:"/about",children:Object(o.jsx)(l,{})}),Object(o.jsx)(a.a,{path:"/works",children:Object(o.jsx)(p,{})})]})]})})})})};Object(s.render)(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6434cf9f.chunk.js.map