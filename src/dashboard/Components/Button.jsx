import React from 'react'

function Button({title, styles, action}) {
  return (
    <button className={`text-white ml-2 rounded p-3 ${styles}`} onClick={action}>
        {title}
    </button>
  )
}

export {Button}