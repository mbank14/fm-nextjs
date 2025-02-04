import Image from "next/image";

interface IProductList {
    text:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: ((product: any[]) => void)
}

const ProductList = ({text, data, onClick}: IProductList ) => {

    return(
        <div>
            <h1>{text}</h1>
            <div className="grid grid-cols-3 gap-3">
                {data.map(item => (
                    <div key={item.id} >
                        <Image src={item.gambar} width={300} height={300} alt="gambar produk" />
                        <p>{item.nama}</p>
                        <p>{item.jenis}</p>
                        <button onClick={() => onClick(item)}>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;