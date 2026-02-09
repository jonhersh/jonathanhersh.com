"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-ink/10 bg-brand-sand/95 p-3 backdrop-blur lg:hidden">
      <Link href="/contact" className="primary-btn w-full">
        Request a Consult
      </Link>
    </div>
  );
}
