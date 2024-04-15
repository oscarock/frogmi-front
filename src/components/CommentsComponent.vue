<template>
  <div class="container">
    <div class="mt-4 col-md-6">
        <router-link class="btn btn-link" :to="{ name: 'features' }"><i class="bi bi-arrow-return-left"></i> Atras</router-link>
    </div>
    <h2 class="mt-4 mb-4"><i class="bi bi-plus-square"></i> Enviar Comentario</h2>
    <form @submit.prevent="submitComment">
      <div class="mb-3">
        <label for="comment_body">Cuerpo del Comentario:</label>
        <textarea class="form-control" id="comment_body" v-model="commentBody" required></textarea>
      </div>
      <div class="row">
        <div class="col-md-6">
          <button type="submit" class="btn btn-outline-primary"><i class="bi bi-check"> </i>Enviar Comentario</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      commentBody: '',
      featureId: null
    };
  },
  created() {
    this.featureId = this.$route.params.featureId;
  },
  methods: {
    async submitComment() {
      try {
        const response = await axios.post('http://127.0.0.1:3000/api/v1/comments', {
          feature_id: this.featureId,
          body: this.commentBody
        });
        console.log('Comentario enviado:', response.data);
        alert('Comentario enviado')
        this.commentBody = ''
      } catch (error) {
        alert('Error al enviar comentario:' + error)
        console.error('Error al enviar comentario:', error);
      }
    }
  }
};
</script>