import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Void[()]", "img/projects/Void_Cover.gif", 
    `
    <div class="paragraph">
     目前正在开发中，<strong>Void[()]</strong>是一款有着独特视觉风格的开放时间冒险游戏。玩家需要在一块黑白并完全由生物构成的大陆冒险探索，在独特的冒险中邂逅各种外貌奇特可爱的生物。
    </div>
    <div class="paragraph">
     <strong>Void[()]</strong>是USC Games的MFA项目，项目使用Unity搭建，我目前在项目中担任TA与程序。
    </div>
    <div class="paragraph-image center">
      <img src="img/projects/Void_1.png" alt="Void Screenshot" /> 
    </div>

    <div class="paragraph">
        我在其中负责的目前正在已完成/尚在开发中的部分有：
        <ul>
        <li>生物眼睛Shader</li>
        <video controls class="responsive-video">
          <source src="video/Void_EyeShader.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <li>风格化水体Shader</li>
        <video controls class="responsive-video">
          <source src="video/Void_Water.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        
        <li>空中眼睛跟随玩家的逻辑以及Shader的开发（开发中）</li>
        <video controls class="responsive-video">
          <source src="video/Void_Eye.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <li>通过3D SDF模拟浮空液体的效果（开发中）</li>
        <video controls class="responsive-video">
          <source src="video/Void_SDF.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        </ul>
    </div>
    `, "#383838", true),
    new ProjectData("project-2", "Lucidmare", "img/projects/Lucidmare_Cover.gif", `
    <div class="paragraph">
        目前正在开发中，<strong>Lucidmare</strong>是一款恐怖生存游戏。玩家需要不断在通过梦境重返自己曾经因为意外焚毁的房子，寻找杀死自己妻女的火灾发生背后的真相。
    </div>
    <div class="paragraph">
        <strong>Lucidmare</strong>是学校的课程项目，项目使用Unity搭建，课程内容为两人合作模拟游戏从立项到开发的全过程，我主要负责其中的一部分游戏逻辑，机制功能，设计关卡&光照，以及Shader的编写。
    </div>
    <div class="paragraph center">
        <video controls class="responsive-video">
          <source src="video/Lucidmare.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>

    <div class="paragraph">
        主要内容 :
        <ul>
        <li>通过Cinemachine搭建了一套fps风格的玩家控制器，并可以在不同的敌人与玩家之间的视角切换。</li>
        <li>通过模板剔除实现了部分物体的可见性控制，实现了敌人以及部分物体仅在手电筒照射下可见。</li>
        <li>搭建了探索部分的可互动物体的UI逻辑，并配合实现了场景中怪物的AI逻辑。</li>
        </ul>
    </div>

    <div class="paragraph">
    <!-- 
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div> -->
    `, "#5a78af"),
    new ProjectData("project-3", "Klein Battle", "img/projects/Chess_Cover.gif", `
    <div class="paragraph">
        目前仍在开发中，<strong>Klein Battle</strong>是一款SRPG游戏。玩家需要扮演一位失忆的士兵，从一片大陆的最南方向北返回自己仅存的部分记忆中的家乡。
        游戏中的战斗将由卡牌驱动，卡牌作为玩家可以进行的行动的同时也是玩家的进行行动的消耗。
    </div>
    <div class="paragraph">
        项目使用unity搭建，大学本科期间学习unity搭建的小游戏项目，程序，策划，美术以及相关的2D骨骼动画都由我一个人完成。
    </div>
    <div class="paragraph-image center">
      <img src="img/projects/TBRE_CardsSample.png" alt="Klein Battle Screenshot" /> 
    </div>

    <div class="paragraph">
        目前正在已完成的部分有：
        <ul>
        <li>将xlsx数据转换成中间态数据，通过id动态生成卡牌。</li>
        <li>基于格子与卡牌的回合制战斗系统，玩家可以通过消耗卡牌在角色回合中执行不同的行动。</li>
        <video controls class="responsive-video">
          <source src="video/TBRE_Action_Sample.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <li>角色根据速度在时间轴上排布依次进行行动。</li>
        <video controls class="responsive-video">
          <source src="video/TBRE_Turn_Sample.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        </ul>
    </div>
    `, "#23bd69"),
    new ProjectData("project-4", "Ludum Dare Jam", "img/projects/LD_Cover.gif", `
    <div class="paragraph">
    以下这些是我近几年和朋友们一起参与Lumdare Dare所产出的一系列小游戏项目。由于是Game Jam作品，我们并没有特别明确的分工，因此在这些项目中代码，特效，以及策划等方面都有我的参与。
    </div>
    
    <div class="paragraph">
        WebGL打包的版本可以在itch.io上直接游玩：
        <ul>
        <li>Ludum Dare 56: Formuroll</li>
        <iframe frameborder="0" src="https://itch.io/embed/3024944" width="552" height="167">
        <a href="https://jk15162428.itch.io/formuroll">Formuroll by Utopia, MMMIU, Tunicata</a>
        </iframe>
        <li>Ludum Dare 56: Summon Shapes</li>
        <iframe frameborder="0" src="https://itch.io/embed/2648964" width="552" height="167">
        <a href="https://yifeimiao.itch.io/summon-shapes">Summon Shapes by MMMIU, YichuWu, SezFruila, Tunicata, Utopia, Loria</a>
        </iframe>
        <li>Ludum Dare 56: Work Space</li>
        <iframe frameborder="0" src="https://itch.io/embed/2295088" width="552" height="167">
        <a href="https://tunicata.itch.io/work-space">Work Space by Tunicata, MMMIU, Utopia, Meowdy, Loria</a>
        </iframe>
        </ul>
    </div>
    `, "#1ca1e2"),
    new ProjectData("project-5", "Myth of Lumi", "img/projects/Lumi_Cover.gif", `
    <div class="paragraph">
        目前正在开发中，<strong>Myth of Lumi</strong>是一款回合制卡牌战斗游戏。游戏的战斗类似Splatoon，玩家需要从手中丢出手牌尝试占领桌面上更多的空间。
        在战斗过程中，一些卡牌上会附带一种神奇的生物Lumi，玩家可以通过进入Lumi世界，在自己占领的桌面空间上移动，并释放各式各样的技能为玩家带来优势。
    </div>
    <div class="paragraph">
        <strong>Myth of Lumi</strong>是USC Games的AGP项目，项目使用Unity搭建。我目前在项目中担任程序组的一员，同时并负责一些与渲染相关的内容。
    </div>
    <div class="paragraph center">
        <video controls class="responsive-video">
          <source src="video/Lumi_Battle_Sample.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
    
    <div class="paragraph">
        我在其中主要参与了：
        <ul>
        <li>地盘争夺战中的摄像机相关的模块的开发，Lumi移动的部分逻辑，牌库以及抽卡相关的逻辑，Lumi生成的数据管理等Gameplay逻辑的开发。</li>
        <li>负责编写或给出一系列“偏图形”一些的解决方案：3D视角下的Lumi Decal，如何重现一些概念图上的视觉风格，以及一个未来将会用于收集Lumi的迷雾机制。</li>
    <div class="paragraph center">
        <video controls class="responsive-video">
          <source src="video/Lumi_Fog_Of_War.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
        </ul>
    </div>
    `, "#c10606", true),
    new ProjectData("project-6", "Laser Mage", "img/projects/Laser_Cover.gif", `
    <div class="paragraph">
        <strong>Laser Mage</strong>是一款开放解谜游戏，玩家需要通过组合使用不同的棱镜来折射小魔法师所发射的魔法射线，精准的同时击败场景内的所有敌人。
    </div>
    <div class="paragraph">
        项目使用unity搭建，大学本科期间学习unity搭建的小游戏项目。简笔画小游戏配上自动生成的关卡。
    </div>
    <div class="paragraph center">
        <video controls class="responsive-video">
          <source src="video/Laser_Mage.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
    `, "#e48246"),
    new ProjectData("project-7", "Dungeon in a Rubiks Cube", "img/projects/RubiksCube.gif", `
    <div class="paragraph">
    <div class="paragraph">
        <strong>Dungeon in a Rubiks Cube</strong>是一款开放解谜游戏，玩家控制的小熊身处一个巨大的魔方空间当中，玩家需要控制小熊小心的扭转空间，尽可能收集所有的星星并成功抵达终点。
    </div>
    <div class="paragraph">
        项目使用unity搭建，大学本科期间学习unity搭建的小游戏项目。
    </div>
    <div class="paragraph center">
        <video controls class="responsive-video">
          <source src="video/Rubik.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
    `, "#e80fb7")
];