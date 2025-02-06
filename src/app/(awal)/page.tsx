// import Image from "next/image";
import Link from "next/link";
// import Cart from "./(cart)/page";


export default function Home() {
  return (
    <div className="text-center w-full">
      <h1 className="mb-6">List of links</h1>
      <div className="flex flex-col gap-3">

      <Link href="/cart" className="text-emerald-600 font-bold text-lg hover:text-emerald-800">Food cart</Link>
      <Link href="/tip-calc" className="text-emerald-600 font-bold text-lg hover:text-emerald-800">Tip calculator</Link>
      </div>
    </div>
  );
}
