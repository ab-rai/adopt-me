import Pet from "./pet";

const Results = ({pets})=>{
    return (
        <div className="search">

            {!pets.length ? (<h2>No pets are there</h2>) :
                pets.map((pet) => (
                    <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    key={pet.id}
                    images={pet.images}
                    location={pet.location}
                    id={pet.id}
                    />
                ))}
        </div>
    );
}
export default Results;