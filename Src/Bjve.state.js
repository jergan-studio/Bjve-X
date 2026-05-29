
/* =========================
   BJVE STATE SYSTEM
========================= */

BJVE.state = (function () {

  const store = {};

  return {

    // set value
    set(key, value) {
      store[key] = value;
    },

    // get value
    get(key) {
      return store[key];
    },

    // get full state
    all() {
      return store;
    }

  };

})();
