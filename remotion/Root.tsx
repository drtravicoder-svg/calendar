import React from 'react';
import { Composition } from 'remotion';
import { CalendarIntro } from './CalendarIntro';

// Calendar pages are 924×1316px; keep video frames at the same size.
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CalendarIntro"
      component={CalendarIntro}
      durationInFrames={90}
      fps={30}
      width={924}
      height={1316}
    />
  );
};
