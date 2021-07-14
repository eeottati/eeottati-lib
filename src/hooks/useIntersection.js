import { useEffect } from 'react';

// Default intersection observer options
const defaultOptions = { threshold: 0, rootMargin: '0px 0px 0px 0px' };

/**
 * Asynchronously observe changes in intersection of a target elements with a container
 * @param  {} containerRef
 * @param  {} selector
 * @param  {} callback
 * @param  {} options=defaultOptions
 */
export function useIntersection(containerRef, selector, callback, options = defaultOptions) {
  if (!(callback && selector)) return;

  useEffect(() => {
    const observers = [];

    // If container set & IntersectionObserver supported
    if (containerRef.current && typeof IntersectionObserver === 'function') {
      // Handle intersection callback
      const handleIntersect = (index) => (entries) => {
        callback(entries[0], index);
      };

      // Create, set, and store observers
      containerRef.current.querySelectorAll(selector).forEach((node, index) => {
        const observer = new IntersectionObserver(handleIntersect(index), options);
        observer.observe(node);
        observers.push(observer);
      });

      // Clean-up
      return () => {
        observers.forEach((observer) => {
          observer.disconnect();
        });
      };
    }

    // False clean-up
    return () => {};
  }, [containerRef.current, options.threshold, options.rootMargin]);
}
