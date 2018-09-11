<template>
  <div class='spinner-wrapper'>
    <img v-if='color == "white"' 
      src="~@images/loading_white.svg"
      :width='size' :height="size">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Blank extends Vue {
  @Prop() color: string;
  @Prop({ default: 25 })
  size: number;
}
</script>

<style lang="scss" scoped>
</style>
