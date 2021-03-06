import { MailIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import HeaderMenu from 'components/HeaderMenu'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import router from 'next/router'
import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-8 bg-gray-100/75 backdrop-filter backdrop-blur lg:px-12 lg:pt-12 lg:pb-8 dark:bg-gray-900/75">
      <Fade direction="down" duration={800}>
        <div
          className="relative w-10 h-10 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image
            src={`${theme == 'light' ? '/light' : '/dark'}/logo.svg`}
            alt="Shem"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </Fade>
      {/* Desktop */}
      <nav className="hidden md:gap-8 md:items-center md:flex">
        <Fade cascade direction="down" duration={400}>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#extracurriculars">Extracurriculars</a>
          <a
            href="https://shemmaleriado.myportfolio.com"
            target="_blank"
            rel="noreferrer"
          >
            Art&Design
          </a>
          <a
            href="https://docs.google.com/document/d/1KkM6z7mh1MqOmxxxwrmVgwo7zXU7S9Xvez6RMNLnaJY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 text-gray-800 transition-colors bg-gray-200 rounded-lg hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            Resume
          </a>
          <button className="p-3 text-gray-800 transition-colors bg-gray-200 rounded-lg hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white">
            {theme ? (
              theme == 'light' ? (
                <MoonIcon
                  onClick={() => setTheme('dark')}
                  className="w-6 h-6"
                />
              ) : (
                <SunIcon
                  onClick={() => setTheme('light')}
                  className="w-6 h-6"
                />
              )
            ) : null}
          </button>
        </Fade>
      </nav>
      {/* Mobile */}
      <div className="flex items-center flex-none gap-4 sm:gap-6 md:hidden">
        <Fade cascade direction="down" duration={600}>
          <MailIcon
            onClick={() =>
              window.open('mailto: shem.maleriado@gmail.com', '_blank')
            }
            className="w-6 h-6 text-gray-800 transition-colors cursor-pointer hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
          />
          <svg
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/shemmaleriado/',
                '_blank'
              )
            }
            fill="currentColor"
            viewBox="-2.5 -2.5 20 20"
            className="w-6 h-6 text-gray-800 transition-colors cursor-pointer hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
          <svg
            onClick={() =>
              window.open('https://github.com/sheimoria', '_blank')
            }
            fill="currentColor"
            viewBox="-2.5 -2.5 20 20"
            className="w-6 h-6 text-gray-800 transition-colors cursor-pointer hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <button className="p-3 text-gray-800 transition-colors bg-gray-200 rounded-lg hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white">
            {theme ? (
              theme == 'light' ? (
                <MoonIcon
                  onClick={() => setTheme('dark')}
                  className="w-6 h-6"
                />
              ) : (
                <SunIcon
                  onClick={() => setTheme('light')}
                  className="w-6 h-6"
                />
              )
            ) : null}
          </button>
          <HeaderMenu />
        </Fade>
      </div>
    </header>
  )
}

export default Header
