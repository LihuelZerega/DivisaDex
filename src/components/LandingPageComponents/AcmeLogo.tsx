import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/Images/logo.png'

function AcmeLogo() {
  return (
<Image src={Logo} width={50} height={50} alt='Logo'/>
    )
}

export default AcmeLogo