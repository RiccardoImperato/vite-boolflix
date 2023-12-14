<script >
import Flag from './Flag.vue';

export default {
    props: {
        title: String,
        ogTitle: String,
        lang: String,
        rate: Number
    },
}
</script>

<template>
    <div>
        <h4>
            {{ title }} - Movie
        </h4>
        <div>
            Titolo originale: {{ ogTitle }}
        </div>
        <div>
            Voto: {{ rate }}
        </div>
    </div>
</template>

<style scoped></style>
