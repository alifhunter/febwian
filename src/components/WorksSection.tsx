import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import svgPaths from "../imports/svg-6tewr6ul4p";
import imgImage1 from "figma:asset/d876aa1a9a3f9f6131016788d9b942d2560382f3.png";
import imgGalaxyTabS8Ultra from "figma:asset/28b4fc50bea9ecf29def5e2debb8baf5c687c570.png";
import imgHandAndIPhone16Pro from "figma:asset/adc9b101041cebf2105e92989c1f8d4e4d93e825.png";
import imgMacBook13 from "figma:asset/29de75cb23b7d98343efdd11064716a6c2e582c4.png";
import imgNoise from "figma:asset/5aa53278ded5b3e8a01731d8ebb5c7e4b5344880.png";

function Image() {
  return (
    <div className="bg-[#e6e7ee] overflow-clip relative shrink-0 size-[160px]" data-name="Image">
      <div className="absolute h-[103px] left-[calc(50%+4px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[182px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Project title">
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[32px] w-full">Customer Facing Design System</p>
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[16px] w-full">Product designer, Section head | 2025 - present</p>
    </div>
  );
}

function Project() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-white" data-name="Project 1">
      <ProjectTitle />
      <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[16px] w-full">Established a robust desktop kit design system foundations, components, and usage guidelines that unifies customer web experiences across products.</p>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Project 1">
      <Image />
      <Project />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#e6e7ee] overflow-clip relative shrink-0 size-[160px]" data-name="Image">
      <div className="absolute h-[147px] left-[calc(50%+1px)] top-[calc(50%+7px)] translate-x-[-50%] translate-y-[-50%] w-[196px]" data-name="Galaxy Tab S8 Ultra">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGalaxyTabS8Ultra} />
      </div>
    </div>
  );
}

function ProjectTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Project title">
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[32px] w-full">Empowering sales mobility</p>
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[16px] w-full">Product designer, Section head | 2025 - present</p>
    </div>
  );
}

function Project5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-white" data-name="Project 1">
      <ProjectTitle1 />
      <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[16px] w-full">We equipped sales and relationship manager with all in one dashboard increasing mobility with offline capture, task management, and customer 360.</p>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Project 4">
      <Image1 />
      <Project5 />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[160px]" data-name="Image">
      <div className="absolute left-[calc(50%-10px)] size-[200px] top-[calc(50%+10.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Hand and iPhone 16 Pro">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHandAndIPhone16Pro} />
      </div>
    </div>
  );
}

function ProjectTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Project title">
      <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[32px] w-full">Providing a more unified and paperless digital registration</p>
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[16px] w-full">UI/UX Designer, Staff | 2023 - present</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-white" data-name="Right side">
      <ProjectTitle2 />
      <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[16px] w-full">I led the end-to-end design of our unified e-form registration, accommodating registration for all products. Thereby, streamlining KYC process and reducing use of paper.</p>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Project 2">
      <Image2 />
      <RightSide />
    </div>
  );
}

function Lock() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <g id="lock">
        <path d={svgPaths.p3ee30000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        <path d={svgPaths.p149a6e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        <path d={svgPaths.pa6b8900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        <g id="Vector_4" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearLock() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/lock">
      <Lock />
    </div>
  );
}

function VuesaxLinearLock1() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="vuesax/linear/lock">
      <VuesaxLinearLock />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[160px]" data-name="Image">
      <div className="absolute h-[200px] left-[calc(50%-10px)] top-[calc(50%+10.5px)] translate-x-[-50%] translate-y-[-50%] w-[267px]" data-name="MacBook #13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMacBook13} />
      </div>
      <div className="absolute backdrop-blur-[53px] backdrop-filter bg-[rgba(66,66,66,0.5)] h-[160px] left-[-33px] opacity-80 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_18px_-6px_rgba(24,39,75,0.12)] top-[0.5px] w-[225px]" data-name="Shadow / 808" />
      <VuesaxLinearLock1 />
    </div>
  );
}

function ProjectTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Project title">
      <p className="font-['Inter:Light',_sans-serif] font-light min-w-full relative shrink-0 text-[32px] w-[min-content]">Integrating branch services application</p>
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight min-w-full relative shrink-0 text-[16px] w-[min-content]">UI/UX Designer, Staff | 2023 - present</p>
    </div>
  );
}

function Project6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-white" data-name="Project 2">
      <ProjectTitle3 />
      <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[16px] w-full">At Bank Sinarmas, we aim to create a streamlined work process, where our branch people do not need to use different application in order to reach their goals. This helps increase workflow efficiency and reduce recurring subscription cost.</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Project 3">
      <Image3 />
      <Project6 />
    </div>
  );
}

function ContentWorks({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute box-border content-stretch flex flex-col gap-[48px] h-[923px] items-start justify-center left-0 pl-[50px] pr-0 py-0 top-1/2 translate-y-[-50%] w-[876px]" 
      data-name="Content Works"
    >
      <Project4 />
      <Project3 />
      <Project1 />
      <Project2 />
    </motion.div>
  );
}

function Left({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="absolute h-[923px] left-[51px] overflow-clip top-[50px] w-[876px]" data-name="Left">
      <ContentWorks scrollYProgress={scrollYProgress} />
    </div>
  );
}

function Identifier() {
  return (
    <div className="h-[64px] relative shrink-0 w-[89px]" data-name="Identifier">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 64">
        <g id="Identifier">
          <path d={svgPaths.p38227810} fill="var(--fill-0, #D9D9D9)" id="Subtract" />
          <path d={svgPaths.p26fba000} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.2" id="Subtract_2" />
          <path d={svgPaths.p1a20cb80} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.1" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function Works({ isActive }: { isActive: boolean }) {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0" data-name="Works">
      <p className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[48px] text-nowrap whitespace-pre transition-colors ${isActive ? 'text-white' : 'text-[#aaaaaa]'}`}>Works</p>
      {isActive && <Identifier />}
    </div>
  );
}

function Content({ onNavigate, activeSection }: { onNavigate: (section: string) => void; activeSection: string }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[45px] items-end justify-center left-0 pl-0 pr-[50px] py-0 top-[320px] w-[412px]" data-name="Content">
      <button 
        onClick={() => onNavigate('about')} 
        className={`font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[1.5] not-italic relative shrink-0 text-[32px] text-nowrap whitespace-pre transition-colors hover:text-white cursor-pointer ${activeSection === 'about' ? 'text-white' : 'text-[#aaaaaa]'}`}
      >
        About
      </button>
      <button onClick={() => onNavigate('works')} className="text-left cursor-pointer">
        <Works isActive={activeSection === 'works'} />
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

export function WorksSection({ onNavigate, activeSection }: { onNavigate: (section: string) => void; activeSection: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={ref} className="bg-[#111216] relative min-h-screen w-full" data-name="Works" id="works">
      <p className="absolute font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[1.5] left-[calc(91.667%+69px)] not-italic text-[16px] text-nowrap text-right text-white top-[14px] translate-x-[-100%] whitespace-pre">Jakarta, Indonesia</p>
      <Left scrollYProgress={scrollYProgress} />
      <Right onNavigate={onNavigate} activeSection={activeSection} />
      <div className="absolute h-[924px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1340px]" data-name="Outer line">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      </div>
      <Noise />
    </div>
  );
}
