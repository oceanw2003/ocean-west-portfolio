"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/data/portfolio";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="icon-button"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open ? (
        <div className="mobile-menu" id="mobile-navigation">
          {items.map((item) => (
            <a
              className="mobile-menu-link"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
