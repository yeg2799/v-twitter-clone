export const CardsTwContentCard = () => import('../../components/cards/tw-content-card.vue' /* webpackChunkName: "components/cards-tw-content-card" */).then(c => wrapFunctional(c.default || c))
export const CardsTwExploreCard = () => import('../../components/cards/tw-explore-card.vue' /* webpackChunkName: "components/cards-tw-explore-card" */).then(c => wrapFunctional(c.default || c))
export const CardsTwNotificationCountCard = () => import('../../components/cards/tw-notification-count-card.vue' /* webpackChunkName: "components/cards-tw-notification-count-card" */).then(c => wrapFunctional(c.default || c))
export const CardsTwShareTweetsCard = () => import('../../components/cards/tw-share-tweets-card.vue' /* webpackChunkName: "components/cards-tw-share-tweets-card" */).then(c => wrapFunctional(c.default || c))
export const CardsTwUserCard = () => import('../../components/cards/tw-user-card.vue' /* webpackChunkName: "components/cards-tw-user-card" */).then(c => wrapFunctional(c.default || c))
export const CardsTwWhoToFollowCard = () => import('../../components/cards/tw-who-to-follow-card.vue' /* webpackChunkName: "components/cards-tw-who-to-follow-card" */).then(c => wrapFunctional(c.default || c))
export const ImageTwImageCard = () => import('../../components/image/tw-image-card.vue' /* webpackChunkName: "components/image-tw-image-card" */).then(c => wrapFunctional(c.default || c))
export const LinkTwLink = () => import('../../components/link/tw-link.vue' /* webpackChunkName: "components/link-tw-link" */).then(c => wrapFunctional(c.default || c))
export const LeftSidebarTwLeftSidebar = () => import('../../components/leftSidebar/tw-left-sidebar.vue' /* webpackChunkName: "components/left-sidebar-tw-left-sidebar" */).then(c => wrapFunctional(c.default || c))
export const IconTwIcon = () => import('../../components/icon/tw-icon.vue' /* webpackChunkName: "components/icon-tw-icon" */).then(c => wrapFunctional(c.default || c))
export const ProgressBarTwEllipseProgress = () => import('../../components/progress-bar/tw-ellipse-progress.vue' /* webpackChunkName: "components/progress-bar-tw-ellipse-progress" */).then(c => wrapFunctional(c.default || c))
export const RightSidebarTwRightSidebar = () => import('../../components/rightSidebar/tw-right-sidebar.vue' /* webpackChunkName: "components/right-sidebar-tw-right-sidebar" */).then(c => wrapFunctional(c.default || c))
export const ButtonTwButton = () => import('../../components/button/tw-button.vue' /* webpackChunkName: "components/button-tw-button" */).then(c => wrapFunctional(c.default || c))
export const TextFieldTwTextField = () => import('../../components/text-field/tw-text-field.vue' /* webpackChunkName: "components/text-field-tw-text-field" */).then(c => wrapFunctional(c.default || c))

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
