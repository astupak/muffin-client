<template>
  <app-entry-layout>
    <template>
      <tabs grow :items="tabsItems"/>
      <router-view />      
    </template>
  </app-entry-layout>
</template>

<script>
import EntryLayout from '@/shared/layouts/entry/entryLayout';
import Tabs from '@/shared/components/tabs';

export default {
  components: {
    'app-entry-layout': EntryLayout,
    tabs: Tabs,
  },
  data() {
    return {
      tabsItems: [{
        text: 'Log In',
        href: '/login',
      }, {
        text: 'Join',
        href: '/join',
      }],
    };
  },
};
</script>
