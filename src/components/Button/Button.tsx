import React    from 'react'

import styles   from './Button.less'
import Loader from '../Loader/Loader'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset',
    label: string,
    onClick : () => void,
    isLoading?: boolean
}

const Button : React.FC<ButtonProps> = ({
    type,
    label,
    onClick,
    isLoading
}) => {
    return (
        <div className={styles.wrapper}>
            <button
                type        = {type}
                className   = {styles.button}
                onClick     = {onClick}
                >
                {isLoading && <Loader/>}
                {label}
            </button>
        </div>
    )
}

export default Button