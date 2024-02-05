import { ReactNode, useState }                from 'react';
import { Context }                            from './Context';
import { getFromSS, removeFromSS, setToSS }   from '../utils/sessionStorage';

export interface UserData {
    firstName : string,
    secondName : string,
    email : string,
}

export interface State {
    token: string | null,
    userData: UserData
}

interface IProviderProps {
    children: ReactNode
}

const initialState = {
    token: null,
    userData : {
        firstName : '',
        secondName : '',
        email : '',
    }
}

const Provider: React.FC<IProviderProps> = ({ children }) => {
    const [state, setState] = useState<State>({
        ...initialState,
        token : getFromSS('token')
    });

    const login = (token : string) => {
        setState((prev) => ({
            ...prev,
            token
        }))

        setToSS('token', token)
    }

    const logout = () => {
        setState(initialState)
        removeFromSS('token')
    }

    const setUserData = (data : UserData) : void => {
        setState(prev => ({
            ...prev,
            userData :data
        }))
    }

    return (
        <Context.Provider value={{ state, login, logout, setUserData }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;