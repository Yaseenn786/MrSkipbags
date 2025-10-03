import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { AREAS } from "../data/Areas";

export default function SkipCollection() {
  const navigate = useNavigate();

  const options = AREAS.map((area) => ({
    value: area.toLowerCase(),
    label: area,
  }));

  const handleSearch = () => {
    // For now, just redirect to form page
    navigate("/Form");
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Select your area to get started
        </h1>

        {/* Searchable Dropdown + Button */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="w-72 md:w-80">
            <Select options={options} placeholder="- Search or Select Your Area -" />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white font-semibold px-10 py-3 rounded-lg hover:bg-green-700 shadow-md transition"
          >
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}
