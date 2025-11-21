/**
 * Mock Data for Cyber-Insurance Readiness Platform
 * Contains security questions and recommendations
 */

// Security assessment questions with scoring weights
const QUESTIONS = [
    {
        id: 1,
        question: "Does your organization have a documented incident response plan?",
        options: [
            { text: "Yes, regularly tested and updated", value: 10 },
            { text: "Yes, but not regularly tested", value: 7 },
            { text: "In development", value: 4 },
            { text: "No", value: 0 }
        ]
    },
    {
        id: 2,
        question: "Do you enforce multi-factor authentication (MFA) for all users?",
        options: [
            { text: "Yes, for all users and systems", value: 10 },
            { text: "Yes, for administrators only", value: 6 },
            { text: "Partially implemented", value: 3 },
            { text: "No", value: 0 }
        ]
    },
    {
        id: 3,
        question: "How often do you perform security awareness training for employees?",
        options: [
            { text: "Quarterly or more frequently", value: 10 },
            { text: "Annually", value: 7 },
            { text: "Only during onboarding", value: 3 },
            { text: "Never", value: 0 }
        ]
    },
    {
        id: 4,
        question: "Do you maintain regular, tested backups of critical data?",
        options: [
            { text: "Yes, daily backups with regular restore testing", value: 10 },
            { text: "Yes, weekly backups with occasional testing", value: 7 },
            { text: "Backups exist but rarely tested", value: 4 },
            { text: "No regular backup process", value: 0 }
        ]
    },
    {
        id: 5,
        question: "Is your organization's software and systems regularly updated?",
        options: [
            { text: "Yes, automated patching within 24-48 hours", value: 10 },
            { text: "Yes, manual patching within a week", value: 7 },
            { text: "Occasionally, no set schedule", value: 3 },
            { text: "Rarely or never", value: 0 }
        ]
    },
    {
        id: 6,
        question: "Do you have network segmentation and access controls in place?",
        options: [
            { text: "Yes, comprehensive segmentation with least-privilege access", value: 10 },
            { text: "Partial segmentation implemented", value: 6 },
            { text: "Basic firewall only", value: 3 },
            { text: "No segmentation", value: 0 }
        ]
    },
    {
        id: 7,
        question: "Do you monitor and log security events across your infrastructure?",
        options: [
            { text: "Yes, with 24/7 monitoring and automated alerts", value: 10 },
            { text: "Yes, with daily review of logs", value: 7 },
            { text: "Basic logging, rarely reviewed", value: 3 },
            { text: "No monitoring or logging", value: 0 }
        ]
    },
    {
        id: 8,
        question: "Do you conduct regular vulnerability assessments and penetration testing?",
        options: [
            { text: "Yes, quarterly or more frequently", value: 10 },
            { text: "Yes, annually", value: 7 },
            { text: "Only when required by compliance", value: 4 },
            { text: "Never", value: 0 }
        ]
    },
    {
        id: 9,
        question: "Is sensitive data encrypted both at rest and in transit?",
        options: [
            { text: "Yes, all sensitive data is encrypted", value: 10 },
            { text: "Only in transit (HTTPS/TLS)", value: 6 },
            { text: "Partial encryption", value: 3 },
            { text: "No encryption", value: 0 }
        ]
    },
    {
        id: 10,
        question: "Do you have a vendor risk management program for third-party services?",
        options: [
            { text: "Yes, comprehensive vendor assessments and ongoing monitoring", value: 10 },
            { text: "Yes, initial assessments only", value: 6 },
            { text: "Informal review process", value: 3 },
            { text: "No vendor risk management", value: 0 }
        ]
    }
];

// Recommendations based on score ranges and specific answers
const RECOMMENDATIONS = {
    // High priority recommendations (shown for scores < 40)
    high: [
        {
            title: "Implement Incident Response Plan",
            description: "Develop and document a comprehensive incident response plan. This is critical for minimizing damage during security incidents and is often required for cyber insurance coverage.",
            priority: "high",
            category: "incident-response"
        },
        {
            title: "Enable Multi-Factor Authentication",
            description: "Deploy MFA across all user accounts immediately. This is one of the most effective controls against unauthorized access and credential theft.",
            priority: "high",
            category: "access-control"
        },
        {
            title: "Establish Backup and Recovery Procedures",
            description: "Implement automated daily backups with regular restore testing. This is essential for ransomware protection and business continuity.",
            priority: "high",
            category: "backup"
        },
        {
            title: "Deploy Endpoint Protection",
            description: "Install and maintain enterprise-grade antivirus/EDR solutions on all devices. Ensure automatic updates and regular scans are enabled.",
            priority: "high",
            category: "endpoint"
        }
    ],
    
    // Medium priority recommendations (shown for scores 40-70)
    medium: [
        {
            title: "Enhance Security Training Program",
            description: "Implement quarterly security awareness training with phishing simulations. Human error is a leading cause of security incidents.",
            priority: "medium",
            category: "training"
        },
        {
            title: "Implement Network Segmentation",
            description: "Segment your network to limit lateral movement of attackers. Separate critical systems and implement zero-trust principles.",
            priority: "medium",
            category: "network"
        },
        {
            title: "Establish Security Monitoring",
            description: "Deploy SIEM or log management solution to detect and respond to security events in real-time.",
            priority: "medium",
            category: "monitoring"
        },
        {
            title: "Regular Vulnerability Scanning",
            description: "Conduct quarterly vulnerability assessments and annual penetration testing to identify and remediate security weaknesses.",
            priority: "medium",
            category: "testing"
        }
    ],
    
    // Low priority recommendations (shown for scores > 70)
    low: [
        {
            title: "Enhance Data Encryption",
            description: "Ensure all sensitive data is encrypted at rest and in transit. Implement data classification and protection policies.",
            priority: "low",
            category: "encryption"
        },
        {
            title: "Formalize Vendor Risk Management",
            description: "Develop a vendor risk management program to assess and monitor third-party security practices regularly.",
            priority: "low",
            category: "vendor"
        },
        {
            title: "Implement Security Automation",
            description: "Automate patch management, security scanning, and compliance reporting to improve efficiency and reduce human error.",
            priority: "low",
            category: "automation"
        },
        {
            title: "Obtain Security Certifications",
            description: "Consider pursuing industry certifications like SOC 2, ISO 27001, or industry-specific compliance frameworks.",
            priority: "low",
            category: "compliance"
        }
    ]
};

// Score rating thresholds and labels
const SCORE_RATINGS = {
    excellent: { min: 85, max: 100, label: "Excellent - Insurance Ready", color: "excellent" },
    good: { min: 70, max: 84, label: "Good - Strong Security Posture", color: "good" },
    fair: { min: 50, max: 69, label: "Fair - Improvement Needed", color: "fair" },
    poor: { min: 0, max: 49, label: "Poor - Significant Gaps", color: "poor" }
};
