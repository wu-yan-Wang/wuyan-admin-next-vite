import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    let title=ref("wu-yan");
    return () => <div class>
     <div><a>{title.value}</a></div>
    </div>
  }
})
