import { LoginParams } from '../pages/LoginPage'

export interface ErrorParams {
    [key: string] : string
}

interface Result {
    isValid: boolean,
    error: ErrorParams
}

const validateLoginParams  = (params: LoginParams) => {
    const result : Result = {isValid: true, error : {
        login: '',
        password: ''
    }}

    Object.entries(params).forEach(([key, value]) => {
        if (!value.trim()) {
            result.error[key] = 'Field is required'
            result.isValid = false
        }
    })

    return result
}

export {
    validateLoginParams
}