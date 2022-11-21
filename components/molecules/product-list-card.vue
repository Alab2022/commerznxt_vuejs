<template>
  <div class="card flex-row list-view">
    <div class="wishlist">
      <i class="bi bi-heart" />
    </div>
    <div class="list-img-wrapper">
      <img :src="image" alt="">
    </div>
    <div class="list-details ">
      <h4>
        {{ title }}
      </h4>
      <div class="list-footer d-flex justify-content-between align-center">
        <div class="price-wrapper ">
          <div class="content d-flex align-items-baseline">
            <h5><strike>{{ originalPrice }}</strike></h5>
            <h3>{{ price }}</h3>
          </div>
          <div class="ratings">
            <i :class="['bi bi-star-fill', rating>=1 ? 'ic-active':'']" />
            <i :class="['bi bi-star-fill', rating>=2 ? 'ic-active':'']" />
            <i :class="['bi bi-star-fill', rating>=3 ? 'ic-active':'']" />
            <i :class="['bi bi-star-fill', rating>=4 ? 'ic-active':'']" />
            <i :class="['bi bi-star-fill', rating>=5 ? 'ic-active':'']" />
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="bi bi-bag-fill" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductListCard',
  props: {
    title: { type: String, default: undefined },
    originalPrice: { type: String, default: undefined },
    price: { type: String, default: undefined },
    rating: { type: String, default: undefined },
    image: { type: String, default: undefined }
  },
  components: {
  }
};
</script>

<style lang="css" scoped>

.card{
      max-width: 324px;
    padding: 15px;
    border-radius: 10px !important;
    /* box-shadow: none !important; */
    border: 1px solid #e8e8e8 !important;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
}
.owl-carousel .owl-stage-outer{
    overflow: unset;
    height: 100%;
}
.list-view .list-img-wrapper {
    margin: unset;
    margin-right: 20px;
    width: 30%;
    height: 100px;
}
.list-img-wrapper {
    width: 110px;
    margin: auto;
    height: 150px;
    display: flex;
    overflow: hidden;
}
.list-img-wrapper img {
    width: 100% !important;
    margin: auto;

}
.list-details h4 {
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 10px !important;
    font-weight: 400;
}
.list-footer {
    flex-wrap: wrap;
    width: 100%;
}
.list-footer .price-wrapper .content h5 strike {
    font-size: 12px;
    margin-right: 8px;
    font-weight: 200;
}
.list-footer .price-wrapper .content h3 {
    font-size: 16px;
    font-weight: 600;
}
.ic-active{
    color: #1C67A8 !important;
}
.ratings i.bi {
    color: #DBDBDB;
}
.wishlist {
    background: #fff;
    width: 30px;
    height: 30px;
    padding-top: 4px;
    font-size: 14px;
    line-height: 25px;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    border-radius: 50%;
    text-align: center;
    color: #F05A28;
    position: absolute;
    right: 13px;
    top: 16px;
    display: none;
}
.card:hover .wishlist{
    display: block;
}

.owl-theme .owl-nav [class*=owl-]{
    font-size: 28px !important;
}
.owl-nav button span {
    background: white;
    padding: 0px 14px;
    border-radius: 10px;
    border: 1px solid #ddd;
}
.owl-nav {
    position: absolute;
    top: -42px;
    margin-top: unset !important;
    z-index: 999;
    right: 10px;
}
.owl-dots{
    display: none;
}

</style>
