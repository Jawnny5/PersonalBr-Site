import Portal from "./Portal";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { theme } from '../tailwind.config'

export default function Modal() {
  const [open, setOpen] = useState();
  const handleModal = () => {
  setOpen(true);
  };
  const modalBox = 
    <Portal selector="#MenuModal">
    <div className="backdrop">
      <div className="modal bg-brown">
        <ul>
          <Link href="/about">
            <li className="cursor-pointer">About Me</li>
          </Link>
          <Link href="https://wln-develops.medium.com/">
            <li className="cursor-pointer">Blog</li>
          </Link>
          <Link href="https://github.com/Jawnny5">
            <li className="cursor-pointer">Work</li>
          </Link>
          <Link href="https://www.linkedin.com/in/william-neal1283/">
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
        <button type="button" onClick={() => setOpen(false)}>
          Close 
        </button>
      </div>
      <style jsx>{`
        :global(body) {
          overflow: hidden;
        }
        .backdrop {
          position: fixed;
          background-color: rgba(0, 0, 0, 0.7);
          top: 0px;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .modal {
          background-color: white;
          position: absolute;
          top: 15%;
          right: 33%;
          bottom: 15%;
          left: 33%;
          padding: 1em;
          height: ;
        }
      `}</style>
    </div>
  </Portal>

  return (
    <>
      <p type="button" onClick={() => handleModal()}>
        <FaBars size="2em" color="green" />
      </p>
      {open && modalBox}
    </>
  );
}
