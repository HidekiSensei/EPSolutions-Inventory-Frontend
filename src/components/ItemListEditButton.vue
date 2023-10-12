<template>
  <td width="50">
    <v-spacer></v-spacer>
    <v-btn icon="mdi-dots-vertical" @click="dialog = true"></v-btn>
  </td>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="auto"
    >
      <v-card>
        <v-card-item>
          <template v-slot:prepend>
            <v-card-title class="text-h5">
                Item: "Item Name"
            </v-card-title>
          </template>
          <template v-slot:append>
            <v-btn
              color="green-darken-1"
              icon="mdi-close"
              variant="text"
              class="ms-5"
              @click="dialog = false"
            ></v-btn>
          </template>
        </v-card-item>
        <v-card-text>Hier kommt der Item Content rein, welcher editierbar sein wird</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Speichern
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>
