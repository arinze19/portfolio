<template>
  <div class="project-container">
    <ul v-for="project in projects" :key="project.id">
      <project-item
        :name="project.name"
        :description="project.description"
        :tools="project.tools"
        :link="project.link"
      ></project-item>
    </ul>
  </div>
</template>

<script>
import ProjectItem from "../lists/ProjectItem.vue";

export default {
  components: { ProjectItem },
  data() {
    return {
      projects: [
        {
          name: "Selfish Twenty's",
          link: "selfish-twentys.netlify.app",
          description:
            "An E-commerce site for the urban start up brand, selfish twentys. Bringing a new shopping experience to millenials in SSA.",
          tools: ["Vue", "Firebase", "Figma"],
        }
      ],
    };
  },
};
</script>

<style scoped>
.project-container {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 45%;
  margin: 0 auto;
  height: 100vh;
  max-width: 900px;
  line-height: 1.5;
}

@media(max-width: 768px) {
    .project-container {
        width: 80%;
        margin: 0 auto;
    }
}
</style>