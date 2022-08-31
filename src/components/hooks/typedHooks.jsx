import React from 'react';
import Typed from 'typed.js';

export const TypedHooks = ({ strings, loop }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 25,
      showCursor: false,
      loop,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <span style={{ whiteSpace: 'pre' }} ref={el} /> &nbsp;
    </div>
  );
};
