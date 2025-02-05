import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "@/lib/utils/fromatPrice";

interface IProductList {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (product: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDecrease: (product: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onIncrease: (product: any[]) => void;
}

const ProductList = ({
  text,
  data,
  onClick,
  onDecrease,
  onIncrease,
}: IProductList) => {
  //   const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
  const [buttonActive, setButtonActive] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [qty, setQty] = useState<{ [key: number]: number }>({});

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">{text}</h1>
      <div className="grid grid-cols-3 gap-3">
        {data.map((item) => (
          <div key={item.id}>
            <Image
              className={`${
                buttonActive[item.id] ? "border-orange-400 border border-2" : ""
              } rounded-xl`}
              src={item.gambar}
              width={300}
              height={300}
              alt="gambar produk"
            />

            {item.quantity && <p>{item.quantity}</p>}
            {/* btn */}
            <div id="btnWrapper" className="relative inline-block w-full h-0">
              <div
                className={`${buttonActive[item.id] ? 'bg-orange-500': 'text-orange-400 bg-yellow-50 '}
                    rounded-full text-center  absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 -top-4 w-2/3
              border border-orange-400`}
              >
                {!buttonActive[item.id] ? (
                  <button
                  className="inline-block w-full px-4 py-3"
                    onClick={() => {
                      onClick(item);

                      setQty((prevQty) => ({
                        ...prevQty,
                        [item.id]: (prevQty[item.id] || 0) + 1,
                      }));

                      setButtonActive((prev) => ({
                        ...prev,
                        [item.id]: true,
                      }));

                      //   setLoading((prev) => ({
                      //     ...prev,
                      //     [item.id]: true,
                      //   }));

                      //   setTimeout(() => {

                      //     // setLoading((prev) => ({
                      //     //   ...prev,
                      //     //   [item.id]: false,
                      //     // }));
                      //   }, 300);
                    }}
                  >
                    add to cart
                  </button>
                ) : (
                  <div className="px-4 py-3
                  flex flex-row gap-5 text-white justify-between items-center">
                    <button
                      onClick={() => {
                        onDecrease(item.id);
                        setQty((prevQty) => {
                          const newQty = Math.max(
                            (prevQty[item.id] || 0) - 1,
                            0
                          );
                          if (newQty === 0) {
                            setButtonActive((prev) => ({
                              ...prev,
                              [item.id]: false,
                            }));
                          }
                          return {
                            ...prevQty,
                            [item.id]: newQty,
                          };
                        });

                        // setLoading((prev) => ({
                        //   ...prev,
                        //   [item.id]: true,
                        // }));
                        // setQty(prevQty => prevQty -= 1)
                      }}
                    >
                      -
                    </button>
                    <p>{qty[item.id] || 0}</p>
                    <button
                      onClick={() => {
                        onIncrease(item.id);
                        // Meningkatkan kuantitas produk
                        setQty((prevQty) => ({
                          ...prevQty,
                          [item.id]: (prevQty[item.id] || 0) + 1, // Tambah 1 ke kuantitas
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* btnend */}

            <div className="mt-3">
              <p className="text-sm text-slate-400">{item.jenis}</p>
              <p className="font-bold">{item.nama}</p>
              <p className="text-orange-400">{formatPrice(item.harga, "us")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
