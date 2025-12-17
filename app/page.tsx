'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import WalletBadge from '@/components/WalletBadge';
import { Sword, BookOpen, Link as LinkIcon, Trophy, Zap } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="floating-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Header with wallet */}
      <header className="p-6 flex justify-end relative z-10">
        <WalletBadge />
      </header>

      {/* Hero section */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full text-center"
        >
          {/* Ninja icon */}
          <motion.div
            variants={itemVariants}
            className="text-8xl md:text-9xl mb-8 inline-block"
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🥷
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text glow-text">
              Injective Ninja Quest
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-dark-text mb-12 font-medium"
          >
            Master the secrets of the{' '}
            <span className="text-injective-cyan font-bold">Injective</span> blockchain
          </motion.p>

          {/* Description glassmorphism card */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12 glass-card rounded-3xl p-8 backdrop-blur-xl shadow-glass"
          >
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Embark on an epic journey through{' '}
              <span className="text-injective-purple font-bold">5 chapters</span> of blockchain wisdom.
              Learn about Injective's high-speed Layer 1 architecture, multi-VM support,
              cross-chain interoperability, and the Ninja Labs community.
            </p>
            <p className="text-dark-muted">
              Complete quizzes, earn points, and become a blockchain ninja  • Max score:{' '}
              <span className="text-injective-cyan font-bold">150 points</span>
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: BookOpen, title: '5 Chapters', desc: 'Story-driven learning', color: 'cyan' },
              { icon: LinkIcon, title: 'Live Blockchain', desc: 'Real-time Injective data', color: 'purple' },
              { icon: Trophy, title: 'Leaderboard', desc: 'Compete for top rank', color: 'cyan' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 hover-glow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-injective-cyan/5 to-injective-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <feature.icon className={`w-10 h-10 mb-3 mx-auto text-injective-${feature.color}`} />
                  <h3 className={`text-lg font-bold text-injective-${feature.color} mb-1`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/game')}
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-ninja rounded-full text-white font-bold text-xl shadow-glow-lg hover:shadow-glow-purple transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Begin Your Quest
                <Sword className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </span>

              {/* Animated shine effect */}
              <motion.div
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.button>
          </motion.div>

          {/* Footer links */}
          <motion.p
            variants={itemVariants}
            className="mt-12 text-sm text-dark-muted"
          >
            Powered by{' '}
            <a
              href="https://injective.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-injective-cyan hover:underline transition-colors"
            >
              Injective
            </a>
            {' '}and{' '}
            <a
              href="https://ninjalabscn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-injective-purple hover:underline transition-colors"
            >
              Ninja Labs CN
            </a>
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
