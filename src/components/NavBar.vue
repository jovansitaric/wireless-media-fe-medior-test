<template>
    <nav class="m-navbar">
        <div class="_wr-f">
            <div class="_w -aic -jcsb">
                <img src="../assets/images/logo.png" alt="wireless media logo">
                <ul class="m-list -nav">
                    <li v-for="item in navList" :key="item.id" class="m-list__item"><a href="#" class="m-list__item--link">{{ item.text }}</a></li>
                </ul>
                <span class="a-icon icon-search"></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

    data() {

        return {

            navList: [
                {
                    "id": 1,
                    "text": "Home",
                    "slug": "#"
                },
                {
                    "id": 2,
                    "text": "About Us",
                    "slug": "#"
                },
                {
                    "id": 3,
                    "text": "Our Work",
                    "slug": "#"
                },
                {
                    "id": 1,
                    "text": "Contact",
                    "slug": "#"
                }
            ]
        }
    }
}
</script>

<style>

</style>