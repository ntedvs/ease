import { Calendar, ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Stay informed with the latest news, project updates, and industry insights from EASE, Ethiopia's leading construction and engineering company.",
  keywords: [
    "construction news",
    "engineering updates",
    "EASE news",
    "Ethiopia construction",
    "project updates",
    "industry insights",
    "post-tensioning news",
    "construction technology",
  ],
}

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title:
        "EASE Completes Major Post-Tensioning Project at Cultural Market Center",
      excerpt:
        "Successfully delivered the Cultural Market Center project using advanced post-tensioning technology, showcasing our expertise in large-scale government constructions.",
      date: "2024-03-15",
      category: "Project Completion",
      featured: true,
    },
    {
      id: 2,
      title: "Bridge Infrastructure Expansion: Omo River Bridge Opens",
      excerpt:
        "The newly completed Omo River Bridge demonstrates EASE's capability in critical infrastructure projects, connecting communities across Ethiopia.",
      date: "2024-02-28",
      category: "Infrastructure",
      featured: true,
    },
    {
      id: 3,
      title: "Insurance Coverage Milestone: $15M Protection Achieved",
      excerpt:
        "EASE reaches new heights in professional assurance with comprehensive $15M insurance coverage for all post-tensioning projects.",
      date: "2024-02-10",
      category: "Company News",
      featured: false,
    },
    {
      id: 4,
      title: "Sustainability Focus: 30% Reduction in Material Usage",
      excerpt:
        "Our post-tensioning technology continues to deliver environmental benefits, reducing concrete usage by up to 30% across all projects.",
      date: "2024-01-20",
      category: "Sustainability",
      featured: false,
    },
    {
      id: 5,
      title: "Technical Innovation: New Slab Thickness Calculator Launched",
      excerpt:
        "Introducing our advanced calculator tool that helps clients understand the material savings achievable through post-tensioning technology.",
      date: "2024-01-05",
      category: "Technology",
      featured: false,
    },
  ]

  const featuredNews = newsArticles.filter((article) => article.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg relative flex min-h-[70vh] items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              News & <span className="text-primary">Updates</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Stay informed with the latest developments, project milestones,
              and industry insights from Ethiopia&apos;s leading construction
              and engineering company.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-black text-secondary md:text-5xl">
              Featured News
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted">
              Highlighting our most significant achievements and
              industry-leading innovations in construction and engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredNews.map((article) => (
              <div
                key={article.id}
                className="card group overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="card-body space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-muted">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 font-medium text-primary">
                    <span>Read More</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
