<template>
  <v-row dense>
    <div v-for="structure in structures" :key="structure.name">
      <v-col :cols="12">
        <v-card elevation="2" width="250">
          <v-card-title class="justify-center">{{
            structure.name
          }}</v-card-title>
          <v-card-subtitle class="justify-center">
            Livello attuale:
            {{ $toExponential(structure.upgradelevel) }}
          </v-card-subtitle>
          <v-card-text class="justify-center">
            Efficacia +50%<br />
            Moltiplicatore attuale:
            {{ $toExponential((structure.upgradelevel / 2) * 100) }}%
          </v-card-text>
          <v-card-text class="justify-center" v-if="structure.lpc">
            +{{
              $toExponential(
                Math.round(
                  structure.lpc *
                    structure.level *
                    (1 + structure.upgradelevel / 2)
                )
              )
            }}
            limonate per click
          </v-card-text>
          <v-card-text class="justify-center" v-if="structure.lps">
            +{{
              $toExponential(
                Math.round(
                  structure.lps *
                    structure.level *
                    (1 + structure.upgradelevel / 2)
                )
              )
            }}
            limonate al secondo
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="yellow"
              block
              @click="buy(structure)"
              v-bind:disabled="
                lemonades <
                structure.upgradebasecost *
                  Math.pow(structure.growrate, structure.upgradelevel)
              "
            >
              <v-icon>mdi-beer</v-icon>
              {{
                $toExponential(
                  Math.round(
                    structure.upgradebasecost *
                      Math.pow(structure.growrate, structure.upgradelevel)
                  )
                )
              }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "show-upgrades",
  props: {
    structures: Array,
    lemonades: Number,
  },

  data() {
    return {};
  },

  methods: {
    buy(structure) {
      var cost =
        structure.upgradebasecost *
        Math.pow(structure.growrate, structure.upgradelevel);
      if (this.lemonades >= cost) {
        this.$emit("updatelemonades", this.lemonades - cost);
        structure.upgradelevel++;
      }
    },
  },
};
</script>