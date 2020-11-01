<style>
@import "./assets/styles/style.css";
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css";
@import "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css";
</style>

<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js" integrity="sha512-kp7YHLxuJDJcOzStgd6vtpxr4ZU9kjn77e6dBsivSz+pUuAuMlE2UTdKB7jjsWT84qbS8kdCWHPETnP/ctrFsA==" crossorigin="anonymous"></script>
<script src="./assets/application.js"></script>

<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container class="grey lighten-5">
          <v-row>
            <v-col>
              <v-btn
                x-large
                color="yellow"
                @click="
                  lemonades += getlpc(structures);
                  clicks++;
                "
                class="text-h4"
                block
              >
                <v-icon x-large>mdi-beer</v-icon>
                {{ $toExponential(Math.round(lemonades)) }}
              </v-btn>
            </v-col>
          </v-row>

          <v-row style="margin-top: 100px">
            <v-col>
              <v-card>
                <v-tabs
                  v-model="tab"
                  background-color="yellow accent-4"
                  centered
                  icons-and-text
                >
                  <v-tabs-slider></v-tabs-slider>

                  <v-tab href="#tabstrutture">
                    Strutture
                    <v-icon>mdi-hexagon</v-icon>
                  </v-tab>

                  <v-tab href="#tabpotenziamenti">
                    Potenziamentissssssss
                    <v-icon>mdi-trending-up</v-icon>
                  </v-tab>

                  <v-tab href="#tabstats">
                    Statistiche
                    <v-icon>mdi-television-guide</v-icon>
                  </v-tab>

                  <v-tab href="#tabachievements">
                    Obiettivi
                    <v-icon>mdi-trophy-variant</v-icon>
                  </v-tab>

                  <v-tab href="#tabsettings">
                    Impostazioni
                    <v-icon>mdi-apps</v-icon>
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item :value="'tabstrutture'">
                    <v-card flat>
                      <v-card-text>
                        <show-structures
                          v-bind:lemonades="lemonades"
                          v-bind:structures="structures"
                          @updatelemonades="lemonades = $event"
                        ></show-structures>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item :value="'tabpotenziamenti'">
                    <v-card flat>
                      <v-card-text>
                        <show-upgrades
                          v-bind:lemonades="lemonades"
                          v-bind:structures="structures"
                          @updatelemonades="lemonades = $event"
                        ></show-upgrades>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item :value="'tabstats'">
                    <v-card flat>
                      <v-card-text>
                        <show-stats
                          v-bind:lemonades="lemonades"
                          v-bind:structures="structures"
                          v-bind:getlpc="getlpc"
                          v-bind:getlps="getlps"
                          v-bind:clicks="clicks"
                        ></show-stats>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item :value="'tabachievements'">
                    <v-card flat>
                      <v-card-text>
                        <show-achievements
                          v-bind:achievements="achievements"
                        ></show-achievements>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item :value="'tabsettings'">
                    <v-card flat>
                      <v-card-text>
                        <show-settings
                          v-bind:settings="settings"
                        ></show-settings>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>