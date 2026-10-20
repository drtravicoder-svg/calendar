import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';

export const CalendarIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [0, 90], [1.05, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <Img
        src={staticFile('VenkatramaCoTeluguCalendarColour202509.png')}
        style={{ width: '100%', height: '100%', opacity, transform: `scale(${scale})` }}
      />
    </AbsoluteFill>
  );
};
