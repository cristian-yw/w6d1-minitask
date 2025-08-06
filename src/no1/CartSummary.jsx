import React from 'react';

function CartSummary({ cart, onRemove }) {
  return (
    <div className="border-2 border-solid border-white p-4 rounded shadow-emerald-800 hover:shadow-lg transition duration-300 ">
      <h2 className="text-xl font-semibold mb-2 text-white">Keranjang</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between gap-2">
              <span>{item.name} - Rp {item.price.toLocaleString()}</span>
              <button
                onClick={() => onRemove(item.id)}
                className="bg-red-300 text-white px-2 py-1 rounded shadow-red-500 hover:bg-red-600 hover:shadow-lg transition duration-300"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartSummary;
