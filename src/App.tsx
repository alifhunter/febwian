import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { SpotlightEffect } from "./components/SpotlightEffect";
import { AnimatedBorder } from "./components/AnimatedBorder";
import svgPaths from "./imports/svg-kyp2qj6b0w";
import svgPathsWorks from "./imports/svg-6tewr6ul4p";
import imgNoise from "./assets/5aa53278ded5b3e8a01731d8ebb5c7e4b5344880.png"
import imgImage1 from "./assets/d876aa1a9a3f9f6131016788d9b942d2560382f3.png";
import imgGalaxyTabS8Ultra from "./assets/28b4fc50bea9ecf29def5e2debb8baf5c687c570.png";
import imgHandAndIPhone16Pro from "./assets/adc9b101041cebf2105e92989c1f8d4e4d93e825.png";
import imgMacBook13 from "./assets/29de75cb23b7d98343efdd11064716a6c2e582c4.png";

// About Content Components
function Links({ theme }: { theme: string }) {
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/febrianalifp/", delay: 1.2 },
    { name: "Behance", url: "https://www.behance.net/falifdito", delay: 1.3 },
    { name: "Dribbble", url: "https://dribbble.com/lifliflif", delay: 1.4 },
    { name: "Github", url: "https://github.com/alifhunter/", delay: 1.5 },
  ];

  return (
    <div className="content-stretch flex flex-col font-['Inter:Light',_sans-serif] font-light gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] sm:text-[18px] underline" data-name="Links">
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`[text-underline-position:from-font] decoration-solid relative shrink-0 w-full transition-colors cursor-pointer ${
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: link.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {link.name}
        </motion.a>
      ))}
    </div>
  );
}

function AboutContent({ scrollRef, theme }: { scrollRef: React.RefObject<HTMLDivElement>; theme: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className="min-h-[calc(100vh-120px)] sm:min-h-[600px] lg:min-h-[700px] flex items-center" 
      id="about-section"
    >
      <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-start" data-name="Content About">
        <div className={`font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[40px] sm:text-[52px] lg:text-[64px] whitespace-pre ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <motion.p 
            className="mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            hi.
          </motion.p>
          <motion.p 
            className="mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {`i'm `}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            alif.
          </motion.p>
        </div>
        <motion.p 
          className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[16px] sm:text-[18px] ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          I'm a product designer for Bank Sinarmas' internal tools and design system. I don't like problems, but life's full of them, so we face them head on by thinking, adapting, and refusing to quit.
        </motion.p>
        <Links theme={theme} />
      </div>
    </motion.div>
  );
}

