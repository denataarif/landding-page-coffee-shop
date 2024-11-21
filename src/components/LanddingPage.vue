<template lang="">
  <div class="font-poppins">
    <NavbarVue />
    <div class="flex flex-col gap-y-10">
      <section class="p-10 bg-[#d2c1b0]">
        <div class="flex justify-between items-center mt-20">
          <div class="">
            <div
              class="banner w-full h-[100vh] text-center relative left-[20rem]"
            >
              <div
                class="slider absolute w-[200px] h-[250px] top-[10%]"
                style="--quantity: 5"
              >
                <div
                  class="items absolute inset-[0_0_0_0]"
                  style="--position: 1"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHxVKUcsd3VviBQkbQF3viHM9xHXjBuNbQ&s"
                    alt="gambar tempat kopi"
                    class="rounded-lg size-full object-cover"
                  />
                </div>

                <div
                  class="items absolute inset-[0_0_0_0]"
                  style="--position: 2"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY5J9QDEfV2G270_arfOnR4mAGJ3DqobiHQ&s"
                    alt="gambar tempat kopi"
                    class="rounded-lg size-full object-cover"
                  />
                </div>

                <div
                  class="items absolute inset-[0_0_0_0]"
                  style="--position: 3"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_HE-NGZMUtzbuH5L7bdTtQ11wgX7giGlbMCoBPxuPGrqtqQhZM84k2Wk8O__H0QgVHM&usqp=CAU"
                    alt="gambar tempat kopi"
                    class="rounded-lg size-full object-cover"
                  />
                </div>

                <div
                  class="items absolute inset-[0_0_0_0]"
                  style="--position: 4"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkT6YRtOFS3a_SzkLn0uyeJa4i8ltoElHnvuBTJzdiuRzu2CKbIToLx1Mw_trSWgqdi-w&usqp=CAU"
                    alt="gambar tempat kopi"
                    class="rounded-lg size-full object-cover"
                  />
                </div>

                <div
                  class="items absolute inset-[0_0_0_0]"
                  style="--position: 5"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrvghAAJbrDY6_UhaT6DsKDahhuQ49MntPhCgC4MiSZ0IxDd4XGvmGskYDE2Q9jm0-nw&usqp=CAU"
                    alt="gambar tempat kopi"
                    class="rounded-lg size-full"
                  />
                </div>
              </div>

              <div
                class="content absolute left-[50%] translate-x-[-50%] h-max flex flex-wrap justify-between items-center z-10 text-[#ad6d2f]"
              >
                <h1 class="font-bold text-5xl text-center">Disebut Kopi</h1>
              </div>
            </div>
          </div>

          <div class="w-[45%]">
            <h1 class="text-6xl font-bold mb-2 text-[#ad6d2f]">Our Story</h1>
            <p class="text-xl font-medium">
              Pada tahun 2021, di tengah pandemi yang melanda dunia, sebuah
              kedai kopi kecil bernama Disebut kopi lahir di sudut jalan kecil
              kota. Konsepnya sederhana: sebuah coffee shop pinggir jalan yang
              cozy, ramah, dan nyaman—dirancang untuk menjadi tempat bersantai,
              belajar, atau bekerja. Di balik kesederhanaannya, Kopi Santai
              menyimpan kisah inspiratif tentang keberanian, kreativitas, dan
              cinta pada secangkir kopi.
            </p>
          </div>
        </div>
      </section>
      <div class="flex flex-col justify-between items-center">
        <h1 class="text-6xl font-bold">Our Menu</h1>
        <!-- misahin antara carousel dengan deskripsi nya -->
        <div class="flex px-5">
          <!-- ini kontainer slideshow -->
          <div
            class="slideshow h-[100vh] flex flex-col justify-around items-center"
          >
            <!-- ini kontainer carousel nya rotation * 90 itu biar si transform nya ttp di 1 tempat -->
            <div
              ref="carousel"
              class="carousel w-[40rem] h-[40rem] border-[3rem] border-[#80411e] border-solid rounded-full flex flex-shrink-0 justify-center items-center relative transition-transform duration-1000 ease-in-out -left-[65%]"
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
            <h1 class="text-4xl font-extrabold fade-animation">
              {{ coffeeData[currentIndex].judul }}
            </h1>
            <p class="text-2xl font-semibold mt-2 fade-animation">
              {{ coffeeData[currentIndex].desc }}
            </p>
          </div>
        </div>
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
      Images: [
        {
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHxVKUcsd3VviBQkbQF3viHM9xHXjBuNbQ&s",
        },
        {
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHxVKUcsd3VviBQkbQF3viHM9xHXjBuNbQ&s",
        },
        {
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHxVKUcsd3VviBQkbQF3viHM9xHXjBuNbQ&s",
        },
        {
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHxVKUcsd3VviBQkbQF3viHM9xHXjBuNbQ&s",
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
        this.triggerTextAnimation();
      }, 5000);
    },
    // fungsi ini mengubah indeks gambar yang sedang aktif
    nextImg() {
      this.currentIndex = (this.currentIndex + 1) % this.coffeeData.length;
    },
    triggerTextAnimation() {
      const textElement = document.querySelectorAll(".fade-animation");
      textElement.forEach((element) => {
        element.classList.remove("fade-animation");
        void element.offsetWidth;
        element.classList.add("fade-animation");
      });
    },
  },
};
</script>
<style lang="css">
.banner .slider {
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRun 20s linear infinite;
  z-index: 2;
}
@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}
.banner .slider .items {
  transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(300px);
}
/* Animasi fade-in dan fade-out */
@keyframes fadeInUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Terapkan ke elemen teks */
.fade-animation {
  animation: fadeInUp 2s ease-in-out;
}
</style>
