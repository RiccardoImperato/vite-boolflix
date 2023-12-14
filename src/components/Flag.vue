<script >

export default {
    props: {
        lang: String
    }
}
</script>

<template>
    <div>
        <div>Lingua originale: <span>{{ lang }}</span></div>
    </div>
</template>

<style scoped>
span {
    text-transform: uppercase;
}
</style>