import React from 'react'
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react'
import './SummarySlide.css'

const SummarySlide: React.FC = () => {
  const workstreams = [
    { name: 'Project Admin, Design & Tech', progress: 85, status: 'On Track' },
    { name: 'Local File', progress: 72, status: 'On Track' },
    { name: 'Template Generator', progress: 90, status: 'Ahead' },
    { name: 'IC Matrix', progress: 68, status: 'At Risk' },
    { name: 'UI Based', progress: 78, status: 'On Track' },
  ]

  const overallProgress = Math.round(
    workstreams.reduce((sum, ws) => sum + ws.progress, 0) / workstreams.length
  )

  return (
    <div className="slide summary-slide">
      <div className="slide-header">
        <h1 className="slide-title">Project Overview</h1>
        <p className="slide-subtitle">Comprehensive workstream status and metrics</p>
      </div>

      <div className="summary-grid">
        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#667eea' }}>
            <TrendingUp size={28} color="white" />
          </div>
          <div className="metric-content">
            <div className="metric-value">{overallProgress}%</div>
            <div className="metric-label">Overall Progress</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#48bb78' }}>
            <CheckCircle size={28} color="white" />
          </div>
          <div className="metric-content">
            <div className="metric-value">3/5</div>
            <div className="metric-label">On Track</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#ed8936' }}>
            <Clock size={28} color="white" />
          </div>
          <div className="metric-content">
            <div className="metric-value">1/5</div>
            <div className="metric-label">At Risk</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#9f7aea' }}>
            <Users size={28} color="white" />
          </div>
          <div className="metric-content">
            <div className="metric-value">5</div>
            <div className="metric-label">Active Workstreams</div>
          </div>
        </div>
      </div>

      <div className="workstream-list">
        <h2 className="section-title">Workstream Status</h2>
        {workstreams.map((ws, index) => (
          <div key={index} className="workstream-item">
            <div className="workstream-header">
              <span className="workstream-name">{ws.name}</span>
              <span className={`status-badge ${ws.status.toLowerCase().replace(' ', '-')}`}>
                {ws.status}
              </span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ 
                  width: `${ws.progress}%`,
                  background: ws.status === 'At Risk' ? '#ed8936' : 
                             ws.status === 'Ahead' ? '#48bb78' : '#667eea'
                }}
              />
            </div>
            <div className="progress-label">{ws.progress}% Complete</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SummarySlide