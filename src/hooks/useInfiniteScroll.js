import { useRef } from 'react';

export default function useInfiniteScroll(callback) {
  const observer = useRef();

  const lastRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && callback(),
      { threshold: 1 }
    );
    if (node) observer.current.observe(node);
  };

  return lastRef;
}
