webpackJsonp([0],{"90mK":function(e,a){},IJYn:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"jyx-pagination",props:{total:{type:Number,default:1e3,required:!1},pagesize:{type:Number,default:10,required:!1},currentPage:{type:Number,default:1,required:!1},tableData:{type:Array,default:[],required:!1},columnData:{type:Array,default:[],required:!1}},methods:{handleCurrentChange:function(e){this.$emit("handleChange",this.pagesize,e)},handleSizeChange:function(e){this.$emit("handleChange",e,this.currentPage)}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{height:"520",data:e.tableData,border:""}},[e._l(e.columnData,function(e,a){return[t("el-table-column",{key:a,attrs:{prop:e.prop,label:e.label}})]})],2),e._v(" "),t("el-pagination",{staticClass:"pg",attrs:{layout:"total, sizes, prev, pager, next, jumper","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pagesize,total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var d=t("VU/8")(n,s,!1,function(e){t("wvks")},"data-v-24ee344b",null).exports,r=t("fGVB"),i={components:{"f-pagination":d},data:function(){return{tableData:r.tableData,columnData:r.columnData,tableDataList:[],totalNum:24,pagesizeNum:10,currentPageNum:1}},methods:{handleChangeData:function(e,a){this.pagesizeNum=e,this.currentPageNum=a,this.getNewData()},getNewData:function(){this.tableDataList=this.tableData.slice((this.currentPageNum-1)*this.pagesizeNum,this.currentPageNum*this.pagesizeNum)}},created:function(){this.getNewData()}},u={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"pg-div"},[a("f-pagination",{attrs:{columnData:this.columnData,tableData:this.tableDataList,total:this.totalNum,pagesize:this.pagesizeNum,currentPage:this.currentPageNum},on:{handleChange:this.handleChangeData}})],1)},staticRenderFns:[]};var l=t("VU/8")(i,u,!1,function(e){t("90mK")},"data-v-72174a4a",null);a.default=l.exports},fGVB:function(e,a){e.exports={tableData:[{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-02",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-04",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-01",name:"峰师兄",address:"上海市普陀区"},{date:"2016-05-03",name:"峰师兄",address:"上海市普陀区"}],columnData:[{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}]}},wvks:function(e,a){}});
//# sourceMappingURL=0.2a59b4e40b4e9b123718.js.map