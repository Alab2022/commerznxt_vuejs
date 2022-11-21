<template>
  <div class="banner-section shop position-relative">
    <img src="/assets/list-banner.png" class="w-100" alt="">
    <div class="content">
      <h1>{{ title }}</h1>
      <p v-html="subtitle" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'CategoryHeader',
  components: {
  },
  props: {
    title: {
      type: String,
      default: undefined
    },
    subtitle: {
      type: String,
      default: undefined
    }
  }
};
</script>
<style lang="css" scoped>
.banner-section .content {
    position: absolute;
    top: 50px;
    left: 80px;
}
.banner-section .content h1,p{
    color: #0F75B7;
}
.banner-section .content p{
    font-size: 14px;
    margin-top: 10px;
}
</style>
