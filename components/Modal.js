import { useState } from "react";
import Portal from "./Portal";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Modal() {
  const [open, setOpen] = useState();
  const handleModal = () => {
  setOpen(true);
  };
  const modalBox = 
    <Portal selector="#MenuModal">
    <div className="backdrop">
      <div className="modal">
        <ul>
          <Link href="">
            <li>About Me</li>
          </Link>
          <Link href="">
            <li>Blog</li>
          </Link>
          <Link href="">
            <li>Work</li>
          </Link>
          <Link href="">
            <li>Contact</li>
          </Link>
        </ul>
        <button type="button" onClick={() => setOpen(false)}>
          Close Modal
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
          top: 10%;
          right: 10%;
          bottom: 10%;
          left: 10%;
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
