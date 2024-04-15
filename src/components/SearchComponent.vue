<template>
  <div>
    <h3><i class="bi bi-funnel-fill"></i> Filtros</h3>
    <div class="row">
      <div class="col-md-4 mb-4">
        <label for="magType" class="col-form-label">Tipo de magnitud:</label>
      </div>
      <div class="col-md-4 mb-4">
        <select class="form-select" id="magType" v-model="selectedMagType">
          <option value="md" selected>md</option>
          <option value="ml">ml</option>
          <option value="ms">ms</option>
          <option value="mw">mw</option>
          <option value="me">me</option>
          <option value="mi">mi</option>
          <option value="mb">mb</option>
          <option value="mlg">mlg</option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="btn btn-outline-primary" @click="searchFeatures">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMagType: 'md'
    };
  },
  methods: {
    searchFeatures() {
      this.$emit('search', this.selectedMagType);
    }
  }
};
</script>