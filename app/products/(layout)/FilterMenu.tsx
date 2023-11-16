import Link from "next/link";

export default function FilterMenu({ filters }: { filters: any }) {
  return (
    <aside className=" relative min-w-[300px]">
      <div className="fixed min-w-[inherit]">
        <div className=" border grid gap-4 filters mx-4  rounded-md p-4 bg-white ">
          <h3 className=" text-2xl font-poppinsBold">Filters</h3>
          <div>
            <p className="text-xl">Availability</p>
            <ul>
              <li className={`${filters.stock ? "font-bold" : ""}`}>
                <Link
                  href={`?${new URLSearchParams({
                    stock: filters.stock,
                    price: filters.price,
                  })}`}
                >
                  Stock
                </Link>
              </li>
              <li>On Demand</li>
            </ul>
          </div>
          <div>
            <p className="text-xl">By Price</p>
            <ul>
              <li>Lowest</li>
              <li>Highest</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
