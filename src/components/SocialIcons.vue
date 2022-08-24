<template>
  <div class="m-social -footer">
    <a href="javascript: void(0);" v-for="social in socialIcons" :key="social.id" class="a-icon -circle" :class="`icon-${social.icon}`" @click="preventDefault"></a>
  </div>
</template>

<script>
export default {

    data() {

        return {

            socialIcons: [
                {
                    "id": 1,
                    "icon": "facebook"
                },
                {
                    "id": 2,
                    "icon": "twitter"
                },
                {
                    "id": 3,
                    "icon": "email"
                }
            ]
        }
    },

    methods: {

        preventDefault(e) {

            if (e) { e.preventDefault(); }
        }
    }
}
</script>

<style>

</style>