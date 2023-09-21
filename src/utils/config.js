import useMediaQuery from '@mui/material/useMediaQuery'
import { AddressValidation, EmailValidation, MobileNumberValidation, NameValidation, ZipcodeValidation } from './services'

export function GetCurrentResolution() {
    const isMobile = useMediaQuery('(max-width: 600px)')

    const isTablet = useMediaQuery('(max-width:900px)')

    const isLaptop = useMediaQuery('(max-width:1200px)')

    const isDesktop = useMediaQuery('(max-width:1536px)')

    if (isMobile) {
        return 'mobile'
    } else if (isTablet) {
        return 'tablet'
    } else if (isLaptop) {
        return 'laptop'
    } else if (isDesktop) {
        return 'desktop'
    }
}

export const validateEmail = (formData) => {
    const errors = {}

    if (!formData.email) {
        errors.email = 'Email is required'
    } else if (!EmailValidation(formData.email)) {
        errors.email = 'Invalid Email Id'
    }
    return errors
}



export const validateForm = (formData) => {
    const errors = {}

    if (!formData.email) {
        errors.email = 'Email is required'
    } else if (!EmailValidation(formData.email)) {
        errors.email = 'Invalid Email Id'
    }
    if (!formData.fname) {
        errors.fname = 'Field should not be empty'
    } else if (!NameValidation(formData.fname)) {
        errors.fname = 'Please Enter Minimum 5 Character'
    }
    if (!formData.lastName) {
        errors.lastName = 'Field should not be empty'
    } else if (!NameValidation(formData.lastName)) {
        errors.lastName = 'Please Enter Minimum 5 Character'
    }
    if (!formData.address) {
        errors.address = 'Enter Your Address'
    } else if (!AddressValidation(formData.address)) {
        errors.address = 'Please Enter Minimum 10 Character'
    }
    if (!formData.zipcode) {
        errors.zipcode = 'Enter Your Zip code'
    } else if (!ZipcodeValidation(formData.zipcode)) {
        errors.zipcode = 'Please Enter valid zip code'
    }
    
    if (!formData.phoneNumber) {   
        errors.phoneNumber = 'Phone number is required.'
    } else if (!MobileNumberValidation(formData.phoneNumber)) {
        errors.phoneNumber = 'Phone number must be 10 digits'
    }

  

    return errors
}



