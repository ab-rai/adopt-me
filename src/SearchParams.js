import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results  from "./Results"
import Pet from "./pet";

const ANIMALS = ["bird", "cat", "dog", "lion", "tiger", "monkey"];
const SearchParams = () => {
  const [location, setLoacation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLoacation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        
        <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => updateAnimal(e.target.value)}
          onBlur={(e) => updateAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={(e) => updateBreed(e.target.value)}
          onBlur={(e) => updateBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>

      </form>
        
            
      <Results pets={pets}/>
      
    </div>
  );
};

export default SearchParams;
