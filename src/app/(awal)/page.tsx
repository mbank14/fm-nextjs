// import Image from "next/image";
import Link from "next/link";
// import Cart from "./(cart)/page";


export default function Home() {
  return (
    <div className="text-center w-full">
      <h1>List of links</h1>
      <Link href="/cart">ini linkg</Link>
    </div>
  );
}
