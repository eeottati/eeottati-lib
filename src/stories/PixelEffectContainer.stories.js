import React from 'react';

import PixelEffectContainer from '../components/pixel/components/pixel-effect-container/PixelEffectContainer';

export default {
  title: 'Pixel/PixelEffectContainer',
  component: PixelEffectContainer,
}

export const Basic = () => (
  <PixelEffectContainer
      count={5000}
      color="#161616"
      borderRadius='15px'
      contentStyle={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        padding: '40px'
      }}
    >
      <div>
        <p>Mock content</p>
      </div>
    </PixelEffectContainer>
);
