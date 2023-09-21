export function NumberValidation(value) {
    value = value.trim()
    const reg = /^[0-9]+$/
    if (!value) return false
    return reg.test(value)
}

export function VoucherCodeValidation(value) {
    const re = /^[A-Z0-9]+$/
    return re.test(value)
}

export function MobileNumberValidation(value) {
    const re = /^[0-9]{10}$/ ;
    return re.test(value)
} 

export function ZipcodeValidation(value) {
    const re = /^[0-9]{6}$/; // Matches exactly 6 digits (0-9)
    return re.test(value);
}

export function NameValidation(value) {
    value = value.trim()
    const re = /^[A-Za-z\s.]+$/ ;
    const minLength = 5 ;
    return value.length >= minLength && re.test(value);
}  
export function AddressValidation(value) {
    value = value.trim();
    const re = /^[A-Za-z0-9\s.]+$/; // Allow letters, numbers, spaces, and periods
    const minLength = 10;
    return value.length >= minLength && re.test(value);
}

export function EmailValidation(data) {
    data = data.trim()
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    // const re = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/;
    return re.test(data)
}

export function PasswordValidation(data) {
    data = data.trim()
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{8,}$/
    return re.test(data)
}

export function ErrorCheck(value) {

    let err = value ? true : false
    return err
}
