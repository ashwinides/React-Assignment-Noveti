import React, { memo, useEffect, useRef } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import {InputLabel} from '@mui/material'

const TextInput = memo((props) => {
    const {
        label,
        name,
        placeholder,
        type,
        error,
        errorText,
        eventHandler,
        onKeyDown,
        autoFocus,
        multiline,
        rows,
        autoComplete,
        value,
    } = props
    const inputRef = useRef(null)

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus()
        }
    }, [autoFocus])

    return (
        <>
            <InputLabel className="otplabel">{label}</InputLabel>
           <TextField
                sx={{ mt: '8px' }}
                className="text-input"
                placeholder={placeholder}
                name={name}
                type={type}
                error={error}
                helperText={errorText}
                multiline={multiline}
                rows={multiline ? rows : undefined}
                onChange={eventHandler}
                onKeyDown={onKeyDown}
                inputRef={inputRef}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                value={value}
            />
        </>
    )
})

TextInput.displayName = 'TextInput'

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    eventHandler: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    autoComplete: PropTypes.string,
    value: PropTypes.string
}

export default TextInput
