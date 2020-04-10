/**
 * MDX default components
 */
const DEFAULTS = {
  inlineCode: 'code',
  wrapper: 'div'
}

/**
 * Renders final tag/component
 * @param {Vue.Component|String} type Element or tag to render
 * @param {Object|Array} props Props and attributes for element
 * @param {Array} children Array of child nodes for component
 */
export default function(type, props, children) {

  const h = this.createElement
  const components = this.components
  const defaults = Object.keys(DEFAULTS)

  // We check to see if props is of type object. If it is, then we pass them into the MDXContext component
  const _props = typeof props === 'object' ? props : undefined
  
  let tag

  // We check context to see if the element/tag
  // is provided in the MDXProvider context.
  if (Object.keys(components).includes(type)) {
    tag = components[type](_props)

    // Check to see target is included in defaults
  } else if (defaults.includes(type)) {
    tag = DEFAULTS[type]

    // Render final tag if component is not provided in context
  } else {
    tag = type
  }

  return h(tag, props, children)
}
