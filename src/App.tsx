import "./styles.css";
import Entry from "./models/Entry";
import useSearch from "./hooks/useSearch";
import SearchField from "./components/SearchField";

export default function App() {
  const data: Entry[] = [
    { id: 123545785756, name: "cat", favouriteFood: "mice, milk" },
    { id: 12858783456, name: "dog", favouriteFood: "meat" },
    { id: 12378874565, name: "mouse", favouriteFood: "cheese, grain" },
    {
      id: 12378874256,
      name: "horse",
      favouriteFood: "grass, apple, dried bread"
    }
  ];
  const { searchTerm, setSearchTerm, searchResults } = useSearch(data);

  return (
    <div className="App">
      <h3>Search through an array of animals and their favourite foods</h3>
      <SearchField onChange={setSearchTerm} value={searchTerm} />
      {searchResults.map((item) => (
        <div className="animalCard" key={item?.id}>
          <span className="animalCard__id">id: {item?.id}</span>
          <h4>{item?.name}</h4>
          <p>
            <span className="animalCard__subtitle">favourite food: </span>
            {item?.favouriteFood}
          </p>
        </div>
      ))}
    </div>
  );
}
