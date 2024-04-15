<template>
  <div>
    <div class="container">
      <h2 class="mt-4 mb-4"><i class="bi bi-list"></i> Lista de Terremotos</h2>
      <SearchComponent @search="searchFeatures" />
      <div class="row">
        <div class="col-md-4 mb-3" v-for="feature in features" :key="feature.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><a class="text-decoration-none text-black" :href="feature.links.external_url" target="_blank"><i class="bi bi-globe-americas"></i> {{ feature.attributes.title }}</a></h5>
              <p class="card-text">
                <strong><i class="bi bi-geo-alt-fill"></i> Lugar:</strong> {{ feature.attributes.place }}<br>
                <strong><i class="bi bi-water"></i> Magnitud:</strong> {{ feature.attributes.magnitude }}<br>
                <strong><i class="bi bi-compass-fill"></i> Fecha y hora:</strong> {{ feature.attributes.time }}<br>
                <strong><i class="bi bi-crosshair2"></i> Latitud:</strong> {{ feature.attributes.coordinates.latitude }}<br>
                <strong><i class="bi bi-crosshair2"></i> Longitud:</strong> {{ feature.attributes.coordinates.longitude }}<br>
              </p>
              <div class="row">
                <div class="col-md-7">
                  <router-link class="btn btn-outline-success btn-sm" :to="{ name: 'comments', params: { featureId: feature.id } }"><i class="bi bi-plus-circle"></i> Agregar Comentario</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchComponent.vue';
import axios from 'axios';

export default {
  components: {
    SearchComponent
  },
  data() {
    return {
      features: [],
      currentPage: 1,
      totalPages: null,
      selectedMagType: 'md'
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/features', {
          params: {
            mag_type: this.selectedMagType,
            page: this.currentPage,
            per_page: 30
          }
        });
        this.features = response.data.data;
        this.totalPages = response.data.pagination.total_pages;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    searchFeatures(selectedMagType) {
      this.selectedMagType = selectedMagType;
      this.fetchData();
    }
  }
};
</script>