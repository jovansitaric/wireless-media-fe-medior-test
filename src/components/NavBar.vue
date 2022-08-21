<template>
    <nav class="m-navbar">
        <div class="_wr">
            <div class="_w -aic -jcsb">
                <img class="m-navbar__logo" src="../assets/images/logo.png" alt="wireless media logo">
                <NavBarList class="-nav" />
                <span class="a-icon icon-search"></span>
            </div>
        </div>
    </nav>
</template>

<script>
import NavBarList from './NavBarList.vue';
export default {
    components: { NavBarList }
}
</script>

<style>

</style>