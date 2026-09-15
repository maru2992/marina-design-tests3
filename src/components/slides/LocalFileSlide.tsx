import React from 'react'
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react'
import './WorkstreamSlide.css'

const LocalFileSlide: React.FC = () => {
  const tasks = [
    { name: 'File Upload Module', status: 'Complete', owner: 'Backend Dev', dueDate: '2024-01-18' },
    { name: 'File Processing', status: 'In Progress', owner: 'Backend Dev', dueDate: '2024-02-05' },
    { name: 'Storage Integration', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-22' },
    { name: 'File Validation', status: 'In Progress', owner: 'QA Lead', dueDate: '2024-02-08' },
    { name: 'Error Handling', status: 'Pending', owner: 'Backend Dev', dueDate: '2024-02-12' }
  ]

  const milestones = [
    { name: 'Upload Feature Live', date: '2024-01-22', status: 'Complete' },
    { name: 'Processing Pipeline', date: '2024-02-08', status: 'In Progress' },
    { name: 'Full Integration', date: '2024-02-20', status: 'Upcoming' }
  ]

  const risks = [
    { description: 'Large file handling', severity: 'Medium', mitigation: 'Implementing chunked uploads' },
    { description: 'Storage costs', severity: 'Low', mitigation: 'Optimization strategies in place' }
  ]

  return (
    <div className="slide workstream-slide">
      <div className="slide-header">
        <div>
          <h1 className="slide-title">Local File</h1>
          <p className="slide-subtitle">File Management & Processing</p>
        </div>
        <div className="status-badge on-track">On Track</div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-value">72%</span>
        </div>
        <div className="progress-bar-container large">
          <div className="progress-bar-fill" style={{ width: '72%', background: '#48bb78' }} />
        </div>
      </div>

      <div className="workstream-content">
        <div className="content-column">
          <h3 className="section-title">
            <CheckCircle size={20} />
            Key Tasks
          </h3>
          <div className="task-list">
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <div className="task-header">
                  <span className="task-name">{task.name}</span>
                  <span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                  </span>
                </div>
                <div className="task-details">
                  <span className="task-owner">
                    <Users size={14} />
                    {task.owner}
                  </span>
                  <span className="task-date">
                    <Clock size={14} />
                    {task.dueDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <h3 className="section-title">
            <Clock size={20} />
            Milestones
          </h3>
          <div className="milestone-list">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className={`milestone-indicator ${milestone.status.toLowerCase()}`} />
                <div className="milestone-content">
                  <div className="milestone-name">{milestone.name}</div>
                  <div className="milestone-date">{milestone.date}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-title" style={{ marginTop: '32px' }}>
            <AlertCircle size={20} />
            Risks & Mitigation
          </h3>
          <div className="risk-list">
            {risks.map((risk, index) => (
              <div key={index} className={`risk-item ${risk.severity.toLowerCase()}`}>
                <div className="risk-header">
                  <span className="risk-severity">{risk.severity}</span>
                  <span className="risk-description">{risk.description}</span>
                </div>
                <div className="risk-mitigation">
                  <strong>Mitigation:</strong> {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalFileSlide