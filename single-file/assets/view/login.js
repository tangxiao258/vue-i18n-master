//语言引入
console.log("2");
let lang = getLocalStorage('lang') || 'en';

if (lang === 'en') {
    ELEMENT.locale(ELEMENT.lang.en);
} else {
    ELEMENT.locale(ELEMENT.lang.zhCN);
}

const LANG = getLang();
const i18n = new VueI18n({
    locale: lang,
    messages: {
        en: LANG.en,
        zh: LANG.zh
    }
});

var vm = new Vue({
    el: "#app",
    i18n,
    data() {
        return {
            lang: '',
            message: '请输入账户名',
            operator: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    {required: true, message: this.message, trigger: 'blur'}
                ]
            }
        };
    },
    mounted() {
        let lang = getLocalStorage('lang');
        this.lang = lang ? lang : 'en';
    },
    methods: {
        changeLang() {
            this.lang==='en' ? this.lang = 'zh' : this.lang = 'en';
            this.$i18n.locale = this.lang;
            if(this.lang === 'en'){
                setLocalStorage('lang','en');
                ELEMENT.locale(ELEMENT.lang.en);
            }else{
                setLocalStorage('lang','zh');
                ELEMENT.locale(ELEMENT.lang.zhCN);
            }
        },
        login() {
            if(this.operator.username && this.operator.password) {
                parent.location.href = 'index.html';
            }
        }
    }
});