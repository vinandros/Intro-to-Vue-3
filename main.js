const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    deleteItemFromCart(id) {
      this.cart = this.cart.filter((itemId) => itemId !== id);
    },
  },
});
