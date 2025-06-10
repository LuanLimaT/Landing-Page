import { useKeenSlider } from "keen-slider/react"
import { useState, useRef, useEffect } from "react"


export function useTestuseTestimonialSlider (totalSlides: number) {
  const timer = useRef<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2, 
      spacing: 10,
      
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  }) 

  useEffect(() => {
    timer.current = window.setInterval(() => {
      if (slider && slider.current) {
         const nextSlide = (currentSlide + 1) % totalSlides
         slider.current.moveToIdx(nextSlide)
      }
    }, 4000)

    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [slider, currentSlide, totalSlides])

  return {
    sliderRef,
    slider,
    currentSlide,
  }
}