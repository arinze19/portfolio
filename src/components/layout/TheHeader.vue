<template>
  <nav>
    <router-link to="/">
      <strong>&lt;arinze /&gt; </strong>
    </router-link>

    <div class="mood-container" @click="changeTheme" :class="{border: darkMode}">
      <div class="left">
        <transition name="light">
          <div class="light-container" v-if="lightMode">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/495/495976.svg?token=exp=1612106343~hmac=a0409d958c356701a7a658c5023f7a7b"
            />
          </div>
        </transition>
      </div>

      <div class="right">
        <transition name="dark">
          <div class="dark-container" v-if="darkMode">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3643/3643327.svg?token=exp=1612106381~hmac=f3331a4881098760972c2da4993a2a10"
            />
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ['change-background'],
  data() {
    return {
      lightMode: true,
      darkMode: false
    };
  },
  methods: {
    changeTheme() {
        this.lightMode = !this.lightMode
        this.darkMode  = !this.darkMode

        this.$emit('change-background', { lightMode: this.lightMode, darkMode: this.darkMode})
    }
  }
}
</script>



<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  position: fixed;
  width: 100vw;
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

.mood-container {
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