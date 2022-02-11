<template>
    <theheader />
    <sidebar />
    <div class="main-panel">
        <router-view></router-view>
    </div>

</template>

<script>
import theheader  from '@/components/layouts/TheHeader.vue'
import sidebar from '@/components/layouts/TheSidebar.vue'

export default {
    components: {
        sidebar,
        theheader
    }
}

</script>