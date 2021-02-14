<template>
  <div>
    <div class="project-container">
      <project-item
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :tools="project.tools"
        :link="project.link"
      ></project-item>
    </div>
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
          description:
            "A simple bookmark application for bookmarking interesting links you'd like to visit again as opposed to keeping open tabs in your browser. this is a project originally built to strengthen my knowledge on localStorage api",
          tools: ["localStorage API", "Fetch API", "Vanilla JavaScript"],
        },
        {
          name: "Coach-E",
          link: "https://vue-http-998df.firebaseapp.com",
          description:
            "An online repository where beginners in tech can easily connect with mentors and boost their careers through 1-on-1 mentorship training - idea culled from thinkful.com and exercism.io",
          tools: ["Fetch API", "Firebase", "Vue"],
        },
        {
          name: "Cold Drums",
          link: "https://arinze19.github.io/colddrumkit.html",
          description:
            "coldplay inspired drum kit application. part of wes bos' JavaScript30 challenge",
          tools: ["Vanilla JavaScript"],
        },
        {
          name: "velocity meet",
          link: "https://velocity-meet.netlify.app",
          description: "a simple zoom inspired video and audio conferencing software developed to enhance peer-to-peer video meetings due to the pandemic.",
          tools: ["PeerJS", "NodeJS", "SocketIO", "Vue","Axios"]
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
  width: 90%;
  margin: 0 auto;
  height: 100%;
  max-width: 900px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .project-container {
    width: 95%;
    margin: 0 auto;
    display: block;
  }
}
</style>