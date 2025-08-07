import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/slices/formSlice";

function SurveyModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    smoker: "",
    brands: [],
    otherBrands: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        brands: checked
          ? [...prev.brands, value]
          : prev.brands.filter((b) => b !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({ ...form, id: Date.now() }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow w-96">
        <h2 className="text-lg font-bold mb-2">Smoker Survey</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-1" />
          <input name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full border p-1" />
          <div>
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChange} checked={form.gender === "male"} /> Male
            </label>
            <label className="ml-4">
              <input type="radio" name="gender" value="female" onChange={handleChange} checked={form.gender === "female"} /> Female
            </label>
          </div>
          <select name="smoker" value={form.smoker} onChange={handleChange} className="w-full border p-1">
            <option value="" disabled>Do you smoke?</option>
            <option value="y">Yes</option>
            <option value="n">No</option>
          </select>

          {form.smoker === "y" && (
            <div>
              <label className="block font-semibold">Brands</label>
              {["marlboro", "camel", "bensonhedges", "pallmall", "luckystrike", "other"].map((brand) => (
                <label key={brand} className="block">
                  <input
                    type="checkbox"
                    name="brands"
                    value={brand}
                    checked={form.brands.includes(brand)}
                    onChange={handleChange}
                  />
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </label>
              ))}
              {form.brands.includes("other") && (
                <input
                  type="text"
                  name="otherBrands"
                  placeholder="Other brand..."
                  value={form.otherBrands}
                  onChange={handleChange}
                  className="w-full border p-1 mt-1"
                />
              )}
            </div>
          )}
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Submit</button>
          <button type="button" onClick={onClose} className="ml-2 text-gray-500">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default SurveyModal;
