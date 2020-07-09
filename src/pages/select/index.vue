<template>
  <div>
    <div class="select-form">
      <el-form>
        <el-form-item>
          <el-select placeholder="请选择活动区域" multiple v-model="citys">
            <el-option v-show="!all" label="选择所有" value="all"></el-option>
            <el-option v-show="all" label="取消所有" value="cancleAll"></el-option>
            <el-option v-for="item in cities" :label="item.label" :value="item" :key="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button class="check-btn" type="primary" @click="check">查看</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cities: [
        { value: 'Beijing', label: '北京' },
        { value: 'Shanghai', label: '上海' },
        { value: 'Nanjing', label: '南京' },
        { value: 'Chengdu', label: '成都' },
        { value: 'Shenzhen', label: '深圳' },
        { value: 'Guangzhou', label: '广州' }
      ],
      citys: [],
      all: false
    }
  },

  methods: {
    check () {
      console.log(this.citys)
    }
  },

  watch: {
    citys (val, oldval) {
      // 如果新的选择里有勾选了选择所有, 则勾选整个选项
      if (
        val.indexOf('all') !== -1 &&
        oldval.indexOf('all') === -1 &&
        val.length &&
        this.cities.length
      ) {
        this.citys = [].concat(this.cities)
        this.all = true
      // eslint-disable-next-line brace-style
      }
      // 如果操作前有勾选了多项且当前也选中了取消所有且勾选数量大于等于1则取消勾选所有
      else if (
        val.indexOf('cancleAll') !== -1 &&
        oldval.indexOf('cancleAll') === -1 &&
        oldval.length >= 1
      ) {
        this.all = false
        this.citys = []
      }
    }
  }
}
</script>

<style>
.select-form{
  display: flex;
  justify-content: center;
  height: 40px;
}
.check-btn{
  margin-left: 20px;
}
</style>
