import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative flex-shrink-0 group">
      {/* Glow ring */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 opacity-30 group-hover:opacity-60 blur-md transition-all duration-500"></div>

      <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-slate-700/50 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 256px, 288px"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Decorative accent border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-accent translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 duration-300 z-[-1] hidden sm:block opacity-60"></div>
    </div>
  );
};

export default AuthorImage;
