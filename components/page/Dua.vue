<template>
    <div class="w-full h-full p-8">
        <div class="md:flex md:flex-wrap">
            <div class="md:flex md:flex-col h-screen md:w-1/2">
                <div data-aos="fade-right" data-aos-duration="1500" class="flex h-full sm:flex-row w-full">
                    <div class="w-full h-full bg-center bg-contain bg-no-repeat"
                        :style="{ backgroundImage: `url(${require('~/assets/bg-undangan/DSC00109.JPG')})` }">
                        <div class="block md:hidden text-2xl font-medium text-center p-4">Mempelai Perempuan</div>
                    </div>
                </div>
            </div>
            <div class="md:flex md:flex-col sm:h-1/2 p-4 md:w-1/2 text-center md:text-left">
                <div data-aos="fade-up" data-aos-duration="1500" class="flex flex-row md:text-4xl text-2xl font-bold">
                    Ema Ruly Pratiwi
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Putri ke-empat dari pasangan (Alm.) Bapak Purwaji dan Ibu Suryani
                </div>
                <div data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Kelahiran Kediri 14 November 1999
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex justify-center py-8">
            <font-awesome-icon icon="fa-solid fa-venus-mars" class="text-6xl text-slate-500" />
        </div>
        <div class="md:flex md:flex-wrap">
            <div class="md:flex md:flex-col sm:h-1/2 p-4 md:w-1/2 text-center md:text-right">
                <div data-aos="fade-up" data-aos-duration="1500" class="flex flex-row md:text-4xl text-2xl font-bold">
                    Teo Anggara Nur Ramadhana
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Putra pertama dari pasangan Bapak Sumaryono dan Ibu Titin Sunarminingsih
                </div>
                <div data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1500"
                    class="flex flex-row md:text-2xl text-xl p-2">
                    Kelahiran Kediri 23 Desember 1998
                </div>
            </div>
            <div class="md:flex md:flex-row h-screen md:w-1/2">
                <div data-aos="fade-down" data-aos-duration="1500" class="flex h-full sm:flex-row w-full">
                    <div class="w-full h-full bg-center bg-contain bg-no-repeat"
                        :style="{ backgroundImage: `url(${require('~/assets/bg-undangan/DSC00109.JPG')})` }">
                        <div class="block md:hidden text-2xl font-medium text-center p-4">Mempelai Laki-laki</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row text-4xl border-2 border-yellow-500">
            2
            <vac :end-time="startTime">
                <span slot="process" slot-scope="{ timeObj }" class="text-base text-slate-500">
                    {{ `${timeObj.d} hari ${timeObj.h} jam ${timeObj.m} menit ${timeObj.s} detik` }}
                </span>
                <!-- <span slot="finish"></span> -->
            </vac>
            <button @click="addToCalendar">{{ 'simpan di google calendar' }}</button>
        </div>
    </div>
</template>
<script>
import aos from '~/plugins/aos'

export default {
    mixins: [aos],
    data() {
        return {
            googleCalendarLink: null,
            startTime: new Date("2023-01-29 8:00 am"),
            endTime: new Date("2023-01-29 8:00 pm"),
            title: "Nikahnya Ema Ruly Pratiwi & Teo Anggara",
            details: "Kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara",
            location: "Plemahan, Kediri"
        };
    },
    methods: {
        addToCalendar() {
            if (!this.startTime)
                return console.warn("prop: startTime is required");
            if (!this.endTime)
                return console.warn("prop: endTime is required");
            if (!this.title)
                return console.warn("prop: title is required");
            // this.googleCalendarLink = `http://www.google.com/calendar/event?action=TEMPLATE&text=${this.title || ""}&dates=${this.formatDate(this.startTime)}/${this.formatDate(this.endTime)}&details=${this.details || ""}&location=${this.location || ""}`
            this.googleCalendarLink = `https://www.google.com/calendar/event?action=TEMPLATE&text=${this.title}&details=${this.details}&location=${this.location}&dates=20230129T010000Z/20230129T130000Z`;
            // prod
            // this.googleCalendarLink = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Nikahnya Ema Ruly Pratiwi & Teo Anggara&details=Kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara&location=Plemahan, Kediri&dates=20230226T010000Z/20230226T130000Z'
            // dev
            // this.googleCalendarLink = 'https://www.google.com/calendar/event?action=TEMPLATE&text=judul&details=deskripsi&location=lokasi&dates=20230226T010000Z/20230226T130000Z'
            window.open(this.googleCalendarLink, "_blank");
            // 'https://www.google.com/calendar/render?action=TEMPLATE&text=judul&details=deskripsi&location=lokasi&dates=20230226T010000Z/20230226T130000Z'
            // wib to z
            // 00   |   17  =   0   +   17
            // 01   |   18  =   1   +   17
            // 02   |   19  =   2   +   17
            // 03   |   20  =   3   +   17
            // 04   |   21  =   4   +   17
            // 05   |   22  =   5   +   17
            // 06   |   23  =   6   +   17
            // 07   |   00  =   7   -   7
            // 08   |   01  =   8   -   7
            // 09   |   02  =   9   -   7
            // 10   |   03  =   10  -   7
            // 11   |   04  =   11  -   7
            // 12   |   05  =   12  -   7
            // 13   |   06  =   13  -   7
            // 14   |   07  =   14  -   7
            // 15   |   08  =   15  -   7
            // 16   |   09  =   16  -   7
            // 17   |   10  =   17  -   7
            // 18   |   11  =   18  -   7
            // 19   |   12  =   19  -   7
            // 20   |   13  =   20  -   7
            // 21   |   14  =   21  -   7
            // 22   |   15  =   22  -   7
            // 23   |   16  =   23  -   7
        },
        formatDate(date) {
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            let formatted_date;
            if (hour === 0 && minutes === 0) {
                formatted_date = ("" + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day);
            }
            else {
                formatted_date = ("" + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day) + "T" + this.zero_pad2((hour)) + this.zero_pad2(minutes) + "00Z";
            }
            return formatted_date;
        },
        zero_pad2(num) {
            if (num < 10)
                return "0" + num;
            return num;
        }
    }
}
</script>