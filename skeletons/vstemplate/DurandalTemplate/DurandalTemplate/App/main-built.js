/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,n;(function(r){function i(e,t){var n,r,i,o,a,s,c,u,l,d,f=t&&t.split("/"),v=y.map,p=v&&v["*"]||{};if(e&&"."===e.charAt(0)&&t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),u=0;e.length>u;u+=1)if(d=e[u],"."===d)e.splice(u,1),u-=1;else if(".."===d){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((f||p)&&v){for(n=e.split("/"),u=n.length;u>0;u-=1){if(r=n.slice(0,u).join("/"),f)for(l=f.length;l>0;l-=1)if(i=v[f.slice(0,l).join("/")],i&&(i=i[r])){o=i,a=u;break}if(o)break;!s&&p&&p[r]&&(s=p[r],c=u)}!o&&s&&(o=s,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function o(e,t){return function(){return v.apply(r,b.call(arguments,0).concat([e,t]))}}function a(e){return function(t){return i(t,e)}}function s(e){return function(t){g[e]=t}}function c(e){if(h.hasOwnProperty(e)){var t=h[e];delete h[e],w[e]=!0,f.apply(r,t)}if(!g.hasOwnProperty(e)&&!w.hasOwnProperty(e))throw Error("No "+e);return g[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(t,n,r){e.onResourceLoad&&t&&e.onResourceLoad({defined:n},{id:t},r)}function d(e){return function(){return y&&y.config&&y.config[e]||{}}}var f,v,p,m,g={},h={},y={},w={},b=[].slice;p=function(e,t){var n,r=u(e),o=r[0];return e=r[1],o&&(o=i(o,t),n=c(o)),o?e=n&&n.normalize?n.normalize(e,a(t)):i(e,t):(e=i(e,t),r=u(e),o=r[0],e=r[1],o&&(n=c(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},m={require:function(e){return o(e)},exports:function(e){var t=g[e];return t!==void 0?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:d(e)}}},f=function(e,t,n,i){var a,u,d,f,v,y,b=[];if(i=i||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,v=0;t.length>v;v+=1)if(f=p(t[v],i),u=f.f,"require"===u)b[v]=m.require(e);else if("exports"===u)b[v]=m.exports(e),y=!0;else if("module"===u)a=b[v]=m.module(e);else if(g.hasOwnProperty(u)||h.hasOwnProperty(u)||w.hasOwnProperty(u))b[v]=c(u);else{if(!f.p)throw Error(e+" missing "+u);f.p.load(f.n,o(i,!0),s(u),{}),b[v]=g[u]}d=n.apply(g[e],b),e&&(a&&a.exports!==r&&a.exports!==g[e]?g[e]=a.exports:d===r&&y||(g[e]=d))}else e&&(g[e]=n);l(e,g,b)},e=t=v=function(e,t,n,i,o){return"string"==typeof e?m[e]?m[e](t):c(p(e,t).f):(e.splice||(y=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},"function"==typeof n&&(n=i,i=o),i?f(r,e,t,n):setTimeout(function(){f(r,e,t,n)},15),v)},v.config=function(e){return y=e,v},n=function(e,t,n){t.splice||(n=t,t=[]),h[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("durandal/amd/almond-custom",function(){}),n("main-built",function(){}),n("durandal/system",["require"],function(t){var n,r=!1,i=Object.keys,o=Object.prototype.hasOwnProperty,a=Object.prototype.toString,s=!1;if(Function.prototype.bind&&("object"==typeof console||"function"==typeof console)&&"object"==typeof console.log)try{["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}catch(c){s=!0}e.onResourceLoad=function(e,t){var n=e.defined[t.id];if(n)return"function"==typeof n?(n.prototype.__moduleId__=t.id,void 0):("string"!=typeof n&&(n.__moduleId__=t.id),void 0)};var u=function(){},l=function(){if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(var e=0;arguments.length>e;)console.log("Item "+(e+1)+": "+arguments[e]),e++;else 1==Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments));else Function.prototype.bind&&!s||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))};return n={noop:u,getModuleId:function(e){return e?e.__moduleId__:null},debug:function(e){return 1!=arguments.length?r:(r=e,r?(this.log=l,this.log("Debug mode enabled.")):(this.log("Debug mode disabled."),this.log=u),void 0)},isArray:function(e){return"[object Array]"===a.call(e)},log:u,defer:function(e){return $.Deferred(e)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),n="x"==e?t:8|3&t;return n.toString(16)})},acquire:function(){var e=Array.prototype.slice.call(arguments,0);return this.defer(function(n){t(e,function(){var e=arguments;setTimeout(function(){n.resolve.apply(n,e)},1)})}).promise()}},n.keys=i||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)o.call(e,n)&&(t[t.length]=n);return t},n}),n("durandal/dom",["require","./system"],function(e){var t,n=e("./system");return t=$.parseHTML?function(e){return $.parseHTML(e)}:function(e){return $(e).get()},{ready:function(){return n.defer(function(e){$(function(){e.resolve()})}).promise()},getElementById:function(e){return document.getElementById(e)},createElement:function(e){return document.createElement(e)},parseHTML:function(e,n){var r=t(e);if(1==r.length)return r[0];for(var i=[],o=0;r.length>o;o++){var a=r[o];8!=a.nodeType&&i.push(a)}return i.length>1?n?i:$(i).wrapAll('<div class="durandal-wrapper"></div').parent().get(0):i[0]}}}),n("durandal/viewEngine",["require","./dom"],function(e){var t=e("./dom");return{viewExtension:".html",pluginPath:"text",createView:function(e,n){var r=t.parseHTML(n);return r.setAttribute("data-view",e),r}}}),n("durandal/viewLocator",["require","./system","./viewEngine"],function(e){var t=e("./system"),n=e("./viewEngine");return{locateViewForObject:function(e){var n;if(e.getView&&(n=e.getView()))return this.locateView(n);if(e.viewUrl)return this.locateView(e.viewUrl);var r=t.getModuleId(e);return r?this.locateView(this.convertModuleIdToViewUrl(r)):this.locateView(this.determineFallbackViewUrl(e))},convertModuleIdToViewUrl:function(e){return e},determineFallbackViewUrl:function(e){var t=/function (.{1,})\(/,n=t.exec(""+e.constructor),r=n&&n.length>1?n[1]:"";return"views/"+r},convertViewUrlToAreaUrl:function(e,t){return t},locateView:function(e,r){var i=this;return t.defer(function(o){if("string"==typeof e){-1!=e.indexOf(n.viewExtension)&&(e=e.substring(0,e.length-n.viewExtension.length)),r&&(e=i.convertViewUrlToAreaUrl(r,e));var a=n.pluginPath+"!"+e+n.viewExtension;t.acquire(a).then(function(t){o.resolve(n.createView(e,t))})}else o.resolve(e)}).promise()}}}),n("durandal/viewModelBinder",["require","./system"],function(e){function t(e,t,r){if(!t||!e)return n.log("Insufficent Information to Bind",t,e),void 0;if(!t.getAttribute)return n.log("Unexpected View Type",t,e),void 0;var i=t.getAttribute("data-view");try{n.log("Binding",i,e),r()}catch(o){n.log(o.message,i,e)}}var n=e("./system");return{bindContext:function(e,n,r){if(r){var i=e.createChildContext(r);t(i,n,function(){ko.applyBindingsToNode(n,null,i)})}else t(e,n,function(){ko.applyBindings(e,n)})},bind:function(e,n){t(e,n,function(){ko.applyBindings(e,n),e.setView&&e.setView(n)})}}}),n("durandal/viewModel",["require","./system"],function(e){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=s.defaults.closeOnDeactivate),e.beforeActivate||(e.beforeActivate=s.defaults.beforeActivate),e.afterDeactivate||(e.afterDeactivate=s.defaults.afterDeactivate),e.interpretResponse||(e.interpretResponse=s.defaults.interpretResponse),e.areSameItem||(e.areSameItem=s.defaults.areSameItem),e}function n(e,t,n,r){if(e&&e.deactivate){c.log("Deactivating",e);var i=e.deactivate(t);i&&i.then?i.then(function(){n.afterDeactivate(e,t),r.resolve(!0)}):(n.afterDeactivate(e,t),r.resolve(!0))}else e&&n.afterDeactivate(e,t),r.resolve(!0)}function r(e,t,n,r){if(e)if(e.activate){c.log("Activating",e);var i=e.activate(r);i&&i.then?i.then(function(){t(e),n(!0)}):(t(e),n(!0))}else t(e),n(!0);else n(!0)}function i(e,t,n){return c.defer(function(r){if(e&&e.canDeactivate){var i=e.canDeactivate(t);i.then?i.then(function(e){r.resolve(n.interpretResponse(e))}):r.resolve(n.interpretResponse(i))}else r.resolve(!0)}).promise()}function o(e,t,n,r){return c.defer(function(i){if(e==t())return i.resolve(!0),void 0;if(e&&e.canActivate){var o=e.canActivate(r);o.then?o.then(function(e){i.resolve(n.interpretResponse(e))}):i.resolve(n.interpretResponse(o))}else i.resolve(!0)}).promise()}function a(e,a){var s=ko.observable(null);a=t(a);var u=ko.computed({read:function(){return s()},write:function(e){u.viaSetter=!0,u.activateItem(e)}});return u.settings=a,u.isActivating=ko.observable(!1),u.canDeactivateItem=function(e,t){return i(e,t,a)},u.deactivateItem=function(e,t){return c.defer(function(r){u.canDeactivateItem(e,t).then(function(i){i?n(e,t,a,r):(u.notifySubscribers(),r.resolve(!1))})})},u.canActivateItem=function(e,t){return o(e,s,a,t)},u.activateItem=function(e,t){var i=u.viaSetter;return u.viaSetter=!1,c.defer(function(o){if(u.isActivating())return o.resolve(!1),void 0;u.isActivating(!0);var l=s();return a.areSameItem(l,e,t)?(u.isActivating(!1),o.resolve(!0),void 0):(u.canDeactivateItem(l,a.closeOnDeactivate).then(function(d){d?u.canActivateItem(e,t).then(function(d){d?c.defer(function(e){n(l,a.closeOnDeactivate,a,e)}).promise().then(function(){e=a.beforeActivate(e),r(e,s,function(e){u.isActivating(!1),o.resolve(e)},t)}):(i&&u.notifySubscribers(),u.isActivating(!1),o.resolve(!1))}):(i&&u.notifySubscribers(),u.isActivating(!1),o.resolve(!1))}),void 0)}).promise()},u.canActivate=function(){var t;return e?(t=e,e=!1):t=u(),u.canActivateItem(t)},u.activate=function(){var t;return e?(t=e,e=!1):t=u(),u.activateItem(t)},u.canDeactivate=function(e){return u.canDeactivateItem(u(),e)},u.deactivate=function(e){return u.deactivateItem(u(),e)},u.includeIn=function(e){e.canActivate=function(){return u.canActivate()},e.activate=function(){return u.activate()},e.canDeactivate=function(e){return u.canDeactivate(e)},e.deactivate=function(e){return u.deactivate(e)}},a.includeIn?u.includeIn(a.includeIn):e&&u.activate(),u.forItems=function(e){a.closeOnDeactivate=!1,a.determineNextItemToActivate=function(e,t){var n=t-1;return-1==n&&e.length>1?e[1]:n>-1&&e.length-1>n?e[n]:null},a.beforeActivate=function(t){var n=u();if(t){var r=e.indexOf(t);-1==r?e.push(t):t=e()[r]}else t=a.determineNextItemToActivate(e,n?e.indexOf(n):0);return t},a.afterDeactivate=function(t,n){n&&e.remove(t)};var t=u.canDeactivate;u.canDeactivate=function(n){return n?c.defer(function(t){function r(){for(var e=0;o.length>e;e++)if(!o[e])return t.resolve(!1),void 0;t.resolve(!0)}for(var i=e(),o=[],a=0;i.length>a;a++)u.canDeactivateItem(i[a],n).then(function(e){o.push(e),o.length==i.length&&r()})}).promise():t};var n=u.deactivate;return u.deactivate=function(t){return t?c.defer(function(n){function r(r){u.deactivateItem(r,t).then(function(){o++,e.remove(r),o==a&&n.resolve()})}for(var i=e(),o=0,a=i.length,s=0;a>s;s++)r(i[s])}).promise():n},u},u}var s,c=e("./system");return s={defaults:{closeOnDeactivate:!0,interpretResponse:function(e){if("string"==typeof e){var t=e.toLowerCase();return"yes"==t||"ok"==t}return e},areSameItem:function(e,t){return e==t},beforeActivate:function(e){return e},afterDeactivate:function(){}},activator:a}}),n("durandal/composition",["require","./viewLocator","./viewModelBinder","./viewEngine","./system","./viewModel"],function(e){function t(e){return e.model&&e.model.activate&&(u.activateDuringComposition&&void 0==e.activate||e.activate)}function n(e,n){t(e)?c.activator().activateItem(e.model).then(function(e){e&&n()}):n()}function r(e,t,n){t&&n.model&&n.model.viewAttached&&n.model.viewAttached(t),n.afterCompose&&n.afterCompose(e,t,n)}var i=e("./viewLocator"),o=e("./viewModelBinder"),a=e("./viewEngine"),s=e("./system"),c=e("./viewModel"),u={activateDuringComposition:!1,convertTransitionToModuleId:function(e){return"durandal/transitions/"+e},switchContent:function(e,t,n){if(n.transition=n.transition||this.defaultTransitionName,"string"==typeof n.transition&&t){var i=this.convertTransitionToModuleId(n.transition);s.acquire(i).then(function(i){n.transition=i,i(e,t,n).then(function(){r(e,t,n)})})}else t?ko.virtualElements.setDomNodeChildren(e,[t]):ko.virtualElements.emptyNode(e),r(e,t,n)},bindAndShow:function(e,t,r){n(r,function(){r.beforeBind&&r.beforeBind(e,t,r),r.preserveContext&&r.bindingContext?o.bindContext(r.bindingContext,t,r.model):r.model?o.bind(r.model,t):t&&o.bind({},t),u.switchContent(e,t,r)})},defaultStrategy:function(e){return i.locateViewForObject(e.model)},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)return n;var r=s.getModuleId(n);if(r)return{model:n};for(var i in n)if("string"==typeof i){var o=ko.utils.unwrapObservable(n[i]);t[i]=o}return t},executeStrategy:function(e,t){t.strategy(t).then(function(n){u.bindAndShow(e,n,t)})},inject:function(e,t){return t.model?t.view?(i.locateView(t.view,t.area).then(function(n){u.bindAndShow(e,n,t)}),void 0):((void 0===t.view||t.view)&&(t.strategy||(t.strategy=this.defaultStrategy),"string"==typeof t.strategy?s.acquire(t.strategy).then(function(n){t.strategy=n,u.executeStrategy(e,t)}):this.executeStrategy(e,t)),void 0):(this.bindAndShow(e,null,t),void 0)},compose:function(e,t,n){"string"==typeof t&&(t=-1!==t.indexOf(a.viewExtension,t.length-a.viewExtension.length)?{view:t}:{model:t});var r=s.getModuleId(t);r&&(t={model:t}),t.bindingContext=n,t.model?"string"==typeof t.model?s.acquire(t.model).then(function(n){t.model="function"==typeof n?new n(e,t):n,u.inject(e,t)}):u.inject(e,t):t.view?(t.area=t.area||"partial",t.preserveContext=!0,i.locateView(t.view,t.area).then(function(n){u.bindAndShow(e,n,t)})):this.bindAndShow(e,null,t)}};return ko.bindingHandlers.compose={update:function(e,t,n,r,i){var o=u.getSettings(t);u.compose(e,o,i)}},ko.virtualElements.allowedBindings.compose=!0,ko.virtualElements.firstChildElement=function(e){for(var t=ko.virtualElements.firstChild(e);t&&1!=t.nodeType;)t=ko.virtualElements.nextSibling(t);return t},u}),n("durandal/widget",["require","./system","./composition"],function(e){var t=e("./system"),n=e("./composition"),r="data-part",i="["+r+"]",o={},a={},s={getParts:function(e){var n={};t.isArray(e)||(e=[e]);for(var o=0;e.length>o;o++){var a=e[o];if(a.getAttribute){var s=a.getAttribute(r);s&&(n[s]=a);for(var c=$(i,a),u=0;c.length>u;u++){var l=c.get(u);n[l.getAttribute(r)]=l}}}return n},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)t=n;else for(var r in n)if("string"==typeof r){var i=ko.utils.unwrapObservable(n[r]);t[r]=i}return t},registerKind:function(e){ko.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,r,i,o){var a=s.getSettings(n);a.kind=e,s.create(t,a,o)}},ko.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(a[e]=t),n&&(o[e]=n)},convertKindToModuleId:function(e){return o[e]||"durandal/widgets/"+e+"/controller"},convertKindToView:function(e){return a[e]||"durandal/widgets/"+e+"/view"},beforeBind:function(e,t){var n=s.getParts(e),r=s.getParts(t);for(var i in n)$(r[i]).replaceWith(n[i])},createCompositionSettings:function(e){return e.model||(e.model=this.convertKindToModuleId(e.kind)),e.view||(e.view=this.convertKindToView(e.kind)),e.preserveContext=!0,e.beforeBind=this.beforeBind,e},create:function(e,t,r){"string"==typeof t&&(t={kind:t});var i=s.createCompositionSettings(t);n.compose(e,i,r)}};return ko.bindingHandlers.widget={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,r,i){var o=s.getSettings(t);s.create(e,o,i)}},ko.virtualElements.allowedBindings.widget=!0,s}),n("durandal/modalDialog",["require","./composition","./system","./viewModel"],function(e){function t(e){return r.defer(function(t){"string"==typeof e?r.acquire(e).then(function(e){"function"==typeof e?t.resolve(new e):t.resolve(e)}):t.resolve(e)}).promise()}var n=e("./composition"),r=e("./system"),i=e("./viewModel"),o={},a=0,s={currentZIndex:1e3,getNextZIndex:function(){return++this.currentZIndex},isModalOpen:function(){return a>0},getContext:function(e){return o[e||"default"]},addContext:function(e,t){t.name=e,o[e]=t;var n="show"+e.substr(0,1).toUpperCase()+e.substr(1);this[n]=function(t,n){return this.show(t,n,e)}},createCompositionSettings:function(e,t){var n={model:e,activate:!1};return t.afterCompose&&(n.afterCompose=t.afterCompose),n},show:function(e,s,c){var u=this,l=o[c||"default"];return r.defer(function(r){t(e).then(function(e){var t=i.activator();t.activateItem(e,s).then(function(i){if(i){var o=e.modal={owner:e,context:l,activator:t,close:function(n){t.deactivateItem(e,!0).then(function(t){t&&(a--,l.removeHost(o),delete e.modal,r.resolve(n))})}};o.settings=u.createCompositionSettings(e,l),l.addHost(o),a++,n.compose(o.host,o.settings)}else r.resolve(!1)})})}).promise()}};return s.addContext("default",{blockoutOpacity:.2,removeDelay:200,addHost:function(e){var t=$("body"),n=$('<div class="modalBlockout"></div>').css({"z-index":s.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(t),r=$('<div class="modalHost"></div>').css({"z-index":s.getNextZIndex()}).appendTo(t);if(e.host=r.get(0),e.blockout=n.get(0),!s.isModalOpen()){e.oldBodyMarginRight=$("body").css("margin-right");var i=$("html"),o=t.outerWidth(!0),a=i.scrollTop();$("html").css("overflow-y","hidden");var c=$("body").outerWidth(!0);t.css("margin-right",c-o+parseInt(e.oldBodyMarginRight)+"px"),i.scrollTop(a),$("#simplemodal-overlay").css("width",c+"px")}},removeHost:function(e){if($(e.host).css("opacity",0),$(e.blockout).css("opacity",0),setTimeout(function(){$(e.host).remove(),$(e.blockout).remove()},this.removeDelay),!s.isModalOpen()){var t=$("html"),n=t.scrollTop();t.css("overflow-y","").scrollTop(n),$("body").css("margin-right",e.oldBodyMarginRight)}},afterCompose:function(e,t,n){var r=$(t),i=r.width(),o=r.height();r.css({"margin-top":""+-o/2+"px","margin-left":""+-i/2+"px"}),$(n.model.modal.host).css("opacity",1),$(t).hasClass("autoclose")&&$(n.model.modal.blockout).click(function(){n.model.modal.close()}),$(".autofocus",t).each(function(){$(this).focus()})}}),s}),n("durandal/events",["require","./system"],function(e){var t=e("./system"),n=/\s+/,r=function(){},i=function(e,t){this.owner=e,this.events=t};return i.prototype.then=function(e,t){if(!e)return this;for(var n,r=this.owner.callbacks||(this.owner.callbacks={}),i=this.events,o=0;i.length>o;o++){var a=i[o];n=r[a]||(r[a]=[]),n.push(e,t)}return this},r.prototype.on=function(e,t,r){var o,a,s;if(e=e.split(n),t){for(o=this.callbacks||(this.callbacks={});a=e.shift();)s=o[a]||(o[a]=[]),s.push(t,r);return this}return new i(this,e)},r.prototype.off=function(e,r,i){var o,a,s,c;if(!(a=this.callbacks))return this;if(!(e||r||i))return delete this.callbacks,this;for(e=e?e.split(n):t.keys(a);o=e.shift();)if((s=a[o])&&(r||i))for(c=s.length-2;c>=0;c-=2)r&&s[c]!==r||i&&s[c+1]!==i||s.splice(c,2);else delete a[o];return this},r.prototype.trigger=function(e){var t,r,i,o,a,s,c,u;if(!(r=this.callbacks))return this;for(u=[],e=e.split(n),o=1,a=arguments.length;a>o;o++)u[o-1]=arguments[o];for(;t=e.shift();){if((c=r.all)&&(c=c.slice()),(i=r[t])&&(i=i.slice()),i)for(o=0,a=i.length;a>o;o+=2)i[o].apply(i[o+1]||this,u);if(c)for(s=[t].concat(u),o=0,a=c.length;a>o;o+=2)c[o].apply(c[o+1]||this,s)}return this},r.prototype.proxy=function(e){var t=this;return function(n){t.trigger(e,n)}},r.includeIn=function(e){e.on=r.prototype.on,e.off=r.prototype.off,e.trigger=r.prototype.trigger,e.proxy=r.prototype.proxy},r}),n("durandal/app",["require","./system","./viewEngine","./composition","./widget","./dom","./modalDialog","./events"],function(e){var t,n=e("./system"),r=e("./viewEngine"),i=e("./composition"),o=(e("./widget"),e("./dom")),a=e("./modalDialog"),s=e("./events"),c={showModal:function(e,t,n){return a.show(e,t,n)},showMessage:function(e,n,r){return a.show(new t(e,n,r))},start:function(){return n.defer(function(e){o.ready().then(function(){n.log("Starting Application"),n.acquire("./messageBox").then(function(r){t=r,e.resolve(),n.log("Started Application")})})}).promise()},setRoot:function(e,t,n){var a,s={activate:!0,transition:t};a=n&&"string"!=typeof n?n:o.getElementById(n||"applicationHost"),"string"==typeof e?-1!=e.indexOf(r.viewExtension)?s.view=e:s.model=e:s.model=e,i.compose(a,s)},adaptToDevice:function(){document.body.ontouchmove&&(document.body.ontouchmove=function(e){e.preventDefault()})}};return s.includeIn(c),c}),t.config({paths:{text:"durandal/amd/text"}}),n("main",["require","durandal/app","durandal/viewLocator","durandal/system"],function(e){var t=e("durandal/app"),n=e("durandal/viewLocator");e("durandal/system"),t.start().then(function(){n.convertModuleIdToViewUrl=function(e){return e.replace("viewmodel","view")},t.adaptToDevice(),t.setRoot("viewmodels/shell","entrance")})}),n("durandal/http",[],function(){return{defaultJSONPCallbackParam:"callback",get:function(e,t){return $.ajax(e,t)},jsonp:function(e,t,n){return-1==e.indexOf("=?")&&(n=n||this.defaultJSONPCallbackParam,e+=-1==e.indexOf("?")?"?":"&",e+=n+"=?"),$.ajax({url:e,dataType:"jsonp",data:t})},post:function(e,t){return $.ajax({url:e,data:JSON.stringify(t),type:"POST",contentType:"application/json",dataType:"json"})}}}),n("text",["module"],function(e){var n,r,i=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],o=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,c=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,l=s&&(location.port||void 0),d=[],f=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(o,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=i[t];try{e=new ActiveXObject(n)}catch(r){}if(e){i=[n];break}}return e},parseName:function(e){var t=!1,n=e.indexOf("."),r=e.substring(0,n),i=e.substring(n+1,e.length);return n=i.indexOf("!"),-1!==n&&(t=i.substring(n+1,i.length),t="strip"===t,i=i.substring(0,n)),{moduleName:r,ext:i,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,r,i){var o,a,s,c=n.xdRegExp.exec(e);return c?(o=c[2],a=c[3],a=a.split(":"),s=a[1],a=a[0],!(o&&o!==t||a&&a.toLowerCase()!==r.toLowerCase()||(s||a)&&s!==i)):!0},finishLoad:function(e,t,r,i){r=t?n.strip(r):r,f.isBuild&&(d[e]=r),i(r)},load:function(e,t,r,i){if(i.isBuild&&!i.inlineText)return r(),void 0;f.isBuild=i.isBuild;var o=n.parseName(e),a=o.moduleName+"."+o.ext,d=t.toUrl(a),v=f.useXhr||n.useXhr;!s||v(d,c,u,l)?n.get(d,function(t){n.finishLoad(e,o.strip,t,r)},function(e){r.error&&r.error(e)}):t([a],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,r)})},write:function(e,t,r){if(d.hasOwnProperty(t)){var i=n.jsEscape(d[t]);r.asModule(e+"!"+t,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,t,r,i,o){var a=n.parseName(t),s=a.moduleName+"."+a.ext,c=r.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,r,function(){var t=function(e){return i(c,e)};t.asModule=function(e,t){return i.asModule(e,c,t)},n.write(e,s,t,o)},o)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(r=t.nodeRequire("fs"),n.get=function(e,t){var n=r.readFileSync(e,"utf8");0===n.indexOf("﻿")&&(n=n.substring(1)),t(n)}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,r){var i=n.createXhr();i.open("GET",e,!0),f.onXhr&&f.onXhr(i,e),i.onreadystatechange=function(){var n,o;4===i.readyState&&(n=i.status,n>399&&600>n?(o=Error(e+" HTTP status: "+n),o.xhr=i,r(o)):t(i.responseText))},i.send(null)}:("rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,t){var n,r,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),c="";try{for(n=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),n.append(r);null!==(r=s.readLine());)n.append(a),n.append(r);c=""+n+""}finally{s.close()}t(c)}),n}),n("text!durandal/messageBox.html",[],function(){return'<div class="messageBox">\r\n    <div class="modal-header">\r\n        <h3 data-bind="html: title"></h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p class="message" data-bind="html: message"></p>\r\n    </div>\r\n    <div class="modal-footer" data-bind="foreach: options">\r\n        <button class="btn" data-bind="click: function () { $parent.selectOption($data); }, html: $data, css: { \'btn-primary\': $index() == 0, autofocus: $index() == 0 }"></button>\r\n    </div>\r\n</div>'}),n("durandal/messageBox",[],function(){var e=function(t,n,r){this.message=t,this.title=n||e.defaultTitle,this.options=r||e.defaultOptions};return e.prototype.selectOption=function(e){this.modal.close(e)},e.defaultTitle="Application",e.defaultOptions=["Ok"],e}),n("durandal/plugins/router",["require","../system","../viewModel"],function(e){function t(e,t,n,r){t.routeInfo=e,t.router=s,d.log("Activating Route",e,n,t),w.activateItem(n,t).then(function(t){t?(document.title=e.name,u=n,c=a.last_location[1].replace("/",""),r&&h(!1)):(y=!0,d.log("Cancelling Navigation"),a.setLocation(c),y=!1,h(!1)),s.dfd&&(g(!0),s.dfd.resolve(),delete s.dfd)})}function n(e,n){var r=v[e];if(!r){if(!b)return h(!1),s.handleInvalidRoute(e,n),void 0;r={moduleId:s.convertRouteToModuleId(e,n),name:s.convertRouteToName(e)}}d.acquire(r.moduleId).then(function(e){"function"==typeof e?t(r,n,new e):t(r,n,e,u==e)})}function r(){if(!y&&a.last_location[1].replace("/","")!=c){h(!0);var e=""+this.app.last_route.path,t=this.params||{};if("/$/"==e)if(b){var r=this.path.split("#/");if(2==r.length){var i=r[1].split("/");e=i[0];var o=i.splice(1);o.length>0&&(t.splat=o)}else e=l}else{if("/"!=this.app.last_location[1])return s.handleInvalidRoute(this.app.last_location[1],t),h(!1),void 0;e=l}n(e,t)}}function i(e){return s.prepareRouteInfo(e),v[e.url]=e,p.push(e),e.visible&&(e.isActive=ko.computed(function(){return g()&&w()&&w().__moduleId__==e.moduleId}),m.push(e)),e}function o(e){var t=e.indexOf(":"),n=t>0?t-1:e.length;return e.substring(0,n)}var a,s,c,u,l,d=e("../system"),f=e("../viewModel"),v={},p=ko.observableArray([]),m=ko.observableArray([]),g=ko.observable(!1),h=ko.observable(!1),y=!1,w=f.activator(),b=!1;return s={ready:g,allRoutes:p,visibleRoutes:m,isNavigating:h,activeItem:w,afterCompose:function(){h(!1)},handleInvalidRoute:function(e,t){d.log("No Route Found",e,t)},navigateBack:function(){window.history.back()},navigateTo:function(e){a.setLocation(e)},replaceLocation:function(e){window.location.replace(e)},convertRouteToName:function(e){var t=o(e);return t.substring(0,1).toUpperCase()+t.substring(1)},convertRouteToModuleId:function(e){return"viewmodels/"+o(e)},prepareRouteInfo:function(e){e.name=e.name||s.convertRouteToName(e.url),e.moduleId=e.moduleId||s.convertRouteToModuleId(e.url),e.caption=e.caption||e.name,e.hash=e.hash||"#/"+e.url,e.settings=e.settings||{}},mapAuto:function(e){b=!0,e=e||"viewmodels",e+="/",this.convertRouteToModuleId=function(t){return e+t}},mapNav:function(e,t,n){return this.mapRoute(e,t,n,!0)},mapRoute:function(e,t,n,r){var o={url:e,moduleId:t,name:n,visible:r};return i(o)},map:function(e){if(!d.isArray(e))return i(e),void 0;for(var t=0;e.length>t;t++)i(e[t])},activate:function(e){return d.defer(function(t){s.dfd=t,l=e,a=Sammy(function(e){for(var t=p(),n=0;t.length>n;n++){var i=t[n];i.url instanceof RegExp?e.get(i.url,r):e.get(i.url,r);var o=this.routes.get[n];v[""+o.path]=i}e.get("",r)}),a._checkFormSubmission=function(){return!1},a.log=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("Sammy"),d.log.apply(d,e)},a.run()}).promise()}}}),n("durandal/transitions/entrance",["require","../system"],function(e){var t=e("../system"),n=function(e,n,r){return t.defer(function(t){function i(){t.resolve()}function o(){ko.virtualElements.setDomNodeChildren(e,[n]);var t={marginLeft:"20px",marginRight:"-20px",opacity:0},r={marginRight:0,marginLeft:0,opacity:1};$(n).css(t),$(n).animate(r,s,"swing",i)}if(r.keepScrollPosition||$(document).scrollTop(0),n){var a=$(ko.virtualElements.firstChildElement(e)),s=r.duration||500;a.length?a.fadeOut(100,o):o()}else ko.virtualElements.emptyNode(e),i()}).promise()};return n}),n("durandal/widgets/expander/controller",["require","durandal/widget"],function(e){var t=e("durandal/widget"),n=function(e,t){this.settings=t};return n.prototype.getHeaderText=function(e){return this.settings.headerProperty?e[this.settings.headerProperty]:""+e},n.prototype.afterRenderItem=function(e){var n=t.getParts(e),r=$(n.itemContainer);r.hide(),$(n.headerContainer).bind("click",function(){r.toggle("fast")})},n}),n("text!durandal/widgets/expander/view.html",[],function(){return'<div data-bind="foreach: { data:settings.items, afterRender:afterRenderItem }">\r\n    <a data-part="headerContainer" href="#">\r\n        <div data-part="header" data-bind="html: $parent.getHeaderText($data)"></div>\r\n    </a>\r\n    <div data-part="itemContainer">\r\n        <div data-part="item" data-bind="compose: $data"></div>\r\n    </div>\r\n</div>'}),n("viewmodels/flickr",["require","durandal/http","durandal/app"],function(e){var t=e("durandal/http"),n=e("durandal/app"),r=function(){this.displayName="Flickr",this.images=ko.observableArray([])};return r.prototype.activate=function(){var e=this;return t.jsonp("http://api.flickr.com/services/feeds/photos_public.gne",{tags:"mount ranier",tagmode:"any",format:"json"},"jsoncallback").then(function(t){e.images(t.items)})},r.prototype.select=function(e){e.viewUrl="views/detail",n.showModal(e)},r.prototype.canDeactivate=function(){return n.showMessage("Are you sure you want to leave this page?","Navigate",["Yes","No"])},r}),n("viewmodels/shell",["require","durandal/plugins/router","durandal/app"],function(e){var t=e("durandal/plugins/router"),n=e("durandal/app");return{router:t,search:function(){n.showMessage("Search not yet implemented...")},activate:function(){return t.mapNav("welcome"),t.mapNav("flickr"),t.activate("welcome")}}}),n("viewmodels/welcome",["require"],function(){var e=function(){this.displayName="Welcome to the Durandal Starter Project!",this.description="Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.",this.features=["Clean MV* Architecture","JS & HTML Modularity","Simple App Lifecycle","Eventing, Modals, Message Boxes, etc.","Navigation & Screen State Management","Consistent Async Programming w/ Promises","App Bundling and Optimization","Use any Backend Technology","Built on top of jQuery, Knockout & RequireJS","Integrates with other libraries such as SammyJS & Bootstrap","Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets)."]};return e}),n("text!views/detail.html",[],function(){return'<div class="messageBox autoclose" style="max-width: 425px">\r\n    <div class="modal-header">\r\n        <h3>Details</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p data-bind="html: description"></p>\r\n    </div>\r\n</div>'}),n("text!views/flickr.html",[],function(){return'<section>\r\n    <h2 data-bind="html: displayName"></h2>\r\n    <div class="row-fluid">\r\n        <ul class="thumbnails" data-bind="foreach: images">\r\n            <li>\r\n                <a href="#" class="thumbnail" data-bind="click:$parent.select">\r\n                    <img style="width: 260px; height: 180px;" data-bind="attr: { src: media.m }"/>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>'}),n("text!views/shell.html",[],function(){return'<div>\r\n    <div class="navbar navbar-fixed-top">\r\n        <div class="navbar-inner">\r\n            <a class="brand" data-bind="attr: { href: router.visibleRoutes()[0].hash }">\r\n                <i class="icon-home"></i>\r\n                <span>Durandal</span>\r\n            </a>\r\n            <ul class="nav" data-bind="foreach: router.visibleRoutes">\r\n                <li data-bind="css: { active: isActive }">\r\n                    <a data-bind="attr: { href: hash }, html: name"></a>\r\n                </li>\r\n            </ul>\r\n            <div class="loader pull-right" data-bind="css: { active: router.isNavigating }">\r\n                <i class="icon-spinner icon-2x icon-spin"></i>\r\n            </div>\r\n            <form class="navbar-search pull-right" data-bind="submit:search">\r\n                <input type="text" class="search-query" placeholder="Search">\r\n            </form>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class="container-fluid">\r\n        <!--ko compose: { \r\n            model: router.activeItem, \r\n            afterCompose: router.afterCompose, \r\n            transition:\'entrance\' \r\n        }--><!--/ko-->\r\n    </div>\r\n</div>'
}),n("text!views/welcome.html",[],function(){return'<section>\r\n    <h2 data-bind="html:displayName"></h2>\r\n    <blockquote data-bind="html:description"></blockquote>\r\n    <h3>Features</h3>\r\n    <ul data-bind="foreach: features">\r\n        <li data-bind="html: $data"></li>\r\n    </ul>\r\n    <div class="alert alert-success">\r\n      <h4>Read Me Please</h4>\r\n        For more information about this starter project\'s architecture, please see the readme file located in the root of the project.\r\n        For general documenation please visit <a href="https://github.com/EisenbergEffect/Durandal/wiki">the wiki</a> and if you can\'t find \r\n        answers to your questions there, we hope you will join our <a href="https://groups.google.com/forum/?fromgroups#!forum/durandaljs">google group</a>.\r\n    </div>\r\n</section>'}),t(["main"])})();