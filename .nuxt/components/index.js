export { default as ButtonTwButton } from '../../components/button/tw-button.vue'
export { default as IconTwIcon } from '../../components/icon/tw-icon.vue'
export { default as CardsTwContentCard } from '../../components/cards/tw-content-card.vue'
export { default as CardsTwExploreCard } from '../../components/cards/tw-explore-card.vue'
export { default as CardsTwNotificationCountCard } from '../../components/cards/tw-notification-count-card.vue'
export { default as CardsTwShareTweetsCard } from '../../components/cards/tw-share-tweets-card.vue'
export { default as CardsTwUserCard } from '../../components/cards/tw-user-card.vue'
export { default as CardsTwWhoToFollowCard } from '../../components/cards/tw-who-to-follow-card.vue'
export { default as ImageTwImageCard } from '../../components/image/tw-image-card.vue'
export { default as LeftSidebarTwLeftSidebar } from '../../components/leftSidebar/tw-left-sidebar.vue'
export { default as LinkTwLink } from '../../components/link/tw-link.vue'
export { default as ProgressBarTwEllipseProgress } from '../../components/progress-bar/tw-ellipse-progress.vue'
export { default as RightSidebarTwRightSidebar } from '../../components/rightSidebar/tw-right-sidebar.vue'
export { default as TextFieldTwTextField } from '../../components/text-field/tw-text-field.vue'

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
