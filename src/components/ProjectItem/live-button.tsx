import { motion } from 'motion/react'
import Link from 'next/link'

interface LiveButtonProps {
  to: string
}

export function LiveButton({ to }: LiveButtonProps) {
  return (
    <Link href={to} target="_blank">
      <motion.button
        className="relative inline-flex items-center gap-3 px-4 backdrop-blur-sm rounded-full border border-slate-700/50 shadow-2xl active:scale-95 hover:bg-slate-950/30 cursor-pointer h-9 w-fit"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-red-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut'
          }}
        />

        {/* Inner glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-red-400/10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 0.3
          }}
        />

        {/* Red dot container with multiple animation layers */}
        <div className="relative flex items-center justify-center">
          {/* Ripple effect */}
          <motion.div
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            animate={{
              scale: [1, 2.5],
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeOut'
            }}
          />

          {/* Secondary ripple */}
          <motion.div
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            animate={{
              scale: [1, 2],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeOut',
              delay: 0.5
            }}
          />

          {/* Main pulsing dot */}
          <motion.div
            className="relative w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 10px rgba(239, 68, 68, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.8)',
                '0 0 10px rgba(239, 68, 68, 0.5)'
              ]
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Animated text */}
        <motion.span
          className="text-white font-medium tracking-wider select-none text-sm uppercase text-nowrap"
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut'
          }}
        >
          Ao Vivo
        </motion.span>

        {/* Subtle border glow */}
        <motion.div
          className="absolute inset-0 rounded-full border border-red-500/30"
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut'
          }}
        />
      </motion.button>
    </Link>
  )
}