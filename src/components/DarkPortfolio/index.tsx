'use client'
import '@/assets/styles/portfolio-dark.css'
import { useExperience } from '@/hooks/useExperience'
import { useLanguage, useTranslation } from '@/hooks/useTranslation'
import { useLinks } from '@/hooks/useLinks'
import { useProjects } from '@/hooks/useProjects'
import { useTheme } from '@/hooks/useTheme'
import { languages, skills, tools } from '@/lib/consts'
import { useEffect, useRef, useState } from 'react'

const CAREER_START_YEAR = 2021

/** Mirrors the IntersectionObserver in the standalone page: adds `.in` on entry. */
function useReveal (root: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const node = root.current
    if (node == null) return

    const targets = node.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

    targets.forEach(target => { observer.observe(target) })
    return () => { observer.disconnect() }
  }, [root])
}

/** Scroll progress bar, same 2px rule as the standalone page. */
function useScrollProgress (bar: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      if (bar.current != null) bar.current.style.width = `${ratio * 100}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll) }
  }, [bar])
}

function Counter ({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (node == null) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value)
      return
    }

    let frame = 0
    let start: number | null = null
    const step = (timestamp: number) => {
      start ??= timestamp
      const progress = Math.min((timestamp - start) / 1200, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(step)
          observer.disconnect()
        }
      })
    }, { threshold: 0.4 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{count}</span>
}

export function DarkPortfolio () {
  const { APP, UI } = useTranslation()
  const [lang, changeLanguage] = useLanguage()
  const { links } = useLinks()
  const { projects } = useProjects()
  const { experience } = useExperience()
  const [, toggleTheme] = useTheme()
  const rootRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useReveal(rootRef)
  useScrollProgress(progressRef)

  const years = new Date().getFullYear() - CAREER_START_YEAR
  const liveApps = projects.filter(project => project.links.some(link => link.label === 'LIVE')).length
  const technologies = new Set(projects.flatMap(project => project.tags)).size

  const isSpanish = lang === languages.Spanish.code

  return (
    <div className="pd" ref={rootRef}>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div id="progress" ref={progressRef} aria-hidden="true" />

      <header className="nav">
        <a className="nav-logo" href="#top" aria-label="Luis Medina">
          <span className="mono-mark">LM</span>
          <span>Luis Medina</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navegación principal">
          <a href="#proyectos" onClick={() => { setMenuOpen(false) }}>{APP.PROJECTS.TITLE}</a>
          <a href="#experiencia" onClick={() => { setMenuOpen(false) }}>{APP.EXPERIENCE.TITLE}</a>
          <a href="#habilidades" onClick={() => { setMenuOpen(false) }}>{APP.SKILLS.SKILLS_TITLE}</a>
          <a href="#contacto" onClick={() => { setMenuOpen(false) }}>{APP.CONTACT.TITLE}</a>
          <a href={links.cv.url} target="_blank" rel="noopener" className="mobile-cv">{UI.BUTTON.DOWNLOAD_CV}</a>
        </nav>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Idioma">
            <button
              type="button"
              className={isSpanish ? 'active' : ''}
              aria-pressed={isSpanish}
              onClick={() => { changeLanguage(languages.Spanish.code) }}
            >
              ES
            </button>
            <button
              type="button"
              className={!isSpanish ? 'active' : ''}
              aria-pressed={!isSpanish}
              onClick={() => { changeLanguage(languages.English.code) }}
            >
              EN
            </button>
          </div>
          <a className="btn btn-ghost btn-sm" href={links.cv.url} target="_blank" rel="noopener">
            {UI.BUTTON.DOWNLOAD_CV}
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={toggleTheme}
            aria-label={isSpanish ? 'Cambiar al diseño claro' : 'Switch to the light design'}
            title={isSpanish ? 'Diseño claro' : 'Light design'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
          <button
            className="nav-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => { setMenuOpen(!menuOpen) }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div>
          <span className="badge"><span className="dot" />{APP.HERO.BADGE}</span>
          <h1>Luis José Medina<br />Sandoval</h1>
          <p className="role">Full-Stack Developer</p>
          <p className="sub">{APP.PRESENTATIONS.DESCRIPTION}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#proyectos">{UI.BUTTON.PROJECTS}</a>
            <a className="btn btn-ghost" href={links.cv.url} target="_blank" rel="noopener">{UI.BUTTON.DOWNLOAD_CV}</a>
          </div>
          <div className="social-links" style={{ marginTop: 22 }}>
            <a href="https://github.com/luisjose1010" target="_blank" rel="noopener">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/luisjose1010/" target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-photo">
            {/* Plain <img>: the standalone stylesheet sizes it through its own rules */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portfolio/assets/luis-medina.webp" alt="Retrato de Luis José Medina Sandoval" width={640} height={800} />
          </div>
          <div className="code-card" aria-hidden="true">
            <div><span className="kw">const</span> luis = &#123;</div>
            <div>&nbsp;&nbsp;rol: <span className="str">&quot;Full-Stack Dev&quot;</span>,</div>
            <div>&nbsp;&nbsp;stack: [<span className="str">&quot;React&quot;</span>, <span className="str">&quot;Node&quot;</span>, <span className="str">&quot;TS&quot;</span>],</div>
            <div>&nbsp;&nbsp;disponible: <span className="kw">true</span>, <span className="cm">{`// ${isSpanish ? 'para colaborar' : 'to collaborate'}`}</span></div>
            <div>&#125;;</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          <div className="stat reveal">
            <div className="num"><Counter value={years} /><span className="plus">+</span></div>
            <div className="lbl">{APP.STATS.YEARS}</div>
          </div>
          <div className="stat reveal">
            <div className="num"><Counter value={projects.length} /></div>
            <div className="lbl">{APP.STATS.PROJECTS}</div>
          </div>
          <div className="stat reveal">
            <div className="num"><Counter value={liveApps} /></div>
            <div className="lbl">{APP.STATS.LIVE}</div>
          </div>
          <div className="stat reveal">
            <div className="num"><Counter value={technologies} /></div>
            <div className="lbl">{APP.STATS.TECHS}</div>
          </div>
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="sec-head reveal">
          <span className="eyebrow">01 · {isSpanish ? 'Portafolio' : 'Portfolio'}</span>
          <h2>{APP.PROJECTS.TITLE}</h2>
          <p>{APP.PROJECTS.DESCRIPTION}</p>
        </div>
        <div className="grid">
          {
            projects.map((project) => {
              const liveLink = project.links.find(link => link.label === 'LIVE')
              const repoLink = project.links.find(link => link.label === 'GITHUB')
              const protoLink = project.links.find(link => link.label === 'PROTOTYPE')
              const media = (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/portfolio/assets/projects/${project.slug}.webp`} alt={project.name} loading="lazy" />
                  {
                    liveLink != null
                      ? <span className="card-chip live">{UI.BUTTON.LIVE}</span>
                      : protoLink != null
                        ? <span className="card-chip proto">{UI.BUTTON.PROTOTYPE}</span>
                        : <span className="card-chip">{isSpanish ? 'Privado' : 'Private'}</span>
                  }
                </>
              )

              return (
                <article className="card reveal" key={project.slug}>
                  {
                    liveLink != null
                      ? <a className="card-media" href={liveLink.url} target="_blank" rel="noopener">{media}</a>
                      : <div className="card-media">{media}</div>
                  }
                  <div className="card-body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag, index) => <span key={index}>{tag}</span>)}
                    </div>
                    <div className="card-links">
                      {liveLink != null && <a href={liveLink.url} target="_blank" rel="noopener">{UI.BUTTON.LIVE} ↗</a>}
                      {repoLink != null && <a href={repoLink.url} target="_blank" rel="noopener">GitHub <span className="dim">↗</span></a>}
                      {protoLink != null && <a href={protoLink.url} target="_blank" rel="noopener">{UI.BUTTON.PROTOTYPE} ↗</a>}
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>

      <section className="section" id="experiencia">
        <div className="sec-head reveal">
          <span className="eyebrow">02 · {isSpanish ? 'Trayectoria' : 'Career'}</span>
          <h2>{APP.EXPERIENCE.TITLE}</h2>
        </div>
        <div className="timeline">
          {
            experience.map((item, index) => (
              <div className="exp-item reveal" key={index}>
                <div className="exp-head">
                  <h3>{item.name}</h3>
                  <span className="period">{item.period ?? item.year}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section className="section" id="habilidades">
        <div className="sec-head reveal">
          <span className="eyebrow">03 · Stack</span>
          <h2>{APP.SKILLS.TITLE}</h2>
          <p>{APP.SKILLS.DESCRIPTION}</p>
        </div>
        <div className="skills-grid">
          <div className="skills-block reveal">
            <h3>{APP.SKILLS.SKILLS_TITLE}</h3>
            <div className="marquee">
              <div className="marquee-track">
                {
                  [...skills, ...skills].map((skill, index) => (
                    <span className="chip" key={index}><i />{skill.alt.replace(/\s*Logo$/i, '')}</span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="skills-block reveal">
            <h3>{APP.SKILLS.TOOLS_TITLE}</h3>
            <div className="marquee">
              <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '42s' }}>
                {
                  [...tools, ...tools].map((tool, index) => (
                    <span className="chip" key={index}><i />{tool.alt.replace(/\s*Logo$/i, '')}</span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="sec-head reveal">
          <span className="eyebrow">04 · {APP.CONTACT.TITLE}</span>
          <h2>{APP.CONTACT.SUBTITLE}</h2>
          <p>{APP.CONTACT.DESCRIPTION}</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info reveal">
            <div className="contact-channels">
              <a href="https://github.com/luisjose1010" target="_blank" rel="noopener">
                <span className="k">GitHub</span><span className="v">github.com/luisjose1010 <small>↗</small></span>
              </a>
              <a href="https://www.linkedin.com/in/luisjose1010/" target="_blank" rel="noopener">
                <span className="k">LinkedIn</span><span className="v">linkedin.com/in/luisjose1010 <small>↗</small></span>
              </a>
              <a href={links.cv.url} target="_blank" rel="noopener">
                <span className="k">{UI.BUTTON.DOWNLOAD_CV}</span><span className="v">luis-medina-cv.pdf <small>↘</small></span>
              </a>
            </div>
          </div>
          <form
            className="contact-form reveal"
            action="https://formspree.io/f/movazdga"
            method="POST"
            aria-label="Formulario de contacto"
          >
            <div className="field">
              <label htmlFor="pd-name">{APP.CONTACT.FORM_NAME}</label>
              <input id="pd-name" type="text" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="pd-email">{APP.CONTACT.FORM_EMAIL}</label>
              <input id="pd-email" type="email" name="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="pd-phone">{APP.CONTACT.FORM_PHONE}</label>
              <input id="pd-phone" type="tel" name="phoneNumber" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="pd-message">{APP.CONTACT.FORM_MESSAGE}</label>
              <textarea id="pd-message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn btn-primary">{UI.BUTTON.SUBMIT}</button>
            <p className="form-note">Formspree</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="copy">© {new Date().getFullYear()} Luis José Medina Sandoval</p>
          <p className="made">React · TypeScript · Node.js</p>
        </div>
      </footer>
    </div>
  )
}
