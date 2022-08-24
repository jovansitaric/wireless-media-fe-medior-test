<template>
    <nav class="m-navbar">
        <div class="_wr">
            <div class="_w -aic -jcsb">
                <img class="m-navbar__logo" src="../assets/images/logo.png" alt="wireless media logo">
                <NavBarList :isMobileMenu="{ '-active': isMobileMenuActive }" />
                <span :class="{'-active': isMobileMenuActive}" class="a-icon icon-burger" @click="handleMobileMenu"></span>
                <span :class="{'-active': isSearchActive}" class="a-icon icon-search a-hover -color -effectOne" @click="handleSearch"></span>
                <input :class="{'-active': isSearchActive}" class="m-navbar__search" type="text" name="search" id="search" />
            </div>
        </div>
    </nav>
</template>

<script>
import NavBarList from './NavBarList.vue';
export default {

    data() {

        return {
            isMobileMenuActive: false,
            isSearchActive: false
        }
    },

    components: { NavBarList },

    methods: {

        handleMobileMenu() {
            if (this.isSearchActive) return;
            this.isMobileMenuActive = !this.isMobileMenuActive;
        },

        handleSearch() {
            if (this.isMobileMenuActive) return;
            this.isSearchActive = !this.isSearchActive;
        }
    }
}
</script>

<style>

</style>