import Link from "next/link";
import { FaCoins, FaDollarSign, FaHeart } from "react-icons/fa";

export default function DonatePage() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <FaDollarSign className="text-yellow-500 text-5xl mb-4 mx-auto" />
        <h1 className="text-3xl font-bold text-green-800 mb-4">Support Newark Central Masjid</h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Your kind donations help us maintain the masjid, provide community programs, 
          offer educational classes, and support those in need within the Newark Muslim community.
        </p>

        <Link
          href="https://gofund.me/c2e441d3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          <FaCoins className="text-lg" />
          Donate via GoFundMe
        </Link>

        <p className="text-gray-500 text-sm mt-6 italic">
          Every contribution, big or small, helps strengthen our community.
          <br />
          May Allah reward you abundantly.
        </p>
      </div>
    </section>
  );
}
