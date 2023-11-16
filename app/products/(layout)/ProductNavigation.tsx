export default function ProductNavigation() {
  return (
    <section className="p-4 flex justify-between">
      <p>Graphics, GPU, AMD</p>
      <select name="price" id="price_filter">
        <option value="price_asc">Highest Price</option>
        <option value="price_desc">Lowest Price</option>
      </select>
    </section>
  );
}
