import PptxGenJS from 'pptxgenjs'

export interface WorkstreamData {
  name: string
  progress: number
  status: string
  tasks: Array<{
    name: string
    status: string
    owner: string
    dueDate: string
  }>
  milestones: Array<{
    name: string
    date: string
    status: string
  }>
  risks: Array<{
    description: string
    severity: string
    mitigation: string
  }>
}

const workstreamData: WorkstreamData[] = [
  {
    name: 'Project Admin, Design & Tech',
    progress: 85,
    status: 'On Track',
    tasks: [
      { name: 'Architecture Design', status: 'Complete', owner: 'Tech Lead', dueDate: '2024-01-15' },
      { name: 'Infrastructure Setup', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-20' },
      { name: 'Design System', status: 'In Progress', owner: 'Design Lead', dueDate: '2024-02-01' },
      { name: 'CI/CD Pipeline', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-25' },
      { name: 'Documentation', status: 'In Progress', owner: 'Tech Writer', dueDate: '2024-02-10' }
    ],
    milestones: [
      { name: 'Architecture Approved', date: '2024-01-15', status: 'Complete' },
      { name: 'Design System v1', date: '2024-02-01', status: 'In Progress' },
      { name: 'Production Ready', date: '2024-02-28', status: 'Upcoming' }
    ],
    risks: [
      { description: 'Design system delays', severity: 'Medium', mitigation: 'Added design resources' },
      { description: 'Technical debt accumulation', severity: 'Low', mitigation: 'Weekly code reviews' }
    ]
  },
  {
    name: 'Local File',
    progress: 72,
    status: 'On Track',
    tasks: [
      { name: 'File Upload Module', status: 'Complete', owner: 'Backend Dev', dueDate: '2024-01-18' },
      { name: 'File Processing', status: 'In Progress', owner: 'Backend Dev', dueDate: '2024-02-05' },
      { name: 'Storage Integration', status: 'Complete', owner: 'DevOps', dueDate: '2024-01-22' },
      { name: 'File Validation', status: 'In Progress', owner: 'QA Lead', dueDate: '2024-02-08' },
      { name: 'Error Handling', status: 'Pending', owner: 'Backend Dev', dueDate: '2024-02-12' }
    ],
    milestones: [
      { name: 'Upload Feature Live', date: '2024-01-22', status: 'Complete' },
      { name: 'Processing Pipeline', date: '2024-02-08', status: 'In Progress' },
      { name: 'Full Integration', date: '2024-02-20', status: 'Upcoming' }
    ],
    risks: [
      { description: 'Large file handling', severity: 'Medium', mitigation: 'Implementing chunked uploads' },
      { description: 'Storage costs', severity: 'Low', mitigation: 'Optimization strategies in place' }
    ]
  },
  {
    name: 'Template Generator',
    progress: 90,
    status: 'Ahead',
    tasks: [
      { name: 'Template Engine', status: 'Complete', owner: 'Full Stack Dev', dueDate: '2024-01-12' },
      { name: 'Custom Templates', status: 'Complete', owner: 'Frontend Dev', dueDate: '2024-01-20' },
      { name: 'Template Preview', status: 'Complete', owner: 'Frontend Dev', dueDate: '2024-01-25' },
      { name: 'Export Functionality', status: 'In Progress', owner: 'Full Stack Dev', dueDate: '2024-02-02' },
      { name: 'Template Library', status: 'Complete', owner: 'Content Team', dueDate: '2024-01-28' }
    ],
    milestones: [
      { name: 'Core Engine Complete', date: '2024-01-12', status: 'Complete' },
      { name: 'Template Library Launch', date: '2024-01-28', status: 'Complete' },
      { name: 'Export Features', date: '2024-02-05', status: 'In Progress' }
    ],
    risks: [
      { description: 'Complex template rendering', severity: 'Low', mitigation: 'Extensive testing completed' }
    ]
  },
  {
    name: 'IC Matrix',
    progress: 68,
    status: 'At Risk',
    tasks: [
      { name: 'Matrix Data Model', status: 'Complete', owner: 'Backend Dev', dueDate: '2024-01-16' },
      { name: 'Matrix UI Components', status: 'In Progress', owner: 'Frontend Dev', dueDate: '2024-02-06' },
      { name: 'Role Assignment', status: 'Pending', owner: 'Backend Dev', dueDate: '2024-02-10' },
      { name: 'Permissions System', status: 'Pending', owner: 'Security Lead', dueDate: '2024-02-15' },
      { name: 'Matrix Analytics', status: 'Pending', owner: 'Data Analyst', dueDate: '2024-02-20' }
    ],
    milestones: [
      { name: 'Data Model Approved', date: '2024-01-16', status: 'Complete' },
      { name: 'UI Components', date: '2024-02-08', status: 'At Risk' },
      { name: 'Full Matrix Live', date: '2024-02-25', status: 'At Risk' }
    ],
    risks: [
      { description: 'UI complexity higher than expected', severity: 'High', mitigation: 'Adding frontend resources' },
      { description: 'Permission model delays', severity: 'Medium', mitigation: 'Parallel development approach' }
    ]
  },
  {
    name: 'UI Based',
    progress: 78,
    status: 'On Track',
    tasks: [
      { name: 'Component Library', status: 'Complete', owner: 'Frontend Lead', dueDate: '2024-01-14' },
      { name: 'Responsive Design', status: 'Complete', owner: 'UI Developer', dueDate: '2024-01-24' },
      { name: 'Accessibility', status: 'In Progress', owner: 'UI Developer', dueDate: '2024-02-07' },
      { name: 'Performance Optimization', status: 'In Progress', owner: 'Frontend Lead', dueDate: '2024-02-12' },
      { name: 'User Testing', status: 'Pending', owner: 'UX Researcher', dueDate: '2024-02-18' }
    ],
    milestones: [
      { name: 'Component Library v1', date: '2024-01-14', status: 'Complete' },
      { name: 'Responsive Complete', date: '2024-01-24', status: 'Complete' },
      { name: 'Accessibility Certified', date: '2024-02-10', status: 'In Progress' }
    ],
    risks: [
      { description: 'Browser compatibility issues', severity: 'Medium', mitigation: 'Cross-browser testing in progress' },
      { description: 'Performance on mobile', severity: 'Low', mitigation: 'Optimization strategies defined' }
    ]
  }
]

export const exportToPowerPoint = () => {
  const pptx = new PptxGenJS()

  // Set presentation properties
  pptx.author = 'Project Tracker'
  pptx.company = 'Bayer'
  pptx.title = 'Project Workstream Status'
  pptx.subject = 'Project Status Report'

  // Define color palette matching web design
  const colors = {
    primary: '667eea',
    secondary: '764ba2',
    success: '48bb78',
    warning: 'ed8936',
    danger: 'f56565',
    text: '1a202c',
    textLight: '718096',
    background: 'f7fafc',
    cardBg: 'ffffff',
    border: 'e2e8f0'
  }

  // Slide 1: Summary
  createSummarySlide(pptx, colors)

  // Slides 2-6: Individual Workstreams
  workstreamData.forEach((workstream) => {
    createWorkstreamSlide(pptx, workstream, colors)
  })

  // Save the presentation
  pptx.writeFile({ fileName: 'Project_Tracker_Status.pptx' })
}

function createSummarySlide(pptx: any, colors: any) {
  const slide = pptx.addSlide()

  // Gradient background (purple gradient)
  slide.background = { 
    fill: colors.primary
  }

  // Title section
  slide.addText('Project Tracker', {
    x: 0.5,
    y: 0.6,
    w: 9,
    h: 0.8,
    fontSize: 54,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Arial',
    align: 'left'
  })

  slide.addText('Comprehensive Workstream Overview & Status', {
    x: 0.5,
    y: 1.4,
    w: 9,
    h: 0.4,
    fontSize: 20,
    color: 'FFFFFF',
    fontFace: 'Arial',
    align: 'left'
  })

  // Metrics cards (2x2 grid)
  const metrics = [
    { label: 'Overall Progress', value: '79%', icon: '📊' },
    { label: 'On Track', value: '3/5', icon: '✅' },
    { label: 'At Risk', value: '1/5', icon: '⚠️' },
    { label: 'Ahead of Schedule', value: '1/5', icon: '🚀' }
  ]

  metrics.forEach((metric, index) => {
    const col = index % 2
    const row = Math.floor(index / 2)
    const x = 0.5 + (col * 4.75)
    const y = 2.4 + (row * 1.6)

    // Card background
    slide.addShape(pptx.ShapeType.rect, {
      x,
      y,
      w: 4.25,
      h: 1.3,
      fill: { color: colors.cardBg },
      line: { type: 'none' },
      shadow: {
        type: 'outer',
        blur: 10,
        offset: 3,
        angle: 90,
        color: '000000',
        opacity: 0.1
      }
    })

    // Icon
    slide.addText(metric.icon, {
      x: x + 0.3,
      y: y + 0.35,
      w: 0.6,
      h: 0.6,
      fontSize: 36
    })

    // Value
    slide.addText(metric.value, {
      x: x + 1.1,
      y: y + 0.25,
      w: 2.8,
      h: 0.5,
      fontSize: 36,
      bold: true,
      color: colors.text,
      fontFace: 'Arial'
    })

    // Label
    slide.addText(metric.label, {
      x: x + 1.1,
      y: y + 0.75,
      w: 2.8,
      h: 0.3,
      fontSize: 14,
      color: colors.textLight,
      fontFace: 'Arial'
    })
  })

  // Workstream status section
  slide.addText('Workstream Status', {
    x: 0.5,
    y: 5.8,
    w: 9,
    h: 0.4,
    fontSize: 22,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Arial'
  })

  const workstreams = [
    { name: 'Project Admin, Design & Tech', progress: 85, status: 'On Track' },
    { name: 'Local File', progress: 72, status: 'On Track' },
    { name: 'Template Generator', progress: 90, status: 'Ahead' },
    { name: 'IC Matrix', progress: 68, status: 'At Risk' },
    { name: 'UI Based', progress: 78, status: 'On Track' }
  ]

  workstreams.forEach((ws, index) => {
    const y = 6.4 + (index * 0.38)

    // Workstream name
    slide.addText(ws.name, {
      x: 0.5,
      y,
      w: 4,
      h: 0.3,
      fontSize: 13,
      color: 'FFFFFF',
      fontFace: 'Arial'
    })

    // Status badge
    const statusColor = ws.status === 'At Risk' ? colors.danger : 
                       ws.status === 'Ahead' ? colors.success : colors.success

    slide.addShape(pptx.ShapeType.rect, {
      x: 4.6,
      y: y + 0.02,
      w: 1.1,
      h: 0.26,
      fill: { color: statusColor },
      line: { type: 'none' }
    })

    slide.addText(ws.status, {
      x: 4.6,
      y: y + 0.02,
      w: 1.1,
      h: 0.26,
      fontSize: 10,
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle',
      fontFace: 'Arial'
    })

    // Progress percentage
    slide.addText(`${ws.progress}%`, {
      x: 5.9,
      y,
      w: 0.7,
      h: 0.3,
      fontSize: 13,
      color: 'FFFFFF',
      align: 'right',
      fontFace: 'Arial',
      bold: true
    })

    // Progress bar background
    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8,
      y: y + 0.08,
      w: 2.7,
      h: 0.14,
      fill: { color: 'FFFFFF', transparency: 30 },
      line: { type: 'none' }
    })

    // Progress bar fill
    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8,
      y: y + 0.08,
      w: 2.7 * (ws.progress / 100),
      h: 0.14,
      fill: { color: statusColor },
      line: { type: 'none' }
    })
  })
}

