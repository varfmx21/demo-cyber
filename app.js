/**
 * Cyber-Insurance Readiness Platform - Main Application
 * Handles UI interactions, questionnaire flow, and scoring logic
 */

class CyberReadinessApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = new Array(QUESTIONS.length).fill(null);
        this.score = 0;
        this.initializeApp();
    }

    /**
     * Initialize the application and set up event listeners
     */
    initializeApp() {
        // Screen elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.questionnaireScreen = document.getElementById('questionnaire-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Button elements
        this.startBtn = document.getElementById('start-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.printBtn = document.getElementById('print-btn');

        // Question elements
        this.questionContainer = document.getElementById('question-container');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.progressFill = document.getElementById('progress-fill');

        // Set up event listeners
        this.setupEventListeners();

        // Initialize total questions display
        this.totalQuestionsSpan.textContent = QUESTIONS.length;
    }

    /**
     * Set up all event listeners for buttons and interactions
     */
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startAssessment());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartAssessment());
        this.printBtn.addEventListener('click', () => window.print());
    }

    /**
     * Start the assessment and show the first question
     */
    startAssessment() {
        this.showScreen(this.questionnaireScreen);
        this.renderQuestion();
    }

    /**
     * Render the current question with options
     */
    renderQuestion() {
        const question = QUESTIONS[this.currentQuestionIndex];
        
        this.questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option ${this.answers[this.currentQuestionIndex] === index ? 'selected' : ''}" 
                             data-index="${index}">
                            <input type="radio" 
                                   id="option-${index}" 
                                   name="question-${question.id}" 
                                   value="${option.value}"
                                   ${this.answers[this.currentQuestionIndex] === index ? 'checked' : ''}>
                            <label for="option-${index}">${option.text}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add click handlers to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.selectOption(index);
            });
        });

        // Update UI state
        this.updateQuestionCounter();
        this.updateProgress();
        this.updateNavigationButtons();
    }

    /**
     * Handle option selection
     */
    selectOption(optionIndex) {
        this.answers[this.currentQuestionIndex] = optionIndex;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.toggle('selected', idx === optionIndex);
            const radio = opt.querySelector('input[type="radio"]');
            radio.checked = idx === optionIndex;
        });

        this.updateNavigationButtons();
    }

    /**
     * Move to the next question or show results
     */
    nextQuestion() {
        if (this.currentQuestionIndex < QUESTIONS.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    /**
     * Move to the previous question
     */
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }

    /**
     * Update question counter display
     */
    updateQuestionCounter() {
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / QUESTIONS.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    /**
     * Update navigation buttons state
     */
    updateNavigationButtons() {
        // Disable previous button on first question
        this.prevBtn.disabled = this.currentQuestionIndex === 0;

        // Update next button text and state
        const isLastQuestion = this.currentQuestionIndex === QUESTIONS.length - 1;
        this.nextBtn.textContent = isLastQuestion ? 'View Results' : 'Next';
        
        // Enable next button only if current question is answered
        this.nextBtn.disabled = this.answers[this.currentQuestionIndex] === null;
    }

    /**
     * Calculate the total score based on answers
     */
    calculateScore() {
        let totalScore = 0;
        
        this.answers.forEach((answerIndex, questionIndex) => {
            if (answerIndex !== null) {
                const question = QUESTIONS[questionIndex];
                const selectedOption = question.options[answerIndex];
                totalScore += selectedOption.value;
            }
        });

        // Calculate percentage (max score is 10 points per question)
        const maxScore = QUESTIONS.length * 10;
        this.score = Math.round((totalScore / maxScore) * 100);
    }

    /**
     * Get score rating based on score value
     */
    getScoreRating() {
        for (const [key, rating] of Object.entries(SCORE_RATINGS)) {
            if (this.score >= rating.min && this.score <= rating.max) {
                return { ...rating, key };
            }
        }
        return SCORE_RATINGS.poor;
    }

    /**
     * Get relevant recommendations based on score
     */
    getRecommendations() {
        const recommendations = [];

        if (this.score < 50) {
            // Show high priority recommendations
            recommendations.push(...RECOMMENDATIONS.high.slice(0, 3));
            recommendations.push(...RECOMMENDATIONS.medium.slice(0, 2));
        } else if (this.score < 70) {
            // Show medium priority recommendations
            recommendations.push(...RECOMMENDATIONS.high.slice(0, 1));
            recommendations.push(...RECOMMENDATIONS.medium.slice(0, 3));
            recommendations.push(...RECOMMENDATIONS.low.slice(0, 1));
        } else if (this.score < 85) {
            // Show mostly low priority recommendations
            recommendations.push(...RECOMMENDATIONS.medium.slice(0, 2));
            recommendations.push(...RECOMMENDATIONS.low.slice(0, 3));
        } else {
            // Show optimization recommendations
            recommendations.push(...RECOMMENDATIONS.low.slice(0, 4));
        }

        return recommendations;
    }

    /**
     * Display the results screen with score and recommendations
     */
    showResults() {
        this.calculateScore();
        const rating = this.getScoreRating();
        const recommendations = this.getRecommendations();

        // Update score display
        document.getElementById('score-value').textContent = this.score;
        const scoreRating = document.getElementById('score-rating');
        scoreRating.textContent = rating.label;
        scoreRating.className = `score-rating ${rating.color}`;

        // Animate score circle
        this.animateScoreCircle();

        // Render recommendations
        this.renderRecommendations(recommendations);

        // Show results screen
        this.showScreen(this.resultsScreen);
    }

    /**
     * Animate the circular score indicator
     */
    animateScoreCircle() {
        const circle = document.getElementById('score-circle');
        const circumference = 565.48; // 2 * π * r where r = 90
        const offset = circumference - (this.score / 100) * circumference;

        // Set stroke color based on score
        const rating = this.getScoreRating();
        const colors = {
            excellent: '#10b981',
            good: '#3b82f6',
            fair: '#f59e0b',
            poor: '#ef4444'
        };
        circle.style.stroke = colors[rating.color];

        // Animate the stroke
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }

    /**
     * Render recommendations list
     */
    renderRecommendations(recommendations) {
        const recommendationsList = document.getElementById('recommendations-list');
        
        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="recommendation-item priority-${rec.priority}">
                <div class="recommendation-header">
                    <h4>${rec.title}</h4>
                    <span class="priority-badge ${rec.priority}">${rec.priority}</span>
                </div>
                <p>${rec.description}</p>
            </div>
        `).join('');
    }

    /**
     * Restart the assessment
     */
    restartAssessment() {
        this.currentQuestionIndex = 0;
        this.answers = new Array(QUESTIONS.length).fill(null);
        this.score = 0;
        this.showScreen(this.welcomeScreen);
    }

    /**
     * Show a specific screen and hide others
     */
    showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        screen.classList.add('active');
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CyberReadinessApp();
});
