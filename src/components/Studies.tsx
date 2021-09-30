import Image from 'next/image'
import studies from 'data/studies'
import Courses from 'components/Courses'

const Studies = () => {
  return (
    <section id="studies">
      <h1>Studies</h1>
      <div className="flex flex-col gap-7 sm:flex-row">
        {studies.map((study, index) => (
          <article key={index}>
            <div className="relative flex-none w-12 h-12">
              <Image
                src={`/${study.logo}.svg`}
                alt={study.logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div>
              <h2>{study.name}</h2>
              <h3>{study.accreditation}</h3>
              <h4>{study.period}</h4>
            </div>
            {study.courses && <Courses courses={study.courses} />}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Studies
