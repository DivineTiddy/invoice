declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    cssEase?: string;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: 'ondemand' | 'progressive';
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: 'unslick' | Settings;
    }>;
    rows?: number;
    rtl?: boolean;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    useTransform?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    waitForAnimate?: boolean;
    afterChange?: (currentSlide: number) => void;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    onEdge?: (direction: string) => void;
    onInit?: () => void;
    onLazyLoad?: (slidesToLoad: number[]) => void;
    onReInit?: () => void;
    onSwipe?: (direction: string) => void;
  }

  export default class Slider extends React.Component<Settings & { children?: React.ReactNode }> {
    slickNext(): void;
    slickPrev(): void;
    slickGoTo(slideNumber: number, dontAnimate?: boolean): void;
    slickPause(): void;
    slickPlay(): void;
  }
}
