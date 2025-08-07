import React, { useState } from "react";
import FormSurvey from "./FormSurvey";
import SurveyTable from "./SurveyTable";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Isi Survey Perokok
      </button>

      <FormSurvey isOpen={showModal} onClose={() => setShowModal(false)} />
      <SurveyTable />
    </div>
  );
}

export default App;
