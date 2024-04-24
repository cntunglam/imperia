<template>
    <v-date-picker
      v-model="selectedDate"
      @input="emitSelectedDate"
      scrollable
      min="2022-01-01"
      max="2024-12-31"
      :landscape="$vuetify.breakpoint.lgAndUp"
    ></v-date-picker>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: null
      };
    },
    methods: {
      emitSelectedDate() {
        this.$emit('selected', this.selectedDate);
      }
    }
  };
  </script>
  