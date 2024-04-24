<template>
    <div class="custom-date-input">
      <input
        type="date"
        class="w-full custom-date-input md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        v-model="selectedDate"
        @input="updatePlaceholderVisibility"
      />
      <span v-if="isIPhone && !selectedDate" class="placeholder">Date Of Birth</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: '',
        isIPhone: false
      };
    },
    mounted() {
      // Detect if the user agent is an iPhone
      this.isIPhone = /(iPhone|iPod)/.test(navigator.userAgent);
    },
    methods: {
      updatePlaceholderVisibility() {
        // This method ensures the placeholder is shown when the input is empty
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-date-input {
    position: relative;
  }
  
  .input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: left;
  }
  
  .placeholder {
    @apply md:text-[10px] text-[12px] uppercase;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999; /* Set the color of the placeholder */
    pointer-events: none; /* Ensure the placeholder text doesn't interfere with input */
  }
  </style>
  