<template>
  <div class="footer" :class="{dark: theme === 'light' ? false : true}">
    <router-link to="/about"> About</router-link>
    <a href="https://github.com/arinze19" target="_blank">GitHub</a>
    <router-link to="/projects"> Projects </router-link>
    <a href="https://drive.google.com/file/d/1bz5TraL83EjYfarI5B81WG7gAqmM3_8N/view" target="_blank">Resume</a>
  </div>
</template>


<script>
export default {
  props: ['theme'] 
}
</script>


<style scoped>
div {
  width: 100%;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: #e1fdf5;
}

.dark {
  background-color: #15372c;
}

li {
  list-style-type: none;
}

a {
  color: black;
  text-decoration: none;
  font-size: 19px;
}
</style>

