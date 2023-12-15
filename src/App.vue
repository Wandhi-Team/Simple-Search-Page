<template>
  <div id="menu" :class="{ on: is_on }" @click="menu_client()"><i></i></div>
  <div :class="{ closed: !is_on }" class="list">
    <ul id="setting">
      <li :class="{ selected: menu_selected === 'bookmark' }" @click="menu_select('bookmark')"><a>书签</a></li>
      <li :class="{ selected: menu_selected === 'setting' }" @click="menu_select('setting')"><a>设置</a></li>
    </ul>
    <ul id="element">
      <span v-if="menu_selected === 'bookmark'">
        <Bookmarks></Bookmarks>
      </span>
      <span v-else-if="menu_selected === 'setting'">
        <Setting></Setting>
      </span>
    </ul>
  </div>
  <div id="content" ref="content" @click="menu_close()">
    <div id="top-menu-list">
      <ul id="top-menu-ul">
        <li :class="{ selected: this.$route.path === '/' }">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <!-- <li :class="{ selected: this.$route.path === '/nav' }">
          <RouterLink to="/nav">导航</RouterLink>
        </li>
        <li :class="{ selected: this.$route.path === '/software' }">
          <RouterLink to="/software">软件</RouterLink>
        </li>
        <li :class="{ selected: this.$route.path === '/os' }">
          <RouterLink to="/os">系统</RouterLink>
        </li> -->
      </ul>
    </div>
    <RouterView />
    <!-- <Background @background="set_background"></Background> -->
    <div id="message"></div>
    <div id="foot">©2018-2024
      <a class="out_link" href="https://www.zhangdi.net/" target="_blank">ZHANGDI</a> 版权所有
      <a class="out_link beian" href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备18024871号</a>
      <a></a>
      <a class="out_link beian" href="https://beian.mps.gov.cn/#/query/webSearch?code=51019002006069" target="_blank">川公网安备51019002006069号</a>
      <!--      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">-->
      <!--        <span class="tag_box">v{{ version }} Vue 测试版</span></a>-->
      <!--      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">
        <span class="tag_box">Vue</span></a>-->
    </div>
  </div>
</template>
<script>
import packageJson from '../package.json'
// import storage from "@/utils/storage";
// import axios from "axios";
import Bookmarks from "./components/Bookmarks.vue";
import Setting from "./components/Setting.vue";
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "Home",
  components: { Setting, Bookmarks },
  data() {
    return {
      version: packageJson.version,
      is_on: false,
      menu_selected: "bookmark",
      background: "",
    }
  },
  methods: {
    menu_client() {
      this.is_on = !this.is_on
    },
    menu_close() {
      this.is_on = false
    },
    menu_select(val) {
      this.menu_selected = val
    },
    set_background(data) {
      this.background = data;
    },
  },
  watch: {
    background() {
      try {
        this.$refs.content.style.background = this.background
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.$refs.content.style.background = this.background
  }
};
</script>

<style lang='less'>
@import "style/main";
</style>