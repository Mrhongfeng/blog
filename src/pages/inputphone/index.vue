<template>
    <div class="password-wrapper">
        <input
            v-for="(c, index) in ct"
            :key="index"
            type="tel"
            class="input-box"
            v-model="ct[index]"
            ref="input"
            @input="
                (e) => {
                    onInput(e.target.value, index, e);
                }
            "
            @keydown.delete="
                (e) => {
                    onKeydown(e.target.value, index, e);
                }
            "
            @focus="onFocus"
        />
        <ul class="show-ul">
            <li class="show-li" v-for="(i, index) in ct" :key="index">
                {{ ct[index] }}
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable no-tabs */
export default {
  created () {},
  mounted: function () {},
  components: {},
  data () {
    return {
      inputStr: '',
      ct: ['', '', '', '']
    }
  },
  computed: {
    ctSize () {
      return this.ct.length
    },
    cIndex () {
      let i = this.ct.findIndex((item) => item === '')
      i = (i + this.ctSize) % this.ctSize
      return i
    },
    lastCode () {
      return this.ct[this.ctSize - 1]
    }
  },
  watch: {
    // 监听手机号变化
    // phoneMask() {
    // 	console.log('phoneMask变化: ', this.phoneMask);
    // 	this.phoneMaskData = this.phoneMask;
    // },
    cIndex () {
      this.resetCaret()
    },
    // 监听输入的最后一位
    lastCode (val) {
      if (val) {
        console.log('lastCode one: ', val)
        // this.$refs.input[this.ctSize - 1].blur()
        // this.sendPhoneNum(true)
      } else {
        console.log('no lastCode one: ', val)
        // 删除最后一位时回调false，按钮置灰
        // this.sendPhoneNum(false)
      }
    }
  },
  methods: {
    // inputNumber (res) {
    //   console.log(res)
    //   if (this.ct.length < 6 && res.key !== 'Backspace') {
    //     this.ct.push(res.key)
    //   }
    //   if (res.key === 'Backspace') {
    //     this.ct.pop()
    //   }
    // },
    // 监听输入
    onInput (val, index, e) {
      val = val.replace(/[^\d]/g, '')
      this.ct[index] = val[0]
      console.log(val, index, e, this.ct)
      // console.log('onInput: ', val, e, val[val.length - 1], e.inputType.indexOf('insert'))
      // // this.msg = '';
      // // let inputValue = val[val.length - 1]
      // // inputValue = inputValue.replace(/[^\d]/g, '')
      // // // this.ct[index] = val
      // // // this.ct[val.length - 1] = inputValue
      // // this.ct.push(inputValue)
      // try {
      //   // let inputValue = val[val.length - 1]
      //   let inputValue = e.data
      //   inputValue = inputValue && inputValue.replace(/[^\d]/g, '')
      //   this.inputStr = this.inputStr.replace(/[^\d]/g, '')
      //   if (e.inputType.indexOf('insert') !== -1 && inputValue && this.ct.length < 6) {
      //     this.ct.push(inputValue)
      //   } else if (e.inputType.indexOf('Back') !== -1 && this.ct.length >= 0) {
      //     this.ct.pop()
      //   }
      // } catch (err) {
      //   console.log(err)
      // }
    },
    // 删除
    onKeydown (val, index, e) {
      // console.log('onKeydown: ', val, e)
      // // 删除上一个input里的值，并对其focus。
      // if (val.length > 0) {
      //   this.ct[val.length - 1] = ''
      //   // this.ct.pop()
      // }
      if (val === '') {
        // 删除上一个input里的值，并对其focus。
        if (index > 0) {
          this.ct[index - 1] = ''
          this.$refs.input[index - 1].focus()
        }
      }
    },
    // 聚焦
    onFocus () {
      // 监听 focus 事件，将光标重定位到“第一个空白符的位置”。
      let index = this.ct.findIndex((item) => item === '')
      index = (index + this.ctSize) % this.ctSize
      console.log(this.$refs.input, index)
      this.$refs.input[index].focus()
    },
    // 重置，需要重置时触发（暂没用到，若需要可保留）
    reset () {
      this.ct = this.ct.map((item) => '')
      this.resetCaret()
    },
    // 重置光标位置（没用到，暂保留）
    resetCaret () {
      this.$refs.input[this.ctSize - 1].focus()
    }
  }
}
</script>
<style lang='scss' scoped>
.password-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .input-box {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        color: transparent;
        opacity: 0;
        // width: 100%;
        // visibility: hidden;
    }
    .show-ul {
        flex: 1;
        display: flex;
        height: 50px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        .show-li {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #ccc;
            &:last-child {
                border-right: none;
            }
        }
    }
}
</style>
