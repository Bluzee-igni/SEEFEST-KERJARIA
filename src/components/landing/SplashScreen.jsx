import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onFinish }) {
  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => {}}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');`}
        </style>

        {/* Logo Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <img
            src="/kerjaria-logo-mark.svg"
            alt=""
            aria-hidden="true"
            style={{ width: 80, height: 80, objectFit: 'contain' }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 16,
            fontSize: 48,
            fontWeight: 800,
            color: '#075fd4',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          KerjaRia
        </motion.span>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{
            marginTop: 12,
            fontSize: 14,
            fontWeight: 600,
            color: '#6b7280',
            letterSpacing: '0.02em',
          }}
        >
          Mulai Pengalaman Kerjamu
        </motion.p>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 32,
            width: 160,
            height: 4,
            borderRadius: 2,
            background: '#e5e7eb',
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 1.3, ease: 'easeInOut' }}
            onAnimationComplete={onFinish}
            style={{
              height: '100%',
              borderRadius: 2,
              background: 'linear-gradient(90deg, #075fd4, #37b7ff)',
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
