import '../styles/search-bar.css';

export default function SearchBar({ searchTerm, setSearchTerm }){
  return (
    <input
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};