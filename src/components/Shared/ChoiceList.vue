<template>
  <ul class='itemList flex'>
    <li class='item flex' 
      v-for='item of items'
      :key='item.id'
      @click="selectItem(item)"
      :class='{selected: item.id === itemSelected.id }'>
      <img v-if='item.id === itemSelected.id' src="~@icons/selected.svg" class="item_selected">
      <span :class='{little}'>{{item.label}}</span>
    </li>
  </ul>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ChoiceList extends Vue {
  @Prop() items!: Array<any>;
  @Prop() itemSelected!: any;
  @Prop() little: boolean;

  selectItem(item) {
    this.$emit('select', item);
  }
}
</script>



<style lang="scss" scoped>
ul.itemList {
  flex-flow: column wrap;
  width: 100%;
  overflow: hidden;

  li.item {
    justify-content: center;
    height: 45px;
    justify-content: center;
    align-items: center;
    color: $g90;
    font-weight: bold;
    font-size: 22px;
    // font-style: italic;
    border-bottom: 1px solid $w240;
    cursor: pointer;

    span.little {
      font-size: 16px;
      // font-weight: normal;
    }

    img.item_selected {
      position: absolute;
      left: 5px;
      // margin-right: 5px;
    }

    &:last-child {
      border: none;
    }

    &.selected {
      // background-color: $w230;
      cursor: default;
    }

    &:not(.selected):hover {
      background-color: $w240;
    }
  }
}
</style>
