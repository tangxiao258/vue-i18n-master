<template>
  <div class="dynamic">
    <div class="content">
      <img src="../../assets/logo.png" width="200" height="200" class="logo">
      <h1 class="title">{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  import { getCookieValue } from '../../common/js/cookie';
  export default {
    data() {
      return {
        msg: ''
      };
    },
    created() {
      var lang = getCookieValue('lang');
      this.$http.get(`/api/${lang}`).then((res) => {
        res = res.body;
        if (res.errno === 0) {
          this.msg = res.data.message;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dynamic
  position:relative
  margin: 100px
  .content
    display:flex
    flex-direction:column
    align-items: center
    h1
      font-weight:normal
      color:#42b983
</style>
