<template>
  <router-link :to="localizedRoute('/')" :title="$t('Home Page')" class="navbar-brand no-underline inline-flex">
    <img
      :width="width"
      :height="height"
      src="/assets/logo.png"
      :alt="$t(defaultTitle)"
    >
  </router-link>
</template>

<script>
import config from 'config'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

export default {
  data () {
    const storeView = currentStoreView()
    return {
      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config.seo.defaultTitle
    }
  },
  props: {
    width: {
      type: [String, Number],
      required: false
    },
    height: {
      type: [String, Number],
      required: false
    }
  }
}
</script>
