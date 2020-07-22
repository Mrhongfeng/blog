<template>
  <div class='pg-div'>
    <f-pagination
      :columnData="columnData"
      :tableData="tableDataList"
      :total="totalNum"
      :pagesize="pagesizeNum"
      :currentPage="currentPageNum"
      @handleChange="handleChangeData"
    ></f-pagination>
  </div>
</template>

<script>
import FPagination from '@/components/blog/pagination/Pagination.vue' // 引用分页表格组件
import { tableData, columnData } from './mockData.js' // 引入mock数据
export default {
  components: {
    'f-pagination': FPagination
  },
  data () {
    return {
      tableData, // 表格全部数据，引用于mock数据
      columnData, // 表头数据，引用于mock数据
      tableDataList: [], // 分页后的表格数据
      totalNum: 24, // 数据总数
      pagesizeNum: 10, // 单页数据量
      currentPageNum: 1 // 当前页码
    }
  },
  methods: {
    // 获取子组件传来修改后的pagesize和currentPage，改变数据页码或每页条目，进而请求新数据
    handleChangeData (pagesize, currentPage) {
      this.pagesizeNum = pagesize
      this.currentPageNum = currentPage
      this.getNewData()
    },
    // 实际请求后端数据函数，修改表格数据
    getNewData () {
      // 这里请自行更改为请求表格数据，并赋值给tableDataList；这里作者为了方便查看对mock数据做了假分页
      this.tableDataList = this.tableData.slice((this.currentPageNum - 1) * this.pagesizeNum, this.currentPageNum * this.pagesizeNum)
    }
  },
  created () {
    this.getNewData()
  }
}
</script>

<style scoped>
.pg-div {
  margin: auto;
  width: 80vw;
}
</style>
