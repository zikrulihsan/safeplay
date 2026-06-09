import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'coral' | 'grass' | 'sun' | 'grape' | 'sky';
export type ButtonSize = 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  coral: 'bg-coral text-white shadow-coral-deep',
  grass: 'bg-grass text-white shadow-grass-deep',
  sun: 'bg-sun text-ink shadow-sun-deep',
  grape: 'bg-grape text-white shadow-grape-deep',
  sky: 'bg-sky-deep text-white shadow-[#4F8FE0]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'px-7 py-3 text-lg',
  lg: 'px-9 py-4 text-xl',
};

/**
 * A tactile, kid-friendly button with a chunky drop shadow that "presses"
 * down on click. Press feedback is CSS-based so it automatically respects
 * the reduced-motion preference.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'coral', size = 'md', className, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-display font-extrabold',
        'shadow-chunky transition-transform duration-100 will-change-transform',
        'hover:-translate-y-0.5 active:translate-y-1 active:shadow-chunky-sm',
        'disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      {...props}
    />
  );
});
