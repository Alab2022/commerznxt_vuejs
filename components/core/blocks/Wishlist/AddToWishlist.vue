<template>
  <button @click="isOnWishlist ? removeProductFromWhishList(product) : addProductToWhishlist(product)" type="button" class="btn btn-secondary" data-testid="addToWishlist">
    <slot>
      <i :class="['bi ',isOnWishlist?'bi-heart-fill active':'bi-heart' ]" />
    </slot>
  </button>
</template>

<script>
import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'
import { AddToWishlist } from '@vue-storefront/core/modules/wishlist/components/AddToWishlist'
import { RemoveFromWishlist } from '@vue-storefront/core/modules/wishlist/components/RemoveFromWishlist'
import i18n from '@vue-storefront/i18n'
import { htmlDecode } from '@vue-storefront/core/lib/store/filters'

export default {
  mixins: [ IsOnWishlist, AddToWishlist, RemoveFromWishlist ],
  computed: {
    favoriteIcon () {
      return this.isOnWishlist ? 'favorite' : 'favorite_border'
    }
  },
  methods: {
    addProductToWhishlist (product) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message: i18n.t('Product {productName} has been added to wishlist!', { productName: htmlDecode(product.name) }),
        action1: { label: i18n.t('OK') }
      }, { root: true })
      this.addToWishlist(product)
    },
    removeProductFromWhishList (product) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message: i18n.t('Product {productName} has been removed from wishlist!', { productName: htmlDecode(product.name) }),
        action1: { label: i18n.t('OK') }
      }, { root: true })
      this.removeFromWishlist(product)
    }
  }
}
</script>
<style lang="css" scoped>
.bi.active{
  color: #F05A28 !important;
}
</style>
