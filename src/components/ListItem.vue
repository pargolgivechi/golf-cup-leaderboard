<template>
  <div id="list-item">
    <div style="padding: 0 10px 10px 10px; cursor: pointer" v-on:click="isHidden = !isHidden; isActive = !isActive;">
      <span class="round-title">{{round.name.toUpperCase()}}</span>
      <span class="round-end-time" style="">
        {{round.ending_at}} <i class="arrow " :class="{up: isActive, down: !isActive}"></i>
      </span>
    </div>
    <div style="height: 1px; background-color: rgb(51 51 51 / 14%); margin-top: 40px;"></div>
    <div class="result-box" v-if="!isHidden">
      <Matches :id="round.id" :roundName="round.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Matches from '@/components/Matches.vue'

@Component({
  components: {
    Matches
  }
})

export default class ListItem extends Vue {
  @Prop() public round!: object;
  public isHidden = true;
  public isActive = false;
}
</script>

<style lang="scss">
  #list-item {
    padding: 20px 20px 0 20px;
    font-weight: bold;

    .round-title {
      float: left;
      color: grey;
      filter: brightness(80%)
    }

    .round-end-time {
      float: right;
      color: grey;
      filter: brightness(118%);
    }

    .arrow {
      border: solid #333;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 4px;
    }

    .up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    .down {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    i {
      margin-right: 5px;
      margin-left: 15px;
    }

    .result-box {
      clear: both;
      padding: 20px 0 20px 0;
    }
  }
</style>
