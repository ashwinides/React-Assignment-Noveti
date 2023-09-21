// EditUser.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Paper, Grid, Box, FormLabel, InputLabel, TextField, MenuItem } from '@mui/material';
import TextInput from '../../common/textInput';
import { validateForm } from '../../utils/config';

const EditUser = () => {
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
    const { userId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: 0,
        email: '',
        fname: '',
        lastName: '',
        address: '',
        countryCode: '+91',
        phoneNumber: '',

    });

    useEffect(() => {
        const userDetails = localStorage.getItem('userData');
        if (userDetails) {
            const userData = JSON.parse(userDetails);
            const userToEdit = userData.find((user) => user.id === parseInt(userId));
            if (userToEdit) {
                setFormData(userToEdit);
            }
        }
    }, [userId]);

    const handleFormSubmit = () => {
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length !== 0) {
        } else {
            const userDetails = localStorage.getItem('userData');
            if (userDetails) {
                const userData = JSON.parse(userDetails);
                const updatedUserData = userData.map((user) =>
                    user.id === formData.id ? formData : user
                );
                localStorage.setItem('userData', JSON.stringify(updatedUserData));
                navigate('/userlist');
            }
        }
    };

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <Paper elevation={0} variant="outlined" className="main">
                <Grid
                    className="login"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className="login__section">
                        <Box className="login__section__header">
                            <FormLabel className="login__section__header">
                                Edit User
                            </FormLabel>
                        </Box>
                        <TextInput
                            label={'First Name'}
                            name="fname"
                            value={formData.fname}
                            type={'text'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Last Name'}
                            name="lastName"
                            value={formData.lastName}
                            type={'text'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Email'}
                            name="email"
                            value={formData.email}
                            type={'email'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />
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
                                    
                                />
                            </Box>
                        </Box>
                        <Box sx={{ mb: '20px' }} />
                        <TextInput
                            label={'Address 1 '}
                            name="address"
                            type={'text'}
                            value={formData.address}
                            eventHandler={handleChange}

                            multiline
                            rows={2}
                        />
                        <Box sx={{ mb: '40px' }} />
                        <Box textAlign="center">
                        <Button
                            className="setpass-btn"
                            sx={{ width: '30%', height: '40px' , textAlign:"center" }}
                            onClick={handleFormSubmit}
                        >

                            Update User
                        </Button>
                        </Box>
                    </Box>
                </Grid>
            </Paper>
        </>
    );
};

export default EditUser;
