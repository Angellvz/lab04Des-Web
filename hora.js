module.exports = {
    // Retorna la hora en formato de 24 horas (HH:mm:ss)
    format24: function() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    },
  
    // Retorna la hora en formato de 12 horas (hh:mm:ss AM/PM)
    format12: function() {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    },
  
    // Retorna la hora en formato de timestamp (milisegundos desde el 1 de enero de 1970)
    timestamp: function() {
      return Date.now();
    }
  };
  