'use client'

export function EducationSection() {
  const education = [
    {
      year: '2018 - 2020',
      title: 'Diploma Development',
      description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences. Welcome to my online abode.',
    },
    {
      year: '2020 - 2022',
      title: 'Web Development',
      description: 'Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer dedicated to creating beautiful digital experiences. Welcome to my online abode.',
    },
  ]

  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl">
          My <span className="text-accent">Education</span>
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="border-l-2 border-accent py-4 pl-8"
            >
              <span className="text-sm font-semibold text-accent">{item.year}</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
