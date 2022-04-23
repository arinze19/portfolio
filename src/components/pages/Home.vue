<template>
  <main>
    <div class="wrapper">
      <div class="icon">🌪️</div>
      <h1>Hey there! I'm Arinze.</h1>
      <p>
        A problem solving, ever learning software engineer with an eye for
        pixel perfect designs. Also ecstatic about start-ups and looking to make an impact in
        e-commerce and fin-tech.
      </p>
      <a href="mailto:me@arinzeobi.com"> Lets chat 📫</a>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
}

.wrapper {
  width: 50%;
  margin: 0 auto;
}

h1 {
  font-size: 50px;
}

p {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
}

a {
  color: black;
  text-decoration: none;
  letter-spacing: 1.5px;
  font-size: 20px;
}

.icon {
  font-size: 64px;
  animation: whirl-wind 2s linear 1s infinite;
}

@keyframes whirl-wind {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .wrapper {
    width: 80%;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
}
</style>

