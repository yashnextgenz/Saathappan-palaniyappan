import React from 'react';

/** One page section: sized by its content, offset below the 72px sticky navbar when linked to. */
export const Screen: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <div id={id} className="screen scroll-mt-[72px]">
    {children}
  </div>
);
