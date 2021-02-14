<template>
  <div>
    <a :href="link" target="_blank">
      <h1>{{ name }}</h1>
    </a>
    <p>
      {{ description }}
    </p>
    <p>
      <strong>Built With:</strong> &nbsp;
      <span v-for="tool in tools" :key="tool">{{ tool }}. &nbsp;</span>
    </p>
  </div>
</template>


<script>
export default {
  props: ["name", "description", "tools", "link"],
};
</script>

<style scoped>
li,
div {
    list-style: none;
    padding-bottom: 1rem;
    width: 45%;
    padding: 2rem;
 }

 li:last-child,
 div:last-child {
   padding-bottom: 2rem;
 }

 a {
     text-decoration: none;
 }

 p {
     font-size: 19px;
     margin-bottom: 10px;
 }

 @media(max-width: 768px) {
    p {
      font-size: 16px;
    }

    h1 {
      font-size: 27px;
    }

    div {
      width: 90%;
      margin: 0 auto;
    }
}
</style>