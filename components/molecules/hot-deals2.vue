<template>
  <section>
    <div class="site-wrapper">
      <div class="our-ft-pdts mt-4">
        <SfCarousel
          class="m-product-carousel"
          :settings="{
            animationDuration: 2000,
            rewindDuration: 2000
          }"
          title="Deal Of the day"
        >
          <SfCarouselItem v-for="(product, i) in carouselProducts" :key="i">
            <Product-card
              :title="product.title"
              :original-price="product.originalPrice"
              :price="product.price"
              :rating="product.rating"
              :image="product.image"
            />
          </sfcarouselitem>
          <!-- <SfCarouselItem v-for="(product, i) in carouselProducts" :key="i">
        <SfProductCard
          :title="product.title"
          :image="product.image"
          :regular-price="product.price.regular"
          :special-price="product.price.special"
          :max-rating="product.rating.max"
          :score-rating="product.rating.score"
          :link="product.link"
          :wishlist-icon="false"
          link-tag="router-link"
        />
      </SfCarouselItem> -->
        </SfCarousel>
      </div>
    </div>
  </section>
</template>
<script>

import SfCarousel from 'theme/components/storeui/components/organisms/SfCarousel/SfCarousel'
import SfProductCard from 'theme/components/storeui/components/organisms/SfProductCard/SfProductCard'

import { htmlDecode } from '@vue-storefront/core/filters';
import ProductCard from 'theme/components/molecules/product-card';
import config from 'config';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import { formatProductLink } from '@vue-storefront/core/modules/url/helpers';
import { productThumbnailPath } from '@vue-storefront/core/helpers';
import { prepareCategoryProduct } from 'theme/helpers';
export default {
  name: 'HotDeals',
  components: {
    SfCarousel,
    SfProductCard,
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // carouselProducts () {
    //   return this.products.map(prepareCategoryProduct);
    // }
    carouselProducts () {
      return [{
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list3.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list4.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list5.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list1.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list2.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list4.png'
      },
      {
        title: 'Full Sleeve Solid Men Jack',
        originalPrice: '€4300',
        price: '€2388',
        rating: 3,
        image: '/assets/product/list3.png'
      }
      ]
    }
  }
};
</script>
<style lang="css" scoped>

</style>
