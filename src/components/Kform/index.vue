<template>
  <div>
    <h2>input组件</h2>
    <k-form :model="userInfo"
            :rules="rules"
            ref="loginForm">
      <!-- 用户名 -->
      <k-form-item label="用户名"
                   prop="userName">
        <K-input type="text"
                 placeholder="请输入用户名"
                 v-model="userInfo.userName">
        </K-input>
      </k-form-item>
      <!-- 密码 -->
      <k-form-item label="密码"
                   prop="passWord">
        <K-input type="password"
                 placeholder="请输入密码"
                 v-model="userInfo.passWord">
        </K-input>
      </k-form-item>
      <!-- 确定按钮也是表单的一部分 -->
      <k-form-item>
        <button @click="login">确定</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from './KInput.vue'
import KFormItem from './KFormItem.vue'
import KForm from './KForm.vue'
import Notice from '../Notice.vue'
export default {
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data () {
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
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // alert('submit success')
          this.$create(Notice, {
            duration: 2000,
            title: '社会提醒',
            content: 'submit success'
          }).show()
        } else {
          this.$create(Notice, {
            duration: 2000,
            title: '社会提醒',
            content: 'fail'
          }).show()
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>