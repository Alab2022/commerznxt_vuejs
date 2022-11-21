<template>
  <section>
    <div class="site-wrapper">
      <div class="our-ft-pdts mt-4">
        <carousel
          :slides-per-view="5"
          :space-between="20"
          :loop="true"
          :navigation="true"
          :pagination="settingsOurProducts.pagination"
          title="Recently Viewed"
        >
          <swiper-slide v-for="(product, i) in carouselProducts" :key="i">
            <Product-card
              :title="product.title"
              :original-price="product.originalPrice"
              :price="product.price"
              :rating="product.rating"
              :image="product.image"
            />
          </swiper-slide>
        </carousel>

        <!-- <SfCarousel
          class="m-product-carousel"
          :settings="{
            animationDuration: 2000,
            rewindDuration: 2000
          }"
          title="Our Featured Products"
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
        </SfCarousel> -->
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
      </div>
    </div>
  </section>
</template>
<script>

// import SfCarousel from 'theme/components/storeui/components/organisms/SfCarousel/SfCarousel'

import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Carousel, SwiperSlide } from 'theme/components/custom/swiper'

import { htmlDecode } from '@vue-storefront/core/filters';
import ProductCard from 'theme/components/molecules/product-card';
import config from 'config';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import { formatProductLink } from '@vue-storefront/core/modules/url/helpers';
import { productThumbnailPath } from '@vue-storefront/core/helpers';
import { prepareCategoryProduct } from 'theme/helpers';
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
  name: 'RecentProduct',
  components: {
    Carousel,
    SwiperSlide,
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      settingsOurProducts: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          clickable: true,
          bulletActiveClass: 'active',
          renderBullet: function (index, className) {
            return '<button class=' + className + ' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide ' + index + '"></button>';
          }
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 16
          }
        },
        autoplay: {
          delay: 2500
        }
      }
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
