<template>
    <div>
        用户名：<input type="text" v-model="loginForm.username" placeholder="请输入用户名...">
        密码：<input type="password" v-model="loginForm.password" placeholder="请输入密码...">
        <br><br>
        <button v-on:click="login">登录</button>
    </div>
</template>
<script>
export default {
    data (){
        return{
            loginForm: {
                username: '',
                password: ''
            },
            responseResult: []
        }
    },
    methods:{

    }
}
</script>