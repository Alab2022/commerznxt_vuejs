<template>
  <div>
    <section class="w-100 bg-cl-th-accent cl-white">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :navigation="true"
        :pagination="settingsOurProducts.pagination"
      >
        <swiper-slide
          v-for="(item,i) in currentImage"
          :key="i"
          class="test"
          :class="{test_2: true}"
        >
          <template>
            <div class="cr-content">
              <h1>
                {{ item.title }}
              </h1>
              <p>
                {{ item.subtitle }}
              </p>
              <button type="button" class="btn btn-light secondary-text">
                {{ item.buttonText }}
              </button>
            </div>
            <img
              :src="item.image"
              width="600"
              height="400"
              class="img-fluid w-100 mx-auto"
              blank="true"
            >
          </template>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script>

//  :navigation="settingsOurProducts.navigation"
//         :pagination="settingsOurProducts.pagination"
//         :breakpoints="settingsOurProducts.breakpoints"
//         :autoplay="settingsOurProducts.autoplay"
// import ButtonOutline from 'theme/components/theme/ButtonOutline'
import { mapGetters } from 'vuex'
// import SfHero from 'theme/components/storeui/components/organisms/SfHero/SfHero'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'theme/components/custom/swiper'
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    // SfHero
    // carousel
    // ButtonOutline
    Swiper,
    SwiperSlide
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
  methods: {
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  },
  computed: {
    ...mapGetters({
      currentImage: 'promoted/getHeadImage'
    })
  }
}
</script>

<style lang="scss" scoped>
.head-image {
  position: relative;

  .head-image-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15%;

    .title {
      font-size: 3.4rem;
      margin-bottom: 0;
    }

    .subtitle {
      font-size: 0.8rem;
      max-width: 340px;
      font-family: 'Roboto', sans-serif;
      line-height: 1.2rem;
    }
  }
}

.cr-content {
    position: absolute;
    top: 15%;
    width: 390px;
    left: 11%;
    z-index: 9;
}
.cr-content h1 {
    font-size: 42px;
    color: #fff;
}
.cr-content p {
    font-size: 14px;
    margin: 15px 0px !important;
    color: #fff;
    font-weight: 300;
}

.container {
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}
.row {
  height: 640px;
}
@media (max-width: 75em) {
  .head-image {
    height: 400px;
  }
  .title {
    font-size: 50px;
  }
  .subtitle {
    font-size: 20px;
  }
  .row {
    height: 400px;
  }
}
@media (max-width: 64em) {
  .head-image {
    height: 359px;
  }
  .container {
    background-position: left;
  }
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 18px;
  }
  .button {
    font-size: 16px;
  }
  .row {
    height: 359px;
  }
}
.sf-hero-item {
  height: 470px;
}
</style>
