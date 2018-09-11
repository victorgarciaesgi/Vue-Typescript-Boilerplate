<template>
  <div class='home'>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MainPanel extends Vue {}
</script>

<style lang="scss" scoped>
div.mainPanel-root {
  height: 100%;
  width: 100%;
}
</style>
