'use client'
import ProductList from "@/components/ProductList";
import {handleAddCart} from '@/lib/features/useCartStore'
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
// import { RootState } from "@reduxjs/toolkit/query";


export default function Cart () {

    const products = useSelector((state: RootState) => state.products)
    
    const dispacth = useAppDispatch()

    const addToCart = ({id, nama, gambar, harga, jenis}: {id:number, nama:string,gambar:string,harga:number,jenis:string}) =>{
        dispacth(handleAddCart({id, nama, gambar, harga, jenis}))
    }

    return (
        <div>
            <div className="grid grid-cols-[5fr_2fr] mt-5 px-8">
                <div>
                    kelas mamang
                    <ProductList text="ini teh product" data={products.products} onClick={addToCart}/>
                    <ProductList text="ini teh cart" data={products.carts} onClick={() => addToCart()}/>
                </div>
                <div>
                    cart
                </div>

            </div>
        </div>
    );
};

// export default Cart;