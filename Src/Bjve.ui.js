
/* =========================
   BJVE UI SYSTEM (OpenDraw WRAPPER)
========================= */

BJVE.ui = (function () {

  return {

    open(html, options = {}) {
      return OpenDraw(HTML(html), options);
    }

  };

})();
