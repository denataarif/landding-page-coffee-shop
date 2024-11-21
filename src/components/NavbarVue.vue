<template lang="">
  <div
    class="flex justify-between items-center px-4 bg-[#E4BC84] text-xl font-semibold shadow-md fixed z-10 w-full"
  >
    <div class="logo">
      <img :src="logo" alt="logo" class="mix-blend-multiply size-24" />
    </div>
    <div class="flex justify-center items-center gap-x-4">
      <p>Tentang</p>
      <p>Menu</p>
      <p>Store</p>
    </div>
    <div class="border border-black rounded-full px-4 py-2">
      <p>Download App</p>
    </div>
  </div>
</template>
<script>
import assets from "../assets/index";
export default {
  data() {
    return {
      logo: assets.logo,
    };
  },
};
</script>
<style lang=""></style>
