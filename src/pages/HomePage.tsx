import React, { useContext, useEffect }   from 'react'
import Loader                             from '../components/Loader/Loader'
import { Context, ContextType }           from '../context/Context'
import { useHistory }                     from 'react-router-dom'
import { ROUTES }                         from '../constants/routes'

const HomePage : React.FC = () => {
    const { state } = useContext(Context) as ContextType
    const history = useHistory()

    useEffect(() => {
        if (state.token) {
            history.replace(ROUTES.USER)
        } else {
            history.replace(ROUTES.LOGIN)
        }
    }, [])

    return <Loader/>
}

export default HomePage