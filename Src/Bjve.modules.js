
/* =========================
   BJVE MODULE SYSTEM
========================= */

BJVE.modules = (function () {

  const modules = {};

  return {

    register(name, fn) {
      modules[name] = fn;
    },

    use(name) {
      if (!modules[name]) {
        console.error("[BJVE] Module not found:", name);
        return;
      }
      return modules[name]();
    },

    list() {
      return Object.keys(modules);
    }

  };

})();
