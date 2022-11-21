<template>
  <div>
    <section class="head-image w-100 bg-cl-th-accent cl-white">
      <SfHero
        class="hero"
        :slider-options="{
          animationDuration: 2000,
          rewindDuration: 2000
        }"
      >
        <template v-slot:prev>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
          </button>
        </template>

        <template v-slot:next>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
          </button>
        </template>

        <SfHeroItem
          v-for="(hero, i) in currentImage"
          :key="i"
          :autoplay="0"
          :background="hero.background"
          :image="hero.image"
          :class="hero.className"
        >
          <template v-slot:withImgTag>
            <div class="cr-content">
              <h1>
                Apple Watch Series 7
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
              <button type="button" class="btn btn-light secondary-text">
                View More
              </button>
            </div>
          </template>
        </SfHeroItem>
      </SfHero>
    </section>
  </div>
</template>

<script>
// import ButtonOutline from 'theme/components/theme/ButtonOutline'
import { mapGetters } from 'vuex'
import SfHero from 'theme/components/storeui/components/organisms/SfHero/SfHero'
import carousel from './OwlCarousel'
export default {
  components: {
    SfHero
    // carousel
    // ButtonOutline
  },
  data () {
    return {
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
  display: none;
  @media (min-width: 767px) {
    display: inherit;
  }

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

.head-image {
  height: 470px;
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
