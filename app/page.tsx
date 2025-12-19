'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Shield, Zap, Code2, Network, Users, ArrowRight, BookOpen, Trophy, Sparkles } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const chapters = [
    {
      id: 1,
      icon: Shield,
      title: 'Awakening on Injective',
      description: 'Understand Layer 1 blockchain fundamentals',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Speed of the Chain',
      description: 'Master high-speed finality and transactions',
    },
    {
      id: 3,
      icon: Code2,
      title: "Builder's Arsenal",
      description: 'Learn CosmWasm, EVM, and developer tools',
    },
    {
      id: 4,
      icon: Network,
      title: 'Interoperability',
      description: 'Navigate cross-chain bridges and IBC',
    },
    {
      id: 5,
      icon: Users,
      title: 'Ninja Labs Dojo',
      description: 'Join the Injective developer community',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Subtle background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xl">
                  🥷
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">
                    Injective Ninja Quest
                  </h1>
                  <p className="text-xs text-gray-400">Blockchain Training Game</p>
                </div>
              </div>

              <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Interactive Blockchain Training
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Master Injective
                </span>
                <br />
                <span className="text-white">Through Ninja Training</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Learn blockchain fundamentals through 5 interactive chapters. Complete quizzes, earn points, and become a blockchain ninja.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/game')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  Begin Your Quest
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chapters Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-3">
                5 Training Chapters
              </h3>
              <p className="text-gray-400">
                Progress through each chapter to unlock blockchain mastery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {chapters.map((chapter, index) => {
                const Icon = chapter.icon;
                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                      {/* Chapter Number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {chapter.id}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {chapter.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {chapter.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Story-Driven',
                  description: 'Learn through engaging narratives',
                },
                {
                  icon: Zap,
                  title: 'Live Blockchain',
                  description: 'Connect to real Injective data',
                },
                {
                  icon: Trophy,
                  title: 'Earn Points',
                  description: 'Max score: 150 points',
                },
              ].map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 Injective Ninja Quest • Built with Next.js & Injective
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
