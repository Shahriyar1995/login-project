import { useState, useEffect } from "react";


const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState('');


    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]

};

export default useLocalStorage;