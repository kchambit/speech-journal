import React from 'react'

const Header = ({language,setLanguage}) => {
    const handleChangeL = () => {
        (language=="es-ES")? setLanguage("en-US") : setLanguage("es-ES") 
      }

  return (
    <div className='header'>
        <h1>Speech Journal</h1>
        {(language=="es-ES")?  <button onClick={handleChangeL}> ES </button> :  <button onClick={handleChangeL}> EN </button>}
    </div>
  )
}

export default Header