<template>
    <li>
        <a :href="url"> {{ name }}</a>
    </li>
</template>


<script>
export default {
    props: ['name', 'url']
}
</script>

<style scoped>
    
</style>