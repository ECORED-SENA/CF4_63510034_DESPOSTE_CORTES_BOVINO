(function(e){function a(a){for(var o,c,t=a[0],s=a[1],d=a[2],l=0,u=[];l<t.length;l++)c=t[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,c=1;c<n.length;c++){var t=n[c];0!==i[t]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},i={app:0},r=[];function t(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",glosario:"glosario",creditos:"creditos",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1"}[e]||e)+"."+{actividad:"6f17abf2","chunk-029004fa":"55491823","chunk-13a6037e":"ba214d27","chunk-14f5566e":"92ea816d","chunk-1514ff7f":"57535fd3","chunk-18f95272":"83c9d7b2","chunk-23f00e58":"c939bb73","chunk-25c5bc2d":"a68bd4aa","chunk-0206bfa0":"0f23e7dd","chunk-69444b4c":"e59252a3","chunk-d5ab3d26":"c087baad","chunk-eaa1fac2":"97c3f1e7",comple:"91493921",glosario:"03edb2ad","chunk-2c06842c":"0ff98be7","chunk-2d0c5615":"1cc7aba0","chunk-2d0e96ec":"48ce9826","chunk-2d208d90":"d1e427f0","chunk-2d21d0e2":"e60259e8","chunk-2d22c123":"613b9398","chunk-2e80bb9a":"d09d7365","chunk-2fdc87ee":"9d31d0d2","chunk-36769079":"60a78855","chunk-3913883c":"703fa388","chunk-4ef0a52a":"e9272b61","chunk-5309f94e":"535dc416","chunk-53ccb27e":"e4583cad","chunk-55d286b8":"daad4d1e","chunk-5c49769f":"baf586d7","chunk-69e8b40a":"9bdeb11a","chunk-6af626b1":"2c9c3cde","chunk-7fb13984":"8512f8da","chunk-9b94f55a":"3f488a62","chunk-a7962e10":"96662ec7","chunk-c1ed9906":"44d1fe4c","chunk-c796899c":"60e683f7","chunk-e8a7823a":"ef775755",creditos:"19abb69f",intro:"045e1abd",referencias:"4970c87e",sintesis:"4f835ccb",tema1:"796035aa"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-029004fa":1,"chunk-14f5566e":1,"chunk-1514ff7f":1,"chunk-23f00e58":1,"chunk-d5ab3d26":1,comple:1,glosario:1,"chunk-3913883c":1,"chunk-4ef0a52a":1,"chunk-5c49769f":1,"chunk-69e8b40a":1,"chunk-6af626b1":1,"chunk-7fb13984":1,"chunk-9b94f55a":1,"chunk-a7962e10":1,"chunk-c1ed9906":1,creditos:1,referencias:1};c[e]?a.push(c[e]):0!==c[e]&&n[e]&&a.push(c[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",glosario:"glosario",creditos:"creditos",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-029004fa":"c0e85eea","chunk-13a6037e":"31d6cfe0","chunk-14f5566e":"9ffcbab0","chunk-1514ff7f":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-23f00e58":"c02cabcb","chunk-25c5bc2d":"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-69444b4c":"31d6cfe0","chunk-d5ab3d26":"a0ff3a34","chunk-eaa1fac2":"31d6cfe0",comple:"610f7979",glosario:"4f66b1e4","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-3913883c":"0de653ba","chunk-4ef0a52a":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-5c49769f":"c02cabcb","chunk-69e8b40a":"c02cabcb","chunk-6af626b1":"c02cabcb","chunk-7fb13984":"35319fe2","chunk-9b94f55a":"c02cabcb","chunk-a7962e10":"c02cabcb","chunk-c1ed9906":"836e2e3e","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0",creditos:"a2d97651",intro:"31d6cfe0",referencias:"cc5de04d",sintesis:"31d6cfe0",tema1:"31d6cfe0"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var d=r[t],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===i))return a()}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){d=u[t],l=d.getAttribute("data-href");if(l===o||l===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],f.parentNode.removeChild(f),n(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){c[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=t(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"2cad":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.3dabe9fa.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);var o=n("68f3"),c=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},i=[],r={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},t=r,s=n("2877"),d=Object(s["a"])(t,c,i,!1,null,null,null),l=d.exports,u=n("2b0e"),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);const b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))}]},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>Promise.all([n.e("chunk-25c5bc2d"),n.e("glosario")]).then(n.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>Promise.all([n.e("chunk-25c5bc2d"),n.e("comple")]).then(n.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>n.e("referencias").then(n.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>n.e("creditos").then(n.bind(null,"2e81"))}],scrollBehavior(e,a){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Cortes básicos de la canal trasera, subproductos, conservación y rentabilidad cárnica",descripcionCurso:"El componente formativo aborda los cortes básicos del cuarto trasero de la canal bovina, la clasificación de la carne en diferentes categorías, y el aprovechamiento de subproductos. También detalla métodos de conservación como refrigeración, congelación, esterilización y pasteurización. Además, incluye un análisis del rendimiento cárnico y subproductos obtenidos, así como un video explicativo sobre el desposte.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("2cad")},{clases:["banner-principal-decorativo-2"],imagen:n("f533")},{clases:["banner-principal-decorativo-3"],imagen:n("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Categorías de la carne",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Cortes del cuarto trasero de la canal bovina ",hash:"t_1_1"},{numero:"1.2",titulo:"Rendimiento cárnico ",hash:"t_1_2"},{numero:"1.3",titulo:"Rendimiento cárnico de la canal ",hash:"t_1_3"},{numero:"1.4",titulo:"Métodos de conservación de la carne ",hash:"t_1_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/63510034_CF04_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Categorías de la carne ",referencia:"Recetas del Sur. (2023).Categorización de la Carne ¿Cómo funciona el Sistema?. [Archivo de video] Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=3_xv-k2cBkg&ab_channel=RecetasdelSur"},{tema:"Cortes del cuarto trasero de la canal bovina ",referencia:"Ecosistema de Recursos Educativos. (2018). Pasos para el desposte del cuarto trasero de la canal bovina. [Archivo de video] Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=qfsXFexcZag&ab_channel=EcosistemadeRecursosEducativos  "},{tema:"Rendimiento cárnico ",referencia:"La Finca de Hoy. (2019).Categorías y rendimiento cárnico del wagyu. [Archivo de video] Youtube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=7tXfAq3wKY0&ab_channel=LaFincadeHoy  "},{tema:"Rendimiento cárnico de la canal ",referencia:"TVMÁS. (2017). Veracruz Agropecuario - El Canal Bovino, rendimiento y cortes. [Archivo de video] Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=GFbKOROEtas&ab_channel=TVM%C3%81S  "},{tema:"Métodos de conservación de la carne ",referencia:"DW Pía Castro. (2019). El charqui o el arte de conservar carne. [Archivo de video] Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=aTD2FQlKmrk&ab_channel=DWP%C3%ADaCastro "}],glosario:[{termino:"Canal bovina",significado:"parte del cuerpo del bovino que queda después de retirar la cabeza, patas, vísceras y piel. "},{termino:"Subproductos",significado:"materiales obtenidos del bovino además de la carne, como vísceras, sangre, huesos, y piel. "},{termino:"Solomito",significado:"corte del cuarto trasero utilizado para preparar platos como <em>filet mignon</em>."},{termino:"Refrigeración",significado:"método de conservación de la carne a bajas temperaturas, entre 1-2 ºC. "},{termino:"Esterilización",significado:"método de conservación a temperaturas extremas (-115 ºC a -123 ºC) que elimina microorganismos. "},{termino:"Vísceras rojas",significado:"órganos internos como corazón, hígado, riñón y lengua. "},{termino:"Vísceras blancas",significado:"partes como intestinos y estómagos (mondongo, librillo, bonete, etc.). "},{termino:"Congelación",significado:"Proceso de conservación que utiliza temperaturas bajo cero, generalmente a -18 ºC. "},{termino:"Rumen",significado:"parte del estómago del bovino, conocida también como mondongo. "},{termino:"Pasteurización",significado:"método de conservación que usa choque térmico para eliminar microorganismos. "}],referencias:[{referencia:"CONtexto Ganadero. (2014). Sello de calidad de carne colombiana se orienta a promocionar un producto orgánico.",link:"https://www.contextoganadero.com/internacional/sello-de-calidad-de-carne-colombiana-se-orienta-promocionar-un-producto-organico"},{referencia:"El Semiárido. (2015). Ensayan productos cárnicos con bajo contenido de sodio para atenuar el alto consumo de sal.",link:"http://www.elsemiarido.com/ensayan-productos-carnicos-con-bajo-contenido-de-sodio-para-atenuar-el-alto-consumo-de-sal/"},{referencia:"Instituto de Promoción de la Carne Vacuna Argentina (IPCVA). (2015). <em>Tipos de corte de carne</em>.",link:"http://www.ipcva.com.ar/nomenclador2015/index.html "},{referencia:"La Trocha Digital. (2017, junio 19). Se viene la carne “larga vida”.",link:"https://www.latrochadigital.com.ar/2017/06/19/se-viene-la-carne-larga-vida/"},{referencia:"Maribona, C. (2015, noviembre 17). La peculiar carne seca de Sudáfrica que se elabora en Sant Cugat del Vallés. ABC. ",link:"https://www.abc.es/viajar/gastronomia/20150320/abci-carne-biltong-sudafrica-201503181204.html"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de línea de producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jorge Iván Cifuentes García ",cargo:"Experto temático ",centro:"Centro Agroindustrial - Regional Quindío"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Evaluadora instruccional ",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Andrés Felipe Herrera Roldan",cargo:"Diseñador de contenidos digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Luis Jesús Pérez Madariaga",cargo:"Desarrollador <i>full stack</i>",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador y vinculador de recursos educativos digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Jaime Hernán Tejada Llano",cargo:"Validador y vinculador de recursos educativos digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador de contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Margarita Marcela Medrano Gómez",cargo:"Evaluador de contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;const k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:e=>e(l)}).$mount("#app")},"5b70":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.b2e6329a.png"},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.c4b4627c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.5","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.62f91e33.png"},f533:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.3acdc922.png"}});
//# sourceMappingURL=app.4fcda8c4.js.map