<template>
  <v-app-bar :elevation="9"
  color="green-lighten-4"
  title="Michelle Phillips"
  ></v-app-bar>
  <v-card class="pb-5 pt-5 shadow-lg rounded"
           image="~/assets/hawaii_sunset.jpg">
    <v-container class="py-5 text-center">
      <v-row class="py-lg-5">
        <v-col cols="12" md="8" lg="6" class="mx-auto">
          <h1 class="fw-light">Welcome</h1>
          <p id="blurb" class="lead bg-dark text-white rounded bg-opacity-50 shadow-lg">I am a RYT 200 hr certified yoga teacher. My specialty is hatha yoga that pairs movement with story. I love bringing specific intentions to my classes that relate to holidays, sun and moon cycles, and personal growth goals. Book me for your festival, bachelorette party or a simple Sunday morning and I will cater our practice to your event needs!</p>

          <v-col cols="auto">
            <v-dialog
                transition="dialog-top-transition"
                width="600"
            >
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" color="primary" size="large" variant="elevated">Book Event</v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar
                      color="primary"
                      title="Book Event"
                  ></v-toolbar>
                  <v-card-text class="book-event">
                    <v-form>
                      <v-text-field
                          label="Name"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Email"
                          required
                      ></v-text-field>
                      <v-textarea
                          label="Message"
                          required>
                      </v-textarea>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                        variant="elevated"
                        @click="isActive.value = false"
                        color="primary"
                    >Submit</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">

</script>
