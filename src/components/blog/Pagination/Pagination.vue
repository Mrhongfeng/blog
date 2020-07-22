<template>
  <div>
    <el-table height="520" :data="tableData" style="width: 100%">
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
    total: {
      type: Number,
      default: 1000,
      required: false
    },
    pagesize: {
      type: Number,
      default: 10,
      required: false
    },
    currentPage: {
      type: Number,
      default: 1,
      required: false
    },
    tableData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
      required: false
    },
    columnData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
      required: false
    }
  },
  methods: {
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
