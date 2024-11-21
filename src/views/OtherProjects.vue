<template>
  <div>
    <h1>图形项目</h1>

    <div style="margin-bottom: 30px;">
      以及这是我参与的一些图形相关的项目，他们可能并不是完整的游戏项目，但也非常有趣。
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
