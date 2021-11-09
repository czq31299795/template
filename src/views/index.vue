<template>
  <div class="login-box">
    我是index
    <div class="login-code">
        <router-link to="login" >去登录页</router-link>
      <img :src="codeUrl" @click="getCode" class="login-code-img" />
    </div>
  </div>
</template>
<script>
import { getCodeImg } from "@/api/login";
export default {
  data() {
    return {
      codeUrl: ""
    };
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.codeUrl = "data:image/gif;base64," + res.img;
        console.log(res.uuid);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  color: #000;
  font-size: 18px;
}
.login-code-img {
  height: 64px;
  width: 100px;
}
</style>