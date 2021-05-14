import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { IconContext } from "react-icons"
import { FaTwitch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'
import { theme } from '../tailwind.config'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen py-2 bg-blue">
      <Head className="">
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row mb-2 w-full justify-between" >
        <button className="flex text-2xl border-solid border-black 
        border-2 bg-brown text-blue w-72
        rounded-md place-content-center py-4">
          <Link href="/">
            <a className="">William Neal</a>
          </Link>
        </button>
        

        <p className="mt-1 mr-8 text-2xl bg-brown border-8 border-brown rounded-full">
            <FaBars size="2em" color="green" />
        </p>
      </main>
      <div className="border-8 border-gray border-opacity-30 backdrop-filter backdrop-blur-md bg-gray p-0" >
      <Image src="/20210330_121046.jpg" alt="photo" width="375" height="500" />
      </div>
      <footer className="flex flex-row w-full h-24 justify-evenly">
        <div className="flex pr-96 mr-96 space-x-4">
          <div className="cursor-pointer">
          <Link href="https://www.twitch.tv">
            <FaTwitch size="3em" color={theme.colors.brown}/>
          </Link>
          </div>
          <div className="cursor-pointer">
          <Link href="https://github.com/Jawnny5">
            <FaGithub size="3em" color={theme.colors.green}/>
          </Link>
          </div>
          <div className="cursor-pointer">
          <Link href="https://www.linkedin.com/in/william-neal1283">
            <FaLinkedin size="3em" color={theme.colors.brown}/>
          </Link>
          </div>
        </div>
        <p
         className="flex"
        >
        <FaRegCopyright />
        {'  '} William Neal, 2021
        </p>
      </footer>
    </div>
  )
}


