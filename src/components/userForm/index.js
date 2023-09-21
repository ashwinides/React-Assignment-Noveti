import React, { useEffect, useState } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { validateForm } from '../../utils/config'
import { ErrorCheck } from '../../utils/services'
import TextInput from '../../common/textInput'
import { Button, FormLabel, InputLabel, MenuItem, Paper, TextField, } from '@mui/material'
import MobileNoInput from '../../common/mobileNoInput'
import StateSelector from '../../common/GetStates'
import CountrySelector from '../../common/Location'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {
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
    const [formData, setFormData] = useState({
        id: 0,
        email: '',
        fname: '',
        lastName: '',
        address: '',
        address2: '',
        mobileNumber: '',
        zipcode: '',
        countryCode: '+91',
        phoneNumber: '',

    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    const handleFormSubmit = () => {
        console.log(validateForm(formData))
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            setFormData({
                email: '',
                fname: '',
                lastName: '',
                address: '',
                address2: '',
                mobileNumber: '',
                zipcode: ''
            });
            let userData = localStorage.getItem('userData') || '[]'; // Provide a default empty array as a string
            try {
                userData = JSON.parse(userData);
            } catch (error) {
                userData = []; // Handle the error by providing an empty array
            }



            const nextId = userData.length > 0 ? userData[userData.length - 1].id + 1 : 1;
            // Create a new user object with the next ID

            const newUser = { ...formData, id: nextId };

            // Update the user data in local storage and state
            const updatedUserData = [...userData, newUser];
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            setFormData(updatedUserData);
            console.log(updatedUserData);

            navigate('./userlist');

        }

    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleFormSubmit()
        }
    }

    return (
        <>
            <Paper elevation={0}
                variant="outlined"
                className="main"
            >

                <Grid
                    className="login"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Box className="login__section" >
                        <Box className="login__section__header">
                            <FormLabel className="login__section__header"> User Form </FormLabel>
                        </Box>
                        <TextInput
                            label={'First Name'}
                            name="fname"
                            placeholder={'Enter your fname'}
                            value={formData.fname}
                            type={'text'}
                            error={ErrorCheck(errors.fname)}
                            errorText={errors.fname}
                            eventHandler={handleChange}
                            autoFocus={true}
                            onKeyDown={handleKeyDown}
                            autoComplete={'off'}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Last Name'}
                            name="lastName"
                            placeholder={'Enter your last name'}
                            value={formData.lastName}
                            type={'text'}
                            error={ErrorCheck(errors.lastName)}
                            errorText={errors.lastName}
                            eventHandler={handleChange}
                            autoFocus={true}
                            onKeyDown={handleKeyDown}
                            autoComplete={'off'}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Email'}
                            name="email"
                            placeholder={'Enter your Email'}
                            value={formData.email}
                            type={'email'}
                            error={ErrorCheck(errors.email)}
                            errorText={errors.email}
                            eventHandler={handleChange}
                            autoFocus={true}
                            onKeyDown={handleKeyDown}
                            autoComplete={'off'}
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
                                    placeholder='enter your phone number'
                                    error={ErrorCheck(errors.phoneNumber)}
                                    helperText={errors.phoneNumber}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ mb: '20px' }} />
                        <TextInput
                            label={'Address 1 '}
                            name="address"
                            placeholder={'enter address'}
                            type={'text'}
                            value={formData.address}
                            error={ErrorCheck(errors.address)}
                            errorText={errors.address}
                            eventHandler={handleChange}

                            multiline
                            rows={2}
                        />
                        <Box sx={{ mb: '40px' }} />
                        <TextInput
                            label={'Address 2 '}
                            name="address2"
                            placeholder={'enter address'}
                            type={'text'}
                            multiline
                            rows={2}
                        />
                        <Box sx={{ mb: '40px' }} />

                        <TextInput
                            label={'Zip Code'}
                            name="zipcode"
                            placeholder={'Enter your Zip code'}
                            value={formData.zipcode}
                            type={'number'}
                            error={ErrorCheck(errors.zipcode)}
                            errorText={errors.zipcode}
                            eventHandler={handleChange}
                            onKeyDown={handleKeyDown}
                        />

                        {/* <Box sx={{ mb: '20px' }} /> */}
                        <StateSelector />
                        <Box sx={{ mb: '20px' }} />
                        <CountrySelector />
                        <Box sx={{ mb: '20px' }} />

                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                className="setpass-btn"
                                sx={{ width: "30%", height: "40px" }}
                                onClick={handleFormSubmit}
                            >
                                Add user
                            </Button>
                        </Box>

                        <Box sx={{ mb: '24px' }} />
                    </Box>
                </Grid>
            </Paper>
        </>
    )
}

export default UserForm
