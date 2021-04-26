<template>
  <!-- 依据请求到数据量来生成一页的内容 -->
  <div class="data-display" key=''>
    <div class="data-display-item" v-for="obj in good.list" @click="itemClick(obj.iid)" >
      <img :src="obj.imgShow" @load="imgLoad()">
      <p>{{obj.imgDescribe}}</p>
      <div class="data-display-item-price">
        <span>￥{{obj.discountPrices}}</span>
        <span>￥{{obj.realPrice}}</span>
      </div>
      <div class="data-display-item-shop">
        <p><span>店铺：</span> {{obj.shopName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dataDisplay',
    props: {
      good: {
        type: Object
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      },
      itemClick(iid){
        // 携带id跳转到详情页
        this.$router.push('/details'+iid.name)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .data-display {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 44px;
    .data-display-item {
      width: 45%;
      padding: 2%;
      display: inline-block;
      border: solid 1px $lightGray;
      margin-top: -1px;
      margin-right: -1px;
      >img {
        width: 100%;
        height: 200px;
      }

      >p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        color: $darkgray;
        font-size: 13px;
      }

      .data-display-item-price {
        letter-spacing: -1px;
        span:nth-child(1) {
          font-size: 18px;
          color: $nacarat;
          margin-right: 5px;
        }

        span:nth-child(2) {
          font-size: 13px;
          color: $darkgray;
          text-decoration: line-through;
        }
      }

      .data-display-item-shop {
        p {
          font-size: 12px;
          color: $lightGray;

          span {
            color: $nacarat;
          }
        }
      }
    }
  }
</style>
