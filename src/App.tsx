import React, { useState } from 'react'
import SlideNavigation from './components/SlideNavigation'
import ExportButton from './components/ExportButton'
import GitHubConnectButton from './components/GitHubConnectButton'
import SummarySlide from './components/slides/SummarySlide'
import ProjectAdminSlide from './components/slides/ProjectAdminSlide'
import LocalFileSlide from './components/slides/LocalFileSlide'
import TemplateGeneratorSlide from './components/slides/TemplateGeneratorSlide'
import ICMatrixSlide from './components/slides/ICMatrixSlide'
import UIBasedSlide from './components/slides/UIBasedSlide'
import './App.css'

const slides = [
  { id: 0, title: 'Project Summary', component: SummarySlide },
  { id: 1, title: 'Project Admin, Design & Tech', component: ProjectAdminSlide },
  { id: 2, title: 'Local File', component: LocalFileSlide },
  { id: 3, title: 'Template Generator', component: TemplateGeneratorSlide },
  { id: 4, title: 'IC Matrix', component: ICMatrixSlide },
  { id: 5, title: 'UI Based', component: UIBasedSlide },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="app">
      <div className="top-actions">
        <GitHubConnectButton />
        <ExportButton />
      </div>
      
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        slides={slides}
      />
    </div>
  )
}

export default App