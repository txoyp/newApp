<template>
  <div id="content">
        <div id="head-portrait">
          <div id="head-img"></div>
          <span class="username">昵称</span>
          <div class="content-time">1小时前</div>
        </div>
        <div id="content-text">
          <p>内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容 内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容 内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容
            <a href="">全文</a>
          </p>
      </div>
      <div id="operation">

      </div>
  </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">
    #content{
      height:400px;
    }
    #head-portrait{
      height:18%;
      border: 1px solid #000000;
      & .username{
        padding: 10px 10px;
        color:rgb(0,183,225);
        font-size: 18px;
      }
      & .content-time{
          color: rgb(149,149,147);
          width: 36%;
          margin-left: 20%;
      }
    }
    #head-img {
      float: left;
      height: 68px;
      width: 66px;
      border: 1px solid #000;
    }
    #content-text{
      height:70%;
      background: #ccc;
      border: 1px solid #000000;
      overflow: hidden;
    }
    #operation{
      height:14%;
      border-bottom: 1px solid #ccc;
    }
</style>