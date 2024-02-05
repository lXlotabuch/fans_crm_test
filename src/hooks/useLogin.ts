import { v4 as uuidv4 }           from 'uuid';
import { useContext, useState }   from 'react'
import { Context, ContextType }   from '../context/Context'
import sleep                      from '../utils/sleep'
import { LoginParams }            from '../pages/LoginPage';
import ADMIN                      from '../constants/credential';
import { INVALID }                from '../constants/errors';
import { ErrorParams }            from '../utils/validation';

const useLogin = () => {
    const { login } = useContext(Context) as ContextType
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginAction = async (params : LoginParams) : Promise<void | ErrorParams> => {
        setIsLoading(true)

        // /request imitation
        try {
            await sleep(300)

            if (params.login === ADMIN.LOGIN && params.password === ADMIN.PASSWORD) {
                login(uuidv4())
            } else {
                return INVALID
            }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        loginAction
    }
}

export default useLogin