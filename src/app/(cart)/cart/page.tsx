'use client'
import CartList from "@/components/CartList";
import ProductList from "@/components/ProductList";
import {handleAddCart, handleDecreaseQuantity, handleIncreaseQuantity} from '@/lib/features/useCartStore'
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
// import { RootState } from "@reduxjs/toolkit/query";


export default function Cart () {

    const products = useSelector((state: RootState) => state.products.products)
    const carts = useSelector((state: RootState) => state.products.carts)
    
    const dispacth = useAppDispatch()
    const addToCart = async ({id, nama, gambar, harga, jenis, quantity = 1}: {id:number, nama:string,gambar:string,harga:number,jenis:string, quantity:number}) =>{
        const hasil = await dispacth(handleAddCart({id, nama, gambar, harga, jenis, quantity}))
        console.log(hasil);
    }
    const handleDecrease = (num: number) => {
        dispacth(handleDecreaseQuantity(num))
    }
    const handleIncrease = (num: number) => {
        dispacth(handleIncreaseQuantity(num))
    }


    return (
        <div>
            <div className="grid grid-cols-[5fr_2fr] mt-5 px-8">
                <div>
                    <ProductList text="Dessert" 
                        data={products} onClick={addToCart}
                     onDecrease={handleDecrease}
                     onIncrease={handleIncrease}
                     />
                </div>
                <div>
                    <CartList items={carts} total={carts.reduce((acc, item) => acc + item.quantity * item.harga, 0)}></CartList>
                </div>

            </div>
        </div>
    );
};

// export default Cart;