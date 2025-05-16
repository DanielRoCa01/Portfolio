import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import ArrowDown from '../icons/ArrowDown.jsx';

const ProjectDropdown = ({ image, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(prevState => {
      const newOpenState = !prevState;

      if (newOpenState) {
        gsap.to(contentRef.current, {
          duration: 0.5,
          maxHeight: "1000px",
          opacity: 1,
          paddingTop: "1rem",
          marginTop: "0rem",
          marginBottom: "1rem",
          borderWidth: "4px",
          borderLeft: "0px",
          borderRight: "0px",
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          duration: 0.5,
          maxHeight: "0px",
          opacity: 0,
          paddingTop: "0rem",
          paddingBottom: "0rem",
          marginTop: "0rem",
          marginBottom: "0rem",
          borderWidth: "0px",
          ease: "power2.in",
        });
      }
      return newOpenState;
    });
  };

  return (
    <div className="m-0 p-0">
      <div
        ref={contentRef}
        className="dropdown-content overflow-hidden space-y-4 rounded-md border-y-4"
        style={{
          maxHeight: '0',
          opacity: 0,
          transition: 'none',
        }}
      >
        {image && (
          <div className="flex w-3/4 justify-center mx-auto mb-0">
            <img
              src={image}
              alt="Preview del proyecto"
              className="h-50 rounded-md shadow"
            />
          </div>
        )}
        <div className="p-4 text-base prose">
          {children}
        </div>
      </div>

      <button
        onClick={toggleDropdown}
        className="flex justify-center w-120 border-y-4 cursor-pointer group hover:bg-slate-900 transition rounded-md"
      >
        <ArrowDown
          className={`size-6 text-slate-900 group-hover:text-amber-50 transition-all duration-500 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default ProjectDropdown;
