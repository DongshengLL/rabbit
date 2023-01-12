/*
 * @Author: Janus 598595404@qq.com
 * @Date: 2023-01-12 14:44:06
 * @LastEditors: Janus 598595404@qq.com
 * @LastEditTime: 2023-01-12 15:59:13
 * @FilePath: \rabbit\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    createApp
} from 'vue'
import './style.scss'
import App from './App.vue'

import {
    createPinia
} from "pinia";
const pinia = createPinia();

console.log(1122)
console.log(pinia)

const app = createApp(App);
app.use(pinia);

app.mount('#app');