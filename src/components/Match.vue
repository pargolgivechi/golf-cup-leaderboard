<template>
  <div id="match">
    <div class="match-box">
      <div :class="[user.team == 1 ? (match.match.winning_team == user.team ? 'player-1 winner' : 'player-1') : (match.match.winning_team == user.team ? 'player-2 winner' : 'player-2')]" v-for="(user, i) in match.users" :key="i">
        <img :src="user.images[0].default" alt="">
        <span class="name-tag" >{{user.first_name}} {{user.last_name}}</span>
        <span class="win-tag" v-if="match.match.winning_team == user.team">WIN</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class Match extends Vue {
  @Prop() public match!: object;
}
</script>

<style lang="scss">
  #match {
    .match-box {
      color: rgb(120,120,120);
      margin-bottom: 10px;
      font-size: 17px;
    }

    .player-1 {
      background-color: #ffffff;
      border-radius: 25px 0 0 25px;
      width: 50%;
      height: 60px;
      display: inline-block;
      text-align: left;
      position: relative;

      .name-tag {
        position: absolute;
        top: 15px;
        left: 70px;
      }

      img {
        border-radius: 40px;
        width: 35px;
        position: absolute;
        top: 12px;
        left: 20px;
      }

      .win-tag {
        position: absolute;
        top: 15px;
        right: 15px;
      }
    }

    .player-2 {
      background-color: #ffffff;
      border-radius: 0 25px 25px 0;
      width: 50%;
      height: 60px;
      display: inline-block;
      text-align: right;
      position: relative;

      .name-tag {
        position: absolute;
        top: 15px;
        right: 70px;
      }

      img {
        border-radius: 40px;
        width: 35px;
        position: absolute;
        top: 12px;
        right: 20px;
      }

      .win-tag {
        position: absolute;
        top: 15px;
        left: 15px;
      }
    }

    .winner {
      background-color: #007BFF;
      color: #ffffff;
    }
  }
</style>
