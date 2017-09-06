<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <li class="logo">
        <img src="../../assets/logo.png" width="50" height="50">
        <span class="title">{{ $t('title')}}</span>
      </li>
      <router-link to="/">
        <el-menu-item index="1" >{{$t('navbar[0].component')}}</el-menu-item>
      </router-link>
      <router-link to="/dynamic">
        <el-menu-item index="2">{{$t('navbar[2].component')}}</el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">{{$t('navbar[1].component')}}</template>
        <el-menu-item index="3-1">{{$t('navbar[1].children[0].component')}}</el-menu-item>
        <el-menu-item index="3-2">{{$t('navbar[1].children[1].component')}}</el-menu-item>
        <el-menu-item index="3-3">{{$t('navbar[1].children[2].component')}}</el-menu-item>
      </el-submenu>
      <li class="languge">
        <span  @click="changeLang('zh')" :class="{'active': lang==='zh'}">中</span>
        <span>/</span>
        <span @click="changeLang('en')" :class="{'active': lang==='en'}">EN</span>
      </li>
    </el-menu>
  </div>
</template>

<script>
  import ZHCN from '../../lang/header/header_zh';
  import EN from '../../lang/header/header_en';
  import { setCookie, getCookieValue } from '../../common/js/cookie';
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        lang: ''
      };
    },
    i18n: {
      messages: {
        en: EN,
        zh: ZHCN
      }
    },
    created() {
      let lang = getCookieValue('lang');
      if (lang) {
        this.lang = lang;
      } else {
        this.lang = 'en';
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeLang(value) {
        console.log(value);
//        this.$i18n.locale = value;
        setCookie('lang', value, 30);
        window.location.reload();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .logo
    float:left
    display :inline-block
    height: 100%
    margin:0 60px 0 40px
    font-size: 0
    img
      display:inline-block
      vertical-align :top
      margin-top: 5px
    .title
      display:inline-block
      vertical-align :top
      font-size: 22px
      font-weight: 600
      line-height: 60px
  .languge
    float:right
    margin-right: 40px
    height: 60px
    line-height: 60px
    font-size: 0
    span
      display:inline-block
      font-size: 14px
      padding:0 2px
      color:#48576a
      &.active
        color:#20a0ff
</style>
