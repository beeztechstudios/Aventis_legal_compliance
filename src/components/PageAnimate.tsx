'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PageAnimateProps {
  children: React.ReactNode;
}

export default function PageAnimate({ children }: PageAnimateProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate hero content elements (headings, descriptions, buttons, etc.)
    const contentElements = container.current?.querySelectorAll('.hero-content > *');
    if (contentElements && contentElements.length > 0) {
      gsap.from(contentElements, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }

    // Animate hero image (slide in from right/fade in)
    const imageElements = container.current?.querySelectorAll('.hero-image');
    if (imageElements && imageElements.length > 0) {
      gsap.from(imageElements, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
