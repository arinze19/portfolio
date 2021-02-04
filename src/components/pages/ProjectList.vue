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
          link: "https://selfish-twentys.netlify.app",
          description:
            "An E-commerce site for the urban start up brand, selfish twentys. Bringing a new shopping experience to millenials in SSA.",
          tools: ["Vue", "Firebase", "Figma"],
        },
        {
          name: "Bookmark-ER",
          link: "http://arinze19.github.io",
          description: "A simple bookmark application for bookmarking interesting links you'd like to visit again as opposed to keeping open tabs in your browser. this is a project originally built to strengthen my knowledge on localStorage api",
          tools: ["localStorage API", "Fetch API", "Vanilla JavaScript"]
        },
        {
          name: "Coach-E",
          link: "https://vue-http-998df.firebaseapp.com",
          description: "An online repository where beginners in tech can easily connect with mentors and boost their careers through 1-on-1 mentorship training - idea culled from thinkful.com and exercism.io",
          tools: ["Fetch API", "Firebase", "Vue"] 
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
  height: 100%;
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