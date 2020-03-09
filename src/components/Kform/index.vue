<template>
  <div>
    <h2>input组件</h2>
    <k-form :model="userInfo" :rules="rules" ref="loginForm">
      <!-- 用户名 -->
      <k-input-item label="用户名" prop="userName">
        <K-input type="text" placeholder="请输入用户名" v-model="userInfo.userName"></K-input>
      </k-input-item>
      <!-- 密码 -->
      <k-input-item label="密码" prop="passWord">
        <K-input type="password" placeholder="请输入密码" v-model="userInfo.passWord"></K-input>
      </k-input-item>
      <!-- 确定按钮也是表单的一部分 -->
      <k-input-item>
        <button @click="login">确定</button>
      </k-input-item>
    </k-form>
  </div>
</template>

<script>
import KInput from './KInput.vue'
import KInputItem from './KInputItem.vue'
import KForm from './KForm.vue'
import Notice from '@/components/Notice.vue'
export default {
  components: {
    KInput,
    KInputItem,
    KForm
  },
  data() {
    return {
      userInfo: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名称' }],
        passWord: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        alert(valid)
        try {
          if (valid) {
            this.$create(Notice, {
              title: ' 吃饭社会洪哥喊你回家吃饭',
              message: '提示信息',
              duration: 1000
            }).show()
          } else {
            console.log('验证失败')
          }
        } catch (error) {
          console.log(error)
        }
        // if (valid) {
        //   alert('submit success')
        // } else {
        //   alert('fail')
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>