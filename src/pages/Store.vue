<template>
<div style="padding:1% 3%;">
  <StoreDemo></StoreDemo>
</div>
</template>

<script>
import StoreDemo from "components/StoreDemo";
export default {
    name:"Store",
    components:{
        StoreDemo
    },
    mounted(){
      // this.read();
    },
    methods:{
      read(){
        console.log(this.$route.meta.url);
      }
    }
}
</script>

<style>

</style>