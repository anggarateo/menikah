export { default as Header } from '../../components/Header.vue'
export { default as Page } from '../../components/Page.vue'
export { default as PageDua } from '../../components/page/Dua.vue'
export { default as PageEmpat } from '../../components/page/Empat.vue'
export { default as PageSatu } from '../../components/page/Satu.vue'
export { default as PageTiga } from '../../components/page/Tiga.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
