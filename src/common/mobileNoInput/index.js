import React, { useState } from 'react';
import { TextField, MenuItem, Box, InputLabel } from '@mui/material';
import './index.scss'
import { ErrorCheck } from '../../utils/services';
import { validateForm, validatePh } from '../../utils/config';

const countryCodes = [
    {
        value: '+1',
    },
    {
        value: '+44',
    },
    {
        value: '+91',
    },
    {
        value: '+66',
    },
    {
        value: '+54',
    },
    {
        value: '+81',
    },
];

const MobileNoInput = () => {
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value,
        };
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors)
        }
        else {
            setErrors({})
        }

        setFormData(newFormData);
    };

    return (
        <Box className='phone'>
            <InputLabel id="country-label" className='phone__label'>
                What is your Phone number <span className='phone__label__start'> * </span>
            </InputLabel>
            <Box className='phone__fields'>
                <TextField
                    className='phone__fields__code'
                    select
                    value={formData.countryCode}
                    onChange={handleChange}
                    name='countryCode'
                    variant="outlined"
                >
                    {countryCodes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    className='phone__fields__number'
                    type='number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name='phoneNumber'
                    variant="outlined"
                    placeholder='enter your phone number'
                    error={ErrorCheck(errors.phoneNumber)}
                    helperText={errors.phoneNumber}
                />
            </Box>
        </Box>
    );
};

export default MobileNoInput;

