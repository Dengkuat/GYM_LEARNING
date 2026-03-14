import { useState } from "react";

export default function NameSearch() {

  const names = ["Deng", "David", "John", "Daniel", "Mary", "Diana"];

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={handleSearch}
        className="border rounded-2xl text-center"
      />

      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}