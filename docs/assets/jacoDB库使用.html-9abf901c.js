const l=JSON.parse('{"key":"v-5fe1ee05","path":"/software-static-analysis/tool/JacoDB/jacoDB%E5%BA%93%E4%BD%BF%E7%94%A8.html","title":"一  jacodb基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1创建数据库","slug":"_1创建数据库","link":"#_1创建数据库","children":[{"level":3,"title":"1.1创建选项JcSettings","slug":"_1-1创建选项jcsettings","link":"#_1-1创建选项jcsettings","children":[]}]},{"level":2,"title":"2加载被分析代码的bitcode信息","slug":"_2加载被分析代码的bitcode信息","link":"#_2加载被分析代码的bitcode信息","children":[]},{"level":2,"title":"3 监听class文件变更(无效)","slug":"_3-监听class文件变更-无效","link":"#_3-监听class文件变更-无效","children":[]},{"level":2,"title":"4 查询类信息","slug":"_4-查询类信息","link":"#_4-查询类信息","children":[{"level":3,"title":"4.1  指定查询范围","slug":"_4-1-指定查询范围","link":"#_4-1-指定查询范围","children":[]},{"level":3,"title":"4.2 获取类信息","slug":"_4-2-获取类信息","link":"#_4-2-获取类信息","children":[]}]},{"level":2,"title":"5 类型","slug":"_5-类型","link":"#_5-类型","children":[]},{"level":2,"title":"6 method","slug":"_6-method","link":"#_6-method","children":[]},{"level":2,"title":"7 Instruction","slug":"_7-instruction","link":"#_7-instruction","children":[]},{"level":2,"title":"8 control flow graph","slug":"_8-control-flow-graph","link":"#_8-control-flow-graph","children":[{"level":3,"title":"graph可视化","slug":"graph可视化","link":"#graph可视化","children":[]},{"level":3,"title":"Visitor API","slug":"visitor-api","link":"#visitor-api","children":[]}]},{"level":2,"title":"9 hierarchy","slug":"_9-hierarchy","link":"#_9-hierarchy","children":[]},{"level":2,"title":"10 Usages","slug":"_10-usages","link":"#_10-usages","children":[]},{"level":2,"title":"11 测试代码","slug":"_11-测试代码","link":"#_11-测试代码","children":[{"level":3,"title":"测试类-被检测","slug":"测试类-被检测","link":"#测试类-被检测","children":[]},{"level":3,"title":"测试类","slug":"测试类","link":"#测试类","children":[]}]},{"level":2,"title":"1 功能调用","slug":"_1-功能调用","link":"#_1-功能调用","children":[{"level":3,"title":"api方式调用","slug":"api方式调用","link":"#api方式调用","children":[]},{"level":3,"title":"cli方式调用","slug":"cli方式调用","link":"#cli方式调用","children":[]}]},{"level":2,"title":"2 已实现功能","slug":"_2-已实现功能","link":"#_2-已实现功能","children":[]},{"level":2,"title":"3 自定义分析","slug":"_3-自定义分析","link":"#_3-自定义分析","children":[{"level":3,"title":"自定义分析器","slug":"自定义分析器","link":"#自定义分析器","children":[]},{"level":3,"title":"调用自定义分析器","slug":"调用自定义分析器","link":"#调用自定义分析器","children":[]}]},{"level":2,"title":"getName方法的代码如下：","slug":"getname方法的代码如下","link":"#getname方法的代码如下","children":[]},{"level":2,"title":"getName方法的CFG：","slug":"getname方法的cfg","link":"#getname方法的cfg","children":[]},{"level":2,"title":"ifds分析getName方法时处理的指令：","slug":"ifds分析getname方法时处理的指令","link":"#ifds分析getname方法时处理的指令","children":[]},{"level":2,"title":"图示遍历过程：","slug":"图示遍历过程","link":"#图示遍历过程","children":[]},{"level":2,"title":"DomainFact","slug":"domainfact","link":"#domainfact","children":[]},{"level":2,"title":"SummaryFact","slug":"summaryfact","link":"#summaryfact","children":[]},{"level":2,"title":"SummaryStorage","slug":"summarystorage","link":"#summarystorage","children":[]},{"level":2,"title":"AnalysisDependentEvent","slug":"analysisdependentevent","link":"#analysisdependentevent","children":[]},{"level":2,"title":"FlowFunctionsSpace","slug":"flowfunctionsspace","link":"#flowfunctionsspace","children":[]},{"level":2,"title":"handleNewEdge","slug":"handlenewedge","link":"#handlenewedge","children":[]},{"level":2,"title":"handleNewCrossUnitCall","slug":"handlenewcrossunitcall","link":"#handlenewcrossunitcall","children":[]},{"level":2,"title":"handleIfdsResult","slug":"handleifdsresult","link":"#handleifdsresult","children":[]},{"level":2,"title":"关系图","slug":"关系图","link":"#关系图","children":[]},{"level":2,"title":"NPE(空指针异常检测)","slug":"npe-空指针异常检测","link":"#npe-空指针异常检测","children":[{"level":3,"title":"maxPathLength","slug":"maxpathlength","link":"#maxpathlength","children":[]},{"level":3,"title":"isMainAnalyzer","slug":"ismainanalyzer","link":"#ismainanalyzer","children":[]},{"level":3,"title":"obtainPossibleStartFacts","slug":"obtainpossiblestartfacts","link":"#obtainpossiblestartfacts","children":[]},{"level":3,"title":"handleNewEdge","slug":"handlenewedge-1","link":"#handlenewedge-1","children":[]},{"level":3,"title":"默认处理","slug":"默认处理","link":"#默认处理","children":[]},{"level":3,"title":"TaintNode","slug":"taintnode","link":"#taintnode","children":[]}]},{"level":2,"title":"jvm description of method","slug":"jvm-description-of-method","link":"#jvm-description-of-method","children":[]},{"level":2,"title":"类方法介绍","slug":"类方法介绍","link":"#类方法介绍","children":[]},{"level":2,"title":"units解析","slug":"units解析","link":"#units解析","children":[]},{"level":2,"title":"ApplicationGraph","slug":"applicationgraph","link":"#applicationgraph","children":[{"level":3,"title":"JcApplicationGraphImpl","slug":"jcapplicationgraphimpl","link":"#jcapplicationgraphimpl","children":[]},{"level":3,"title":"SimplifiedJcApplicationGraph","slug":"simplifiedjcapplicationgraph","link":"#simplifiedjcapplicationgraph","children":[]},{"level":3,"title":"BackwardApplicationGraph","slug":"backwardapplicationgraph","link":"#backwardapplicationgraph","children":[]}]},{"level":2,"title":"jaco-ifds默认的空指针检测问题","slug":"jaco-ifds默认的空指针检测问题","link":"#jaco-ifds默认的空指针检测问题","children":[]}],"git":{"updatedTime":1701943653000,"contributors":[{"name":"chengxunfei","email":"chengxunfei@126.com","commits":1}]},"filePathRelative":"software-static-analysis/tool/JacoDB/jacoDB库使用.md"}');export{l as data};
