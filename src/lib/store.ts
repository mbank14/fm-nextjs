// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './features/useCartStore'


// export const makeStore = () => {
//     return configureStore({
//       reducer: {
//         products: cartReducer
//       }
//     })
//   }

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>

// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']



import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '@/lib/features/useCartStore'

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch