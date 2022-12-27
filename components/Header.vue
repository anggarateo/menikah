<template>
    <div class="md:sticky fixed inset-x-0 md:top-0 bottom-0 z-40">
        <nav class="bg-slate-700 h-16 opacity-70 md:opacity-100">
            <div class="flex flex-row justify-between px-8 h-full items-center">
                <div class="text-6xl text-yellow-500 md:block hidden nama">
                    Ema & Teo
                </div>
                <div class="flex text-white md:block hidden">
                    <!-- pc top navbar -->
                    <button class="mx-4" v-scroll-to="{ el: '#satu', easing: 'ease-in', duration: 1000, offset: -60 }">
                        <font-awesome-icon icon="fa-solid fa-house" class="text-2xl" />
                        <!-- <div>
                            Awal
                        </div> -->
                    </button>
                    <button class="mx-4" v-scroll-to="{ el: '#dua', easing: 'ease-in', duration: 1000, offset: -60 }">
                        <font-awesome-icon icon="fa-solid fa-venus-mars" class="text-2xl" />
                        <!-- <div>
                            Kedua
                        </div> -->
                    </button>
                    <button class="mx-4" v-scroll-to="{ el: '#tiga', easing: 'ease-in', duration: 1000, offset: -60 }">
                        <font-awesome-icon icon="fa-solid fa-map-location-dot" class="text-2xl" />
                        <!-- <div>
                            Ketiga
                        </div> -->
                    </button>
                    <button class="mx-4" v-scroll-to="{ el: '#empat', easing: 'ease-in', duration: 1000, offset: -60 }">
                        <font-awesome-icon icon="fa-solid fa-photo-film" class="text-2xl" />
                        <!-- <div>
                            Keempat
                        </div> -->
                    </button>
                </div>
                <!-- mobile bottom navbar -->
                <div class="flex text-white md:hidden block w-full justify-center">
                    <button class="mx-4" v-scroll-to="{ el: '#satu', easing: 'ease-in', duration: 1000 }">
                        <font-awesome-icon icon="fa-solid fa-house" class="text-2xl" />
                        <!-- <div>
                            Awal
                        </div> -->
                    </button>
                    <button class="mx-4" v-scroll-to="{ el: '#dua', easing: 'ease-in', duration: 1000 }">
                        <font-awesome-icon icon="fa-solid fa-venus-mars" class="text-2xl" />
                        <!-- <div>
                            Kedua
                        </div> -->
                    </button>
                    <div class="text-center text-yellow-500 nama mx-2 leading-none text-[23px]">
                        Ema & Teo
                    </div>
                    <button class="mx-4" v-scroll-to="{ el: '#tiga', easing: 'ease-in', duration: 1000 }">
                        <font-awesome-icon icon="fa-solid fa-map-location-dot" class="text-2xl" />
                        <!-- <div>
                            Ketiga
                        </div> -->
                    </button>
                    <button class="mx-4" v-scroll-to="{ el: '#empat', easing: 'ease-in', duration: 1000 }">
                        <font-awesome-icon icon="fa-solid fa-photo-film" class="text-2xl" />
                        <!-- <div>
                            Keempat
                        </div> -->
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>