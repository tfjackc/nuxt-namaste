<template>
  <v-app-bar :elevation="9"
  color="green-lighten-4"
  title="Michelle Phillips"
  ></v-app-bar>
  <v-container>
    <v-row>



  <div class="top-div d-flex justify-center">
  <v-col cols="12" md="8" class="mx-auto">
  <v-card class="pb-5 pt-5 shadow-lg rounded"
           image="~/assets/hawaii_sunset.jpg">
    <v-container class="py-5 text-center">
      <v-row class="py-lg-5">
        <v-col cols="12" md="8" lg="6" class="mx-auto">
          <v-card class="welcome">
            <v-card-title>Welcome</v-card-title>
            <v-card-text>I am a RYT 200 hr certified yoga teacher. My specialty is hatha yoga that pairs movement with story. I love bringing specific intentions to my classes that relate to holidays, sun and moon cycles, and personal growth goals. Book me for your festival, bachelorette party or a simple Sunday morning and I will cater our practice to your event needs!
            </v-card-text>
          </v-card>
          <v-col cols="auto">
            <v-dialog
                transition="dialog-top-transition"
                width="600"
            >
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" color="light-green-lighten-3" size="large" variant="elevated">Book Event</v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar
                      color="grey-lighten-5"
                      title="Yoga Teaching & Sessions"
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
                        color="grey-darken-1"
                    >Close</v-btn>
                    <v-btn
                        variant="elevated"
                        color="light-green-lighten-3"
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
    </v-col>
  </div>
    </v-row>
    <v-row>
  <div class="bottom-div d-flex justify-center">
       <v-card class="pb-5 pt-5 shadow-lg rounded bottom-card"
      image="~/assets/oceanView.jpg">
         <v-container class="py-5 text-center">
           <v-carousel hide-delimiters>
             <v-carousel-item>
                 <v-card color="transparent"
                 elevation="10">
                    <v-card-title
                        >New Year Yoga - You Are Awesome!</v-card-title>
                    <v-card-text>
                      <video controls width="600" poster="https://herokustatic.s3.us-west-2.amazonaws.com/vid1_ss.png">
                        <source src="https://herokustatic.s3.us-west-2.amazonaws.com/NewYear.mp4" type="video/mp4" />
                      </video>
                    </v-card-text>
                 </v-card>
             </v-carousel-item>
             <v-carousel-item>
               <v-card color="transparent"
                       elevation="10">
                 <v-card-title
                 >Deepening Through Grounding</v-card-title>
                 <v-card-text>
                   <video controls width="600" poster="https://herokustatic.s3.us-west-2.amazonaws.com/vid2_ss.png">
                     <source src="https://herokustatic.s3.us-west-2.amazonaws.com/Grounding.mp4" type="video/mp4" />
                   </video>
                 </v-card-text>
               </v-card>
             </v-carousel-item>
             <v-carousel-item>
               <v-card color="transparent"
                       elevation="10">
                 <v-card-title
                 >Daylight Savings Time (Yoga for Morning)</v-card-title>
                 <v-card-text>
                   <video controls width="600" poster="https://herokustatic.s3.us-west-2.amazonaws.com/vid3_ss.png">
                     <source src="https://herokustatic.s3.us-west-2.amazonaws.com/Daylight_Savings.mp4" type="video/mp4" />
                   </video>
                 </v-card-text>
               </v-card>
             </v-carousel-item>
             <v-carousel-item>
               <v-card color="transparent"
                       elevation="10">
                 <v-card-title
                 >Deepening Through Alignment</v-card-title>
                 <v-card-text>
                   <video controls width="600" poster="https://herokustatic.s3.us-west-2.amazonaws.com/vid4_ss.png">
                     <source src="https://herokustatic.s3.us-west-2.amazonaws.com/Alignment.mp44" type="video/mp4" />
                   </video>
                 </v-card-text>
               </v-card>
             </v-carousel-item>
           </v-carousel>
         </v-container>
    </v-card>
  </div>
    </v-row>
  </v-container>

</template>

<script setup lang="ts">

</script>
