<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Product List</h2>
      <button class="btn btn-success" @click="showModal = true">+ Add Product</button>
    </div>

    <div v-if="loading" class="alert alert-info">Loading products...</div>
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

    <table v-else class="table table-striped table-hover">
      <thead class="table-success">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in sortedProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>${{ product.price.toFixed(2) }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.category }}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1" @click="openViewModal(product)">👁</button>
            <button class="btn btn-sm btn-outline-warning me-1" @click="openEditModal(product)">✏</button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteProduct(product.id)">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Product Modal -->
    <div class="modal fade show d-block" v-if="showModal" @click.self="showModal = false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Product</h5>
            <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
          <form @submit.prevent="submitAddProduct">
            <div class="modal-body">
              <div class="mb-3" v-for="field in ['title', 'price', 'description', 'category', 'image']" :key="field">
                <label class="form-label">{{ field.charAt(0).toUpperCase() + field.slice(1) }}</label>
                <input
                  v-model="newProduct[field]"
                  :type="field === 'price' ? 'number' : field === 'description' ? 'textarea' : 'text'"
                  class="form-control"
                  :class="{'is-invalid': addProductErrors[field]}"
                  :placeholder="field"
                  v-if="field !== 'description'"
                />
                <textarea
                  v-model="newProduct.description"
                  class="form-control"
                  :class="{'is-invalid': addProductErrors.description}"
                  placeholder="Description"
                  v-if="field === 'description'"
                ></textarea>
                <div class="invalid-feedback" v-if="addProductErrors[field]">{{ addProductErrors[field] }}</div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Add</button>
              <button type="button" class="btn btn-secondary" @click="showModal = false">Cancel</button>
            </div>
          </form>
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
      products: [],
      loading: true,
      error: null,
      showModal: false,
      showViewModal: false,
      showEditModal: false,
      newProduct: {
        title: '',
        price: null,
        description: '',
        category: '',
        image: ''
      },
      selectedProduct: {},
      addProductErrors: {
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
      }
    };
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((a, b) => b.id - a.id);
    }
  },
  async created() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    openViewModal(product) {
      this.selectedProduct = { ...product };
      this.showViewModal = true;
    },
    openEditModal(product) {
      this.selectedProduct = { ...product };
      this.showEditModal = true;
    },
    async updateProduct() {
      try {
        const res = await axios.put(
          `https://fakestoreapi.com/products/${this.selectedProduct.id}`,
          this.selectedProduct
        );
        const updated = res.data;
        const index = this.products.findIndex(p => p.id === updated.id);
        if (index !== -1) this.products.splice(index, 1, updated);
        this.showEditModal = false;
      } catch (err) {
        alert('Error updating product: ' + err.message);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`https://fakestoreapi.com/products/${id}`);
        this.products = this.products.filter(p => p.id !== id);
      } catch (err) {
        alert('Error deleting product: ' + err.message);
      }
    },
    submitAddProduct() {
      const errors = {};
      if (!this.newProduct.title.trim()) errors.title = 'Title is required.';
      if (!this.newProduct.price || this.newProduct.price <= 0) errors.price = 'Valid price is required.';
      if (!this.newProduct.description.trim()) errors.description = 'Description is required.';
      if (!this.newProduct.category.trim()) errors.category = 'Category is required.';
      if (!this.newProduct.image.trim()) errors.image = 'Image URL is required.';
      this.addProductErrors = errors;
      if (Object.keys(errors).length === 0) {
        this.addProduct();
      }
    },
    async addProduct() {
      try {
        const res = await axios.post('https://fakestoreapi.com/products', this.newProduct);
        const added = res.data;
        this.products.unshift(added);
        this.resetForm();
        this.showModal = false;
      } catch (err) {
        alert('Error adding product: ' + err.message);
      }
    },
    resetForm() {
      this.newProduct = {
        title: '',
        price: null,
        description: '',
        category: '',
        image: ''
      };
      this.addProductErrors = {
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
      };
    }
  }
};
</script>

<style>
.is-invalid {
  border-color: #dc3545;
}
.invalid-feedback {
  color: #dc3545;
}
</style>
