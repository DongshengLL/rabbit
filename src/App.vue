<script setup>
import PressScene from "./view/PressScene.vue"
import MainScene from "./view/MainScene.vue"
import { useSystemStore } from "@/store/system";
const store = useSystemStore();
</script>

<template>
    <press-scene v-if="store.scene == 'press'" />
    <main-scene v-if="store.scene == 'play'" />
</template>

<style lang="scss" scoped>

</style>
