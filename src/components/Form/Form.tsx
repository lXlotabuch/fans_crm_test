import { ReactNode } from 'react'
import styles from './Form.less'

interface FormProps {
    children: ReactNode[] | ReactNode
}

const Form : React.FC<FormProps> = ({children}) => {
    return (
        <div className={styles.form}>{children}</div>
    )
}

export default Form