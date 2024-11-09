import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Logo</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/collection" className="hover:text-gray-400">Collection</Link></li>
          <li><Link href="/price" className="hover:text-gray-400">Price</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
