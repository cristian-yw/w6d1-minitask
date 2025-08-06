import React from 'react';

function Product({ products, onAddToCart }) {
  return (
    <div className="border-2 border-solid border-white p-4 rounded shadow-emerald-800 hover:shadow-lg transition duration-300 ">
      <h2 className="text-xl font-semibold mb-2 text-white">Daftar Produk</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-2 flex justify-between gap-2">
            <span>{product.name} - Rp {product.price.toLocaleString()}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-300 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600 shadow-blue-300 hover:shadow-lg transition duration-300"
            >
              Tambah
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
