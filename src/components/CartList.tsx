import { CartItem } from "../types/typeCart";
import EmptyCart from "./SVG/EmptyCart";
import { formatPrice } from "@/lib/utils/fromatPrice";

interface CartList {
  items: CartItem[];
  total: number;
  onDelete: (id: number) => void;
  openModal: (item: CartItem[]) => void;
}

const CartList = ({ items, total, onDelete, openModal }: CartList) => {
  return (
    <div className="ml-3">
      <div className="p-6 bg-yellow-100 rounded-lg">
        <p className="font-bold text-xl text-orange-400">
          Your Cart ({items.length})
        </p>
        {items.length > 0 ? (
          <div>
            <ul className="my-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-row justify-between items-center border-b-[1px] border-orange-200 py-3"
                >
                  <div className="">
                    <p>{item.nama}</p>
                    <div className="flex flex-row gap-3">
                      <p className="text-orange-500">{item.quantity}x</p>
                      <p className="text-gray-500">
                        <span>@ </span>
                        {formatPrice(item.harga, "us")}
                      </p>
                      <p className="text-orange-800">
                        {formatPrice(item.harga * item.quantity, "us")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      className="cursor-pointer"
                      onClick={() => onDelete(item.id)}
                    >
                      x
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-row justify-between items-center mt-3">
              <p>Total:</p>
              <p className="text-xl font-bold text-orange-900">
                {formatPrice(total, "us")}
              </p>
            </div>

              <div className="p-4 bg-orange-700 mt-4 rounded-lg text-orange-100 text-center">
                <p>This is <strong>carbon-neutral</strong> delivery</p>
              </div>

              <div>
                <button onClick={() => {
                    openModal(items) 
                    console.log('object')
                }}
                className="bg-orange-400 hover:bg-orange-200 w-full mt-5 rounded-full py-3 text-orange-900">Confirm Order</button>
              </div>

          </div>
        ) : (
          <div className="mt-4">
            <div className="flex flex-col items-center justify-center">
              <EmptyCart writeClassName={" w-1/2"} />
              <p className="text-sm text-orange-950">Your cart is emptys</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
