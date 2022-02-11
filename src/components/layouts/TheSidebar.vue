<template>
    <div class="sidebar">
        <header class="sidebar-header">
            <img src="logo.png" alt="logo">
            <h2>{{ message }}</h2>
        </header>
        <hr>
        <nav class="navbar">
            <ul>
                <li v-for="(item,key) in items" >
                    <router-link :to="{ name : item.link }">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>

            </ul>

        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: "Brand",
            items: [
                { name : "Dashboard" , icon : "bx bx-sm bx-home" ,link: "Dashboard"},
                { name : "User Profile" , icon : "bx bx-sm bx-user" , link:"Userpanel"},
                { name : "Table List" , icon : "bx bx-sm bx-table" },
                { name : "Typography" , icon : "bx bx-sm bx-pencil"},
                { name : "Icons" , icon : "bx bx-sm bx-droplet"},
                { name : "Maps" , icon : "bx bx-sm bx-map"},
            ],
        }
    }
}
</script>