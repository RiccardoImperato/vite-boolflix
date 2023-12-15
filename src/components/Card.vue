<script >
import Flag from './Flag.vue';

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number,
        img: String,
        bdpath: String
    },
    components: {
        Flag
    },
    computed: {
        getStars() {
            return Math.ceil(this.rate / 2);
        }
    }
}
</script>

<template>
    <h3>
        {{ title }}
    </h3>
    <div class="card">
        <div>
            <img v-if="img !== null" :src="'https://image.tmdb.org/t/p/w780' + img" :alt="title">
            <div v-else class="no-image">
                <font-awesome-icon icon="fa-regular fa-image" />
            </div>
        </div>
        <div v-if="title !== ogTitle">
            Titolo originale: <h4>{{ ogTitle }}</h4>
        </div>
        <ul>
            <li v-for="n in getStars" class="solid">
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-for="n in 5 - getStars" class="regular">
                <font-awesome-icon icon="fa-regular fa-star" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 342px;

    h4 {
        margin: 15px 0;
    }

    h3 {
        margin: 20px 0;
    }

    img {
        display: block;
        height: 480px;
        width: 342px;
        margin-bottom: 10px;
    }

    .no-image {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        height: 480px;
        width: 342px;
        margin-bottom: 10px;
        color: #fff;
        background-color: #c4c4c4;
    }

    ul {
        padding: 0;
        list-style-type: none;
        display: flex;

        .solid {
            color: #daa520;
        }

        .regular {
            color: #888;
        }
    }
}
</style>
