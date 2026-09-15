import React from 'react'
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'
import './SlideNavigation.css'

interface Slide {
  id: number
  title: string
}

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number) => void
  slides: Slide[]
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
  slides,
}) => {
  return (
    <div className="slide-navigation">
      <div className="nav-content">
        <button
          className="nav-button"
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => onGoTo(index)}
              aria-label={`Go to ${slide.title}`}
              title={slide.title}
            >
              <Circle size={12} fill={currentSlide === index ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>

        <div className="slide-counter">
          <span className="current">{currentSlide + 1}</span>
          <span className="separator">/</span>
          <span className="total">{totalSlides}</span>
        </div>

        <button
          className="nav-button"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default SlideNavigation