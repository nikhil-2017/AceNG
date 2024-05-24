<template>
    <img :class="styleClass" :src="AppConfig.LOGO" :alt="AppConfig.COMPANY_NAME" />
</template>
<script setup>
import { defineModel } from 'vue'
import AppConfig from '@/config/app.js'

const styleClass = defineModel("styleClass", { default: 'aceng-logo img-fluid' })
</script>
<style scoped>
.aceng-logo {
    padding-left: 10rem;
    padding-right: 10rem;
}

@media (max-width: 576.98px) {
    .aceng-logo {
        padding-left: 5rem;
        padding-right: 5rem;
    }
}

@media (max-width: 992.98px) {
    .aceng-logo {
        padding-left: 5rem;
        padding-right: 5rem;
    }
}
</style>