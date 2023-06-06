import React from 'react'

export const Item = ({name, svg}) => {
    
  const handleClick = (e) => {
    document.querySelectorAll('.item-list').forEach(item => {
      item.classList.contains('item-selected') && item.classList.remove('item-selected')
    })
    e.currentTarget.className = 'item-list item-selected'
  }
  
  return (
    <li onClick={handleClick}  className='item-list'>
        <img className='img-item' src={svg} alt="" />
        <p> {name}</p>
    </li>
  )
}
