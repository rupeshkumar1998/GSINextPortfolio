import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const NumberCounter = ({ n }) => {
    const { num } = useSpring({
        from: { num: 0 },
        num: n,
        delay: 300,
        config: { mass: 1, tension: 10, friction: 6 },
    });

    return <animated.span>{num.to((n) => n.toFixed(0))}</animated.span>;
};

export default NumberCounter;
