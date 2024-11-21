<template lang="">
  <div>
    <NavbarVue />
    <!-- misahin antara carousel dengan deskripsi nya -->
    <div class="flex">
      <!-- ini kontainer slideshow -->
      <div
        class="slideshow h-[100vh] flex flex-col justify-around items-center"
      >
        <!-- ini kontainer carousel nya rotation * 90 itu biar si transform nya ttp di 1 tempat -->
        <div
          ref="carousel"
          class="carousel w-[40rem] h-[40rem] border-[3rem] border-[#80411e] border-solid rounded-full flex flex-shrink-0 justify-center items-center relative transition-transform duration-1000 ease-in-out -left-[60%]"
          :style="{
            transform: `rotate(${rotation * 90}deg)`,
          }"
        >
          <!-- kontainer-kontainer buat gambarnya scale-2 : currentIndex === 3 ini itu ngubah scale nya waktu gambar ini ada di index ke 3 -->
          <div
            class="slide absolute -bottom-[5rem] size-[7rem] transition-transform ease-in-out"
            :class="{
              'scale-[2]': currentIndex === 3,
            }"
          >
            <img
              :src="coffeeData[0].img"
              :alt="coffeeData[0].judul"
              class="size-[7rem] object-cover rounded-full transition-transform rotate-90"
            />
          </div>
          <div
            class="slide absolute -left-[5rem] size-[7rem] transition-transform ease-in-out"
            :class="{ ' scale-[2] ': currentIndex === 2 }"
          >
            <img
              :src="coffeeData[1].img"
              alt="Caffe Latte Coffee"
              class="size-[7rem] object-cover rounded-full transition-transform rotate-180"
            />
          </div>
          <div
            class="slide absolute size-[7rem] -top-[5rem] transition-transform ease-in-out"
            :class="{ ' scale-[2] ': currentIndex === 1 }"
          >
            <img
              :src="coffeeData[2].img"
              alt="Ice Dalgona Coffee"
              class="size-[7rem] object-cover rounded-full transition-transform -rotate-90"
            />
          </div>
          <div
            class="slide absolute -right-[5rem] size-[7rem] transition-transform ease-in-out"
            :class="{ ' scale-[2] ': currentIndex === 0 }"
          >
            <img
              :src="coffeeData[3].img"
              alt=" Brown Sugar Coffee"
              class="object-cover rounded-full size-[7rem] transition-transform"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-12 mr-4">
        <h1 class="text-4xl font-extrabold">
          {{ coffeeData[currentIndex].judul }}
        </h1>
        <p class="text-2xl font-semibold mt-2">
          {{ coffeeData[currentIndex].desc }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import assets from "../assets/index";
import NavbarVue from "./NavbarVue.vue";
export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      coffeeData: [
        {
          id: "1",
          judul: "Ice Mocha Coffee",
          img: assets.mocha,
          desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Amet tellus tellus est ad dui ipsum maecenas aliquet. Non mi risus netus sed accumsan eu quis. Litora rutrum fringilla primis litora pharetra conubia rhoncus. Tortor primis sociosqu velit sociosqu sagittis et. Suspendisse porta curabitur aliquam tempor varius libero. Nostra sapien donec ut urna senectus nam class.",
        },
        {
          id: "2",
          judul: "Ice Latte Coffee",
          img: assets.latte,
          desc: "Commodo taciti eu ultricies placerat eros libero hendrerit cursus. Sodales consectetur tortor vitae quam tincidunt fusce ultricies aptent nec. Vel blandit gravida proin hac mus eu tempor. At metus fusce pretium torquent feugiat posuere. Taciti leo venenatis inceptos curabitur vulputate taciti sit habitasse rutrum. Phasellus praesent nulla lacinia nisi tempus sem at. Dignissim semper lorem senectus magna lacinia montes luctus. Libero maximus tristique eros id mi placerat amet etiam.",
        },
        {
          id: "3",
          judul: "Dalgona Coffee",
          img: assets.dalgona,
          desc: "Eu maecenas euismod diam parturient pellentesque netus. Hac interdum libero vehicula sapien eu? Dolor scelerisque vestibulum aliquam quam justo vitae amet duis. Leo interdum platea proin tristique aliquam condimentum. Hendrerit lacus imperdiet ornare laoreet quam. Primis nostra luctus ullamcorper quis nulla consequat maximus nunc. Habitasse proin egestas tristique curae turpis. Vulputate egestas sollicitudin magnis potenti; nisl ornare gravida.",
        },
        {
          id: "4",
          judul: "Brown Sugar Coffee",
          img: assets.brown_sugar,
          desc: "Blandit id tristique litora gravida placerat cubilia. Tempor taciti ac dignissim mi laoreet ridiculus mi. Sociosqu magnis fermentum ipsum gravida maecenas eget feugiat condimentum. Feugiat vehicula sollicitudin sociosqu torquent penatibus taciti fusce ipsum ad. Nostra egestas feugiat natoque urna vitae ac? Per commodo cursus scelerisque sed aliquet. Pulvinar class aptent ornare nascetur dis accumsan vitae. Tincidunt blandit felis pulvinar sit convallis scelerisque vel blandit cursus.",
        },
      ],
      rotation: 0,
      currentIndex: 0,
    };
  },
  //lifecycle hook ini bertujuan untuk memulai interval saat komponen sudah selesai dirender
  mounted() {
    // manggil fungsi startInterval untuk memulai rotasi secara otomatis
    this.startInterval();
  },
  //lifecycle hook ini membersihkan interval sebelum komponen dihancurkan dari DOM
  beforeUnmount() {
    // menghentikan interval yang berjalan
    clearInterval(this.intervalId);
  },
  methods: {
    // fungsi ini itu buat bikin carousel nya bisa muter
    startInterval() {
      // interalId ini menyimpan Id interval agar bisa dihentikan oleh clearInterval
      this.intervalId = setInterval(() => {
        this.rotation++;
        // memangggil fungsi untuk mengubah indeks gambar yang ditampilkan
        this.nextImg();
      }, 5000);
    },
    // fungsi ini mengubah indeks gambar yang sedang aktif
    nextImg() {
      this.currentIndex = (this.currentIndex + 1) % this.coffeeData.length;
    },
  },
};
</script>
<style lang=""></style>
