<template>
  <v-row dense>
    <div v-for="structure in structures" :key="structure.name">
      <v-col :cols="12">
        <v-card elevation="2" width="250">
          <v-card-title class="justify-center">{{
            structure.name
          }}</v-card-title>
          <v-card-subtitle class="justify-center">
            Livello attuale: {{ $toExponential(structure.level) }}
          </v-card-subtitle>
          <v-card-text class="justify-center" style="font-style: italic">
            {{ structure.desc }}
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
                structure.basecost *
                  Math.pow(structure.growrate, structure.level)
              "
            >
              <v-icon>mdi-beer</v-icon>
              {{
                $toExponential(
                  Math.round(
                    structure.basecost *
                      Math.pow(structure.growrate, structure.level)
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
  name: "show-structures",
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
        structure.basecost * Math.pow(structure.growrate, structure.level);
      if (this.lemonades >= cost) {
        this.$emit("updatelemonades", this.lemonades - cost);
        structure.level++;
      }
    },
  },
};
</script>