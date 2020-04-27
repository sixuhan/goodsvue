<template>
  <div class="content">
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-form @submit="onSubmit" >
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="注册">
           <van-form @submit="onSubmit" >
          <van-field
            v-model="username"
            name="请输入用户名"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <van-field
            v-model="email"
            name="请输入邮箱"
            label="邮箱"
            placeholder="请输入邮箱"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="请输入密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="请输入密码"
            label="密码"
            placeholder="请再次输入密码"
            :rules="[{ required: true, message: '请再次填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>

body{
  background-image:url("../static/picture/login.jpg");
}
.content {
  width: 100%;
  margin-top: 40%;
}
</style>