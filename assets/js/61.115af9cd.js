(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{525:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"hashmap-和-concurrenthashmap-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-concurrenthashmap-的区别"}},[a._v("#")]),a._v(" HashMap 和 ConcurrentHashMap 的区别")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("放入 HashMap 的元素是 key-value 对。")])]),a._v(" "),t("li",[t("p",[a._v("底层说白了就是散列结构。")])]),a._v(" "),t("li",[t("p",[a._v("要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。")])]),a._v(" "),t("li",[t("p",[a._v("ConcurrentHashMap 对整个桶数组进行了分段，而 HashMap 则没有")])]),a._v(" "),t("li",[t("p",[a._v("ConcurrentHashMap 在每一个分段上都用锁进行保护，从而让锁的粒度更精细一些，并发性能更好，而 HashMap 没有锁机制，不是线程安全的")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);