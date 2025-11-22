import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BarChart, CheckCircle, TrendingUp, Target, Zap } from 'lucide-react'

function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  const questions = [
    {
      id: 'email_frequency',
      category: 'Email Marketing',
      question: 'How often do you send marketing emails to your leads and customers?',
      options: [
        { value: 0, label: 'Rarely or never' },
        { value: 1, label: 'Once a month or less' },
        { value: 2, label: 'Weekly' },
        { value: 3, label: 'Multiple times per week' },
      ],
    },
    {
      id: 'email_personalization',
      category: 'Email Marketing',
      question: 'How personalized are your email campaigns?',
      options: [
        { value: 0, label: 'Generic emails to everyone' },
        { value: 1, label: 'Basic segmentation (e.g., by industry)' },
        { value: 2, label: 'Moderate personalization' },
        { value: 3, label: 'Highly personalized based on behavior' },
      ],
    },
    {
      id: 'social_media',
      category: 'Marketing',
      question: 'How consistent is your social media presence?',
      options: [
        { value: 0, label: 'No social media presence' },
        { value: 1, label: 'Post occasionally when I remember' },
        { value: 2, label: 'Post weekly' },
        { value: 3, label: 'Post daily across multiple platforms' },
      ],
    },
    {
      id: 'content_creation',
      category: 'Marketing',
      question: 'How much time do you spend creating marketing content each week?',
      options: [
        { value: 3, label: 'Less than 2 hours' },
        { value: 2, label: '2-5 hours' },
        { value: 1, label: '5-10 hours' },
        { value: 0, label: 'More than 10 hours' },
      ],
    },
    {
      id: 'customer_response',
      category: 'Customer Service',
      question: 'How quickly do you respond to customer inquiries?',
      options: [
        { value: 0, label: 'Within 24-48 hours' },
        { value: 1, label: 'Within 12 hours' },
        { value: 2, label: 'Within 2-4 hours' },
        { value: 3, label: 'Within 1 hour' },
      ],
    },
    {
      id: 'customer_support',
      category: 'Customer Service',
      question: 'Do you offer 24/7 customer support?',
      options: [
        { value: 0, label: 'No, only during business hours' },
        { value: 1, label: 'Extended hours but not 24/7' },
        { value: 2, label: 'Yes, with limited coverage' },
        { value: 3, label: 'Yes, full 24/7 coverage' },
      ],
    },
    {
      id: 'data_tracking',
      category: 'Data & Analytics',
      question: 'How well do you track your business metrics and KPIs?',
      options: [
        { value: 0, label: 'Not tracking much' },
        { value: 1, label: 'Basic tracking in spreadsheets' },
        { value: 2, label: 'Using some analytics tools' },
        { value: 3, label: 'Comprehensive dashboards and reporting' },
      ],
    },
    {
      id: 'data_decisions',
      category: 'Data & Analytics',
      question: 'How often do you use data to make business decisions?',
      options: [
        { value: 0, label: 'Rarely, mostly gut feeling' },
        { value: 1, label: 'Occasionally review reports' },
        { value: 2, label: 'Regularly use data' },
        { value: 3, label: 'Data-driven for all major decisions' },
      ],
    },
    {
      id: 'time_management',
      category: 'Operations',
      question: 'How much time do you spend on repetitive tasks each week?',
      options: [
        { value: 0, label: 'More than 20 hours' },
        { value: 1, label: '10-20 hours' },
        { value: 2, label: '5-10 hours' },
        { value: 3, label: 'Less than 5 hours' },
      ],
    },
    {
      id: 'automation_current',
      category: 'Operations',
      question: 'How much automation do you currently use in your business?',
      options: [
        { value: 0, label: 'None' },
        { value: 1, label: 'Basic automation (e.g., email autoresponders)' },
        { value: 2, label: 'Moderate automation across some areas' },
        { value: 3, label: 'Extensive automation across the business' },
      ],
    },
  ]

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateScore = () => {
    const totalPossible = questions.length * 3
    const actualScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    return Math.round((actualScore / totalPossible) * 100)
  }

  const getCategoryScores = () => {
    const categories = {
      'Email Marketing': [],
      'Marketing': [],
      'Customer Service': [],
      'Data & Analytics': [],
      'Operations': [],
    }

    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        categories[q.category].push(answers[q.id])
      }
    })

    return Object.entries(categories).map(([category, scores]) => {
      const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0
      return { category, score: Math.round((avg / 3) * 100) }
    })
  }

  const getRecommendations = (score) => {
    if (score < 30) {
      return {
        level: 'Getting Started',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-600',
        message: 'Your business has significant opportunities for AI automation. You could save 15-20 hours per week and dramatically improve efficiency.',
        priorities: [
          'Email Automation - Start nurturing leads automatically',
          'Marketing Automation - Establish consistent social media presence',
          'Customer Service - Implement basic automated responses',
        ],
      }
    } else if (score < 60) {
      return {
        level: 'Building Momentum',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-600',
        message: 'You have some automation in place, but there is substantial room for improvement. AI could save you 10-15 hours per week.',
        priorities: [
          'Data Analysis - Get better insights from your existing data',
          'Marketing Automation - Scale your content creation',
          'Email Automation - Improve personalization and segmentation',
        ],
      }
    } else if (score < 85) {
      return {
        level: 'Well Optimized',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-600',
        message: 'Your business is doing well with automation. AI can help you optimize further and save an additional 5-10 hours per week.',
        priorities: [
          'Advanced Analytics - Predictive insights and forecasting',
          'Customer Service - 24/7 intelligent support',
          'Marketing Optimization - AI-driven campaign performance',
        ],
      }
    } else {
      return {
        level: 'Automation Leader',
        color: 'text-teal-600',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-600',
        message: 'Excellent! Your business is highly automated. We can help you fine-tune and explore advanced AI capabilities.',
        priorities: [
          'Advanced AI Integration - Custom solutions for your specific needs',
          'Predictive Analytics - Stay ahead of market trends',
          'Process Optimization - Continuous improvement through AI',
        ],
      }
    }
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    // Submit to Formspree
    fetch('https://formspree.io/f/mdkdewjg', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setBookingSubmitted(true)
      }
    })
  }

  if (showResults) {
    const score = calculateScore()
    const categoryScores = getCategoryScores()
    const recommendations = getRecommendations(score)

    return (
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Your AI Readiness Score</h1>
            <p className="text-xl text-slate-600">Here's how your business stacks up for AI automation</p>
          </div>

          {/* Overall Score */}
          <div className={`${recommendations.bgColor} border-2 ${recommendations.borderColor} rounded-lg p-8 mb-8`}>
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 ${recommendations.borderColor}">
                  <span className={`text-5xl font-bold ${recommendations.color}`}>{score}</span>
                </div>
              </div>
              <h2 className={`text-3xl font-bold ${recommendations.color} mb-2`}>{recommendations.level}</h2>
              <p className="text-lg text-slate-700">{recommendations.message}</p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-teal-600" />
              Category Breakdown
            </h3>
            <div className="space-y-4">
              {categoryScores.map(({ category, score }) => (
                <div key={category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{category}</span>
                    <span className="font-bold text-teal-600">{score}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-teal-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white border-2 border-teal-600 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-teal-600" />
              Your Top Priorities
            </h3>
            <div className="space-y-4">
              {recommendations.priorities.map((priority, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{priority}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          {!bookingSubmitted ? (
            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-teal-600" />
                Book Your Free Discovery Session
              </h3>
              <p className="text-slate-600 mb-6">Let's discuss how AI automation can transform your business. No obligation, just insights.</p>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="hidden" name="ai_readiness_score" value={score} />
                <input type="hidden" name="readiness_level" value={recommendations.level} />
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-md border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-semibold">
                  Book My Free Discovery Session
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-teal-50 border-2 border-teal-600 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-lg text-slate-700">We'll be in touch within 24 hours to schedule your discovery session.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep - 1]
  const progress = (currentStep / questions.length) * 100

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">AI Readiness Assessment</h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600">Discover how AI automation can transform your business in just 60 seconds</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Question {currentStep} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-3 sm:mb-4">
              {currentQuestion.category}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">{currentQuestion.question}</h2>
          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-teal-600 bg-teal-50 text-teal-900'
                    : 'border-slate-200 bg-white hover:border-teal-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-slate-300'
                    }`}
                  >
                    {answers[currentQuestion.id] === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-slate-700">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
            className="px-8 py-6 text-lg"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={answers[currentQuestion.id] === undefined}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
          >
            {currentStep === questions.length ? 'See My Results' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AssessmentPage
