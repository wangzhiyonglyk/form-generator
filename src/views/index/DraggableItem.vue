<script>

import renderView from '../../components/render/index.vue'

export default {
  components: {
    renderView
  },
  props: [
    'config',
    'index',
    'drawingList',
    'activeId'
  ],
  provide() {
    return {
      onInput: this.onInput
    }
  },
  methods: {
    onInput(value) {
      this.config.attrs.value = value
    }
  },
  render() {
    console.log('config', this.config)
    return <renderView config={this.config} index={this.index} ></renderView>
  }
}
</script>
