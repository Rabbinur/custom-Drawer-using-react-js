import { createSlice } from "@reduxjs/toolkit";
import { CgLayoutGrid } from "react-icons/cg";
import { toast } from "react-toastify";
const initialState = {
  product: [],
  setSuggestions: [],
};

export const reduxSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      console.log(product);
      const existingProduct = state.product.find((p) => p._id === product._id);

      if (existingProduct) {
        console.log(existingProduct.totalPrice);
        console.log(existingProduct.totalDiscountPrice);
        existingProduct.quantity += product.quantity || 1;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
        existingProduct.totalDiscountPrice =
          existingProduct.quantity * existingProduct.discount;
        toast.success("Quantity updated in the cart.");
      } else {
        state.product.push({
          ...product,
          quantity: product.quantity || 1,
          totalPrice: product.price * product.quantity,
          totalDiscountPrice: product.discount,
        });
        toast.success(
          "This product is added to cart. Click on cart for checkout."
        );
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.product = state.product.filter((p) => p._id !== productId);
    },
    removeAll: (state) => {
      state.product = []; // Clear all products
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.product.find((p) => p._id === productId);
      if (product) {
        product.quantity += 1;
        product.totalPrice = product.quantity * product.price;
        product.totalDiscountPrice = product.quantity * product.discount;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.product.find((p) => p._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalPrice = product.quantity * product.price;
        product.totalDiscountPrice = product.quantity * product.discount;
      }
    },

    setSuggestions: (state, action) => {
      console.log("redux", action?.payload);
      state.setSuggestions = state.setSuggestions || [];
      if (action?.payload === "") {
        return;
      }

      const text = state.setSuggestions.some(
        (item) => item === action?.payload
      );

      if (!text) {
        if (state.setSuggestions.length >= 8) {
          state.setSuggestions.shift();
        }
        state.setSuggestions.push(action.payload);
      }
    },
    delSuggestion: (state, action) => {
      state.setSuggestions = state?.setSuggestions?.filter(
        (item) => item !== action?.payload
      );
    },
  },
});

export const {
  removeFromCart,
  removeAll,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  setSuggestions,
  delSuggestion,
} = reduxSlice.actions;

export default reduxSlice.reducer;
