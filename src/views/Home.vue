<script lang="js">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  title = 'hello';
  render() {
    return (
      <div class="mainPanel-root">
        <span>{this.title}</span>
        <router-link to='/eke'>error</router-link>
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
div.mainPanel-root {
  height: 100%;
  width: 100%;
  color: red;
}
</style>
