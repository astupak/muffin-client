<template>
  <v-tabs 
    :centered = "centered"
    :fixed = "fixed"
    :grow = "grow"
    :icons = "icons"
    :scrollable = "scrollable"
    :dark = "dark"
  >
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
       <v-tabs-item
        v-for="item in items"
        :to="item.href"
       >
       {{item.text}}
      </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
  export default {
    props: {
      items: Array,
      contents: Array,
      centered: Boolean,
      fixed: Boolean,
      grow: Boolean,
      icons: Boolean,
      dark: {
        type: Boolean,
        default: true,
      },
      scrollable: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>
