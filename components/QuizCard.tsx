'use client';

import { useState } from 'react';
import { Question } from '@/lib/types';

interface QuizCardProps {
    questions: Question[];
    onComplete: (answers: number[]) => void;
}

export default function QuizCard({ questions, onComplete }: QuizCardProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showFeedback, setShowFeedback] = useState(false);

    const question = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;

    const handleAnswerSelect = (answerIndex: number) => {
        if (showFeedback) return; // Prevent changing answer after submission

        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleSubmit = () => {
        setShowFeedback(true);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            onComplete(selectedAnswers);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setShowFeedback(false);
        }
    };

    const selectedAnswer = selectedAnswers[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-card border border-dark-border rounded-2xl p-8 shadow-2xl">
                {/* Question header */}
                <div className="mb-6">
                    <div className="text-sm text-injective-cyan mb-2">
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">{question.question}</h3>
                </div>

                {/* Answer options */}
                <div className="space-y-3 mb-6">
                    {question.options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrectAnswer = index === question.correctAnswer;

                        let bgClass = 'bg-dark-card border-dark-border hover:border-injective-cyan/50';
                        if (showFeedback) {
                            if (isCorrectAnswer) {
                                bgClass = 'bg-green-900/20 border-green-500';
                            } else if (isSelected && !isCorrect) {
                                bgClass = 'bg-red-900/20 border-red-500';
                            }
                        } else if (isSelected) {
                            bgClass = 'bg-injective-cyan/10 border-injective-cyan';
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={showFeedback}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgClass} ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${showFeedback && isCorrectAnswer
                                            ? 'border-green-500 bg-green-500'
                                            : showFeedback && isSelected && !isCorrect
                                                ? 'border-red-500 bg-red-500'
                                                : isSelected
                                                    ? 'border-injective-cyan bg-injective-cyan'
                                                    : 'border-dark-muted'
                                        }`}>
                                        {showFeedback && isCorrectAnswer && <span className="text-white text-sm">✓</span>}
                                        {showFeedback && isSelected && !isCorrect && <span className="text-white text-sm">✗</span>}
                                    </div>
                                    <span className="text-dark-text">{option}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Feedback */}
                {showFeedback && (
                    <div className={`mb-6 p-4 rounded-lg border-2 ${isCorrect
                            ? 'bg-green-900/20 border-green-500'
                            : 'bg-red-900/20 border-red-500'
                        }`}>
                        <div className="font-bold mb-2 text-dark-text">
                            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                        </div>
                        <div className="text-sm text-dark-text">{question.explanation}</div>
                    </div>
                )}

                {/* Action button */}
                {!showFeedback ? (
                    <button
                        onClick={handleSubmit}
                        disabled={selectedAnswer === undefined}
                        className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-opacity ${selectedAnswer === undefined
                                ? 'bg-dark-border text-dark-muted cursor-not-allowed'
                                : 'bg-gradient-ninja hover:opacity-90'
                            }`}
                    >
                        Submit Answer
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="w-full py-4 bg-gradient-ninja rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                        {isLastQuestion ? 'Complete Chapter →' : 'Next Question →'}
                    </button>
                )}
            </div>
        </div>
    );
}
