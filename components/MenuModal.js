import React from 'react'
import Link from 'next/link'
import Portal from './Portal'
import { theme } from '../tailwind.config'

export default function MenuModal() {
  return (
    <Portal selector="#MenuModal">
      <ul>
          <Link href="">
        <li>
          About Me
        </li>
          </Link>
          <Link href="">
        <li>
          Blog
        </li>
          </Link>
          <Link href="">
        <li>
          Work 
        </li>
          </Link>
          <Link href="">
        <li>
          Contact
        </li>
          </Link> 
      </ul>
    </Portal>
  )
}
