(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{440:function(t,s,e){"use strict";e.r(s);var n=e(3),r=Object(n.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h1",{attrs:{id:"如何应对微服务的链式调用异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何应对微服务的链式调用异常"}},[this._v("#")]),this._v(" 如何应对微服务的链式调用异常")]),this._v(" "),s("p",[this._v("一般情况下，每个微服务之间是独立的，如果某个服务宕机，只会影响到当前服务，而不会对整个业务系统产生影响。但是，服务端可能会在多个微服务之间产生一条链式调用，并把整合后的信息返回给客户端。在调用过程中，如果某个服务宕机或者网络不稳定可能造成整个请求失败。因此，为了应对微服务的链式调用异常，我们需要在设计微服务调用链时不宜过长，以免客户端长时间等待，以及中间环节出现错误造成整个请求失败。此外，可以考虑使用消息队列进行业务解耦，并且使用缓存避免微服务的链式调用从而提高该接口的可用性。")])])}),[],!1,null,null,null);s.default=r.exports}}]);