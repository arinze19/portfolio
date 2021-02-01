<template>
  <div class="container" :class="{dark: !isThemeLight}">
    <the-header @change-theme="getTheme"></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer :theme="theme"></the-footer>
  </div>
</template>

<script>
import HomePage from "./components/pages/Home.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: { HomePage, TheHeader, TheFooter },
  data() {
    return {
      theme: localStorage.getItem('theme') || 'light'
    }
  },
  methods: {
    getTheme(currentTheme) {
      this.theme = currentTheme
    }
  },
  computed: {
    isThemeLight() {
      if(this.theme === "light") {
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&display=swap");

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
  font-family: "Cinzel", Helvetica, "Open sans";
  font-weight: 700;
}

p,
a,
strong {
  font-family:  "Syne", Arial, Helvetica, sans-serif;
}

.container {
  background-color: #f25f4c;
  transition: all 0.3s linear;
}

.dark {
  color: white;
}

.dark {
  background-color: #0f0e17;
}

.dark a {
  color: #ff8906;
}

/* =============================== transition styling =======================    #f25f4c;  #0f0e17*/
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-to {
  opacity: 1;
  transform: translateY(30);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(30);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
