# 🛡️ Cyber-Insurance Readiness Platform

A simple, interactive web application that helps organizations assess their cybersecurity readiness through a comprehensive questionnaire, providing a readiness score and tailored security recommendations.

## 🌟 Features

- **Interactive Security Assessment**: 10 comprehensive security questions covering key cybersecurity domains
- **Dynamic Scoring System**: Real-time score calculation based on user responses (0-100 scale)
- **Personalized Recommendations**: Tailored action items based on assessment results with priority levels
- **Clean & Modern UI**: Responsive design that works on desktop and mobile devices
- **Visual Score Display**: Animated circular progress indicator showing readiness score
- **Print-Friendly Results**: Export assessment results for documentation
- **No Backend Required**: Fully functional front-end prototype with mock data

## 📸 Screenshots

### Welcome Screen
![Welcome Screen](https://github.com/user-attachments/assets/9b3661d1-14b1-4d67-a80e-0150f0c2d06a)

### Questionnaire
![Questionnaire](https://github.com/user-attachments/assets/0c58dc04-f6a0-4567-9be5-2dab70e516df)

### Results - High Score
![Results High Score](https://github.com/user-attachments/assets/073da156-2486-4795-98f0-cf24a3258922)

### Results - Low Score
![Results Low Score](https://github.com/user-attachments/assets/4bcb7564-d642-4ada-ae81-a46a6849cc82)

### Mobile View
![Mobile Responsive](https://github.com/user-attachments/assets/0da40fde-ab8c-493c-a8fe-96524ebd8ca3)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for local testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/varfmx21/demo-cyber.git
   cd demo-cyber
   ```

2. Open the application:
   - **Option 1**: Simply open `index.html` in your web browser
   - **Option 2**: Use a local web server:
     ```bash
     # Python 3
     python3 -m http.server 8080
     
     # Python 2
     python -m SimpleHTTPServer 8080
     
     # Node.js (if you have http-server installed)
     npx http-server -p 8080
     ```
   - Then navigate to `http://localhost:8080` in your browser

## 📋 Usage

1. **Start Assessment**: Click the "Start Assessment" button on the welcome screen
2. **Answer Questions**: Select the most appropriate answer for each of the 10 security questions
3. **Navigate**: Use "Next" and "Previous" buttons to move through questions
4. **View Results**: After completing all questions, view your readiness score and recommendations
5. **Take Action**: Review the prioritized recommendations based on your score
6. **Retake or Print**: Optionally retake the assessment or print results for documentation

## 🏗️ Project Structure

```
demo-cyber/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── app.js          # Application logic and UI interactions
├── data.js         # Mock data (questions and recommendations)
└── README.md       # Project documentation
```

## 🔧 Technical Details

### Architecture

- **Modular Design**: Separation of concerns with distinct files for structure, styling, logic, and data
- **Object-Oriented JavaScript**: Main application logic encapsulated in a `CyberReadinessApp` class
- **Event-Driven**: Responsive UI updates based on user interactions
- **State Management**: Internal state tracking for current question, answers, and scores

### Security Assessment Categories

1. Incident Response Planning
2. Multi-Factor Authentication (MFA)
3. Security Awareness Training
4. Backup and Recovery
5. Patch Management
6. Network Segmentation
7. Security Monitoring
8. Vulnerability Assessment
9. Data Encryption
10. Vendor Risk Management

### Scoring System

- **Score Range**: 0-100
- **Rating Categories**:
  - 85-100: Excellent - Insurance Ready
  - 70-84: Good - Strong Security Posture
  - 50-69: Fair - Improvement Needed
  - 0-49: Poor - Significant Gaps

### Recommendation Priorities

- **High Priority**: Critical security gaps requiring immediate attention
- **Medium Priority**: Important improvements to strengthen security posture
- **Low Priority**: Optimization and enhancement recommendations

## 🎨 Customization

### Modifying Questions

Edit `data.js` to add, remove, or modify security questions:

```javascript
const QUESTIONS = [
    {
        id: 1,
        question: "Your question here?",
        options: [
            { text: "Best answer", value: 10 },
            { text: "Good answer", value: 7 },
            { text: "Fair answer", value: 4 },
            { text: "Poor answer", value: 0 }
        ]
    },
    // Add more questions...
];
```

### Customizing Recommendations

Modify the `RECOMMENDATIONS` object in `data.js` to tailor recommendations:

```javascript
const RECOMMENDATIONS = {
    high: [
        {
            title: "Recommendation Title",
            description: "Detailed description...",
            priority: "high",
            category: "category-name"
        }
    ]
};
```

### Styling

Modify `styles.css` to customize colors, fonts, and layout. CSS variables are defined at the top for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --success-color: #10b981;
    /* ... more variables */
}
```

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is a demonstration application created for educational purposes.

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your own use.

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Note**: This is a front-end prototype using mock data. For production use, integrate with a backend API for data persistence and advanced analytics.