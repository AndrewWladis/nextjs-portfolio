"use client";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full bg-slate-950 scroll-smooth h-screen overflow-x-hidden ">
      <nav className="w-full sticky top-0 flex items-center justify-evenly bg-zinc-900 h-fit">
        <a href="#projects">
          <p className="text-gray-100 text-2xl font-sans py-4">Projects</p>
        </a>
        <a href="#skills">
          <p className="text-gray-100 text-2xl font-sans py-4">Skills</p>
        </a>
        <a href="#contact">
          <p className="text-gray-100 text-2xl font-sans py-4">Contact</p>
        </a>
      </nav>
      <div className="w-full flex items-center justify-center flex-col h-5/6">
        <h1 className="text-gray-100 text-5xl font-sans font-semibold">Andrew Wladis</h1>
        <h2 className="text-gray-100 text-4xl font-sans">Software Developer</h2>
      </div>
      <div id="projects" className="w-full h-4/6 bg-gradient-to-b from-slate-950 to-blue-950 flex flex-col" style={{ paddingTop: 60 }}>
        <h1 className="text-gray-100 text-3xl font-sans text-center">Some of my more recent projects...</h1>
        {/*
          use this if you ever use more overflow
          <div className='flex flex-row overflow-x-scroll '>
        */}
        <div className='flex flex-row overflow-x-scroll overflow-y-hidden min-[712px]:justify-evenly'>
          {[{
            name: "Dunk Rank",
            link: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
            description: "Dunk Rank is the premiere app for ranking you and your friends based off basketball 1v1 scores."
          },
          {
            name: "Quote Cook",
            link: "https://apps.apple.com/us/app/quote-cook/id6447148619",
            description: "In this competitive daily unofficial Breaking Bad game you can compete in daily quote trivia and share your results with your friends."
          },
          {
            name: "515",
            link: "https://515game.netlify.app/",
            description: "515 is a Breaking Bad-themed clone of 2048, where players combine elements blocks to create an empire."
          },].map((item) => (
            <div
              className="h-96 flex flex-row items-center justify-center"
              style={{
                minWidth: 350
              }}
            >
              <Image
                src={`/${item.name.replace(/\s/g, "").toLowerCase()}.png`}
                width={175}
                height={500}
                alt={item.name}
                className='px-3'
              />
              <div className='flex flex-col justify-center h-full'>
                <p className="text-gray-200 text-3xl font-sans text-left font-medium">{item.name}</p>
                <p className="text-gray-200 text-lg font-sans text-left w-40">{item.description}</p>
                <a className="text-slate-300 text-xl font-sans text-left py-2" href={item.link} target="_blank"><u>Go to it</u> &#10132;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="skills" className="w-full bg-gradient-to-b from-blue-950 to-slate-950 flex flex-col h-fit">
        <h1 className="text-gray-100 text-4xl font-sans text-center p-5">My Skills</h1>
        <div className="w-full flex flex-wrap flex-row justify-center">
          {/* add java */}
          {['html', 'css', 'js', 'node', 'react', 'git', 'postgresql', 'python', 'java', 'firebase', 'photoshop', 'xd', 'illustrater'].map((item) => (
            <div className='m-5' style={{borderRadius: '17px', overflow: 'hidden'}}>
              <Image
                src={`/skills/${item}.jpg`}
                width={110}
                height={110}
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="contact" className="w-full bg-slate-950 h-1/6 flex flex-row justify-evenly items-end">
        <p className='text-slate-200 text-xl font-sans'>Github: <a href="https://github.com/AndrewWladis/" target="blank" className='underline'>AndrewWladis</a></p>
        <p className='text-slate-200 text-xl font-sans'>Email: <a href="mailto:email@andrewwladis@gmail.com" className='underline'>andrewwladis@gmail.com</a></p>
      </div>
    </main>
  )
}
