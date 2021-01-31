<template>
  <div class="container" :class="{ light: lightMode, dark: darkMode }">
    <the-header @change-background="changeTheme"></the-header>
    <router-view>
      <home-page></home-page>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HomePage  from "./components/pages/Home.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: { HomePage, TheHeader, TheFooter },
  data() {
    return {
      darkMode: null,
      lightMode: null,
    };
  },
  methods: {
    changeTheme({ darkMode, lightMode }) {
      this.darkMode = darkMode;
      this.lightMode = lightMode;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Cinzel', Helvetica, 'Open sans';
  font-weight: 700;
}

p,
a,
strong {
  font-family: 'Syne', Arial, Helvetica, sans-serif;
}

.container {
  background-color: #f25f4c;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s linear;
}

.light {
  background-color: #f25f4c;
  color: black;
}


.dark {
  background-color: #0f0e17;
  color: white;
}

.dark a {
  color: #ff8906
}
</style>
