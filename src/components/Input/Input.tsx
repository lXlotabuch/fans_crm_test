import React    from 'react';
import styles   from './Input.less'

export type OnInputChange = (type : string, data : string) => void

interface InputProps {
    label: string,
    placeholder?: string,
    type: string,
    value: string,
    error?: string,
    onChange: OnInputChange
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, label, error }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(type, e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            <input
                className={styles.input}
                aria-label    = {label}
                placeholder   = {placeholder}
                value         = {value}
                onChange      = {handleChange}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )
};

export default Input;