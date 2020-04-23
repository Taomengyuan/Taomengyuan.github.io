(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{541:function(t,l,v){"use strict";v.r(l);var _=v(3),s=Object(_.a)({},(function(){var t=this,l=t.$createElement,v=t._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mysql-遇到的死锁问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-遇到的死锁问题"}},[t._v("#")]),t._v(" MySQL 遇到的死锁问题")]),t._v(" "),v("p",[t._v("产生死锁的四个必要条件：")]),t._v(" "),v("ul",[v("li",[t._v("互斥条件：一个资源每次只能被一个进程使用。")]),t._v(" "),v("li",[t._v("请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放。")]),t._v(" "),v("li",[t._v("不剥夺条件：进程已获得的资源，在末使用完之前，不能强行剥夺。")]),t._v(" "),v("li",[t._v("循环等待条件：若干进程之间形成一种头尾相接的循环等待资源关系。")])]),t._v(" "),v("p",[t._v("这四个条件是死锁的必要条件，只要系统发生死锁，这些条件必然成立，而只要上述条件之一不满足，就不会发生死锁。 下列方法有助于最大限度地降低死锁：")]),t._v(" "),v("ul",[v("li",[t._v("按同一顺序访问对象。")]),t._v(" "),v("li",[t._v("避免事务中的用户交互。")]),t._v(" "),v("li",[t._v("保持事务简短并在一个批处理中。")]),t._v(" "),v("li",[t._v("使用低隔离级别。")]),t._v(" "),v("li",[t._v("使用绑定连接。")])])])}),[],!1,null,null,null);l.default=s.exports}}]);