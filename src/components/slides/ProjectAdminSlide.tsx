import React from 'react'
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react'
import './WorkstreamSlide.css'

const ProjectAdminSlide: React.FC = () => {
  const tasks = [
    { name: 'Architecture Design', status: 'Complete', owner: 'Tech Lead', dueDate: '2024-01-15' },
    { name: 'Infrastructure Setup', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-20' },
    { name: 'Design System', status: 'In Progress', owner: 'Design Lead', dueDate: '2024-02-01' },
    { name: 'CI/CD Pipeline', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-25' },
    { name: 'Documentation', status: 'In Progress', owner: 'Tech Writer', dueDate: '2024-02-10' }
  ]

  const milestones = [
    { name: 'Architecture Approved', date: '2024-01-15', status: 'Complete' },
    { name: 'Design System v1', date: '2024-02-01', status: 'In Progress' },
    { name: 'Production Ready', date: '2024-02-28', status: 'Upcoming' }
  ]

  const risks = [
    { description: 'Design system delays', severity: 'Medium', mitigation: 'Added design resources' },
    { description: 'Technical debt accumulation', severity: 'Low', mitigation: 'Weekly code reviews' }
  ]

  return (
    <div className="slide workstream-slide">
      <div className="slide-header">
        <div>
          <h1 className="slide-title">Project Admin, Design & Tech</h1>
          <p className="slide-subtitle">Foundation & Technical Infrastructure</p>
        </div>
        <div className="status-badge on-track">On Track</div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-value">85%</span>
        </div>
        <div className="progress-bar-container large">
          <div className="progress-bar-fill" style={{ width: '85%', background: '#48bb78' }} />
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

export default ProjectAdminSlide