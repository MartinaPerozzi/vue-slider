
// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            movie: {
                title: "Novità",
                category: "Entertainment",
                images: [
                    "./img/01.webp",
                    "./img/02.webp",
                    "./img/03.webp",
                    "./img/04.webp",
                    "./img/05.webp",
                ],

                activeImage: 0,
                doAutoplay: true,
            }


        }

    },

    methods: {
        prevSlide() {
            if (this.movie.activeImage - 1 < 0) {
                this.movie.activeImage = this.movie.images.length - 1;
            } else {
                this.movie.activeImage--;
            }
        },


        nextSlide() {
            if (this.movie.activeImage + 1 >= this.movie.images.length) {
                this.movie.activeImage = 0;
            } else {
                this.movie.activeImage++;
            }

        },

        switchImage(index) {
            this.movie.activeImage = index;
        },

        stopAutoPlay() {
            doAutoplay = false;
            // clearInterval();
        }

    },

    created() {
        setInterval(() => {
            if (doAutoplay = true) {
                this.nextSlide();
            } else {
                clearInterval();
            }

        }, 2000)

    },




});
app.mount("#root");