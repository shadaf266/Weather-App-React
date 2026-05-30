import { useState, useEffect } from 'react'

export default function SearchBox({ searchTerm, setSearchTerm }) {
    const [inputValue, setInputValue] = useState(searchTerm)
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(inputValue)
        }, 500)

        return () => clearTimeout(timer)

    }, [inputValue])
    return (
        <div className='search-box'>
            <input
                type='text'
                placeholder='Search city...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}