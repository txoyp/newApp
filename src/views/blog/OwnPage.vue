<template>
    <div class="blog">
        <div id="background">
            <div class="bg-head-img"></div>
            <sapn>昵称</sapn>
        </div>
        <div class="nav">
            <div class="nav-detail">
                <div><router-link to="/ownPage/weibos">微博</router-link></div>
            </div>
            <div class="nav-detail">
                <div><router-link to="/ownPage/photos">相册</router-link></div>
            </div>
        </div>
        <div class="nav-msg">
            <router-view></router-view>
        </div>
        <div id="component">

        </div>
        <div class="nav">
            <slot>组件</slot>
        </div>
    </div>
</template>
<script>
    import Wrapper from '@/views/blog/component/Wrapper.vue';


    export default {
        components: {
            Wrapper
        },
    }
</script>
<style scoped lang="scss">
    .blog{
        width: 100%;
        height:100%;
    }
    #background{
       height:30%;
       width: 100%;
    }
    .nav{
        height: 8%;
        width: 100%;
        border-top: 1px solid #ccc;
        z-index: 1;
    }
    .nav-msg{
        height: 6%;
        width: 100%;
        border-top: 1px solid #ccc;
        line-height: 250%;
    }
    .nav-detail{
        float: left;
        width: 50%;
        height:100%;
        display: flex;
    }
    .nav-detail div{
        float: left;
        flex: 0.5;
        height: 100%;
        margin-left: 28%;
        font-size: 18px;
        text-align: center;
        line-height: 250%;
        a{
            color:rgb(149,149,147);
            padding: 10px;
            &.router-link-exact-active {
                color: rgb(0,183,225);
                border-bottom: 1px solid rgb(0,183,225);
            }
        }

    }
    #component{
        height: 56%;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
</style>