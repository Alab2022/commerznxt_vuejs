<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mt-3 mb-4">
      <li class="breadcrumb-item" v-for="link in paths" :key="link.route_link">
        <router-link :to="link.route_link">
          {{ link.name | htmlDecode }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">
        {{ current | htmlDecode }}
      </li>
    </ol>
  </nav>
</template>

<script>
import { Breadcrumbs } from '@vue-storefront/core/modules/breadcrumbs/components/Breadcrumbs.ts'

export default {
  mixins: [Breadcrumbs]
}
</script>

<style lang="css" scoped>
ol.breadcrumb {
    margin-bottom: 6px;
    font-size: 14px;
    color: #303030;
}
li.breadcrumb-item.active {
    color: #f05a28;
}
</style>
