'use client';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const certs = [
  {
    title: 'Master RAG Systems',
    issuer: 'Udemy',
    icon: 'simple-icons:udemy',
    color: 'from-violet-500 to-purple-600',
    badge: 'RAG · LLM · AI',
    url: 'https://www.udemy.com/certificate/UC-96c8a333-da5c-4787-b79c-89cbf047a288/',
  },
  {
    title: 'AWS Machine Learning',
    issuer: 'Coursera · Amazon',
    icon: 'logos:aws',
    color: 'from-yellow-400 to-orange-500',
    badge: 'ML · Cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/T6T4SCZPN5UR',
  },
  {
    title: 'Google Analytics',
    issuer: 'Google Skillshop',
    icon: 'simple-icons:googleanalytics',
    color: 'from-yellow-400 to-orange-400',
    badge: 'Analytics · Data',
    url: 'https://skillshop.credential.net/985e7c6d-747e-4eab-90c0-9362483cbe7c',
  },
  {
    title: 'Microsoft 365 Fundamentals',
    issuer: 'Microsoft',
    icon: 'logos:microsoft',
    color: 'from-sky-400 to-blue-600',
    badge: 'MS-900 · Cloud',
    url: 'https://www.credly.com/badges/ae5cb245-238b-4e32-822a-cbcd7be1072e/linked_in_profile',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Data Science',
    url: 'https://www.linkedin.com/learning/certificates/c9e323fb83f48b6450973220a01c4f65b689e202ce7eb7a54db8c973edea1816',
  },
  {
    title: 'Statistics Foundations 1',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Statistics · Math',
    url: 'https://www.linkedin.com/learning/certificates/756e2ff20b1060a85eb3e3865795736a41ec45750885498140032440d26fce4b',
  },
  {
    title: 'Statistics Foundations 3',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Data Sets · Stats',
    url: 'https://www.linkedin.com/learning/certificates/f80d647957ab1b675cf8fac52f4a0eb259269bd77f40f43f339b6e7ef3aa388f',
  },
  {
    title: 'Intro to Front-End Dev',
    issuer: 'Coursera · Meta',
    icon: 'simple-icons:meta',
    color: 'from-blue-500 to-indigo-600',
    badge: 'HTML · CSS · JS',
    url: 'https://www.coursera.org/account/accomplishments/certificate/KYG22FFBM2NB',
  },
  {
    title: 'Social Media Marketing Foundations',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Marketing · Social',
    url: 'https://www.linkedin.com/learning/certificates/19fa4194905b9de85cd8838973cb6c2426db8c591d85ddb953a8a80bb24b90c7',
  },
  {
    title: 'Digital Marketing Foundations',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Digital Marketing',
    url: 'https://www.linkedin.com/learning/certificates/f3e3e73b9c26ccc1360bbecc2f2efc5e9839bcb2b6c2a7554c4416f3e79573f1',
  },
  {
    title: 'Marketing on Instagram',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-pink-500 to-rose-500',
    badge: 'Instagram · Social',
    url: 'https://www.linkedin.com/learning/certificates/e26d7faff82923691ec8a5600d66e74c3546c8617d25073a7939ae126200d161',
  },
  {
    title: 'Social Media Marketing: Strategy & Optimization',
    issuer: 'LinkedIn Learning',
    icon: 'logos:linkedin-icon',
    color: 'from-blue-500 to-blue-700',
    badge: 'Strategy · SMM',
    url: 'https://www.linkedin.com/learning/certificates/fa5b61faf408a5c32e55227b02d34e0000ef2b5c9b33d717f34f66cc2a697b08',
  },
];

const Certifications = () => {
  return (
    <Wrapper id="certifications" {...getSectionAnimation}>
      <div className="mb-8">
        <p className="font-mono text-sm text-accent mb-2">Credentials</p>
        <h2 className="heading-secondary !mb-0">Certifications</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map(({ title, issuer, icon, color, badge, url }, i) => (
          <motion.a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-4 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
              <Icon icon={icon} width={22} height={22} className="text-white" style={{ filter: 'brightness(10)' }} />
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="font-semibold text-dark-1 group-hover:text-accent transition-colors duration-200 leading-snug text-sm">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{issuer}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="tag-badge text-[11px]">{badge}</span>
              <span className="text-xs font-mono text-accent group-hover:underline underline-offset-4">verify ↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Wrapper>
  );
};

export default Certifications;
