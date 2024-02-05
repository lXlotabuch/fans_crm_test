import { useContext, useEffect, useState }  from 'react'
import sleep                                from '../utils/sleep'
import { Context, ContextType }             from '../context/Context'

const userData = {
    firstName : 'admin',
    secondName: 'admin',
    email: 'admin@admin.com'
}

const useFetchUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { state, setUserData } = useContext(Context) as ContextType

    const fetchUser = async (token : string | null) : Promise<void>=> {
        if (!token) return

        setIsLoading(true)
        // /request imitation
        try {
            await sleep(400)

            setUserData(userData)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUser(state.token)
    }, [])

    return {
        isLoading
    }
}

export default useFetchUser