import { useMemo, useState } from "react";
import { opportunities, categories } from "./data";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAudience, setSelectedAudience] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const audiences = useMemo(() => {
    return [
      "All",
      ...new Set(opportunities.flatMap((item) => item.audience)),
    ];
  }, []);

  const formats = useMemo(() => {
    return [
      "All",
      ...new Set(opportunities.flatMap((item) => item.format)),
    ];
  }, []);

  const statuses = useMemo(() => {
    return [
      "All",
      ...new Set(opportunities.map((item) => item.status)),
    ];
  }, []);

  const filteredOpportunities = opportunities.filter((item) => {
    const searchMatch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const audienceMatch =
      selectedAudience === "All" ||
      item.audience.includes(selectedAudience);

    const formatMatch =
      selectedFormat === "All" ||
      item.format.includes(selectedFormat);

    const statusMatch =
      selectedStatus === "All" ||
      item.status === selectedStatus;

    return (
      searchMatch &&
      categoryMatch &&
      audienceMatch &&
      formatMatch &&
      statusMatch
    );
  });

  const featuredOpportunity = opportunities.find(
    (item) => item.featured
  );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedAudience("All");
    setSelectedFormat("All");
    setSelectedStatus("All");
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div className="brand">U+ Community</div>

          <nav aria-label="Main navigation">
            <a href="#opportunities">Programs</a>
            <a href="#opportunities">Volunteer</a>
            <a href="#opportunities">Events</a>
            <a href="#mailing-list">Stay Updated</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Program Discovery</p>

            <h1>Find Your Next Opportunity</h1>

            <p className="hero-text">
              Explore U+ programs, volunteer opportunities, camps,
              events, summer roles, and ways to stay connected.
            </p>
          </div>
        </section>

        <section
          className="search-section"
          aria-labelledby="search-heading"
        >
          <div className="container">
            <h2 id="search-heading" className="sr-only">
              Search and filter opportunities
            </h2>

            <label htmlFor="search" className="sr-only">
              Search opportunities
            </label>

            <input
              id="search"
              className="search-input"
              type="search"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

            <div className="filters">
              <label>
                Opportunity Type
                <select
                  value={selectedCategory}
                  onChange={(event) =>
                    setSelectedCategory(event.target.value)
                  }
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Audience
                <select
                  value={selectedAudience}
                  onChange={(event) =>
                    setSelectedAudience(event.target.value)
                  }
                >
                  {audiences.map((audience) => (
                    <option key={audience} value={audience}>
                      {audience}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Format
                <select
                  value={selectedFormat}
                  onChange={(event) =>
                    setSelectedFormat(event.target.value)
                  }
                >
                  {formats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Status
                <select
                  value={selectedStatus}
                  onChange={(event) =>
                    setSelectedStatus(event.target.value)
                  }
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </section>

        {featuredOpportunity && (
          <section className="featured-section">
            <div className="container">
              <h2>Featured Opportunity</h2>

              <article className="featured-card">
                <div>
                  <span className="category-badge">
                    {featuredOpportunity.category}
                  </span>

                  <h3>{featuredOpportunity.title}</h3>

                  <p>
                    {featuredOpportunity.shortDescription}
                  </p>

                  <p className="meta">
                    Audience:{" "}
                    {featuredOpportunity.audience.join(", ")}
                  </p>

                  <p className="meta">
                    Format:{" "}
                    {featuredOpportunity.format.join(", ")}
                  </p>

                  <p className="meta">
                    Status: {featuredOpportunity.status}
                  </p>
                </div>

                <a
                  className="primary-button"
                  href={featuredOpportunity.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {featuredOpportunity.primaryCTA}
                </a>
              </article>
            </div>
          </section>
        )}

        <section
          id="opportunities"
          className="opportunities-section"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Explore</p>
                <h2>All Opportunities</h2>
              </div>

              <p className="result-count">
                {filteredOpportunities.length} result
                {filteredOpportunities.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="opportunity-grid">
                {filteredOpportunities.map((item) => (
                  <article
                    className="opportunity-card"
                    key={item.id}
                  >
                    <span className="category-badge">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.shortDescription}</p>

                    <div className="card-meta">
                      <p>
                        <strong>Audience:</strong>{" "}
                        {item.audience.join(", ")}
                      </p>

                      <p>
                        <strong>Format:</strong>{" "}
                        {item.format.join(", ")}
                      </p>

                      <p>
                        <strong>Status:</strong>{" "}
                        {item.status}
                      </p>
                    </div>

                    <a
                      className="secondary-button"
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.primaryCTA}
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No opportunities match your filters.</h3>

                <p>
                  Try changing your search or clearing the
                  selected filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section
          id="mailing-list"
          className="mailing-section"
        >
          <div className="container mailing-content">
            <div>
              <p className="eyebrow">Stay Connected</p>

              <h2>Stay Updated</h2>

              <p>
                Get the latest U+ programs, events, and
                community opportunities.
              </p>
            </div>

            <a
              className="primary-button"
              href="https://www.upluscommunity.org/"
              target="_blank"
              rel="noreferrer"
            >
              Join Mailing List
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            U+ Community Program Discovery Prototype
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;