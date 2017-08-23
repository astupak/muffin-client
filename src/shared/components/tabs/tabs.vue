<template>
  <v-tabs 
    :centered = "centered"
    :fixed = "fixed"
    :grow = "grow"
    :icons = "icons"
    :scrollable = "scrollable"
    :dark = "dark"
    :color = "color"
  >
    <v-tabs-bar :class='color' slot="activators">
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
      color: {
        type: String,
        default: 'secondary',
      },
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
