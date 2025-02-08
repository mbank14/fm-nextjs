

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IProduct {
    id: number;
    nama: string;
    jenis:string;
    gambar: string;
    harga: number;
}

interface ICartItem {
    id: number;
    gambar: string;
    nama: string;
    jenis:string;
    harga: number;
    quantity: number;
}


interface IProductState {
    products: IProduct[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    carts: ICartItem[],
    total: number
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
    carts: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddCart: (state, action: PayloadAction<ICartItem>) => {
            console.log('click');
            const itemExist = state.carts.find(item => item.id === action.payload.id)

            if(itemExist){
                itemExist.quantity += action.payload.quantity
            }else{
                // if (cart) console.log(cart.find((item: any[]) => item?.id == state.carts?.id));
                state.carts.push(action.payload)
            }
            
        },
        handleIncreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.carts.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        handleDecreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.carts.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.carts = state.carts.filter(item => item.id !== action.payload);
            }
        },
        handleRemoveItemCart: (state, action: PayloadAction<number>) => {
            state.carts =  state.carts.filter(item  => item.id != action.payload)
        },
        clearCarts: (state) =>{
            state.carts = []
            state.total = 0
        },
    },
})

export const { handleAddCart, handleRemoveItemCart,handleDecreaseQuantity,handleIncreaseQuantity, clearCarts } = cartSlice.actions
export default cartSlice.reducer