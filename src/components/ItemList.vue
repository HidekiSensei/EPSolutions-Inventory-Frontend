<template>
  <v-table
    fixed-header
    height="300px"
    v-if="!loading"
  >
    <thead color="dark">
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Menge
        </th>
        <th class="test-right">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in allItems" :key="item.item_name">
        <td>{{ item.item_name }}</td>
        <td>{{ item.total_amount }}</td>
        <ItemListEditButton />
      </tr>
    </tbody>
  </v-table>
  <v-progress-linear
      v-else
      indeterminate
      color="primary"
    ></v-progress-linear>
</template>

<script lang="ts" setup>
import ItemListEditButton from '@/components/ItemListEditButton.vue'
</script>

<script lang="ts">
import axios from 'axios';

type SubCabinet = {
  id_cabinet: number
  location: string
  room: string
  amount: number
}

type Item = {
  item_name: string
  total_amount: number
  cabinets: Array<SubCabinet>
}

export default {
  data () {
    return {
      allItems: [] as Array<Item>,
      loading: true,
    }
  }, methods: {
    async loadItems() {
      try {
        const response = await axios.get('http://localhost:8080/item/all');
        this.allItems = response.data as Array<Item>;
      } catch (error) {
        console.error('Error loading items:', error);
      } finally {
        this.loading = false;
      }
    },
  }, mounted() {
    this.loadItems();
  }
}
</script>