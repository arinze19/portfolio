<template>
  <li>
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
  </li>
</template>


<script>
export default {
  props: ["name", "description", "tools", "link"],
};
</script>

<style scoped>
li {
    list-style: none;
 }

 a {
     text-decoration: none;
 }

 p {
     font-size: 19px;
     margin-bottom: 10px;
 }

 @media(max-width: 767px) {
    p {
      font-size: 16px;
    }

    h1 {
      font-size: 27px;
    }
}
</style>