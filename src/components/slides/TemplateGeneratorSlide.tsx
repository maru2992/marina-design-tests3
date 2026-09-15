import React from 'react'
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react'
import './WorkstreamSlide.css'

const TemplateGeneratorSlide: React.FC = () => {
  const tasks = [
    { name: 'Template Engine', status: 'Complete', owner: 'Full Stack Dev', dueDate: '2024-01-12' },
    { name: 'Custom Templates', status: 'Complete', owner: 'Frontend Dev', dueDate: '2024-01-20' },
    { name: 'Template Preview', status: 'Complete', owner: 'Frontend Dev', dueDate: '2024-01-25' },
    { name: 'Export Functionality', status: 'In Progress', owner: 'Full Stack Dev', dueDate: '2024-02-02' },
    { name: 'Template Library', status: 'Complete', owner: 'Content Team', dueDate: '2024-01-28' }
  ]

  const milestones = [
    { name: 'Core Engine Complete', date: '2024-01-12', status: 'Complete' },
    { name: 'Template Library Launch', date: '2024-01-28', status: 'Complete' },
    { name: 'Export Features', date: '2024-02-05', status: 'In Progress' }
  ]

  const risks = [
    { description: 'Complex template rendering', severity: 'Low', mitigation: 'Extensive testing completed' }
  ]

  return (
    <div className="slide workstream-slide">
      <div className="slide-header">
        <div>
          <h1 className="slide-title">Template Generator</h1>
          <p className="slide-subtitle">Template Creation & Management</p>
        </div>
        <div className="status-badge ahead">Ahead</div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-value">90%</span>
        </div>
        <div className="progress-bar-container large">
          <div className="progress-bar-fill" style={{ width: '90%', background: '#48bb78' }} />
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

export default TemplateGeneratorSlide