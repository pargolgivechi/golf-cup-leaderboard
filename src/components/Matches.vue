<template>
  <div id="matches">
    <div v-if="roundName == 'Preround'">
      <Match v-for="(match, i) in preroundMatches" :key="i" :match="match" />
    </div>
    <div v-else-if="roundName == 'Round of 16'">
      <Match v-for="(match, i) in roundSixteenMatches" :key="i" :match="match" />
    </div>
    <div v-else-if="roundName == 'Quarterfinals'">
      <Match v-for="(match, i) in quarterfinalsMatches" :key="i" :match="match" />
    </div>
    <div v-else-if="roundName == 'Semifinals'">
      <Match v-for="(match, i) in semifinalsMatches" :key="i" :match="match" />
    </div>
    <div v-else>
      <Match v-for="(match, i) in finalMatches" :key="i" :match="match" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Match from '@/components/Match.vue'

@Component({
  components: {
    Match
  },
  computed: mapState([
    'preroundMatches',
    'roundSixteenMatches',
    'quarterfinalsMatches',
    'semifinalsMatches',
    'finalMatches'
  ])
})

export default class Matches extends Vue {
  @Prop() public id!: string;
  @Prop() public roundName!: string;
  public preroundMatches!: Array<object>;
  public roundSixteenMatches!: Array<object>;
  public quarterfinalsMatches!: Array<object>;
  public semifinalsMatches!: Array<object>;
  public finalMatches!: Array<object>;

  mounted () {
    switch (this.roundName) {
      case 'Preround':
        this.$store.dispatch('getPreroundMatches', this.roundName)
        break
      case 'Round of 16':
        this.$store.dispatch('getRoundSixteenMatches', this.roundName)
        break
      case 'Quarterfinals':
        this.$store.dispatch('getQuarterfinalsMatches', this.roundName)
        break
      case 'Semifinals':
        this.$store.dispatch('getSemifinalsMatches', this.roundName)
        break
      default:
        this.$store.dispatch('getFinalMatches', this.roundName)
    }
  }
}
</script>

<style lang="scss">
  #matches {
  }
</style>
