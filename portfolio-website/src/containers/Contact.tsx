import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      <div className="relative rounded-2xl p-8 md:p-10 card-glass shadow-xl overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-400/10 dark:bg-sky-400/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Button type="link" size="lg" href={link} center className="mt-10 relative">
          Say Hello 👋
        </Button>

        <p className="mt-6 text-xs font-mono text-slate-400 dark:text-slate-500">
          prateek.sachan727@gmail.com
        </p>
      </div>
    </Wrapper>
  );
};

export default Contact;
