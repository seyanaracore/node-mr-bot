import { NPopconfirm, popconfirmProps } from 'naive-ui'
import { defineComponent, h } from 'vue'
import Skala from '@/assets/images/skala.webp'

const SkalaConfirm = defineComponent({
  props: popconfirmProps,
  setup(props, { slots }) {
    return () => h(NPopconfirm, props, { default: () => h('img', { src: Skala, width: '200' }), ...slots })
  },
})

export default SkalaConfirm
