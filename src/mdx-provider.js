export default {
  props: {
    components: Object,
    required: true
  },
  provide() {
    return {
      $mdxComponents: () => this.components
    };
  },
  render(h) {
    return h('div', this.$slots.default);
  }
};
