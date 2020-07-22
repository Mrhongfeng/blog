<template>
  <div>
    <el-table height="520" :data="tableData" style="width: 100%" border>
      <template v-for="(item, index) in columnData">
        <el-table-column
          :prop="item.prop"
          :key="index"
          :label="item.label"
        >
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      class="pg"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'jyx-pagination',
  props: {
    // 分页数据总数
    total: {
      type: Number,
      default: 1000,
      required: false
    },
    // 单页数据量
    pagesize: {
      type: Number,
      default: 10,
      required: false
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
      required: false
    },
    // 表格数据
    tableData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
      required: false
    },
    // 表头数据
    columnData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
      required: false
    }
  },
  methods: {
    // 以下两个函数均是触发父组件的handleChange事件，从而实现点击分页的功能按钮后，子组件向父组件传参
    handleCurrentChange: function (currentPage) {
      this.$emit('handleChange', this.pagesize, currentPage)
    },
    handleSizeChange: function (pageSize) {
      this.$emit('handleChange', pageSize, this.currentPage)
    }
  }
}
</script>

<style scoped>
.pg {
  margin: 20px;
  text-align: right;
}
</style>
