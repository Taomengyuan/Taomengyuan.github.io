(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{456:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"你如何划分领域边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你如何划分领域边界"}},[s._v("#")]),s._v(" 你如何划分领域边界")]),s._v(" "),a("p",[s._v("##【领域驱动设计】浅谈聚合的划分与设计")]),s._v(" "),a("p",[s._v("聚合以及聚合根是领域驱动设计中的重要概念，根据定义，聚合是针对数据变化可以考虑成一个单元的一组相关的对象。聚合使用边界将内部和外部的对象划分开来。每个聚合有一个根。这个根是一个实体，并且它是外部可以访问的唯一的对象。根可以保持对任意聚合对象的引用，并且其他的对象可以持有任意其他的对象，但一个外部对象只能持有根对象的引用。如果边界内有其他的实体，那些实体的标识符是本地化的，只在聚合内有意义（参见《领域驱动设计-精简版》第42页）。从定义上看，貌似针对特定上下文的领域模型来讲，聚合的划分与设计并不那么困难，但事实却并非如此。在本文中，我将大致总结一下自己的经验，同时也欢迎关注领域驱动设计的朋友能够提出自己的见解。")]),s._v(" "),a("h2",{attrs:{id:"聚合划分与设计其实与并发和事务性并不矛盾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合划分与设计其实与并发和事务性并不矛盾"}},[s._v("#")]),s._v(" 聚合划分与设计其实与并发和事务性并不矛盾")]),s._v(" "),a("p",[s._v("首先需要了解的是，合理地划分和设计聚合，并不会产生任何并发和事务性问题。我们所讨论的文章中之所以第一个设计方案会出现并发和事务性问题，就是因为它的聚合设计本身就不合理。这其实在本文一开始就明确了这个问题：聚合是针对数据变化可以考虑成一个单元的一组相关的对象。因此，必须承认对于一个聚合，其中包含的所有对象必须“同生死，共存亡”，基于聚合的数据操作应该就是原子操作，基础结构机制需要保证以聚合为单位的数据一致性。换句话说，聚合在数据一致性方面的表现，应该与基础结构机制所保证的并发和事务的正确性是等价的。数据访问时出现的事务失效现象，其实是源于聚合的不合理划分。比如，在《Effective Aggregate Design》一文中的例子里，事实上 Product 并不一定要依赖于 Release 才能存在，因此，在 Product 的聚合中，就不应该包含对 Release 的引用，然而相反，Release 是没法脱离 Product 而单独存在的，因为如果是这样的话，Release 也就失去了本身的含义，所以，Release 可以定义成一个聚合，而 Product 则是这个聚合中的一个实体。")]),s._v(" "),a("p",[s._v("至此，我们可以得知，聚合的划分和设计必须依赖对通用语言、领域概念和模型的正确把握。接下来再让我们看两个我们经常遇到的例子：销售订单和论坛主题。")]),s._v(" "),a("h2",{attrs:{id:"两个例子：销售订单（sales-order）-订单明细（sales-line）-vs-论坛主题（post）-回复（reply）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个例子：销售订单（sales-order）-订单明细（sales-line）-vs-论坛主题（post）-回复（reply）"}},[s._v("#")]),s._v(" 两个例子：销售订单（Sales Order）/订单明细（Sales Line） vs. 论坛主题（Post）/回复（Reply）")]),s._v(" "),a("p",[s._v("很多网友会在这两个领域的建模上感到纠结，如果我们从数据库设计上考虑（以数据库驱动的开发方式进行思考），两者非常相似，都是主从表结构，都是1对多（1:N）的关系：一个销售订单对应多条订单明细，一个论坛主题对应多条回复。但如果我们用领域驱动的思想来考虑这个问题，我们会发现，这是两个截然不同的例子！两个例子中实体之间的关系完全不同。")]),s._v(" "),a("p",[s._v("首先分析销售订单（Sales Order）/订单明细（Sales Line）：对于一张销售订单来说，订单明细是不可缺少的，否则就不成其为销售订单。试想，一张订单没有包含任何购买的货品信息，这意味着什么？因此，销售订单和订单明细之间的关系是一种固定的不可变（invariant）的关系，就像《领域驱动设计》一书中所讲的汽车与车轮之间的关系那样，汽车少了轮子就不成其为汽车了。反过来看，订单明细也离不开销售订单，这很简单，因为很明细订单明细是描述销售订单的一个不可或缺的部分。于是，在这个例子中，我们有一个聚合根为销售订单，其中包含一条或多条订单明细的聚合，聚合及其实体间的关系可以用下图表示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/201112241000166739.png",alt:""}})]),s._v(" "),a("p",[s._v("对于论坛主题（Post）/回复（Reply）之间的关系，情况却完全不同。论坛的主题是可以脱离回复单独存在的（一个主题可以没有任何人对其进行回复），而回复却不能脱离主题（没有主题的回复是没有意义的）。鉴于这样的事实，实际上在主题与回复这部分模型中，存在两个聚合：第一个聚合是以主题（Post）为聚合根，且仅包含其本身一个对象的聚合；另一个聚合是以回复（Reply）为聚合根，其中包含了对主题（Post）的引用的聚合。其关系可以如下表示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/201112241000175966.png",alt:""}})]),s._v(" "),a("p",[s._v("这样的设计，会让有些朋友感到不适应，原因是我们无法直接从Post实体获得其下所有的Reply实体，那么对于“通过给定的Post，获得与它相关的所有Reply信息”这样的用例，在实现上就不那么直接。此时，我们需要在应用层，通过Reply的仓储来获得，比如：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IEnumerable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReplyDataObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetRepliesForPost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guid")]),s._v(" postId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        using "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IRepositoryContext")]),s._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoCFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetService")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IRepositoryContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ISpecification")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" spec "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Specification")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" postId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IRepository")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" replyRepository "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetRepository")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IEnumerable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" replies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" replyRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FindAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReplyDataObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReplyDataObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("replies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    replies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ToList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ForEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataObjectMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MapToDataObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这部分内容牵涉到了应用层，或许你会觉得，这样做是不是把业务逻辑迁移到了应用层，导致领域模型失血。其实不然，在这里，应用层并没有参与任何业务逻辑，从仓储读取领域对象以及将领域对象转换成数据传输对象（DTO），这些并不属于业务逻辑的范畴：因为从领域模型和业务逻辑的角度看，它们并不能知道什么是仓储、什么是规约、什么是数据传输对象。应用层在这里起到了任务协调、数据转换等作用。不仅如此，应用层甚至还可以包含业务规则引擎以及工作流的实现（workflow）。")])])}),[],!1,null,null,null);t.default=e.exports}}]);