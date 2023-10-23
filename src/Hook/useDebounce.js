import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(handleer);
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
