import React from 'react'
import Image from 'next/image'

import { HeaderContainer } from './style'
import { HeaderContent } from './style'
import Logo from '../../assets/Logo-FreeGames.png'

function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={Logo} alt='logo' width={200} height={200}/>
      </HeaderContent>
    </HeaderContainer>
      
    
  )
}

export default Header