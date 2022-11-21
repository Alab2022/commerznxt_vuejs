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
          title="Trending Products"
        >
          <swiper-slide v-for="(product, i) in carouselProducts" :key="i">
            <Product-list-card
              :title="product.title"
              :original-price="product.originalPrice"
              :price="product.price"
              :rating="product.rating"
              :image="product.image"
            />
          </swiper-slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>

import SfProductCard from 'theme/components/storeui/components/organisms/SfProductCard/SfProductCard'

import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Carousel, SwiperSlide } from 'theme/components/custom/swiper'

import { htmlDecode } from '@vue-storefront/core/filters';
import ProductListCard from 'theme/components/molecules/product-list-card';
import config from 'config';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import { formatProductLink } from '@vue-storefront/core/modules/url/helpers';
import { productThumbnailPath } from '@vue-storefront/core/helpers';
import { prepareCategoryProduct } from 'theme/helpers';
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
  name: 'Trending',
  components: {
    Carousel,
    SwiperSlide,
    ProductListCard
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