// Works Content Components
function WorksContent({ scrollRef, theme }: { scrollRef: React.RefObject<HTMLDivElement>; theme: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className="min-h-[calc(100vh-120px)] sm:min-h-[600px] lg:min-h-[700px] flex items-start sm:items-center py-8 sm:py-0" 
      id="works-section"
    >
      <div className={`content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-[48px] items-start w-full ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} data-name="Content Works">
        <div className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[40px] sm:text-[52px] lg:text-[64px]">
          <p className="mb-0">works.</p>
        </div>
        {/* Project 1 */}
        <div className="content-stretch flex flex-row sm:flex-row gap-3 sm:gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#e6e7ee] overflow-clip relative shrink-0 size-[80px] sm:size-[120px] lg:size-[160px] flex-shrink-0">
            <div className="absolute h-[103px] left-[calc(50%+4px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[182px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2 sm:gap-[24px] grow items-start min-h-px min-w-0 not-italic relative">
            <div className="content-stretch flex flex-col gap-1 sm:gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[16px] sm:text-[20px] lg:text-[24px] w-full">Customer Facing Design System</p>
              <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[12px] sm:text-[16px] w-full">Product designer, Section head | 2025 - present</p>
            </div>
            <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[13px] sm:text-[16px] w-full hidden sm:block">Established a robust desktop kit design system foundations, components, and usage guidelines that unifies customer web experiences across products.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="content-stretch flex flex-row sm:flex-row gap-3 sm:gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#e6e7ee] overflow-clip relative shrink-0 size-[80px] sm:size-[120px] lg:size-[160px] flex-shrink-0">
            <div className="absolute h-[147px] left-[calc(50%+1px)] top-[calc(50%+7px)] translate-x-[-50%] translate-y-[-50%] w-[196px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGalaxyTabS8Ultra} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2 sm:gap-[24px] grow items-start min-h-px min-w-0 not-italic relative">
            <div className="content-stretch flex flex-col gap-1 sm:gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[16px] sm:text-[20px] lg:text-[24px] w-full">Empowering sales mobility</p>
              <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[12px] sm:text-[16px] w-full">Product designer, Section head | 2025 - present</p>
            </div>
            <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[13px] sm:text-[16px] w-full hidden sm:block">We equipped sales and relationship manager with all in one dashboard increasing mobility with offline capture, task management, and customer 360.</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="content-stretch flex flex-row sm:flex-row gap-3 sm:gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-white overflow-clip relative shrink-0 size-[80px] sm:size-[120px] lg:size-[160px] flex-shrink-0">
            <div className="absolute left-[calc(50%-10px)] size-[200px] top-[calc(50%+10.5px)] translate-x-[-50%] translate-y-[-50%]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHandAndIPhone16Pro} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2 sm:gap-[24px] grow items-start min-h-px min-w-0 not-italic relative">
            <div className="content-stretch flex flex-col gap-1 sm:gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[16px] sm:text-[20px] lg:text-[24px] w-full">Providing a more unified and paperless digital registration</p>
              <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[12px] sm:text-[16px] w-full">UI/UX Designer, Staff | 2023 - present</p>
            </div>
            <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[13px] sm:text-[16px] w-full hidden sm:block">I led the end-to-end design of our unified e-form registration, accommodating registration for all products. Thereby, streamlining KYC process and reducing use of paper.</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="content-stretch flex flex-row sm:flex-row gap-3 sm:gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-white overflow-clip relative shrink-0 size-[80px] sm:size-[120px] lg:size-[160px] flex-shrink-0">
            <div className="absolute h-[200px] left-[calc(50%-10px)] top-[calc(50%+10.5px)] translate-x-[-50%] translate-y-[-50%] w-[267px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMacBook13} />
            </div>
            <div className="absolute backdrop-blur-[53px] backdrop-filter bg-[rgba(66,66,66,0.5)] h-[160px] left-[-33px] opacity-80 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_18px_-6px_rgba(24,39,75,0.12)] top-[0.5px] w-[225px]" />
            <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="lock">
                  <path d={svgPathsWorks.p3ee30000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                  <path d={svgPathsWorks.p149a6e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                  <path d={svgPathsWorks.pa6b8900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2 sm:gap-[24px] grow items-start min-h-px min-w-0 not-italic relative">
            <div className="content-stretch flex flex-col gap-1 sm:gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light relative shrink-0 text-[16px] sm:text-[20px] lg:text-[24px] w-full">Integrating branch services application</p>
              <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight relative shrink-0 text-[12px] sm:text-[16px] w-full">UI/UX Designer, Staff | 2023 - present</p>
            </div>
            <p className="font-['Inter:Light',_sans-serif] font-light leading-[1.5] relative shrink-0 text-[13px] sm:text-[16px] w-full hidden sm:block">At Bank Sinarmas, we aim to create a streamlined work process, where our branch people do not need to use different application in order to reach their goals. This helps increase workflow efficiency and reduce recurring subscription cost.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Resume Content
function ResumeContent({ scrollRef, theme }: { scrollRef: React.RefObject<HTMLDivElement>; theme: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className="min-h-[calc(100vh-120px)] sm:min-h-[600px] lg:min-h-[700px] flex items-center py-8 sm:py-0 pb-20 sm:pb-16 lg:pb-20" 
      id="resume-section"
    >
      <div className={`content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-start w-full ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} data-name="Resume Content">
        <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
          <div className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[40px] sm:text-[52px] lg:text-[64px]">
            <p className="mb-0">resume.</p>
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1z444qkvSc5DHb2sVb4DLrvE8zePbfcBh/view?usp=sharing"
            download="Febrian_Alif_Pramoedito_Resume.pdf"
            className={`group relative inline-flex items-center gap-2 sm:gap-[12px] px-4 sm:px-[24px] py-2 sm:py-[12px] border rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-white/30 hover:border-white/60' 
                : 'border-gray-300 hover:border-gray-500'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/0 group-hover:bg-white/5' 
                : 'bg-gray-900/0 group-hover:bg-gray-900/5'
            }`} />
            <span className={`font-['Inter:Light',_sans-serif] font-light text-[14px] sm:text-[16px] relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Download Resume
            </span>
            <svg 
              className="relative z-10 transition-transform duration-300 group-hover:translate-y-[2px]" 
              width="16" 
              height="16" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 3.33334V13.3333M10 13.3333L13.3333 10M10 13.3333L6.66667 10M3.33333 16.6667H16.6667" 
                stroke={theme === 'dark' ? 'white' : '#111827'} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-start relative shrink-0 w-full">
          {/* Work Experience Section */}
          <div className="content-stretch flex flex-col gap-4 sm:gap-[20px] items-start relative shrink-0 w-full">
            <div className="flex items-center gap-3 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light text-[20px] sm:text-[24px] lg:text-[28px] uppercase tracking-wider">Work Experience</p>
              <div className={`flex-1 h-[1px] ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            </div>
            
            <div className="content-stretch flex flex-col gap-5 sm:gap-6 items-start relative shrink-0 w-full">
              {/* Current Position */}
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                  <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">Product Designer, Section Head</p>
                  <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>July 2024 - Present</p>
                </div>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Bank Sinarmas</p>
              </div>

              {/* UI/UX Designer */}
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                  <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">UI/UX Designer</p>
                  <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>November 2021 - July 2024</p>
                </div>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Bank Sinarmas</p>
              </div>

              {/* UI/UX Designer Junior */}
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                  <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">UI/UX Designer Junior</p>
                  <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>November 2020 - November 2021</p>
                </div>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Bank Sinarmas</p>
              </div>

              {/* UI/UX Designer Intern */}
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                  <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">UI/UX Designer Intern</p>
                  <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>March - November 2020</p>
                </div>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Bank Sinarmas</p>
              </div>

              {/* Key Responsibilities */}
              <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full mt-2">
                <ul className={`font-['Inter:Light',_sans-serif] font-light leading-[1.6] text-[13px] sm:text-[14px] lg:text-[15px] space-y-2 list-disc pl-5 ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>
                  <li>Designed customer facing web app scattered into one, making it much simpler for our users to navigate and significantly cutting down on cost and maintenance for our team.</li>
                  <li>Built a new internal design system that design system as one. This allows designers and developers to be on the same page and makes the whole entire creative process build new designs much faster.</li>
                  <li>Responsible for the team, manage our team of 6 developers, and QA in our regular sprint meetings to make sure my designs were practical to build and aligned with our overall goals.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="content-stretch flex flex-col gap-4 sm:gap-[20px] items-start relative shrink-0 w-full">
            <div className="flex items-center gap-3 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light text-[20px] sm:text-[24px] lg:text-[28px] uppercase tracking-wider">Education</p>
              <div className={`flex-1 h-[1px] ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            </div>
            
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">BINUS University</p>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>2017-2021</p>
              </div>
              <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Information Systems, Bachelor's Degree</p>
              <div className={`font-['Inter:Light',_sans-serif] font-light text-[13px] sm:text-[14px] space-y-1 mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                <p>• GPA: 3.65/4.00</p>
                <p>• Concentration: Applied ERP</p>
                <p>• Relevant course: Intro to User Experience, Information Systems Project Management</p>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="content-stretch flex flex-col gap-4 sm:gap-[20px] items-start relative shrink-0 w-full">
            <div className="flex items-center gap-3 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light text-[20px] sm:text-[24px] lg:text-[28px] uppercase tracking-wider">Certification</p>
              <div className={`flex-1 h-[1px] ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            </div>
            
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 w-full">
                <p className="font-['Inter:Light',_sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px]">Indonesian Professional Certification Authority (BNSP)</p>
                <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[13px] sm:text-[14px] ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Mar 2025 - Mar 2026</p>
              </div>
              <p className={`font-['Inter:Extra_Light',_sans-serif] font-extralight text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Bank Risk Management Level 4</p>
            </div>
          </div>

          {/* Awards Section */}
          <div className="content-stretch flex flex-col gap-4 sm:gap-[20px] items-start relative shrink-0 w-full">
            <div className="flex items-center gap-3 w-full">
              <p className="font-['Inter:Light',_sans-serif] font-light text-[20px] sm:text-[24px] lg:text-[28px] uppercase tracking-wider">Awards</p>
              <div className={`flex-1 h-[1px] ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            </div>
            
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <p className={`font-['Inter:Light',_sans-serif] font-light text-[14px] sm:text-[15px] lg:text-[16px] ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>• Bank Sinarmas Scholarship 2019</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Navigation Components
function Identifier({ theme }: { theme: string }) {
  const fillColor = theme === 'dark' ? '#D9D9D9' : '#1F2937';
  
  return (
    <div className="h-[64px] relative shrink-0 w-[89px]" data-name="Identifier">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 64">
        <g id="Identifier">
          <path d={svgPaths.p38227810} fill={fillColor} id="Subtract" />
          <path d={svgPaths.p19cde080} fill={fillColor} fillOpacity="0.2" id="Subtract_2" />
          <path d={svgPaths.p9c5a080} fill={fillColor} fillOpacity="0.1" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight / 2;

      const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'works', ref: worksRef },
        { id: 'resume', ref: resumeRef },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;
    
    if (section === 'about') targetRef = aboutRef;
    else if (section === 'works') targetRef = worksRef;
    else if (section === 'resume') targetRef = resumeRef;

    if (targetRef?.current && scrollRef.current) {
      const offsetTop = targetRef.current.offsetTop;
      scrollRef.current.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`h-screen w-screen overflow-hidden relative flex items-center justify-center py-4 sm:py-8 lg:py-[50px] transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#111216]' : 'bg-gray-50'
    }`}>
      {/* <SpotlightEffect /> */}
      
      {/* Container with margins */}
      <div className="relative h-full w-full max-h-[924px] max-w-[1340px] px-4 sm:px-0">
        {/* Theme Toggle Button - Top Right */}
        <motion.button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 sm:top-[51px] sm:right-[51px] z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
              : 'bg-gray-900/10 hover:bg-gray-900/20 border border-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {theme === 'dark' ? (
            <Sun className={`w-5 h-5 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          ) : (
            <Moon className={`w-5 h-5 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          )}
        </motion.button>

        {/* Outer line - Fixed - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block" data-name="Outer line">
          <AnimatedBorder theme={theme} />
          
          {/* Top inner shadow */}
          <div className={`absolute top-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-b to-transparent z-20 ${
            theme === 'dark' ? 'from-[rgba(0,0,0,0.3)]' : 'from-[rgba(255,255,255,0.3)]'
          }`} />
          
          {/* Bottom inner shadow */}
          <div className={`absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t to-transparent z-20 ${
            theme === 'dark' ? 'from-[rgba(0,0,0,0.3)]' : 'from-[rgba(255,255,255,0.3)]'
          }`} />
        </div>

        {/* Left content area - Scrollable with all sections */}
        <div className="absolute h-[calc(100%-16px)] left-0 sm:left-[51px] top-[8px] w-full sm:w-[calc(100%-100px)] lg:w-[876px] overflow-hidden" data-name="Left">
          <div 
            ref={scrollRef}
            className="h-full overflow-y-auto overflow-x-hidden px-4 sm:px-8 lg:px-[50px] pb-28 sm:pb-0 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
            }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div ref={aboutRef}>
              <AboutContent scrollRef={scrollRef} theme={theme} />
            </div>
            
            <div ref={worksRef} className="mb-20 sm:mb-32 lg:mb-40">
              <WorksContent scrollRef={scrollRef} theme={theme} />
            </div>
            
            <div ref={resumeRef}>
              <ResumeContent scrollRef={scrollRef} theme={theme} />
            </div>
          </div>
        </div>

        {/* Right navigation - Fixed on desktop, floating bottom on mobile */}
        <div className={`fixed bottom-4 left-4 right-4 sm:absolute sm:h-[calc(100%-100px)] sm:left-[calc(66.667%+17px)] sm:overflow-visible sm:top-[51px] sm:w-[412px] z-30 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none rounded-2xl sm:rounded-none shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] sm:shadow-none transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-white/5 border border-white/10 sm:border-0' 
            : 'bg-gray-900/5 border border-gray-300 sm:border-0'
        }`} data-name="Right">
          <div className="flex flex-row sm:absolute sm:box-border sm:content-stretch sm:flex-col gap-0 sm:gap-[45px] items-center sm:items-end justify-around sm:justify-center left-0 p-4 sm:pl-0 sm:pr-[50px] sm:py-0 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-[412px]" data-name="Content">
            <motion.button 
              onClick={() => handleNavigate('about')} 
              className="text-center sm:text-left cursor-pointer"
              whileHover={{ x: 0, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="content-stretch flex gap-2 sm:gap-[28px] items-center relative shrink-0 flex-col sm:flex-row">
                <motion.p 
                  className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[18px] sm:text-[24px] lg:text-[36px] text-nowrap whitespace-pre transition-colors duration-300 ${
                    activeSection === 'about' 
                      ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                      : theme === 'dark' ? 'text-[#aaaaaa]' : 'text-gray-400'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  About
                </motion.p>
                {activeSection === 'about' && (
                  <motion.div
                    className="hidden sm:block"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Identifier theme={theme} />
                  </motion.div>
                )}
                {activeSection === 'about' && (
                  <motion.div
                    className={`block sm:hidden w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.button>
            <motion.button 
              onClick={() => handleNavigate('works')} 
              className="text-center sm:text-left cursor-pointer"
              whileHover={{ x: 0, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="content-stretch flex gap-2 sm:gap-[28px] items-center relative shrink-0 flex-col sm:flex-row">
                <motion.p 
                  className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[18px] sm:text-[24px] lg:text-[36px] text-nowrap whitespace-pre transition-colors duration-300 ${
                    activeSection === 'works' 
                      ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                      : theme === 'dark' ? 'text-[#aaaaaa]' : 'text-gray-400'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  Works
                </motion.p>
                {activeSection === 'works' && (
                  <motion.div
                    className="hidden sm:block"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Identifier theme={theme} />
                  </motion.div>
                )}
                {activeSection === 'works' && (
                  <motion.div
                    className={`block sm:hidden w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.button>
            <motion.button 
              onClick={() => handleNavigate('resume')} 
              className="text-center sm:text-left cursor-pointer"
              whileHover={{ x: 0, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="content-stretch flex gap-2 sm:gap-[28px] items-center relative shrink-0 flex-col sm:flex-row">
                <motion.p 
                  className={`font-['Inter:Light',_sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[18px] sm:text-[24px] lg:text-[36px] text-nowrap whitespace-pre transition-colors duration-300 ${
                    activeSection === 'resume' 
                      ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                      : theme === 'dark' ? 'text-[#aaaaaa]' : 'text-gray-400'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  Resume
                </motion.p>
                {activeSection === 'resume' && (
                  <motion.div
                    className="hidden sm:block"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Identifier theme={theme} />
                  </motion.div>
                )}
                {activeSection === 'resume' && (
                  <motion.div
                    className={`block sm:hidden w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Noise overlay - Fixed */}
        <div 
          className={`absolute bg-repeat bg-size-[240px_180px] bg-top-left inset-0 pointer-events-none transition-opacity duration-500 ${
            theme === 'dark' ? 'mix-blend-hard-light opacity-50' : 'mix-blend-overlay opacity-30'
          }`} 
          data-name="Noise" 
          style={{ backgroundImage: `url('${imgNoise}')` }} 
        />
      </div>
    </div>
  );
}
