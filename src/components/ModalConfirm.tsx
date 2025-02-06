import { CartItem } from "@/types/typeCart";
import { formatPrice } from "@/lib/utils/fromatPrice";
import Image from "next/image";

interface IModal {
  items: CartItem[];
  onClose: () => void;
  onConfirm: () => void;
}

const ModalConfirm = ({ items, onClose, onConfirm }: IModal) => {
  return (
    <div className="w-full h-screen fixed bg-slate-500/20 flex justify-center items-center z-20 top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="py-4 px-5 bg-slate-50 sm:min-w-96 w-full rounded-xl">
        <div className="flex flex-row justify-between items-center mb-4">
          <Image
            src={`/images/icon-order-confirmed.svg`}
            width={40}
            height={40}
            alt="icon confirm"
          />

          <div className="cursor-pointer"  onClick={() => {
            onClose()

            }}>
            <Image
              src={`/images/icon-remove-item.svg`}
             
              width={15}
              height={15}
              alt="button close"
            />
          </div>
          {/* <Image /> */}
        </div>

        <div className="mb-4">
          <p className="text-2xl font-bold text-orange-900">
            Order Confirmation
          </p>
          <p className="text-sm  text-orange-900">
            We hope you enjoy your food
          </p>
        </div>

        <div>
          <ul className="bg-orange-50 py-3 px-4 rounded-lg mb-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-row items-center  border-b-[1px] border-orange-100 py-4">
                <div className="flex flex-row flex-1">
                  <Image
                    src={item.gambar}
                    alt="gambar food"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-orange-500">{item.nama}x</p>
                    <div className="flex flex-row gap-3">
                      <p className="text-orange-500">{item.quantity}x</p>
                      <p className="text-gray-500">
                        <span>@ </span>
                        {formatPrice(item.harga, "us")}
                      </p>
                    </div>
                  </div>
                </div>

                <p>{formatPrice(item.harga * item.quantity, "us")}</p>
                {/* <div>
                            </div> */}
              </li>
            ))}
                <div className="flex flex-row justify-between mb-2 mt-3">
                    <p>Order total</p>
                    <p className="text-orange-900 font-bold text-3xl">{formatPrice(items.reduce((acc, curr) => acc + curr.harga * curr.quantity, 0), 'us')}</p>
                </div>
          </ul>
        </div>

        <button
          onClick={() => onConfirm()}
          className="rounded-full text-center bg-orange-900 text-orange-200 w-full py-3"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ModalConfirm;
