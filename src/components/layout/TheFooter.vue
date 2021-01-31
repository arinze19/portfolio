<template>
  <footer>
    <ul>
      <li>
        <router-link to="/about">
            About
        </router-link>
      </li>
      <li>
        <a href="https://github.com/arinze19">GitHub</a>
      </li>
      <li>
        <router-link to="/projects">
            Projects
        </router-link>
      </li>
      <li>
        <a href="mailto:arinze19@outlook.com">Email</a>
      </li>
    </ul>
  </footer>
</template>


<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 30px;
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

