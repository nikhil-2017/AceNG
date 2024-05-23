<template>
    <img :class="styleClass" :src="AppConfig.LOGO" :alt="AppConfig.COMPANY_NAME" />
</template>
<script setup>
import { defineModel } from 'vue'
import AppConfig from '@/config/app.js'

const styleClass = defineModel("styleClass", { default: 'img-fluid' })
</script>