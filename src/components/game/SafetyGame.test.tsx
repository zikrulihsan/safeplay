import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SafetyGame } from './SafetyGame';

describe('SafetyGame', () => {
  it('shows the scoreboard starting at zero and on the first question', () => {
    render(<SafetyGame />);
    expect(screen.getByText(/Skor:/i)).toHaveTextContent('0');
    expect(screen.getByText(/Soal 1 \//i)).toBeInTheDocument();
  });

  it('reveals feedback and locks the answer buttons after answering', async () => {
    const user = userEvent.setup();
    render(<SafetyGame />);

    const safeButton = screen.getByRole('button', { name: /Aman/i });
    const dangerButton = screen.getByRole('button', { name: /Bahaya/i });

    await user.click(safeButton);

    // Feedback uses one of the two known prefixes.
    expect(screen.getByText(/(Benar!|Hampir!)/)).toBeInTheDocument();
    expect(safeButton).toBeDisabled();
    expect(dangerButton).toBeDisabled();
  });

  it('keeps the live score region present', () => {
    render(<SafetyGame />);
    const scoreBox = screen.getByText(/Skor:/i);
    expect(within(scoreBox).getByText('0')).toBeInTheDocument();
  });
});
