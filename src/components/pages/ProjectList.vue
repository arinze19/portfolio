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
import ProjectItem from '../lists/ProjectItem.vue';

export default {
  components: { ProjectItem },
  data() {
    return {
      projects: [
        {
          name: 'Octane',
          link: 'https://arinze19.github.io/TOP-React-project-4/',
          description:
            'Fully functional Fullstack JavaScript e-commerce application with templating email and cross border payment support(Demo) accross 15 countries ',
          tools: ['React', 'Redux', 'NodeJS', 'MongoDB', 'Figma'],
        },
        {
          name: 'Velocity meet',
          link: 'https://velocity-meet.netlify.app',
          description:
            'Video conferencing software enabling peer-to-peer connection over low latency bandwidth without significant effect on quality of the media stream.',
          tools: ['NodeJS', 'SocketIO', 'Vue'],
        },
        {
          name: 'Pokemon Memo',
          link: 'https://arinze19.github.io/TOP-React-project-3/',
          description:
            'Interactive Pokemon inspired Memory card game with 41 active players from 4 continents. Idea from The odin project.',
          tools: ['React'],
        },
        {
          name: 'Bookmark-ER',
          link: 'http://arinze19.github.io/bookmark-er',
          description:
            "Browser based application for storing links you'd like to visit later. Eliminating the need to always have multiple tabs open at once. leverages localStorage API to keep bookmarks saved to the local machine",
          tools: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          name: 'Fast-CV',
          link: 'https://arinze19.github.io/TOP-React-project-2',
          description:
            "A CV generator that creates beautifully crafted CV's that convert in  minutes.",
          tools: ['React'],
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
