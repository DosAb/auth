import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom';

import background from '/imgs/background.svg'

export default function AuthLayout () {
  const [showEscape, setShowEscape] = useState(false)

  return (
    <main className='container wrapper'>
      <div className='container__auth'>
        <h1>Добро пожаловать!</h1>
        <p>Lorby - твой личный репетитор</p>
        <img src={background} alt="background" />
        <button onClick={()=>{setShowEscape(true)}}>Выйти</button>
      </div>
      {showEscape &&
        <div className="escape__container">
          <div className="escape">
            <h3>Выйти?</h3>
            <h4>Точно выйти?</h4>
            <NavLink to="/login">
              <button>Да, точно</button>
            </NavLink>
            <button onClick={()=>{setShowEscape(false)}} >Нет, остаться</button>
          </div>
        </div>
      }

    </main>
  )
}

 AuthLogin