<template>
    <div>
        <el-table :data="tableData">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <!-- <el-carousel trigger="click" class="carousel-list">
                        <el-carousel-item
                            v-for="item in props.row.list"
                            :key="item"
                            class="carousel-item"
                        >
                            <el-form
                                label-position="left"
                                inline
                                class="demo-table-expand"
                            >
                                <el-form-item label="商品 ID">
                                    <span>{{ item.id }}</span>
                                </el-form-item>
                                <el-form-item label="所属店铺">
                                    <span>{{ item.shop }}</span>
                                </el-form-item>
                                <el-form-item label="店铺 ID">
                                    <span>{{ item.shopId }}</span>
                                </el-form-item>
                            </el-form>
                        </el-carousel-item>
                    </el-carousel> -->
                    <swiper
                        :options="swiperOption"
                        ref="mySwiper"
                        @someSwiperEvent="callback"
                    >
                        <swiper-slide
                            v-for="item in props.row.list"
                            :key="item"
                            class="carousel-item"
                        >
                            <el-form
                                label-position="left"
                                inline
                                class="demo-table-expand"
                            >
                                <el-form-item label="商品 ID">
                                    <span>{{ item.id }}</span>
                                </el-form-item>
                                <el-form-item label="所属店铺">
                                    <span>{{ item.shop }}</span>
                                </el-form-item>
                                <el-form-item label="店铺 ID">
                                    <span>{{ item.shopId }}</span>
                                </el-form-item>
                            </el-form>
                        </swiper-slide>
                        <!-- <div class="swiper-pagination" slot="pagination"></div>
                        <div
                            class="swiper-button-prev"
                            slot="button-prev"
                        ></div>
                        <div
                            class="swiper-button-next"
                            slot="button-next"
                        ></div>
                        <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                    </swiper>
                </template>
            </el-table-column>
            <el-table-column label="商品 ID" prop="id"> </el-table-column>
            <el-table-column label="商品名称" prop="name"> </el-table-column>
            <el-table-column label="描述" prop="desc"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          list: [
            {
              id: '12987122',
              shop: '王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店王小虎夫妻adklahdkl唉可怜的和卡拉圣诞快乐阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店阿喀琉斯的话克拉生的看了哈善良的哈利和安理会的卡拉好的哈得考虑店\n1ahk\nldask\tdhjkash\tdjkasghjkdghakg按客户打款哈斯卡拉等哈数量的拉伸达拉斯适当考虑哈上了等哈来电话拉黑',
              shopId: '10333'
            },
            {
              id: '12987123',
              shop: '王小虎夫妻店2',
              shopId: '10333'
            },
            {
              id: '12987124',
              shop: '王小虎夫妻店3',
              shopId: '10333'
            }
          ]
        },
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          list: [
            {
              id: '12987122',
              shop: '王小虎夫妻店1',
              shopId: '10333'
            },
            {
              id: '12987123',
              shop: '王小虎夫妻店2',
              shopId: '10333'
            },
            {
              id: '12987124',
              shop: '王小虎夫妻店3',
              shopId: '10333'
            }
          ]
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
        // // 显示分页
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true // 允许分页点击跳转
        // },
        // // 设置点击箭头
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

// .carousel-item {
//     position: relative;
//     height: auto;
// }
// .carousel-list /deep/ .el-carousel__container {
//     height: auto;
// }
</style>
