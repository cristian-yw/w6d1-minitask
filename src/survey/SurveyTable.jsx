import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/slices/formSlice.js";

function SurveyTable() {
  const surveys = useSelector((state) => state.form.form);
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Survey Results</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Age</th>
            <th className="border px-2 py-1">Gender</th>
            <th className="border px-2 py-1">Smoker</th>
            <th className="border px-2 py-1">Brands</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.age}</td>
              <td className="border px-2 py-1">{item.gender}</td>
              <td className="border px-2 py-1">{item.smoker === "y" ? "Yes" : "No"}</td>
              <td className="border px-2 py-1">{item.brands.join(", ")} {item.otherBrands}</td>
              <td className="border px-2 py-1">
                <button onClick={() => dispatch(removeData(item.id))} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SurveyTable;
