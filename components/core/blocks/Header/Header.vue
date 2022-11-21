<template>
  <div>
    <header
      class="header fixed w-100 brdr-bottom-1 bg-cl-primary brdr-cl-secondary"
      :class="{ 'is-visible': navVisible }"
    >
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <logo width="auto" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div class="content-divider">
              <div class="nav-sec-top d-flex ">
                <div class="dropdown me-3">
                  <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>All Categories</p>
                    Department
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li v-for="category in getCategories" :key="category.id">
                      <button class="dropdown-item" type="button">
                        <router-link
                          class="px25 py20 cl-accent no-underline col-xs"
                          :to="categoryLink(category)"
                        >
                          {{ category.name }}
                        </router-link>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="search-bar me-3">
                  <div class="input" type="search" placeholder="Search" aria-label="Search" />
                  <input type="search" placeholder="Search" aria-label="Search">
                </div>
                <div class="dropdown me-3">
                  <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>Hello, {{ currentUser?currentUser: "Sign in" }}</p>
                    My Account
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li v-if="currentUser">
                      <button class="dropdown-item" type="button">
                        Go To Account
                      </button>
                    </li>
                    <li v-else>
                      <button class="dropdown-item" type="button" @click.prevent="gotoAccount">
                        Sign in
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown d-flex">
                  <div class="icon-wrapper me-3">
                    <div class="notification">
                      01
                    </div>
                    <i class="bi bi-bag-fill" />
                  </div>
                  <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>My Cart</p>
                    € 23.880
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 1
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 2
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 3
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 4
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 5
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 6
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Menu 7
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="nav-sec-bottom d-flex justify-content-between mt-2 align-center">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link :to="localizedRoute('/')" :title="$t('Home Page')" class="nav-link">
                      Home
                    </router-link>
                  </li>
                  <span class="nav-sep">|</span>
                  <li class="nav-item">
                    <router-link :to="localizedRoute('/')" :title="$t('Shop')" class="nav-link">
                      Shop
                    </router-link>
                  </li>
                  <span class="nav-sep">|</span>
                  <li class="nav-item">
                    <router-link :to="localizedRoute('/about-us')" :title="$t('about-us')" class="nav-link">
                      About
                    </router-link>
                  </li>
                  <span class="nav-sep">|</span>
                  <li class="nav-item">
                    <router-link :to="localizedRoute('/contact')" :title="$t('contact')" class="nav-link">
                      Contact
                    </router-link>
                  </li>
                  <span class="nav-sep">|</span>
                  <li class="nav-item">
                    <router-link :to="localizedRoute('/order-tracking')" :title="$t('order-tracking')" class="nav-link">
                      Order Tracking
                    </router-link>
                  </li>
                </ul>
                <div class="content-right">
                  <h6>
                    For Sales &amp; Support <a class="secondary-text me-2" href="">(+91)1234-5670</a> <span class="nav-sep">|</span> <a class="primary-text" href="">support@proqmed.com</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CurrentPage from 'theme/mixins/currentPage'
import { formatCategoryLink } from '@vue-storefront/core/modules/url/helpers'
import AccountIcon from 'theme/components/core/blocks/Header/AccountIcon'
import CompareIcon from 'theme/components/core/blocks/Header/CompareIcon'
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import Logo from 'theme/components/core/Logo'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import SearchIcon from 'theme/components/core/blocks/Header/SearchIcon'
import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'

export default {
  name: 'Header',
  components: {
    AccountIcon,
    CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    SearchIcon,
    WishlistIcon
  },
  mixins: [CurrentPage],
  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    }
  },
  computed: {
    ...mapGetters('category-next', ['getMenuCategories']),
    ...mapState({
      isOpenLogin: state => state.ui.signUp,
      currentUser: state => state.user.current,
      isOpen: state => state.ui.sidebar
    }),
    getCategories () {
      // console.log('this.getMenuCategories', this.getMenuCategories)
      return this.getMenuCategories
    },
    isThankYouPage () {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false
    }
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true
      },
      { passive: true }
    )

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled()
        this.isScrolling = false
      }
    }, 250)
  },
  methods: {
    categoryLink (category) {
      return formatCategoryLink(category)
    },
    openSidebarMenu () {
      this.$store.commit('ui/setSidebar', !this.isOpen)
    },
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    hasScrolled () {
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false
      } else {
        this.navVisible = true
      }
      this.lastScrollTop = this.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(secondary, $colors-background);

nav.navbar.navbar-expand-sm {
    padding: 0;
}
a.navbar-brand {
    width: 250px !important;
    margin-right: 35px !important;
}
a.navbar-brand img {
    width: 100% !important;
    height: 100% !important;
}
.dropdown button p {
    font-size: 11px;
    color: #707070;
    font-weight: 400;
    text-align: left;
}
.dropdown button {
    font-size: 14px;
    text-align: left;
    color: #707070;
    font-weight: 500;
    padding: 0 !important;
    border: 0;
    outline: 0;
}
div#collapsibleNavbar {
    width: 100%;
}
.content-divider {
    width: 100%;
}
.search-bar {
    width: 100%;
}
.search-bar input {
    width: 100%;
    background: #F1F1F1;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    padding: 7px 15px;
    font-size: 14px;
    outline: 0;
}
.icon-wrapper {
    background: #F1F1F1;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    color: #7B7B7B;
    display: flex;
    align-items: center;
    justify-content: center;
}
.notification {
    position: absolute;
    top: -5px;
    right: -6px;
    background: #F05A28;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    font-size: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
ul.dropdown-menu li button {
   font-weight: 400;
   color: #707070;
   padding: 5px 10px !important;
}
a.nav-link {
    padding: 0 !important;
    font-size: 14px;
    margin-right: 10px;
}
.nav-sep {
    margin-right: 10px;
    color: #BBBBBB;
    font-size: 14px;
    font-weight: 400;
}
.content-right h6 {
    font-size: 14px;
    font-weight: 300;
    color: #686868;
}
.header {
      z-index: 999;
      padding: 15px 80px;
      top: -120px;
          -webkit-transition: top .2s ease-in-out;
    -o-transition: top .2s ease-in-out;
    transition: top .2s ease-in-out;
}
.is-visible {
  top: 0px !important;
}

.header-placeholder {
  height: 103px;
}

</style>
