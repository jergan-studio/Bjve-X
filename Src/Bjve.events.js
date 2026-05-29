
/* =========================
   BJVE EVENT SYSTEM
========================= */

BJVE.events = (function () {

  return {

    on(event, fn) {
      document.addEventListener("bjve:" + event, fn);
    },

    emit(event, data) {
      document.dispatchEvent(
        new CustomEvent("bjve:" + event, {
          detail: data
        })
      );
    }

  };

})();
