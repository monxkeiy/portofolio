import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const SosmedCard = () => {
  return (
    <div className='flex flex-wrap gap-5 pt-5'>
      <a href="https://www.linkedin.com/in/">
        <FaLinkedin className='card-sosmed'/>
      </a>
      <a href="https://www.instagram.com/xmonz._">
        <FaInstagram className='card-sosmed'/>
      </a>
      <a href="https://github.com/monxkeiy">
        <FaGithub className='card-sosmed'/>
      </a>
      <a href="https://www.tiktok.com/@xmonz._">
        <FaTiktok className='card-sosmed'/>
      </a>
      <a href="mailto:fajrul375@gmail.com">
        <MdOutlineMail className='card-sosmed'/>
      </a>
    </div>
  )
}

export default SosmedCard
