<template>
<div class="total">
      <div class="_404">
        <h2 class="m-0">抱歉，页面未找到，<span>{{countDown}}</span>s后自动跳转到
            <a href="javascript:;" @click="goHome">首页</a>
        </h2>
        <img src="@/assets/404.jpg" alt="页面未找到">
    </div>
    
</div>

</template>

<script>
    export default {
        name: "NF404",
        data() {
            return {
                countDown: 5,
                timer: null
            }
        },
        methods: {
            goHome() {
                this.$router.push('/')
                clearInterval(this.timer)
            }
        },
        created() {
            this.timer = setInterval(() => {
                this.countDown > 0 ? this.countDown-- : this.goHome()
            }, 1000)
        }
    }
</script>


<style>
   ._404 {
        width: 100%;
        margin:0 auto;
        background-color: #fff;
    }
    ._404 img {
        width: 100%;
        height: 100%;
    }

    ._404 a {
        color: #010101;
    }

    ._404 a:hover {
        color: skyblue;
    } 
</style>