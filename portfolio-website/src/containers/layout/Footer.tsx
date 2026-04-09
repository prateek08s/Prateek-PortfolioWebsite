import SocialLinks from '../Social/SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-6 font-mono text-xs text-center space-y-2">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />
      <p className="text-slate-400 dark:text-slate-500">
        Designed & Built by <span className="text-accent">Prateek Sachan</span>
      </p>
    </footer>
  );
};

export default Footer;
