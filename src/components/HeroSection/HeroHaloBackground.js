import React, { useState, useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import GLOBE from 'vanta/dist/vanta.globe.min';

// Make sure window.THREE is defined,
//e.g.by including three.min.js
//in the document head using a < script > tag

export const HeroHaloBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 200.0,
          baseColor: 0x1e232d,
          backgroundColor: 0x30407,
          xOffset: 0.25,
          yOffset: 0.1,
          // size: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}></div>;
};

export const HeroGlobeBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 200.0,
          baseColor: 0x1e232d,
          backgroundColor: 0x30407,
          xOffset: 0.25,
          yOffset: 0.1,
          size: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}></div>;
};
