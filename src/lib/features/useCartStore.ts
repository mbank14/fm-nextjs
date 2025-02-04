

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IProduct {
    id: number;
    nama: string;
    jenis:string;
    gambar: string;
    harga: number;
}

interface IProductState {
    products: IProduct[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    carts: any[]
}

const initialState: IProductState = {
    products: [
        {
            id: 1,
            nama: "Waffle with Berries",
            jenis: "Waffle",
            gambar: '/images/image-waffle-tablet.jpg',  // Path relatif ke folder public
            harga: 6.50,
          },
        {
            id: 2,
            nama: "Vanilla Bean Crème Brûlée",
            jenis: "Crème Brûlée",
            gambar: '/images/image-creme-brulee-desktop.jpg',  // Path relatif ke folder public
            harga: 7.00,
          },
        {
            id: 3,
            nama: "Macaron Mix of Five",
            jenis: "Macaron",
            gambar: '/images/image-macaron-desktop.jpg',  // Path relatif ke folder public
            harga: 8.50,
          },
        {
            id: 4,
            nama: "Classic Tiramisu",
            jenis: "Tiramisu",
            gambar: '/images/image-tiramisu-desktop.jpg',  // Path relatif ke folder public
            harga: 6.50,
          }
    ],
    carts: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddCart: (state, action: PayloadAction<IProduct>) => {
            console.log('click');
            state.carts.push(action.payload)
        },
        handleRemoveItemCart: (state, action: PayloadAction<number>) => {
            state.carts =  state.carts.filter(item  => item.id != action.payload)
        }
    },
})

export const { handleAddCart, handleRemoveItemCart } = cartSlice.actions
export default cartSlice.reducer