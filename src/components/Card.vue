<script >
export default {
    // Card proprs from AppMain
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number,
        img: String,
        overview: String
    },
    components: {
    },
    // rate is divided by 2 to get the number of full stars  
    computed: {
        getStars() {
            return Math.ceil(this.rate / 2);
        }
    }
}
</script>

<template>
    <!-- Movies and Series cover -->
    <div class="cover">
        <img v-if="img !== null" :src="'https://image.tmdb.org/t/p/w342' + img" :alt="title">
        <div v-else class="no-image">
            <h5>{{ title }}</h5>
        </div>
    </div>
    <!--/ Movies and Series cover -->
    <!-- Movies - Series info -->
    <div class="info">
        <!-- Title -->
        <h3>{{ title }}</h3>
        <div v-if="title !== ogTitle">
            Titolo originale: <h4>{{ ogTitle }}</h4>
        </div>
        <!--/ Title -->
        <!-- Stars rating -->
        <ul>
            <!-- Full stars -->
            <li v-for="n in getStars" class="solid">
                <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <!--/ Full stars -->
            <!-- Empty stars -->
            <li v-for="n in 5 - getStars" class="regular">
                <font-awesome-icon icon="fa-regular fa-star" />
            </li>
            <!--/ Empty stars -->
        </ul>
        <!--/ Stars rating -->
        <!-- Flag -->
        <div class="flag">
            <div v-if="lang === 'it'" class="language">
                <img src="https://cdn.pixabay.com/photo/2012/04/01/19/18/flag-24134_1280.png">
            </div>
            <div v-else-if="lang === 'en'" class="language">
                <img src="https://www.britain-visitor.com/images/content_images/union-flag-1.jpg">
            </div>
            <div class="language" v-else>Lingua originale: <span>{{ lang.toUpperCase() }}</span></div>
        </div>
        <!--/ Flag -->
        <!-- Overview -->
        <p>
        <h4>Overview:</h4>
        {{ overview }}
        </p>
        <!--/ Overview -->
    </div>
    <!--/ Movies/Series info -->
</template>

<style scoped lang="scss">
h4 {
    margin: 15px 0;
}

h3 {
    margin: 20px 0;
}

img {
    height: 550px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.cover {
    width: 100%;
}

.info {
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.9);
    opacity: 0;
    overflow-y: auto;

    &:hover {
        opacity: 1;
    }
}

.no-image {
    text-align: center;
    font-size: 50px;
    padding: 20px;
    color: #fff;
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

.language {

    margin-top: 20px;

    img {
        display: block;
        width: 50px;
        height: 30px;
    }

    span {
        text-transform: uppercase;
    }
}
</style>
