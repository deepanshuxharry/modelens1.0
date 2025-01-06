import React, { useRef, useState, useEffect, createRef } from "react";

import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = [
    { name: "Home", color: "#d749ff", href: "/" },
    { name: "Services", color: "#d749ff", href: "/services" },
    { name: "Our Team", color: "#d749ff", href: "/team" },
    { name: "Our Models", color: "#d749ff", href: "/our-models" },
    { name: "Contact us", color: "#d749ff", href: "/contact" },
  ];

  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, { ...settings });
    gsap.to($indicator2.current, { ...settings, duration: 1 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);

  // useEffect(() => {console.log('================================')})

  return (
    <div className="menu" ref={$root}>
      {/* Logo Section */}
      <div className="logo flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "85px", width: "80px", objectFit: "cover" }}
        />
        {/* Company Name */}

      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Items */}
      <div className={`nav-items ${menuOpen ? "active" : ""}`}>
        {items.map((item, index) => (
          <a
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? "active" : ""}`}
            onMouseEnter={() => setActive(index)}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
        <div ref={$indicator1} className="indicator" />
        <div ref={$indicator2} className="indicator" />
      </div>
    </div>
  );
};

export default Navbar;