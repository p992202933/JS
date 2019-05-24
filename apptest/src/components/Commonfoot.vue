<template>
    <div>
        <ul>
            <li v-for="(obj, index) in menu" :key="index">
                <router-link :to="obj.path">{{ obj.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:[menu]
    
}
</script>
<style scoped>
    
</style>