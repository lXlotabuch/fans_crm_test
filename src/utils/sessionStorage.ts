const setToSS = (key: string, value : string) => {
    sessionStorage.setItem(key, value);
}

const removeFromSS = (key : string) => {
    sessionStorage.removeItem(key);
}

const getFromSS = (key : string) : string | null => {
    return sessionStorage.getItem(key)
}

const checkValueInSS = (key : string, value : string) : boolean => {
    const ssValue = sessionStorage.getItem(key);

    return !!ssValue && ssValue === value
}

export {
    setToSS,
    getFromSS,
    removeFromSS,
    checkValueInSS
}