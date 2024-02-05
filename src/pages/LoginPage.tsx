import React, { useState }                    from 'react';
import Input, { OnInputChange }               from '../components/Input/Input';

import styles                                 from './LoginPage.less'
import Button                                 from '../components/Button/Button';
import useLogin                               from '../hooks/useLogin';
import Form                                   from '../components/Form/Form';
import { validateLoginParams }   from '../utils/validation';

export interface LoginParams {
    login: string,
    password: string
}

const LoginPage : React.FC = () => {
    const [params, setParams] = useState<LoginParams>({
        login: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        login: '',
        password: ''
    })
    const { isLoading, loginAction } = useLogin()

    const handleChange: OnInputChange = (type, value) => {
        setParams((prev) => ({
            ...prev,
            [type] : value
        }))
        setErrors((prev) => ({
            ...prev,
            [type] : ''
        }))
    }

    const handleSubmit = async () : Promise<void> => {
        const {isValid, error} = validateLoginParams(params)

        if (!isValid) {
            setErrors(error)
            return
        }

        try {
            await loginAction(params)
        } catch (e : any) {
            setErrors(e)
        }
    }

    return (
        <div className={styles.container}>
            <Form>
                <Input
                    label       = {'Login'}
                    type        = {'login'}
                    value       = {params.login}
                    error       = {errors && errors.login}
                    onChange    = {handleChange}
                />
                <Input
                    label       = {'Password'}
                    type        = {'password'}
                    value       = {params.password}
                    error       = {errors && errors.password}
                    onChange    = {handleChange}
                />

                <Button
                    isLoading   = {isLoading}
                    type        = 'button'
                    label       = {'Submit'}
                    onClick     = {handleSubmit}
                />
            </Form>
        </div>
    )
}

export default LoginPage