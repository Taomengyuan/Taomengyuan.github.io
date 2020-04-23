(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{436:function(n,e,o){"use strict";o.r(e);var t=o(3),_=Object(t.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"存储引擎的-innodb-与-myisam"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎的-innodb-与-myisam"}},[n._v("#")]),n._v(" 存储引擎的 InnoDB 与 MyiSAM")]),n._v(" "),o("ol",[o("li",[n._v("InnoDB 不支持 "),o("code",[n._v("FULLTEXT")]),n._v(" 类型的索引。")]),n._v(" "),o("li",[n._v("InnoDB 中不保存表的具体行数，也就是说，执行 "),o("code",[n._v("select count() from table")]),n._v(" 时，InnoDB 要扫描一遍整个表来计算有多少行，但是 MyISAM 只要简单的读出保存好的行数即可。注意的是，当 "),o("code",[n._v("count()")]),n._v(" 语句包含 "),o("code",[n._v("where")]),n._v(" 条件时，两种表的操作是一样的。")]),n._v(" "),o("li",[n._v("对于 "),o("code",[n._v("AUTO_INCREMENT")]),n._v(" 类型的字段，InnoDB 中必须包含只有该字段的索引，但是在 MyISAM 表中，可以和其他字段一起建立联合索引。")]),n._v(" "),o("li",[o("code",[n._v("DELETE FROM table")]),n._v(" 时，InnoDB 不会重新建立表，而是一行一行的删除。")]),n._v(" "),o("li",[o("code",[n._v("LOAD TABLE FROM MASTER")]),n._v(" 操作对 InnoDB 是不起作用的，解决方法是首先把 InnoDB 表改成 MyISAM 表，导入数据后再改成 InnoDB 表，但是对于使用的额外的 InnoDB 特性(例如外键)的表不适用。")])]),n._v(" "),o("p",[n._v("另外，InnoDB 表的行锁也不是绝对的，假如在执行一个 SQL 语句时 MySQL 不能确定要扫描的范围，InnoDB 表同样会锁全表，例如 "),o("code",[n._v("update table set num=1 where name like “%aaa%”")])])])}),[],!1,null,null,null);e.default=_.exports}}]);