import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import fetchCountries from './countries';
import { InputLabel } from '@mui/material';

const CountrySelector = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    async function getCountries() {
      const countryList = await fetchCountries();
      setCountries(countryList);
    }

    getCountries();
  }, []);

  return (
    <>
    <InputLabel> Select Countries </InputLabel>
    <Autocomplete
      multiple
      options={countries.map((country) => country.name.common)}
      value={selectedCountries}
      onChange={(_, newCountries) => setSelectedCountries(newCountries)}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" />
      )}
      isOptionEqualToValue={(option, value) => option === value}
    />
    </>
  );
};

export default CountrySelector;
