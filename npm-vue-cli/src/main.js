import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import App from './App';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import locale from 'element-ui/lib/locale';
import LocalStorage from './common/js/locaStorage';

import 'element-ui/lib/theme-default/index.css';
import router from './router/index.js';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueI18n);

const messages = [];

let lang = LocalStorage.get('lang') || 'en';

if (lang === 'en') {
  locale.use(enLocale);
} else {
  locale.use(zhLocale);
}

const i18n = new VueI18n({
  locale: lang, // set locale
  messages: messages // set locale messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
