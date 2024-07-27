// components/FlipAnimationComponent.js
import useFlipAnimation from './useFlipAnimation';

const FlipAnimationComponent = ({ children }) => {
  const flipRef = useFlipAnimation();

  return (
    <div ref={flipRef}>
      {children}
    </div>
  );
};

export default FlipAnimationComponent;
