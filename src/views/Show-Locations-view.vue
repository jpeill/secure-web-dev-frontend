<style>
  td {
    text-align: center;
  }
</style>
<template>
    
    <div>
      <table style="margin: 0 auto;">
        <thead>
          <tr>
            <th>Nom du Film</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedData" :key="item.id">
            <td>{{ item.filmName }}</td>
          </tr>
        </tbody>
      </table>
      <br />
        <br />
      <div class="pagination">
        <button @click="prevPage">Prev</button>
        {{ currentPage }} / {{ totalPages }}
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {  
    data() {
    return {
      data : this.$store.state.locations,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
 
    computed: {
    ...mapState({
      locations : (state) => state.locations,
    }),
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
}

  
  </script>