import React from 'react';
import logoSrc from '../assets/brand/donorfit-logo-web.png';
import iconSrc from '../assets/brand/donorfit-icon.png';

/**
 * Official Donorfit brand logo.
 *
 * Always renders the supplied original artwork (src/assets/brand) — never a
 * text recreation. Only one colour version exists (navy + teal on transparent),
 * so on dark backgrounds the logo is placed on a white plate to preserve its
 * original appearance instead of recolouring it.
 *
 * Size it by height (e.g. `className="h-9"`); width follows the intrinsic
 * aspect ratio, so proportions are never distorted.
 */

// Intrinsic dimensions of the source files, used to reserve layout space and avoid CLS.
const LOGO_W = 800;
const LOGO_H = 227;
const ICON_SIZE = 160;

interface BrandLogoProps {
  /** `full` = shield + wordmark (default); `icon` = shield mark only. */
  variant?: 'full' | 'icon';
  /** Set when the logo sits on a dark surface — wraps it in a white plate. */
  onDark?: boolean;
  /** Height utility classes for the image, e.g. "h-8 sm:h-9". */
  className?: string;
  /** Extra classes for the white plate (only used when onDark). */
  plateClassName?: string;
  /** Eager-load for above-the-fold placements (header). */
  priority?: boolean;
  alt?: string;
}

export default function BrandLogo({
  variant = 'full',
  onDark = false,
  className = 'h-9',
  plateClassName = '',
  priority = false,
  alt = 'Donorfit',
}: BrandLogoProps) {
  const isIcon = variant === 'icon';
  const img = (
    <img
      src={isIcon ? iconSrc : logoSrc}
      width={isIcon ? ICON_SIZE : LOGO_W}
      height={isIcon ? ICON_SIZE : LOGO_H}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      draggable={false}
      className={`${className} w-auto max-w-full object-contain select-none`}
    />
  );

  if (!onDark) return img;

  return (
    <span
      className={`inline-flex items-center bg-white shadow-sm ring-1 ring-white/10 ${
        isIcon ? 'p-0.5 rounded-md' : 'px-3 py-2 rounded-xl'
      } ${plateClassName}`}
    >
      {img}
    </span>
  );
}
