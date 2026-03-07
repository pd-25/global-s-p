import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import styles from './Input.module.css';

export default function Input({ className, ...props }: TextFieldProps) {
    return (
        <TextField
            className={`${styles.input} ${className || ''}`}
            variant="outlined"
            fullWidth
            {...props}
        />
    );
}
