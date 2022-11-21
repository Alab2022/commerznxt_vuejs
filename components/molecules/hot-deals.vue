<template>
  <section class="container-fluid mt-3">
    <div class="site-wrapper">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12 custom-pdd">
          <div class="inner-header mb-4">
            <h4 class="inner-heading">
              Hot Deals
            </h4>
          </div>

          <div class="hotdeals position-relative">
            <span class="badge_onsale">On Sale</span>
            <div class="hot_title">
              <div style="width: 80%;">
                <h1>Mask &amp; Gloves</h1>
                <h2>during pandemic</h2>
              </div>
              <buttons type="button" class="btn_proceed">
                <i class="bi bi-chevron-right" />
              </buttons>
            </div>
            <div class="img-gradient">
              <img src="assets/gr-banner.png" alt="">
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-12 col-sm-12">
          <carousel
            :slides-per-view="2"
            :space-between="0"
            :loop="true"
            :navigation="true"
            :pagination="settingsOurProducts.pagination"
            title="Deal Of the day"
          >
            <swiper-slide v-for="(product, i) in carouselProducts" :key="i">
              <Product-list-group
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
    </div>
  </section>
</template>
<script>

// import SfCarousel from 'theme/components/storeui/components/organisms/SfCarousel/SfCarousel'
import SfProductCard from 'theme/components/storeui/components/organisms/SfProductCard/SfProductCard'

import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Carousel, SwiperSlide } from 'theme/components/custom/swiper'

import { htmlDecode } from '@vue-storefront/core/filters';
import ProductListGroup from 'theme/components/molecules/product-list-group';
import config from 'config';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import { formatProductLink } from '@vue-storefront/core/modules/url/helpers';
import { productThumbnailPath } from '@vue-storefront/core/helpers';
import { prepareCategoryProduct } from 'theme/helpers';
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default {
  name: 'HotDeals',
  components: {
    Carousel,
    SwiperSlide,
    SfProductCard,
    ProductListGroup
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
.inner-header {
    width: 86%;
}
.badge_onsale {
    width: 116px;
    height: 77px;
    background-color: #F05A28;
    position: absolute;
    top: 0;
    text-align: center;
    line-height: 77px;
    color: #fff;
    right: 30px;
    z-index: 5;
}
.hot_title {
    position: absolute;
    bottom: 40px;
    z-index: 5;
    color: #fff;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
.btn_proceed {
    width: 50px!important;
    height: 45px!important;
    border-radius: 10px;
    background: #fff!important;
    color: #1C67A8;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    transition: 0.5s;
}
.img-gradient {
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: auto;
}
.img-gradient img {
    display: block;
    width: 100%;
}
 .img-gradient:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: -moz-linear-gradient(top, rgba(0,47,75,0) 0%, #F05A28 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#F05A28), color-stop(100%,rgba(0,47,75,0.5))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0,47,75,0) 0%,#F05A28 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0,47,75,0) 0%,#F05A28 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(0,47,75,0) 0%,#F05A28 100%); /* IE10+ */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,#F05A28 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }
</style>
