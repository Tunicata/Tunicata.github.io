<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        我是<strong>Tunicata</strong>，一名刚初出茅庐的游戏与渲染开发工程师，在工具开发、渲染和游戏玩法逻辑等方面都有所涉猎。<br/>
        我对游戏开发充满热情。近期由于课程和学校项目的原因，主要使用 Unity 进行游戏玩法的编写；而在过去的实习中，我则大多在使用 UE 开发编辑器功能和渲染方面的内容。<br/>
        我喜欢讨论和阅读游戏行业的技术博客以及文章。新的技术知识总是提醒我还有无数东西需要学习。时至今日，不少上世纪 90 年代的文章，仍让我边读边挠头。
      </div>

      <div style="margin-top: 20px;">我参与过多个<router-link to="/game-projects">游戏项目</router-link>的开发，包括学校的项目、与朋友一起参加的 GameJam，以及一些用于测试功能或学习开发工具的小项目。我也拥有一些游戏和图形相关的实习经历。除了纯粹的游戏开发，我还搭建了一些<router-link to="/other-projects">测试项目</router-link>，用于尝试一些渲染功能以及学习图形 API 的使用。</div>

      <div style="margin-top: 40px;">目前，我正在南加州大学攻读计算机科学游戏开发方向的硕士。如果你想联系我，可以通过glennjiang3216@gmail.com或<router-link to="/contact">其他联系方式</router-link>进行联系。</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Tunicata" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>