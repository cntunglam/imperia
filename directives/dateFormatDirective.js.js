// dateFormatDirective.js

export default {
    inserted(el) {
      el.placeholder = 'dd/mm/yyyy';
      el.addEventListener('input', function() {
        let value = el.value;
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Format as dd/mm/yyyy
        el.value = value;
        if (value === 'dd/mm/yyyy') {
          el.value = ''; // Clear the input if it matches the placeholder
        }
      });
    }
  };
  