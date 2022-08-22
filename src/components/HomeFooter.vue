<template>
  <footer class="m-footer">
    <div class="_wr">
        <div class="_w">
            <SocialIcons />
            <NavBarList childClass="-footer" />
            <a href="#" class="a-icon -circle icon-top"></a>
        </div>
    </div>
  </footer>
</template>

<script>
import SocialIcons from "./SocialIcons.vue";
import NavBarList from "./NavBarList.vue";

export default {
    components: { SocialIcons, NavBarList },
}
</script>

<style>

</style>