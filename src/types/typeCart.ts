export interface CartItem {
    id: number;
    gambar: string;
    nama: string;
    jenis:string;
    harga: number;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}