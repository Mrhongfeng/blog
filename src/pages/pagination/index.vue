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
import FPagination from '@/components/blog/pagination/Pagination.vue'
import { tableData, columnData } from './mockData.js'
export default {
  components: {
    'f-pagination': FPagination
  },
  data () {
    return {
      tableData,
      columnData,
      tableDataList: [],
      totalNum: 24,
      pagesizeNum: 10,
      currentPageNum: 1
    }
  },
  methods: {
    handleChangeData (pagesize, currentPage) {
      this.pagesizeNum = pagesize
      this.currentPageNum = currentPage
      this.getNewData()
    },
    getNewData () {
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
