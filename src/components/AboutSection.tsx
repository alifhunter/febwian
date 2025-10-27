import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import svgPaths from "../imports/svg-kyp2qj6b0w";
import imgNoise from "figma:asset/5aa53278ded5b3e8a01731d8ebb5c7e4b5344880.png";

function Links() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Light',_sans-serif] font-light gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[24px] text-white underline" data-name="Links">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:text-gray-300 transition-colors cursor-pointer">LinkedIn</a>
      <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:text-gray-300 transition-colors cursor-pointer">Behance</a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:text-gray-300 transition-colors cursor-pointer">Dribbble</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:text-gray-300 transition-colors cursor-pointer">Github</a>
    </div>
  );
}

function ContentAbout({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute box-border content-stretch flex flex-col gap-[40px] items-start left-0 pl-[50px] pr-0 py-0 top-1/2 translate-y-[-50%] w-[876px]" 
      data-name="Content About"
    >
      <div className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[64px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">hi.</p>
        <p className="mb-0">{`i'm `}</p>
        <p>alif.</p>
      </div>
      <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">I'm a product designer for Bank Sinarmas' internal tools and design system. I don't like problems, but life's full of them, so we face them head on by thinking, adapting, and refusing to quit.</p>
      <Links />
    </motion.div>
  );
}

function Left({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="absolute h-[923px] left-[51px] overflow-clip top-[50px] w-[876px]" data-name="Left">
      <ContentAbout scrollYProgress={scrollYProgress} />
    </div>
  );
}

function Identifier() {
  return (
    <div className="h-[64px] relative shrink-0 w-[89px]" data-name="Identifier">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 64">
        <g id="Identifier">
          <path d={svgPaths.p38227810} fill="var(--fill-0, #D9D9D9)" id="Subtract" />
          <path d={svgPaths.p19cde080} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.2" id="Subtract_2" />
          <path d={svgPaths.p9c5a080} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.1" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function About({ isActive }: { isActive: boolean }) {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0" data-name="About">
      <p className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[48px] text-nowrap whitespace-pre transition-colors ${isActive ? 'text-white' : 'text-[#aaaaaa]'}`}>About</p>
      {isActive && <Identifier />}
    </div>
  );
}

function Content({ onNavigate, activeSection }: { onNavigate: (section: string) => void; activeSection: string }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[45px] items-end justify-center left-0 pl-0 pr-[50px] py-0 top-[320px] w-[412px]" data-name="Content">
      <button onClick={() => onNavigate('about')} className="text-left cursor-pointer">
        <About isActive={activeSection === 'about'} />
      </button>
      <button 
        onClick={() => onNavigate('works')} 
        className={`font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[1.5] not-italic relative shrink-0 text-[32px] text-nowrap whitespace-pre transition-colors hover:text-white cursor-pointer ${activeSection === 'works' ? 'text-white' : 'text-[#aaaaaa]'}`}
      >
        Works
      </button>
      <button 
        onClick={() => onNavigate('resume')} 
        className={`font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[1.5] not-italic relative shrink-0 text-[32px] text-nowrap whitespace-pre transition-colors hover:text-white cursor-pointer ${activeSection === 'resume' ? 'text-white' : 'text-[#aaaaaa]'}`}
      >
        Resume
      </button>
    </div>
  );
}

function Right({ onNavigate, activeSection }: { onNavigate: (section: string) => void; activeSection: string }) {
  return (
    <div className="absolute h-[922px] left-[calc(66.667%+17px)] overflow-clip top-[51px] w-[412px] z-10" data-name="Right">
      <Content onNavigate={onNavigate} activeSection={activeSection} />
    </div>
  );
}

function Noise() {
  return <div className="absolute bg-repeat bg-size-[240px_180px] bg-top-left bottom-[-476px] left-0 mix-blend-hard-light opacity-50 right-[-60px] top-0" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />;
}

export function AboutSection({ onNavigate, activeSection }: { onNavigate: (section: string) => void; activeSection: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={ref} className="bg-[#111216] relative min-h-screen w-full" data-name="About" id="about">
      <div className="absolute h-[924px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1340px]" data-name="Outer line">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[1.5] left-[calc(91.667%+69px)] not-italic text-[16px] text-nowrap text-right text-white top-[14px] translate-x-[-100%] whitespace-pre">Jakarta, Indonesia</p>
      <Left scrollYProgress={scrollYProgress} />
      <Right onNavigate={onNavigate} activeSection={activeSection} />
      <Noise />
    </div>
  );
}
