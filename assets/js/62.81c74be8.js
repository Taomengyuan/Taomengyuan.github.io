(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{526:function(a,s,e){"use strict";e.r(s);var t=e(3),h=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"hashmap-和-hashtable-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-hashtable-的区别"}},[a._v("#")]),a._v(" HashMap 和 HashTable 的区别")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("HashMap 几乎可以等价于 HashTable，除了 HashMap 是非 synchronized 的，并可以接受 null(HashMap 可以接受为 null 的键值 (key) 和值 (value)，而 HashTable 则不行)。")])]),a._v(" "),e("li",[e("p",[a._v("HashMap 是非 synchronized，而 HashTable 是 synchronized，这意味着 HashTable 是线程安全的，多个线程可以共享一个 HashTable；而如果没有正确的同步的话，多个线程是不能共享 HashMap 的。Java 5 提供了 ConcurrentHashMap，它是 HashTable 的替代，比 HashTable 的扩展性更好。")])]),a._v(" "),e("li",[e("p",[a._v("另一个区别是 HashMap 的迭代器 (Iterator) 是 fail-fast 迭代器，而 HashTable 的 enumerator 迭代器不是 fail-fast 的。所以当有其它线程改变了 HashMap 的结构（增加或者移除元素），将会抛出 ConcurrentModificationException，但迭代器本身的 remove() 方法移除元素则不会抛出 ConcurrentModificationException 异常。但这并不是一个一定发生的行为，要看 JVM。这条同样也是 Enumeration 和 Iterator 的区别。")])]),a._v(" "),e("li",[e("p",[a._v("由于 HashTable 是线程安全的也是 synchronized，所以在单线程环境下它比 HashMap 要慢。如果你不需要同步，只需要单一线程，那么使用 HashMap 性能要好过 HashTable。")])]),a._v(" "),e("li",[e("p",[a._v("HashMap 不能保证随着时间的推移 Map 中的元素次序是不变的。")])])])])}),[],!1,null,null,null);s.default=h.exports}}]);