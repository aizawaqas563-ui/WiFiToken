/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const outlinePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setIsHidden(false);
    };

    // Smooth physics delay for external trailing circle outline
    const updateOutlinePosition = () => {
      const ease = 0.15; // smooth trailing speed
      const diffX = targetPos.current.x - outlinePosRef.current.x;
      const diffY = targetPos.current.y - outlinePosRef.current.y;

      outlinePosRef.current.x += diffX * ease;
      outlinePosRef.current.y += diffY * ease;

      setOutlinePosition({ x: outlinePosRef.current.x, y: outlinePosRef.current.y });
      requestRef.current = requestAnimationFrame(updateOutlinePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    requestRef.current = requestAnimationFrame(updateOutlinePosition);

    // Setup interactive hovered state listeners
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [onClick], .clickable-card, .faq-header'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Run listeners setup on initial load
    addHoverListeners();

    // Create a MutationObserver to watch for dynamic DOM updates and re-bind cursors
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[99999] hidden md:block ${isHovered ? 'cursor-hover' : ''}`}>
      {/* Central Neon Core Dot */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Trailing Outer Halo Ring */}
      <div
        className="custom-cursor-outline"
        style={{
          left: `${outlinePosition.x}px`,
          top: `${outlinePosition.y}px`,
        }}
      />
    </div>
  );
}
