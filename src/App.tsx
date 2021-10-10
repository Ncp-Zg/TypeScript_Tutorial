import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Components/Country";
import { CountryType } from "./type";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch {
        console.log("Ulkeleri alırken hata olustu")
    }
  };

  useEffect(()=>{
    getCountries();
  },[])
  console.log(countries)
  return <div>
      {
         countries.map(country=>{
             return <Country key ={country.name} country = {country}/>
         }) 
      }
      
  </div>;
};

export default App;
