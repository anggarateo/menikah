<template>
    <div class="w-full h-full md:p-8 p-4 md:text-4xl text-2xl">
        <div class="h-screen">
            <div class="md:flex md:flex-wrap text-center">
                <div>Kami mengharap kehadiran Bapak/Ibu/Saudara(i) pada :</div>
            </div>
            <div class="flex flex-row p-4 gap-x-2">
                <div class="flex flex-col w-1/3">
                    <div class="flex justify-between">
                        <span>Hari</span>
                        <span>:</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Tanggal</span>
                        <span>:</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Waktu</span>
                        <span>:</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Tempat</span>
                        <span>:</span>
                    </div>
                </div>
                <div class="flex flex-col w-2/3">
                    <div>Minggu</div>
                    <div>29 Januari 2022</div>
                    <div>13.00 WIB</div>
                    <div>Mempelai Perempuan</div>
                </div>
            </div>
            <div class="my-4">
                <vac :end-time="startTime" class="text-slate-500 text-4xl">
                    <span slot="process" slot-scope="{ timeObj }">
                        <span class="flex flex-row">
                            <span class="flex flex-col w-1/2">{{ `${timeObj.d} hari` }}</span>
                            <span class="flex flex-col w-1/2">{{ `${timeObj.h} jam` }}</span>
                        </span>
                        <span class="flex flex-row">
                            <span class="flex flex-col w-1/2">{{ `${timeObj.m} menit` }}</span>
                            <span class="flex flex-col w-1/2">{{ `${timeObj.s} detik` }}</span>
                        </span>
                        <span class="flex flex-row justify-center p-2">Menuju Sah</span>
                    </span>
                </vac>
                <div class="flex justify-center">
                    <div class="text-center p-4 bg-white opacity-60 hover:opacity-75 rounded-xl cursor-pointer my-8"
                        @click="addToCalendar">{{ 'Simpan di Tanggalan Google' }}</div>
                </div>
            </div>
        </div>
        <div class="h-screen py-4">
            <div class="mapouter w-full h-4/5">
                <div class="gmap_canvas w-full h-full">
                    <iframe class="w-full h-full" id="gmap_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7907.115534425899!2d112.14220535390625!3d-7.730502899999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785de9f20fe349%3A0x162755f7b9c273be!2sRumah%20Ruly!5e0!3m2!1sen!2sus!4v1671783265196!5m2!1sen!2sus"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy"></iframe>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="md:hidden block text-center p-4 bg-white opacity-60 hover:opacity-75 rounded-xl cursor-pointer m-4"
                    @click="openMap">Buka
                    Map</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            googleCalendarLink: null,
            startTime: new Date("2023-01-29 8:00 am"),
            endTime: new Date("2023-01-29 8:00 pm"),
            title: "Nikahnya Ema Ruly Pratiwi & Teo Anggara",
            details: "Kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara",
            location: "Plemahan, Kediri",
            mapDir: null
        }
    },
    methods: {
        openMap() {
            this.mapDir = 'https://maps.google.com/maps/dir//Rumah+Ruly+Jalan+Puntodewo+No.32+Gebyaran,+Puhjarak+Kec.+Plemahan,+Kabupaten+Kediri,+Indonesia/@-7.7305029,112.1504451,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e785de9f20fe349:0x162755f7b9c273be'
            window.open(this.mapDir, "_blank")
        },
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