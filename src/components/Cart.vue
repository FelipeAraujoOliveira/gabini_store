<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-if="error">{{ error }}</div>
    <div class="card-group" v-else>
      <div class="card" v-for="(card, index) in cards" :key="index">
        <img :src="card.img" class="card-img-top" alt="Product image" />
        <div class="card-body">
          <h5 class="card-title">{{ card.name }}</h5>
          <p class="card-text">{{ card.description }}</p>
          <p class="card-price">Price: ${{ card.price }}</p>
          <p class="card-quantity">Quantity: {{ card.quantity }}</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">{{ card.lastUpdated }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('SUA_URL_AQUI'); // Coloque a URL da API
        console.log(response.data); // Verifique a estrutura dos dados aqui
        this.cards = response.data.map((item) => ({
          img: item.image, // Propriedade da imagem da API
          name: item.name, // Nome do produto
          description: item.description, // Descrição do produto
          price: item.price, // Preço do produto
          quantity: item.quantity, // Quantidade disponível
          lastUpdated: 'Last updated 3 mins ago' // Exemplo de data
        }));
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        this.error = 'Erro ao carregar os produtos.'; // Mensagem de erro
      } finally {
        this.loading = false; // Finaliza o estado de carregamento
      }
    }
  }
};
</script>

<style scoped>
.card-group {
  display: flex;
  gap: 1rem;
}
.card {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  overflow: hidden;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card-body {
  padding: 1rem;
}
.card-title {
  margin-bottom: 0.5rem;
}
.card-text {
  font-size: 0.9rem;
  color: #555;
}
.card-price,
.card-quantity {
  font-size: 0.9rem;
  color: #333;
}
.card-footer {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #6c757d;
  background-color: #f8f9fa;
}
</style>
