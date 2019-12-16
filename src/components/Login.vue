<template>
  <el-card>
    <input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </el-card>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          } else {
            alert(successResponse.data.message)
          }
        })
        .catch(failResponse => {
          alert('系统繁忙，请稍后再试')
        })
    }
  }
}
</script>
