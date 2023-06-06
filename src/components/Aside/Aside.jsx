import React, { useState } from 'react'
import './Aside.css'
import { Item } from '../Item/Item'

const CATEGORIES = [
  {
    name: 'rayadas',
    svg: 'icons/alignment-left-square.svg'
  },
  {
    name: 'cuadriculadas',
    svg: 'icons/cuad-square.svg'
  },
  {
    name: 'punteadas',
    svg: 'icons/dot-square.svg'
  },
  {
    name: 'milimétricas',
    svg: 'icons/iso-square.svg'
  },
  {
    name: 'pentagramas',
    svg: 'icons/song-square.svg'
  },
  {
    name: 'caligrafía',
    svg: 'icons/alpha-square.svg'
  }
]
const LIST_NAV_HOME = [
  {
    name: 'Inicio',
    svg: 'icons/home.svg'
  },
  {
    name: 'Donaciones',
    svg: 'icons/dollar.svg'
  }
]

export const Aside = () => {
 
  

  return (
    <aside className='dp-aside-menu'>
        <h1 className='dp-logo-company'>
          My sheet printed
          <span>polo daiana</span>
        </h1>
        <nav className='dp-nav-aside'>
            <ul className='dp-ul-home'>
              {
                  LIST_NAV_HOME.map(({name, svg}) => {
                    return(
                      <Item name = {name} svg = {svg}/>
                    )
                  })
              }
            </ul>
            <div className='nav-aside-divider'>
              <p>categorías</p>
            </div>
            <ul className='dp-ul-categories'>
              {
                CATEGORIES.map(({name, svg}) => {
                  return(
                    <Item name = {name} svg = {svg}/>
                  )
                })
              }
            </ul>
        </nav>
    </aside>
  )
}
