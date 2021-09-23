import { useState } from "react";

const SearchParams= () =>{
    const [location,setLoacation]= useState("Deoria, UP");

    return (
        <div className="search-params">
            <form >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        onChange={(e)=> setLoacation(e.target.value)}
                        value={location}
                        placeholder="Location"
                    />
                </label>    
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;