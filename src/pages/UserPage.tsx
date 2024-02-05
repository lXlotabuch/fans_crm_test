import React, { useContext, useState }  from 'react';
import Input, { OnInputChange }         from '../components/Input/Input';
import { Context, ContextType }         from '../context/Context';
import Form                             from '../components/Form/Form';

import styles                           from './UserPage.less'
import Button                           from '../components/Button/Button';
import Loader                           from '../components/Loader/Loader';
import useFetchUser                     from '../hooks/userFetchUser';
import useUpdateEffect                  from '../hooks/useUpdateEffect';

const UserPage : React.FC = () => {
    const { state, logout } = useContext(Context) as ContextType
    const [user, setUser] = useState(state.userData)

    const { isLoading } = useFetchUser()

    const handleChange: OnInputChange = (type, value) => {
        setUser(prev => ({
            ...prev,
            [type] : value
        }))
    }

    useUpdateEffect(() => {
        setUser(state.userData)
    }, [state.userData])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Button
                    type    = 'button'
                    label   = {'Logout'}
                    onClick = {logout}
                />
            </div>
            <div className={styles.content}>
                {
                    isLoading
                    ? < Loader/>
                    : <Form>
                        <Input
                            label       = {'First Name'}
                            type        = {'firstName'}
                            value       = {user.firstName}
                            onChange    = {handleChange}
                        />
                        <Input
                            label       = {'Second Name'}
                            type        = {'secondName'}
                            value       = {user.secondName}
                            onChange    = {handleChange}
                        />
                        <Input
                            label       = {'Email'}
                            type        = {'email'}
                            value       = {user.email}
                            onChange    = {handleChange}
                        />
                    </Form>
                    }
            </div>
        </div>
    )
}

export default UserPage