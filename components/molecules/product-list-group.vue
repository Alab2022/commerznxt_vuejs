<template>
  <div class="card custom">
    <h4 class="card-heading text-center mb-4 mt-4">
      Medical Electrical Equipment
    </h4>
    <p class="common-pr text-center">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </p>

    <div class="cr-pdt-grid d-flex flex-wrap justify-content-between mt-4">
      <div class="pdt-wrp">
        <div class="img-wrap">
          <img src="assets/item.png" alt="">
        </div>
        <p class="common-pr text-center">
          Flexible mobile stand
        </p>
      </div>
      <div class="pdt-wrp">
        <div class="img-wrap">
          <img src="assets/item.png" alt="">
        </div>
        <p class="common-pr text-center">
          Flexible mobile stand
        </p>
      </div>
      <div class="pdt-wrp">
        <div class="img-wrap">
          <img src="assets/item.png" alt="">
        </div>
        <p class="common-pr text-center">
          Flexible mobile stand
        </p>
      </div>
      <div class="pdt-wrp">
        <div class="img-wrap">
          <img src="assets/item.png" alt="">
        </div>
        <p class="common-pr text-center">
          Flexible mobile stand
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductListGroup',
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
.custom {
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
    border: 0 !important;
    padding: 20px;
    margin: 0px 10px 10px 10px;
    border-radius: 10px !important;
}
.cr-pdt-grid .pdt-wrp {
    width: 50%;
    margin-bottom: 15px;
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
