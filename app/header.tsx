export default function Header() {
  return (
    <header className="grid justify-center p-4 border bg-transparent w-full">
      <div className="top">
        <input
          className="w-full rounded-md px-4 text-black border"
          type="text"
          placeholder="search for prods..."
        />
      </div>
      <nav>
        <ul className="flex m-2">
          <li className="p-2">Brands</li>
          <li className="p-2">Exclusive</li>
          <li className="p-2">All Categories</li>
          <li className="p-2">All products</li>
          <li className="p-2">Shipping</li>
        </ul>
      </nav>
    </header>
  );
}
