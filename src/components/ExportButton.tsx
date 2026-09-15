import React from 'react'
import { Download } from 'lucide-react'
import { exportToPowerPoint } from '../utils/exportPowerPoint'
import './ExportButton.css'

const ExportButton: React.FC = () => {
  const handleExport = () => {
    try {
      exportToPowerPoint()
    } catch (error) {
      console.error('Error exporting to PowerPoint:', error)
      alert('Failed to export presentation. Please try again.')
    }
  }

  return (
    <button className="export-button" onClick={handleExport} aria-label="Export to PowerPoint">
      <Download size={20} />
      <span>Export to PowerPoint</span>
    </button>
  )
}

export default ExportButton