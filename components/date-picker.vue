<template>
    <div>
      <input 
        type="text"
        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        id="birthdate"
        name="birthdate"
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        autocomplete="off"
        :value="formattedDate"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        birthdate: '', // Initialize birthdate as empty
      };
    },
    computed: {
      formattedDate() {
        if (!this.birthdate || this.birthdate === 'DD/MM/YYYY') {
          return 'DD/MM/YYYY'; // Display placeholder if birthdate is empty or placeholder
        }
        // Ensure the value follows the DD/MM/YYYY format
        const [day, month, year] = this.birthdate.split('/');
        const formattedDay = day.padStart(2, '0');
        const formattedMonth = month.padStart(2, '0');
        const formattedYear = year.padStart(4, '0');
        return `${formattedDay}/${formattedMonth}/${formattedYear}`;
      }
    },
    methods: {
      handleInput(event) {
        // Allow only digits and slashes
        const newValue = event.target.value.replace(/[^\d/]/g, '');
        this.birthdate = newValue;
      },
      handleFocus() {
        if (this.birthdate === 'DD/MM/YYYY') {
          this.birthdate = ''; // Clear placeholder when focused
        }
      },
      handleBlur() {
        if (!this.birthdate.trim()) {
          this.birthdate = 'DD/MM/YYYY'; // Reset to placeholder if empty
        }
      }
    }
  };
  </script>
  