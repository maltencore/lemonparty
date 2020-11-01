<template>
  <v-row dense>
    <v-col :cols="12">
      <v-card>
        <v-card-title class="justify-center text-h3">Totale</v-card-title>
        <v-card-text class="justify-center text-h5">
          Limonate: {{ $toExponential(Math.round(lemonades)) }}<br />
          Limonate per click:
          {{ $toExponential(Math.round(getlpc(structures))) }} <br />
          Limonate al secondo:
          {{ $toExponential(Math.round(getlps(structures))) }}<br />
          Click totali: {{ $toExponential(clicks) }}
        </v-card-text>
      </v-card>
    </v-col>
    <div v-for="structure in structures" :key="structure.name">
      <v-col :cols="12">
        <v-card elevation="2" width="250">
          <v-card-title class="justify-center">
            {{ structure.name }}
          </v-card-title>
          <v-card-text class="justify-center">
            Livello attuale: {{ $toExponential(structure.level) }}<br />
            Moltiplicatore:
            {{ $toExponential((structure.upgradelevel / 2) * 100) }}%<br />
            <p v-if="structure.lpc">
              Limonate per click:
              {{
                $toExponential(
                  Math.round(
                    structure.lpc *
                      structure.level *
                      (1 + structure.upgradelevel / 2)
                  )
                )
              }}
            </p>
            <p v-if="structure.lps">
              Limonate al secondo:
              {{
                $toExponential(
                  Math.round(
                    structure.lps *
                      structure.level *
                      (1 + structure.upgradelevel / 2)
                  )
                )
              }}
            </p>
          </v-card-text>
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
    clicks: Number,
    getlpc: Function,
    getlps: Function,
  },
};
</script>