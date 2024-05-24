<template>
    <div class="app-wrapper">

        <AppTopbar></AppTopbar>

        <div class="app-content">
            <div class="container">
                <div class="grid mt-5">
                    <div class="col-12 md:col-6 my-auto text-center">
                        <AceNGLogo></AceNGLogo>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="grid">
                            <div class="col-12 text-center md:text-left">
                                <span class="company-name text-2xl">AceNG</span>
                            </div>
                            <div class="col-12 mt-5">
                                <RouterView></RouterView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import AppTopbar from '@/layouts/topbar/AppTopbar.vue'
</script>
