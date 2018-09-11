<template>
  <div class='popup-root'>
    <div ref='popup' class="popup-box"
      v-show='show'
      @click.stop
      :style='getWidth' 
      :class='[PopupXYTypes.XType,PopupXYTypes.YType,{active: show}]'>
        <div class='triangle up' v-if='show'
          :class='[
            PopupXYTypes.XType,
            PopupXYTypes.YType,
            {active: show}
          ]'></div>
        <div class='popup-wrapper'>
          <slot name='popup' />
        </div>
    </div>
    <div class='button-popup' 
        @click.stop="togglePopup()"
        :class='{active: show}'
        ref='button'>
      <slot name='button' />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

import { EventBus, Events } from '@services';
import { calculatePopupRelativePosition } from '@methods';

@Component({})
export default class Popup extends Vue {
  @Prop() width: number;
  @Prop({ required: false })
  container: HTMLElement;

  public show: boolean = false;

  public PopupXYTypes = {
    XType: null,
    YType: null,
  };
  get getWidth() {
    if (!this.width) return;
    return { width: this.width + 'px' };
  }

  togglePopup() {
    if (!this.show) {
      const origin: any = this.$refs['button'];
      const target: any = this.$refs['popup'];
      const Types = calculatePopupRelativePosition(origin, target);
      this.PopupXYTypes = Types;
      EventBus.$emit(Events.CLOSE_POPUPS, this);
      this.show = true;
      this.$emit('open');
    } else {
      this.show = false;
      this.$emit('close');
    }
  }

  created() {
    EventBus.$on(Events.CLOSE_POPUPS, (element?) => {
      if (element !== this && this.show) {
        this.show = false;
        this.$emit('close');
      }
    });
  }

  destroyed() {
    EventBus.$off(Events.CLOSE_POPUPS);
  }
}
</script>



<style lang='scss' scoped>
.popup-root {
  position: relative;
  height: 100%;

  .popup-box {
    position: absolute;
    display: flex;
    align-items: stretch;
    background-color: white;
    top: calc(100% + 15px);
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.2);
    height: auto;
    min-height: 50px;
    min-width: 50px;
    width: auto;
    max-height: 80vh;
    max-width: 80vw;
    flex-flow: row nowrap;
    z-index: 10011;

    .centerContent {
      display: flex;
      flex-flow: row nowrap;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
    }

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    div.popup-wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    div.header {
      display: flex;
      flex-flow: column wrap;
      flex: 0 0 auto;
      height: 40px;
      padding-left: 10px;
      font-weight: bold;
      justify-content: center;
      border-bottom: 1px solid $w230;
    }

    div.content {
      display: flex;
      flex-flow: column wrap;
      flex: 1 1 auto;
      overflow: auto;
      padding: 10px;
    }

    div.footer {
      display: flex;
      flex-flow: row nowrap;
      flex: 0 0 auto;
      padding: 5px;
      height: 50px;
      align-items: center;
      align-content: center;
      justify-content: flex-end;
    }
  }

  $triangleSize: 13px;
  $triangleColor: #fff;

  .triangle {
    position: absolute;
    z-index: 10009;
    width: 0;
    height: 0;
    border-left: $triangleSize solid transparent;
    border-right: $triangleSize solid transparent;
    border-top: $triangleSize solid $triangleColor;
    filter: drop-shadow(0px -6px 4px rgba(50, 50, 50, 0.1));

    &.up {
      border-bottom: $triangleSize solid $triangleColor;
      border-top: $triangleSize solid transparent;
    }

    &.left {
      left: 10px;
    }

    &.bottom {
      bottom: 100%;
    }
    &.top {
      top: 100%;
    }
    &.right {
      right: 5px;
    }
    &.center {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .button-popup {
    display: flex;
    height: 100%;
  }
}
</style>

