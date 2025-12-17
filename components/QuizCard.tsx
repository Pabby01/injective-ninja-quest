'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Question } from '@/lib/types';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';

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
        if (showFeedback) return;

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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
        >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-glass relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial blur-3xl pointer-events-none"
                />

                {/* Question header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8 relative z-10"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-injective-purple" />
                        <span className="text-sm text-injective-purple uppercase tracking-wider font-semibold">
                            Question {currentQuestion + 1} of {questions.length}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {question.question}
                    </h3>
                </motion.div>

                {/* Answer options */}
                <div className="space-y-4 mb-8 relative z-10">
                    <AnimatePresence mode="wait">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrectAnswer = index === question.correctAnswer;

                            let styleClass = 'glass hover:glass-strong hover:border-injective-cyan/50 cursor-pointer';
                            let borderColor = 'border-white/10';

                            if (showFeedback) {
                                if (isCorrectAnswer) {
                                    styleClass = 'glass-strong bg-green-500/10 border-green-500/50 shadow-glow-sm';
                                    borderColor = 'border-green-500/50';
                                } else if (isSelected && !isCorrect) {
                                    styleClass = 'glass-strong bg-red-500/10 border-red-500/50';
                                    borderColor = 'border-red-500/50';
                                } else {
                                    styleClass = 'glass border-white/10';
                                }
                            } else if (isSelected) {
                                styleClass = 'glass-strong border-injective-cyan shadow-glow-md';
                                borderColor = 'border-injective-cyan';
                            }

                            return (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={showFeedback ? {} : { scale: 1.02, x: 4 }}
                                    whileTap={showFeedback ? {} : { scale: 0.98 }}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showFeedback}
                                    className={`
                    w-full text-left p-5 rounded-2xl border-2 transition-all duration-300
                    ${styleClass} ${borderColor}
                    ${showFeedback ? 'cursor-not-allowed' : ''}
                  `}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Selection indicator */}
                                        <div className={`
                      flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center
                      transition-all duration-300
                      ${showFeedback && isCorrectAnswer
                                                ? 'border-green-500 bg-green-500'
                                                : showFeedback && isSelected && !isCorrect
                                                    ? 'border-red-500 bg-red-500'
                                                    : isSelected
                                                        ? 'border-injective-cyan bg-injective-cyan'
                                                        : 'border-white/30'
                                            }
                    `}>
                                            {showFeedback && isCorrectAnswer && (
                                                <Check className="w-4 h-4 text-white" />
                                            )}
                                            {showFeedback && isSelected && !isCorrect && (
                                                <X className="w-4 h-4 text-white" />
                                            )}
                                        </div>

                                        <span className="text-white text-lg flex-1">{option}</span>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Feedback section */}
                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`
                mb-8 p-6 rounded-2xl border-2 relative z-10 overflow-hidden
                ${isCorrect
                                    ? 'glass-strong border-green-500/50 bg-green-500/5'
                                    : 'glass-strong border-red-500/50 bg-red-500/5'
                                }
              `}
                        >
                            <div className="flex items-start gap-3">
                                {isCorrect ? (
                                    <Check className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                                ) : (
                                    <X className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                                )}
                                <div>
                                    <div className="font-bold text-lg text-white mb-2">
                                        {isCorrect ? '✨ Excellent!' : '💭 Not quite'}
                                    </div>
                                    <div className="text-dark-text leading-relaxed">
                                        {question.explanation}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action button */}
                {!showFeedback ? (
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        disabled={selectedAnswer === undefined}
                        className={`
              w-full py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300
              flex items-center justify-center gap-2 relative overflow-hidden
              ${selectedAnswer === undefined
                                ? 'bg-dark-border text-dark-muted cursor-not-allowed'
                                : 'bg-gradient-ninja shadow-glow-lg hover:shadow-glow-purple'
                            }
            `}
                    >
                        Submit Answer
                    </motion.button>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNext}
                        className="w-full py-5 bg-gradient-ninja rounded-2xl text-white font-bold text-lg shadow-glow-lg hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        {isLastQuestion ? 'Complete Chapter' : 'Next Question'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
