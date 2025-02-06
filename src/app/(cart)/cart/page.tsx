"use client";
import CartList from "@/components/CartList";
import ModalConfirm from "@/components/ModalConfirm";
import ProductList from "@/components/ProductList";
import {
    clearCarts,
  handleAddCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleRemoveItemCart,
} from "@/lib/features/useCartStore";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { RootState } from "@reduxjs/toolkit/query";

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const products = useSelector((state: RootState) => state.products.products);
  const carts = useSelector((state: RootState) => state.products.carts);

  const dispacth = useAppDispatch();

  const addToCart = async ({
    id,
    nama,
    gambar,
    harga,
    jenis,
    quantity = 1,
  }: {
    id: number;
    nama: string;
    gambar: string;
    harga: number;
    jenis: string;
    quantity: number;
  }) => {
    const hasil = await dispacth(
      handleAddCart({ id, nama, gambar, harga, jenis, quantity })
    );
    console.log(hasil);
  };
  const handleDecrease = (num: number) => {
    dispacth(handleDecreaseQuantity(num));
  };
  const handleIncrease = (num: number) => {
    dispacth(handleIncreaseQuantity(num));
  };
  const handleDeleteCartItem = (id: number) => {
    dispacth(handleRemoveItemCart(id));
  };

// const qty = (id: number) => {
//     const item = carts.find(cartItem => cartItem.id === id);
//     return item ? item.quantity : 0;
// };

  return (
    <div>
      <div className="grid grid-cols-[5fr_2fr] mt-5 px-8">
        <div>
          <ProductList
            text="Dessert"
            data={products}
            carts={carts}
            onClick={addToCart}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
        </div>
        <div>
          <CartList
            onDelete={handleDeleteCartItem}
            openModal={() => setIsModalOpen(true)}
            items={carts}
            total={carts.reduce(
              (acc, item) => acc + item.quantity * item.harga,
              0
            )}
          >
          </CartList>
            {isModalOpen && <ModalConfirm items={carts} onClose={() => setIsModalOpen(false)} onConfirm={()=>{ dispacth(clearCarts())
                setIsModalOpen(false)
            }} />}
        </div>
      </div>
    </div>
  );
}

// export default Cart;
