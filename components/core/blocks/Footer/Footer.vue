<template>
  <footer :class="{ 'brdr-top-1 brdr-cl-secondary': isCheckoutPage }">
    <div class="container-fluid">
      <div class="site-wrapper">
        <div class="utilities d-flex align-center justify-content-between mt-3">
          <div class="wrap d-flex align-center">
            <div class="icon me-3">
              <i class="bi bi-truck" />
            </div>
            <div>
              <h4>Free Shipping</h4>
              <p>On all orders</p>
            </div>
          </div>
          <div class="wrap d-flex align-center">
            <div class="icon me-3">
              <i class="bi bi-check-circle" />
            </div>
            <div>
              <h4>15 days returns</h4>
              <p>Moneyback guarantee</p>
            </div>
          </div>
          <div class="wrap d-flex align-center">
            <div class="icon me-3">
              <i class="bi bi-key-fill" />
            </div>
            <div>
              <h4>Secure payment</h4>
              <p>Protected by Paypal</p>
            </div>
          </div>
          <div class="wrap d-flex align-center">
            <div class="icon me-3">
              <i class="bi bi-headphones" />
            </div>
            <div>
              <h4>24/7 Support</h4>
              <p>Live Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-semi-light">
      <div class="site-wrapper">
        <div class="footer">
          <div class="footer-top d-flex align-center">
            <div class="left">
              <h1>Get Our Updates Always Fast</h1>
              <p>
                10% off your next order when you sign up + be the first to know about new products and
                special offers.
              </p>
            </div>
            <div class="right">
              <div class="subscription">
                <input type="text" placeholder="Enter Your Email ">
                <button type="button" class="btn btn-secondary">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div class="footer-btm mt-4">
            <div class="row">
              <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="ft-l">
                  <img class="fot-lo" src="img/logo-white.png" alt="">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                  <div class="social-icons d-flex mb-4">
                    <div class="ic-wr me-2">
                      <i class="bi bi-facebook" />
                    </div>
                    <div class="ic-wr me-2">
                      <i class="bi bi-twitter" />
                    </div>
                    <div class="ic-wr me-2">
                      <i class="bi bi-instagram" />
                    </div>
                  </div>
                  <a href=""><span><i class="bi bi-telephone" /></span>
                    (+91)1234-5670 </a>
                </div>
              </div>
              <div class="col-lg-2">
                <ul>
                  <h3>Quick Links</h3>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/about-us')" exact>
                      {{ $t('About') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/contact')" exact>
                      {{ $t('Contact') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/faq')" exact>
                      {{ $t('Faq') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/support')" exact>
                      {{ $t('Support') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/news-blog')" exact>
                      {{ $t('News &amp; Blog') }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2">
                <ul>
                  <h3>Categories</h3>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/about-us')" exact>
                      {{ $t('About') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/contact')" exact>
                      {{ $t('Contact') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/faq')" exact>
                      {{ $t('Faq') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/support')" exact>
                      {{ $t('Support') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/news-blog')" exact>
                      {{ $t('News &amp; Blog') }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <ul>
                  <h3>My Account</h3>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/my-account')" exact>
                      {{ $t('Account Info') }}
                    </router-link>
                  </li>
                  <li>Shipping Info</li>
                  <li>
                    <router-link class="footer_link" :to="localizedRoute('/customer-service')" exact>
                      {{ $t('Returns') }}
                    </router-link>
                  </li>
                  <li>Track Order</li>
                  <li>Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="site-wrapper" style="padding-bottom: 15px;">
        <div class="end-card d-flex align-center justify-content-between">
          <div class="copyright">
            <a href="">Copyright 2022 Commercenxt. All rights reserved. <span /></a>
            <router-link
              class="primary-text"
              to="/privacy"
              exact
            >
              {{ $t('Privacy policy') }}
            </router-link> |  <span>
              <router-link
                class="primary-text"
                to="/legal"
                exact
              >
                {{ $t('Terms &amp; Conditiions') }}
              </router-link>
            </span>
          </div>
          <div class="payment d-flex align-center">
            <img src="assets/pay.png" alt="">
            <img src="assets/visa.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <back-to-top bottom="20px" right="20px" visibleoffset="200">
      <button type="button" class="btn-top button no-outline brdr-none cl-white bg-cl-mine-shaft :bg-cl-th-secondary py10 px10">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" fill="white" />
        </svg>
      </button>
    </back-to-top>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { currentStoreView, localizedRoute } from '@vue-storefront/core/lib/multistore'
import CurrentPage from 'theme/mixins/currentPage'
import LanguageSwitcher from '../../LanguageSwitcher.vue'
import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'
import BackToTop from 'theme/components/core/BackToTop'
import { getPathForStaticPage } from 'theme/helpers'
import config from 'config'

export default {
  mixins: [CurrentPage],
  name: 'MainFooter',
  methods: {
    goToAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    getLinkFor (path) {
      return localizedRoute(getPathForStaticPage(path))
    }
  },
  computed: {
    ...mapGetters({
      isLogged: 'user/isLoggedIn'
    }),
    multistoreEnabled () {
      return config.storeViews.multistore
    },
    getVersionInfo () {
      return `v${process.env.__APPVERSION__} ${process.env.__BUILDTIME__}`
    }
  },
  components: {
    Newsletter,
    LanguageSwitcher,
    BackToTop
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-secondary: color(secondary);

.bg-semi-light{
    background-color: #747474;
}
.footer {
    padding: 30px 0px;
}
.footer-top .left,.right {
    width: 60%;
}
.footer-top .right {
    width: 40%;
}
.footer-top .left h1 {
    font-size: 28px;
    color: #ffffff;
    margin-bottom: 5px !important;
}
.footer-top .left p {
    color: #efefef;
    font-weight: 300;
    width: 70%;
    font-size: 14px;
    margin-top: 10px;
}
.footer-top .right .subscription input {
    width: 100%;
    border: 1px solid #cbcbcb;
    padding: 15px;
    border-radius: 10px;
    outline: none;
    padding-left: 20px;
    font-size: 14px;
}
.subscription {
    position: relative;
}
.subscription button.btn.btn-secondary{
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 20px;
    border-radius: 10px;
}
.footer-top{
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
    padding-bottom: 30px;
}
.ft-l p {
    width: 70%;
    color: #efefef;
    margin: 25px 0 !important;
    font-size: 14px;
}
.ic-wr {
    border: 1px solid #EEEEEE;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
}
.ic-wr i{
    color: #F05A28;
    font-size: 20px;
}
.footer-btm h3 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 25px !important;
}
.footer-btm ul {
    font-size: 14px;
    list-style: none;
    color: #efefef;
    font-weight: 300;
}
.footer-btm ul li{
    margin-bottom: 7px;
}
.payment img {
    width: 140px;
    margin-right: 10px;
}
.copyright a {
    font-size: 14px;
    color: #686868;
}
img.fot-lo {
    width: 55%;
}
.ft-l a {
    color: #fff;
}

.icon {
  transition: 0.3s all;
}

.list-view .list-img-wrapper {
    margin: unset;
    margin-right: 20px;
    width: 30%;
    height: 100px;
}
.list-view .list-img-wrapper img {
    width: 100%;
    height: 100%;
}
.list-view .list-details {
    width: 65%;
}
.list-view .list-details h4 {
    font-size: 20px;
    margin: 0 !important;
}
.wrap .icon {
    width: 55px;
    height: 55px;
    background: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.wrap .icon i {
    font-size: 24px;
    color: #F05A28;
}
.wrap h4 {
    font-size: 20px;
    color: #575757;
}
.wrap p {
    font-size: 14px;
    color: #575757;
    font-weight: 300;
}
.footer-top .left, .right {
    width: 60%;
}
.left {
  text-align: left;
}

.social-icon {
  width: 40px;
  height: 40px;
  &:hover,
  &:focus,
  &:active {
    .icon {
      fill: $color-secondary;
    }
  }
}
.links {
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}

.bottom-links {
  @media (max-width: 767px) {
    padding: 0;
  }
}

.footer__version-info {
  display: flex;
  color: $color-secondary;
  font-size: 0.7rem;
  @media (min-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8rem;
  }
}

.underline {
  &:hover {
    color: $color-secondary;
    &:after {
      background-color: $color-secondary;
    }
  }
}
.legal-entity-link {
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
}

.privacy-policy-link {
  text-align: right;
  @media (min-width: 768px) {
    display: none;
  }
}

@media (max-width: 595px) {
  .no-mobile {
    display: none;
  }

  .social {
    margin-top: 0;
  }

  .footer-links {
    padding-bottom: 30px;
  }
}
.footer_link {
  color: inherit;
  text-decoration: none;
}
.footer_link:hover {
  text-decoration: none;
}
</style>
