import React from 'react'
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react'
import './WorkstreamSlide.css'

const UIBasedSlide: React.FC = () => {
  const tasks = [
    { name: 'Component Library', status: 'Complete', owner: 'Frontend Lead', dueDate: '2024-01-14' },
    { name: 'Responsive Design', status: 'Complete', owner: 'UI Developer', dueDate: '2024-01-24' },
    { name: 'Accessibility', status: 'In Progress', owner: 'UI Developer', dueDate: '2024-02-07' },
    { name: 'Performance Optimization', status: 'In Progress', owner: 'Frontend Lead', dueDate: '2024-02-12' },
    { name: 'User Testing', status: 'Pending', owner: 'UX Researcher', dueDate: '2024-02-18' }
  ]

  const milestones = [
    { name: 'Component Library v1', date: '2024-01-14', status: 'Complete' },
    { name: 'Responsive Complete', date: '2024-01-24', status: 'Complete' },
    { name: 'Accessibility Certified', date: '2024-02-10', status: 'In Progress' }
  ]

  const risks = [
    { description: 'Browser compatibility issues', severity: 'Medium', mitigation: 'Cross-browser testing in progress' },
    { description: 'Performance on mobile', severity: 'Low', mitigation: 'Optimization strategies defined' }
  ]

  return (
    <div className="slide workstream-slide">
      <div className="slide-header">
        <div>
          <h1 className="slide-title">UI Based</h1>
          <p className="slide-subtitle">User Interface Development</p>
        </div>
        <div className="status-badge on-track">On Track</div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-value">78%</span>
        </div>
        <div className="progress-bar-container large">
          <div className="progress-bar-fill" style={{ width: '78%', background: '#48bb78' }} />
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
                <div className={`milestone-indicator ${milestone.status.toLowerCase().replace(' ', '-')}`} />
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

export default UIBasedSlide