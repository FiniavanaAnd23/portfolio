'use client'

const skills = [
  { name: 'Figma', percentage: 95 },
  { name: 'HTML', percentage: 85 },
  { name: 'CSS', percentage: 90 },
  { name: 'Java Script', percentage: 85 },
  { name: 'User Interface', percentage: 95 },
  { name: 'User Experience', percentage: 95 },
]

export function SkillsSection() {
  return (
    <section className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              My <span className="text-accent">Education</span>
            </h2>
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-accent">2018 - 2020</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Diploma Development
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold text-accent">2020 - 2022</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Web Development
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Greetings, fellow digital explorer! I am Wilkerson, a passionate and innovative developer
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              My <span className="text-accent">Skills</span>
            </h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-accent">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
