<template>
  <div id='app' @click='closePopups()'>
    <HeaderComponent/>
    <div class='rootView'>
      <router-view />
    </div>

    <Notifications/>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { EventBus } from "@services";
import { Notifications, HeaderComponent } from "@components";

@Component({
  components: {
    HeaderComponent,
    Notifications,
  },
})
export default class App extends Vue {
  // Class created
  created() {
    // close popups when resizing window
    window.addEventListener("resize", () => {
      EventBus.$emit("closePopups");
    });
  }

  closePopups() {
    // A click outside any popup close all popups
    EventBus.$emit("closePopups");
  }
}
</script>


<style lang='scss' scoped>
#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .loader-login {
    display: flex;
    height: 100%;
    width: 100%;
    color: $g60;
    font-weight: bold;
    font-size: 20px;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    .img {
      margin-bottom: 20px;
    }
  }

  .rootView {
    position: absolute;
    flex-flow: row nowrap;
    left: 0;
    top: $headerHeight;
    width: 100%;
    height: 100%;
    min-height: calc(100% - #{$headerHeight});
  }
}
</style>