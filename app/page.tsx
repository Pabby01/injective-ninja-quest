'use client';

import { useRouter } from 'next/navigation';
import WalletBadge from '@/components/WalletBadge';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header with wallet */}
      <header className="p-6 flex justify-end">
        <WalletBadge />
      </header>

      {/* Hero section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          {/* Ninja icon */}
          <div className="text-8xl mb-6 animate-pulse-slow">
            🥷
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-ninja bg-clip-text text-transparent">
              Injective Ninja Quest
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-dark-muted mb-8">
            Master the secrets of the Injective blockchain
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12 text-dark-text">
            <p className="mb-4">
              Embark on an epic journey through 5 chapters of blockchain wisdom.
              Learn about Injective's high-speed Layer 1 architecture, multi-VM support,
              cross-chain interoperability, and the Ninja Labs community.
            </p>
            <p className="text-sm text-dark-muted">
              Complete quizzes, earn points, and become a blockchain ninja.
              Max score: 150 points
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="text-lg font-bold text-injective-cyan mb-1">5 Chapters</h3>
              <p className="text-sm text-dark-muted">Story-driven learning</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="text-3xl mb-2">⛓️</div>
              <h3 className="text-lg font-bold text-injective-purple mb-1">Live Blockchain</h3>
              <p className="text-sm text-dark-muted">Real-time Injective data</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="text-lg font-bold text-injective-cyan mb-1">Leaderboard</h3>
              <p className="text-sm text-dark-muted">Compete for top rank</p>
            </div>
          </div>

          {/* Start button */}
          <button
            onClick={() => router.push('/game')}
            className="px-12 py-5 bg-gradient-ninja rounded-lg text-white font-bold text-xl hover:opacity-90 transition-opacity inline-block shadow-lg hover:shadow-2xl"
          >
            Begin Your Quest →
          </button>

          {/* Footer note */}
          <p className="mt-8 text-sm text-dark-muted">
            Powered by{' '}
            <a
              href="https://injective.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-injective-cyan hover:underline"
            >
              Injective
            </a>
            {' '}and{' '}
            <a
              href="https://ninjalabscn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-injective-purple hover:underline"
            >
              Ninja Labs CN
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
