import { defineComponent, ref } from 'vue'
import './index.less'
export default defineComponent({
  props: {},
  setup() {
    let title = ref('wu-yan')
    const Logo = () => (
      <div class=" wu-logo">
        <a>{title.value}</a>
      </div>
    )
    const Menu=()=>();
    return () => (
      <div class="wu-flex wu-header">
        <Logo></Logo>
        <div></div>
      </div>
    )
  }
})