import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { StorySection } from './StorySection';
import { STORIES } from '@/data/stories';

const story = STORIES[0]!;

describe('StorySection', () => {
  it('opens on the first scene of the first story', () => {
    render(<StorySection reduceMotion />);
    expect(screen.getByText(story.title)).toBeInTheDocument();
    expect(screen.getByText(story.scenes[0]!.text)).toBeInTheDocument();
    expect(screen.getByText(/Adegan 1 dari/)).toBeInTheDocument();
  });

  it('advances to the next scene and reveals the moral on the last one', async () => {
    const user = userEvent.setup();
    render(<StorySection reduceMotion />);

    // Click "Lanjut" until the last scene is reached.
    for (let i = 1; i < story.scenes.length; i++) {
      await user.click(screen.getByRole('button', { name: /Lanjut/i }));
      expect(await screen.findByText(story.scenes[i]!.text)).toBeInTheDocument();
    }

    // On the final scene the moral and a "repeat" control appear.
    expect(screen.getByText(/Pesan Robi/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ulangi/i })).toBeInTheDocument();
  });

  it('locks topics that do not have a story yet', () => {
    render(<StorySection reduceMotion />);
    const lockedTabs = screen.getAllByRole('tab', { name: /cerita segera hadir/i });
    expect(lockedTabs.length).toBeGreaterThan(0);
    lockedTabs.forEach((tab) => expect(tab).toBeDisabled());
  });
});
