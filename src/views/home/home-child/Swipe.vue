<template>
  <div id="external-vessel" ref="external-vessel">
    <!-- 图片展示部分 -->
    <div class="img-vessel" ref="img-vessel">
      <slot></slot>
    </div>
    <!-- 快捷导航栏 -->
    <div class="img-nav" ref="img-nav">
      <!-- 根据图片数量动态添加sapn -->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Swipe',
    data() {
      return {
        imgVessel: null, //保存dom
        imgNav: null, //保存dom
        imgCount: null, //图片张数
        imgWidth: null, //图片实际宽度
        imgLongWidth: null, //所有图片宽度
        length: null, //图片倍数,用于计算是否到达指定位置
        inval: null, //定义全局周期执行句柄
        th: 0 //nav 计数器
      }
    },
    props: {
      stopTime: {   //图片停留时间
        type: Number,
        default: 1000
      },
      speed: {    //图片切换速度
        type: Number,
        default: 10
      }
    },
    mounted() {
      //变量赋值
      this.imgVessel = document.getElementsByClassName('img-vessel')[0];
      this.imgNav = document.getElementsByClassName('img-nav')[0];
      this.imgCount = this.imgVessel.children.length;
      this.length = -this.imgWidth;

      var cthis = this;

      //导航跳转指定位置
      function navSkip(j) {

        cthis.th = j;
        for (let i = 0; i < cthis.imgCount; i++) {
          cthis.imgNav.children[i].className = 'default';
        }
        cthis.imgNav.children[j].className = 'present';
      }

      //清除定时器
      function clearAway() {
        clearInterval(cthis.inval)
      }
      //启动定时器
      function start() {
        clearAway()
        cthis.inval = setInterval(activity, cthis.speed)
      }
      //初始化
      function initialize() {
        // 确定所有图片容器需要的宽度
        cthis.imgVessel.style.width = (cthis.imgCount + 1) * 100 + '%';

        for (let i = 0; i < cthis.imgCount; i++) {
          //确定每张图片宽度
          cthis.imgVessel.children[i].style.width = 100 / (cthis.imgCount + 1) + '%';
          //根据图片张数动态添加span并设置id
          cthis.imgNav.appendChild(document.createElement('span'));
          cthis.imgNav.children[i].id = 'n' + i;
        }
        //由于这几个变量需等图片宽度确定后再设置
        cthis.imgWidth = cthis.imgVessel.children[0].offsetWidth;
        cthis.length = -cthis.imgWidth;
        cthis.imgLongWidth = cthis.imgWidth * cthis.imgCount;
        for (let i = 0; i < cthis.imgCount; i++) {
          //等待全部创建后再调用
          cthis.imgNav.children[i].addEventListener('click', skip, false);
        }
        // 初始化span上的class
        navSkip(0)
        // 复制第一个节点到imgvessel尾部：用于遮盖
        cthis.imgVessel.appendChild(cthis.imgVessel.cloneNode(true).children[0]);
        setTimeout(start, cthis.stopTime)
      }

      //周期执行回调函数
      function activity() {
        //图片动起来
        cthis.imgVessel.style.left = (cthis.imgVessel.offsetLeft - 1) + 'px';
        // 判断是否播放完成一张，并停留
        if (cthis.imgVessel.offsetLeft == cthis.length) {
          cthis.length = cthis.length - cthis.imgWidth
          clearAway()
          setTimeout(start, cthis.stopTime)
          // 更该span class
          cthis.th += 1;
          if (cthis.imgVessel.offsetLeft == -cthis.imgLongWidth) {
            cthis.th = 0;
          }
          navSkip(cthis.th)
        }
        // 到达尾部回退进行，图片轮播
        if (cthis.imgVessel.offsetLeft <= -cthis.imgLongWidth) {
          cthis.imgVessel.style.left = 0;
          cthis.length = -cthis.imgWidth;
        }
      }

      //创建sapn要绑定点击事件:由于无法确定是哪个sapn故在初始化时需要配置id
      function skip(event) {
        let nx = Number(event.srcElement.id[1]);
        clearAway()
        cthis.imgVessel.style.left = nx * -cthis.imgWidth + 'px';
        cthis.length = -cthis.imgWidth * (nx + 1);
        navSkip(nx)
        setTimeout(start, cthis.stopTime)
      }


      initialize()

      window.onresize = function() {
        // 清除定时器
        clearAway()
        cthis.imgVessel.style.left = 0;
        cthis.imgWidth = cthis.imgVessel.children[0].offsetWidth;
        cthis.imgLongWidth = cthis.imgWidth * cthis.imgCount;
        cthis.length = -cthis.imgWidth;
        navSkip(0)
        setTimeout(start, cthis.stopTime)
      }

    }

  }
</script>

<style>
  #external-vessel {
    /* 确定图片和导航容器宽高及位置 */
    width: 100%;
    height: 200px;
    overflow: hidden;
    /* 设置定位为js提供图片与父元素的距离 offsetleft*/
    position: relative;
    left: 0;
    top: 0;
  }

  .img-vessel {
    /* 将图片放在一行,宽度由js动态确定，其数值是图片数量+1*100% */
    height: 100%;
    /* 删除图片之间缝隙 */
    font-size: 0;
    /* 设置定位用于相对于父级移动 */
    position: absolute;
  }

  .img-vessel img {
    /* 图片填充 宽度由js动态确定,图片宽度是100%除图片数量+1 */
    height: 100%;
    /* 设置边框和内边距为0，使得offsetWidth的等于图片实际宽度 */
    padding: 0;
    border: 0;
  }

  /* 导航样式部分 */
  .img-nav {
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .img-nav span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 3px;
    cursor: pointer;
  }

  .default {
    background-color: #C9EEF7;
  }

  .present {
    background-color: #D3D3D3;
  }
</style>
