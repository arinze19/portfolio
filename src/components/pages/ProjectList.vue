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
          name: "velocity meet",
          link: "https://velocity-meet.netlify.app",
          description:
            "Video conferencing software enabling peer-to-peer connection over low latency bandwidth without significant effect on quality of the media stream.",
          tools: ["PeerJS", "NodeJS", "SocketIO", "Vue", "Axios"],
        },
        {
          name: "Selfish Twenty's",
          link: "https://selfish-twentys.netlify.app",
          description:
            "E-commerce site[Demo] for Urban wears startup brand selfish-twentys. Complete with authentication and checkout functionalities.",
          tools: ["Vue", "Firebase", "Figma"],
        },
        {
          name: "Pokemon Memo",
          link: "https://pokemon-memo.netlify.app",
          description:
            "Interactive Pokemon inspired Memory card game with 41 active players from 4 continents. Idea from The odin project.",
          tools: ["React", "Pokemon API"],
        },
        {
          name: "Bookmark-ER",
          link: "http://arinze19.github.io",
          description:
            "Browser based application for storing links you'd like to visit later. Eliminating the need to always have multiple tabs open at once. leverages localStorage API to keep bookmarks saved to the local machine",
          tools: ["localStorage API", "Fetch API", "Vanilla JavaScript"],
        },
        {
          name: "Fast-CV",
          link: "https://arinze19.github.io/TOP-React-project-2",
          description:
            "A CV generator that creates beautifully crafted CV's that convert in  minutes.",
          tools: ["React"],
        },
        {
          name: "Coach-E",
          link: "https://vue-http-998df.firebaseapp.com",
          description:
            "online repository where tech newbies can connect with mentors in the software industry to better enhance their learning, skyrocket their career path and avoid tutorial hell. complete with authentication and sessions",
          tools: ["Fetch API", "Firebase", "Vue"],
        },
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