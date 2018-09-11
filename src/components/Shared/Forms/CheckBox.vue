<template>
  <div class="checkbox">
    <div class='checkbox-wrap'>
      <input :id='formId' :checked='value' :value='value' @change="updateValue($event.target.checked)" type="checkbox"/>
      <label :for="formId" class='button'></label>
      <span v-if="label">{{label}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import shortid from 'shortid';

@Component({})
export default class CheckBox extends Vue {
  @Prop() value!: any;
  @Prop() label: string;

  private formId: string = null;

  updateValue(value) {
    this.$emit('input', value);
  }

  mounted() {
    this.formId = shortid.generate();
  }
}
</script>



<style lang='scss' scoped>
.checkbox {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 10px 10px 10px 0;
  height: auto;
  // width: 100%;
  @include userselect;

  .checkbox-wrap {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-left: 5px;

    span {
      font-size: 14px;
      font-weight: bold;
      margin-left: 5px;
      color: $g90;
    }

    label.button {
      position: relative;
      height: 17px;
      width: 17px;
      background-color: white;
      border-radius: 3px;
      margin-right: 5px;
      border: 1px solid $w200;
      transition: all 0.3s;
      @include bg-center;
      cursor: pointer;

      &:hover {
        border-color: $green;
      }
    }

    input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      padding: 0;
      margin: 0;

      &:checked + label.button {
        background-color: $green;
        background-image: url('~@icons/Forms/done_white.svg');
        border: 1px solid transparent;

        & ~ span {
          color: $green;
        }
      }
    }
  }
}
</style>

