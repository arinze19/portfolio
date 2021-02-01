<template>
  <nav :class="{ dark: !themeIsLight }">
    <router-link to="/">
      <strong>&lt;arinze /&gt; </strong>
    </router-link>

    <div
      class="theme-container"
      @click="changeTheme"
      :class="{ border: !themeIsLight }"
    >
      <div class="left">
        <transition name="light">
          <div class="light-container" v-if="themeIsLight">
            <img src="../../assets/sun.svg" />
          </div>
        </transition>
      </div>

      <div class="right">
        <transition name="dark">
          <div class="dark-container" v-if="!themeIsLight">
            <img src="../../assets/moon.svg" />
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["change-theme"],
  data() {
    return {
      theme: undefined,
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);

      this.$emit("change-theme", this.theme);
    },
    getTheme() {
      this.theme = localStorage.getItem("theme") || "light";
      localStorage.setItem("theme", this.theme);

      this.$emit("change-theme", this.theme);
    },
  },
  computed: {
    themeIsLight() {
      if (this.theme === "light") {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getTheme();
  },
};
</script>



<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: #f25f4c;
  transition: all 0.3s linear;
}

strong {
  font-size: 22px;
}

.light-container,
.dark-container {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.left,
.right {
  background-color: black;
  height: 100%;
  width: 50%;
}

img {
  width: 100%;
  height: 100%;
}

.theme-container {
  width: 45px;
  height: 25px;
  border-radius: 15px;
  background-color: black;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  overflow: hidden;
}

.border {
  border: 1px solid #ff8906;
}

.dark {
  background-color: #0f0e17;
}

.dark a {
  color: #ff8906;
}

.light-enter-from,
.light-leave-to {
  transform: translateY(-20px);
}

.light-enter-active {
  transition: all 0.3s ease-out;
}

.light-enter-leave {
  transition: all 0.3s ease-in;
}

.light-enter-to,
.light-leave-from {
  transform: translateY(0);
}

/*    ====================================== */
.dark-enter-from,
.dark-leave-to {
  transform: translateY(20px);
}

.dark-enter-active {
  transition: all 0.3s ease-out;
}

.dark-enter-leave {
  transition: all 0.3s ease-in;
}

.dark-enter-to,
.dark-leave-from {
  transform: translateY(0);
}

a {
  color: black;
  text-decoration: none;
  font-size: 20px;
}
</style>