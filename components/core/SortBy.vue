<template>
  <div class="btn-group me-2">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      {{ sortby.label }}
    </button>
    <ul class="dropdown-menu" style="">
      <li class="dropdown-item" v-for="variant in sortingVariants" :key="variant.id" @click="setOrder(variant)">
        {{ $t(variant.label) }}
      </li>
    </ul>
  </div>
  <!-- <select
      name="sortby"
      class="cl-secondary"
      v-model="sortby"
      @change="changeOrder"
    >
      <option selected="selected" disabled value="" v-if="!hasLabel">
        {{ $t('Sort By') }}
      </option>
      <option v-for="variant in sortingVariants" :value="variant" :key="variant.id">
        {{ $t(variant.label) }}
      </option>
    </select> -->
</template>

<script>
import SortBy from '@vue-storefront/core/compatibility/components/SortBy'
import { products } from 'config'
export default {
  mixins: [SortBy],
  props: {
    hasLabel: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    setOrder (val) {
      this.sortby = val;
      this.changeOrder();
    }
  },
  data () {
    return {
      sortby: null
    }
  },
  watch: {
    value: {
      handler () {
        const defaultVariant = this.value && this.value.length ? this.value : products.defaultSortBy.attribute
        this.sortby = this.sortingVariants.find(variant => variant.id.includes(defaultVariant))
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '~theme/css/base/text';
    @import '~theme/css/variables/colors';
    @import '~theme/css/helpers/functions/color';
    $color-tertiary: color(tertiary);
    .dropdown-menu:hover {
      cursor: pointer;
    }
    .list-header .right button.btn.btn-light {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #E1E1E1 !important;
}
</style>
