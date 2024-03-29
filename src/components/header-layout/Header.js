import React from 'react'
import Image from 'next/image'

import { HeaderContainer } from './style'
import { HeaderContent } from './style'
import Logo from '../../assets/Logo-FreeGames.png'

function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={Logo} alt='logo' width={150} height={150}/>

      </HeaderContent>
    </HeaderContainer>
      
    
  )
}

export default Header