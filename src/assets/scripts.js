const methods = {
  getlpc(structures) {
    var lpc = 1;
    for (var i = 0; i < structures.length; i++) {
      if (structures[i].lpc)
        lpc +=
          structures[i].lpc *
          structures[i].level *
          (1 + structures[i].upgradelevel / 2);
    }

    return lpc;
  },

  getlps(structures) {
    var lps = 0;
    for (var i = 0; i < this.structures.length; i++) {
      if (this.structures[i].lps)
        lps +=
          structures[i].lps *
          structures[i].level *
          (1 + structures[i].upgradelevel / 2);
    }
    return lps;
  }
};
export default methods;
