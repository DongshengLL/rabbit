<!--
 * @Author: Janus 598595404@qq.com
 * @Date: 2023-01-12 14:44:06
 * @LastEditors: Janus 598595404@qq.com
 * @LastEditTime: 2023-01-12 16:11:02
 * @FilePath: \rabbit\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import PressScene from "./view/PressScene.vue"
import MainScene from "./view/MainScene.vue"
import { useSystemStore } from "@/store/system";
const store = useSystemStore();
</script>

<template>
    dasd
    <press-scene v-if="store.scene == 'press'" />
    <main-scene v-if="store.scene == 'play'" />
</template>

<style lang="scss" scoped>

</style>
