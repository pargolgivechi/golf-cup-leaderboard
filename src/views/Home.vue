<template>
  <div id="home-page">
    <div class="list-box">
      <ListItem v-for="(round, i) in rounds" :key="i" :round="round" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import ListItem from '@/components/ListItem.vue'

@Component({
  components: {
    ListItem
  },
  computed: mapState([
    'rounds'
  ])
})

export default class Home extends Vue {
  public rounds!: Array<object>;

  mounted () {
    this.$store.dispatch('getRounds')
  }
}
</script>

<style lang="scss">
#home-page{
  width: 80%;
  margin: auto;

  .list-box {
    width: 75%;
    margin: 10% auto;
    background-color: #d3d3d3;
    filter: brightness(119%);
  }
}
</style>
