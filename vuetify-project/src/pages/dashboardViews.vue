<template>
  <v-card class="">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        temporary
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- content main page -->
      <v-main style="height: auto">
        <MenuList class="mt-5"></MenuList>
        <div class="d-flex mt-5">
          <!-- Kolom pertama untuk StepperList -->
          <div style="width: 30%">
            <StepperList />
            <v-divider
              :thickness="12"
              color="info"
              style="width: 100%"
            ></v-divider>
            <StepperList />
          </div>

          <!-- Kolom kedua untuk NotesList menggunakan Grid Vuetify -->
          <v-container fluid style="width: 70%">
            <v-row>
              <!-- Mengatur NotesList agar setiap elemen mengambil 1/3 kolom pada layar sedang ke atas -->
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <NotesList />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div>
        <MyEditor/>
      </div>
      </v-main>
      
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import MenuList from "../components/MenuList.vue";
import StepperList from "@/components/StepperList.vue";
import NotesList from "@/components/NotesList.vue";
import MyEditor from "@/components/MyEditor.vue";

const drawer = ref(true);
const rail = ref(true);
</script>
