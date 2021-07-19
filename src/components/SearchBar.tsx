import { useState } from 'react'

import { useHistory } from 'react-router-dom'

import search from '../images/search.svg'

export const SearchBar = () => {
    const [input, updateInput] = useState('')
    const history = useHistory()

    function onSubmit(e: any) {
        e.preventDefault()
        input && history.push(`search=${input}`)
    }

    return (
        <form className="search" onSubmit={onSubmit}>
            <input type="text" value={input} onChange={e => updateInput(e.target.value)} />
            <input type="image" src={search} alt="magnifying glass" className="" />
        </form>
    )
}
