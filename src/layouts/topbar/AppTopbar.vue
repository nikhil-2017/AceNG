<template>
    <div class="app-topbar">
        <div class="app-topbar-inner">
            <div class="topbar-items">
                <div v-for="(item, index) in items" :key="`app-button-${index}`">
                    <router-link class="topbar-item" v-if="item?.route" :to="item?.route">
                        <span :class="item.icon"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const items = [
    {
        label: "Home",
        icon: "pi pi-home",
        route: { name: "Home" }
    },
    {
        label: "Mission",
        icon: "pi pi-bullseye",
        route: { name: "Mission" }
    },
    {
        label: "Contact",
        icon: "pi pi-phone",
        route: { name: "Contact" }
    }
]
</script>
<style scoped>
@media (max-width: 576.98px) {
    .app-topbar {
        bottom: 0;
        top: auto;
    }

    .app-topbar .topbar-items {
        gap: 4rem;
    }
}


.topbar-item {
    padding: .5rem;
    cursor: pointer;
    text-decoration: none;
    color: var(--text-color-secondary);
    border-radius: .5rem;
    text-align: center;
    align-items: center;
    display: flex;
}

.topbar-item:hover {
    background-color: var(--surface-border);
}

.topbar-item.router-link-exact-active {
    background-color: var(--surface-300);
}

.topbar-item.router-link-exact-active>span {
    color: var(--text-color);
}

.topbar-item span {
    font-size: 2rem;
}
</style>