function createWorkstreamSlide(pptx: any, workstream: WorkstreamData, colors: any) {
  const slide = pptx.addSlide()

  // White background
  slide.background = { color: colors.background }

  // Header bar with gradient
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 1.3,
    fill: { color: colors.primary },
    line: { type: 'none' }
  })

  // Title
  slide.addText(workstream.name, {
    x: 0.5,
    y: 0.35,
    w: 7,
    h: 0.6,
    fontSize: 36,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Arial'
  })

  // Status badge
  const statusColor = workstream.status === 'At Risk' ? colors.danger : 
                     workstream.status === 'Ahead' ? colors.success : colors.success

  slide.addShape(pptx.ShapeType.rect, {
    x: 8.1,
    y: 0.42,
    w: 1.4,
    h: 0.46,
    fill: { color: statusColor },
    line: { type: 'none' }
  })

  slide.addText(workstream.status, {
    x: 8.1,
    y: 0.42,
    w: 1.4,
    h: 0.46,
    fontSize: 16,
    bold: true,
    color: 'FFFFFF',
    align: 'center',
    valign: 'middle',
    fontFace: 'Arial'
  })

  // Progress section with card
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5,
    y: 1.6,
    w: 4.5,
    h: 1.1,
    fill: { color: colors.cardBg },
    line: { type: 'none' },
    shadow: {
      type: 'outer',
      blur: 8,
      offset: 2,
      angle: 90,
      color: '000000',
      opacity: 0.08
    }
  })

  slide.addText('Overall Progress', {
    x: 0.7,
    y: 1.75,
    w: 4,
    h: 0.3,
    fontSize: 14,
    color: colors.textLight,
    fontFace: 'Arial'
  })

  slide.addText(`${workstream.progress}%`, {
    x: 0.7,
    y: 2.05,
    w: 4,
    h: 0.45,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    fontFace: 'Arial'
  })

  // Progress bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.7,
    y: 2.52,
    w: 4.1,
    h: 0.08,
    fill: { color: colors.border },
    line: { type: 'none' }
  })

  slide.addShape(pptx.ShapeType.rect, {
    x: 0.7,
    y: 2.52,
    w: 4.1 * (workstream.progress / 100),
    h: 0.08,
    fill: { color: statusColor },
    line: { type: 'none' }
  })

  // Tasks section
  slide.addText('Key Tasks', {
    x: 0.5,
    y: 2.95,
    w: 4.5,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: colors.text,
    fontFace: 'Arial'
  })

  // Task cards
  workstream.tasks.slice(0, 5).forEach((task, index) => {
    const y = 3.4 + (index * 0.65)

    // Task card
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.5,
      y,
      w: 4.5,
      h: 0.58,
      fill: { color: colors.cardBg },
      line: { color: colors.border, width: 1 }
    })

    // Task name
    slide.addText(task.name, {
      x: 0.65,
      y: y + 0.08,
      w: 2.3,
      h: 0.22,
      fontSize: 11,
      bold: true,
      color: colors.text,
      fontFace: 'Arial'
    })

    // Status badge
    const taskStatusColor = task.status === 'Complete' ? colors.success :
                           task.status === 'In Progress' ? colors.warning : colors.textLight

    slide.addShape(pptx.ShapeType.rect, {
      x: 3.05,
      y: y + 0.1,
      w: 0.85,
      h: 0.18,
      fill: { color: taskStatusColor },
      line: { type: 'none' }
    })

    slide.addText(task.status, {
      x: 3.05,
      y: y + 0.1,
      w: 0.85,
      h: 0.18,
      fontSize: 8,
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle',
      fontFace: 'Arial'
    })

    // Owner and date
    slide.addText(`👤 ${task.owner}`, {
      x: 0.65,
      y: y + 0.32,
      w: 1.8,
      h: 0.18,
      fontSize: 9,
      color: colors.textLight,
      fontFace: 'Arial'
    })

    slide.addText(`📅 ${task.dueDate}`, {
      x: 2.55,
      y: y + 0.32,
      w: 1.3,
      h: 0.18,
      fontSize: 9,
      color: colors.textLight,
      fontFace: 'Arial'
    })
  })

  // Milestones section
  slide.addText('Milestones', {
    x: 5.3,
    y: 1.6,
    w: 4,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: colors.text,
    fontFace: 'Arial'
  })

  workstream.milestones.forEach((milestone, index) => {
    const y = 2.1 + (index * 0.72)
    const milestoneColor = milestone.status === 'Complete' ? colors.success :
                          milestone.status === 'In Progress' ? colors.warning : colors.textLight

    // Milestone card
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.3,
      y,
      w: 4.2,
      h: 0.62,
      fill: { color: colors.cardBg },
      line: { color: colors.border, width: 1 }
    })

    // Status indicator bar
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.3,
      y,
      w: 0.12,
      h: 0.62,
      fill: { color: milestoneColor },
      line: { type: 'none' }
    })

    // Milestone name
    slide.addText(milestone.name, {
      x: 5.55,
      y: y + 0.12,
      w: 3.7,
      h: 0.22,
      fontSize: 12,
      bold: true,
      color: colors.text,
      fontFace: 'Arial'
    })

    // Date
    slide.addText(`📅 ${milestone.date}`, {
      x: 5.55,
      y: y + 0.36,
      w: 3.7,
      h: 0.18,
      fontSize: 10,
      color: colors.textLight,
      fontFace: 'Arial'
    })
  })

  // Risks section
  slide.addText('Risks & Mitigation', {
    x: 5.3,
    y: 4.5,
    w: 4,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: colors.text,
    fontFace: 'Arial'
  })

  workstream.risks.forEach((risk, index) => {
    const y = 5 + (index * 0.95)
    const riskColor = risk.severity === 'High' ? colors.danger :
                     risk.severity === 'Medium' ? colors.warning : colors.success

    // Risk card
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.3,
      y,
      w: 4.2,
      h: 0.85,
      fill: { color: colors.cardBg },
      line: { color: riskColor, width: 2 }
    })

    // Severity badge
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.45,
      y: y + 0.12,
      w: 0.75,
      h: 0.2,
      fill: { color: riskColor },
      line: { type: 'none' }
    })

    slide.addText(risk.severity, {
      x: 5.45,
      y: y + 0.12,
      w: 0.75,
      h: 0.2,
      fontSize: 9,
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle',
      fontFace: 'Arial'
    })

    // Risk description
    slide.addText(risk.description, {
      x: 6.3,
      y: y + 0.1,
      w: 3,
      h: 0.24,
      fontSize: 11,
      bold: true,
      color: colors.text,
      fontFace: 'Arial'
    })

    // Mitigation
    slide.addText(`Mitigation: ${risk.mitigation}`, {
      x: 5.45,
      y: y + 0.42,
      w: 3.6,
      h: 0.35,
      fontSize: 10,
      color: colors.textLight,
      fontFace: 'Arial'
    })
  })
}