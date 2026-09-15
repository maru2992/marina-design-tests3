import React from 'react'
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react'
import './WorkstreamSlide.css'

const ICMatrixSlide: React.FC = () => {
  const tasks = [
    { name: 'Matrix Data Model', status: 'Complete', owner: 'Backend Dev', dueDate: '2024-01-16' },
    { name: 'Matrix UI Components', status: 'In Progress', owner: 'Frontend Dev', dueDate: '2024-02-06' },
    { name: 'Role Assignment', status: 'Pending', owner: 'Backend Dev', dueDate: '2024-02-10' },
    { name: 'Permissions System', status: 'Pending', owner: 'Security Lead', dueDate: '2024-02-15' },
    { name: 'Matrix Analytics', status: 'Pending', owner: 'Data Analyst', dueDate: '2024-02-20' }
  ]

  const milestones = [
    { name: 'Data Model Approved', date: '2024-01-16', status: 'Complete' },
    { name: 'UI Components', date: '2024-02-08', status: 'At Risk' },
    { name: 'Full Matrix Live', date: '2024-02-25', status: 'At Risk' }
  ]

  const risks = [
    { description: 'UI complexity higher than expected', severity: 'High', mitigation: 'Adding frontend resources' },
    { description: 'Permission model delays', severity: 'Medium', mitigation: 'Parallel development approach' }
  ]

  return (
    <div className="slide workstream-slide">
      <div className="slide-header">
        <div>
          <h1 className="slide-title">IC Matrix</h1>
          <p className="slide-subtitle">Individual Contributor Matrix Management</p>
        </div>
        <div className="status-badge at-risk">At Risk</div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-value">68%</span>
        </div>
        <div className="progress-bar-container large">
          <div className="progress-bar-fill" style={{ width: '68%', background: '#ed8936' }} />
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

export default ICMatrixSlide