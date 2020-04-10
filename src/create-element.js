export default function(type, props, children) {
  const h = this.vueCreateElement
  return h(type, props, children)
}
