import React, { useState } from 'react';
import { Autocomplete, Box, InputLabel, Stack, TextField } from '@mui/material';


const StateSelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedStates, setSelectedStates] = useState([]);

    // Define a function to handle the change of selected states
    const handleStateChange = (event, newStates) => {
        setSelectedStates(newStates);
    };

    return (
        <>
            <Box sx={{ mb: '40px' }} />

            <Stack direction="row" >

                <Stack direction="column">

                    <InputLabel> Country </InputLabel>
                    <Autocomplete
                        sx={{ width: "280px", mr: "25px" }}
                        options={['USA', 'Canada', 'India', 'Australia']} // Replace with your list of countries
                        value={selectedCountry}
                        onChange={(event, newCountry) => {
                            setSelectedCountry(newCountry);
                            setSelectedStates([]); // Clear selected states when the country changes
                        }}
                        renderInput={(params) => <TextField {...params} placeholder='Enter Country' />}
                    />
                </Stack>
                <Box sx={{ mb: '20px' }} />
                <Stack direction="column">
                    <InputLabel> State </InputLabel>

                    <Autocomplete
                        sx={{ width: "280px" }}
                        multiple
                        freeSolo
                        options={['Maharastra', 'Karnataka', 'UP', 'MP']} // list of states
                        value={selectedStates}
                        onChange={handleStateChange}
                        renderInput={(params) => <TextField {...params} placeholder='Enter State' />}
                    />
                </Stack>
            </Stack>
        </>

    );
};

export default StateSelector;
