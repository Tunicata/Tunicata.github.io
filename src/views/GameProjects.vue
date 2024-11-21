<template>
  <div>
    <h1>游戏项目</h1>

    <div style="margin-bottom: 30px;">
      这是我曾经主要参与过的游戏项目：
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      更多游戏可以查看我的<a target="_blank" href="https://tunicata.itch.io/">itch.io</a>页面
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
