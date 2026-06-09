import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { HazardCard } from './HazardCard';
import { HAZARDS } from '@/data/hazards';

const fireHazard = HAZARDS.find((h) => h.id === 'fire')!;

describe('HazardCard', () => {
  it('renders the hazard title and warning', () => {
    render(<HazardCard hazard={fireHazard} />);
    expect(screen.getByText('Api')).toBeInTheDocument();
    expect(screen.getByText(/JANGAN main korek api/i)).toBeInTheDocument();
  });

  it('exposes an accessible expandable control that toggles on activation', async () => {
    const user = userEvent.setup();
    render(<HazardCard hazard={fireHazard} />);

    const card = screen.getByRole('button', { name: /Bahaya Api/i });
    expect(card).toHaveAttribute('aria-expanded', 'false');

    await user.click(card);
    expect(card).toHaveAttribute('aria-expanded', 'true');

    await user.click(card);
    expect(card).toHaveAttribute('aria-expanded', 'false');
  });

  it('always renders the safe-action guidance for screen readers', () => {
    render(<HazardCard hazard={fireHazard} />);
    expect(screen.getByText(fireHazard.safeAction)).toBeInTheDocument();
  });
});
