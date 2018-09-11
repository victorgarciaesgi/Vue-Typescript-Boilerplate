<template>
  <div class='header-container'>
    <header>
      Hello Vue
    </header>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderComponent extends Vue {}
</script>



<style lang="scss" scoped>
div.header-container {
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;

  header {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    top: 0px;
    left: 0px;
    height: $headerHeight;
    width: 100%;
    background-color: white;
    z-index: 9000;
    flex-flow: row nowrap;
    box-shadow: 0 0 10px $ombre;

    nav {
      width: 100%;
      flex-flow: row nowrap;
      padding: 0 30px 0 30px;

      .nav-group {
        display: flex;
        position: relative;
        flex: 0 0 auto;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
