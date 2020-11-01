export default {
  name: "app",

  components: {
    "show-structures": () => import("../components/show-structures"),
    "show-upgrades": () => import("../components/show-upgrades"),
    "show-stats": () => import("../components/show-stats"),
    "show-achievements": () => import("../components/show-achievements"),
    "show-settings": () => import("../components/show-settings")
  },

  data() {
    return {
      tab: null,

      lemonades: 0,
      clicks: 0,
      structures: this.$structures,
      achievements: this.$achievements,
      settings: this.$settings,

      getlpc: this.$methods.getlpc,
      getlps: this.$methods.getlps,

      pushStorage() {
        localStorage.setItem("lemonades", JSON.stringify(this.lemonades));
        localStorage.setItem("structures", JSON.stringify(this.structures));
        localStorage.setItem("achievements", JSON.stringify(this.achievements));
        localStorage.setItem("settings", JSON.stringify(this.settings));
      },

      pullStorage() {
        if (localStorage.getItem("structures")) {
          try {
            this.lemonades = JSON.parse(localStorage.getItem("lemonades"));
            this.structures = JSON.parse(localStorage.getItem("structures"));
            this.achievements = JSON.parse(
              localStorage.getItem("achievements")
            );
            this.settings = JSON.parse(localStorage.getItem("settings"));
          } catch (e) {
            localStorage.clear();
          }
        }
      }
    };
  },

  created() {
    this.pullStorage();

    this.lemonadesInterval = setInterval(
      () => (this.lemonades += this.getlps(this.structures) / 10),
      100
    );

    this.saveInterval = setInterval(() => this.pushStorage(), 5000);
  },

  beforeDestroy() {
    clearInterval(this.lemonadesInterval);
    clearInterval(this.saveInterval);
  }
};
