import { useState } from 'react'

import { useHistory } from 'react-router-dom'

export const Search = () => {
    const [input, updateInput] = useState('')
    const history = useHistory()

    function onSubmit(e: any) {
        e.preventDefault()
        history.push(`search=${input}`)
    }
    return (
        <form className="search" onSubmit={onSubmit}>
            <input type="text" value={input} onChange={e => updateInput(e.target.value)} />
        </form>
    )
}
