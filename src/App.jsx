import React, { useState } from "react";
import "./App.css"; 
import logo from "./images/logo.png";
import hundredislands from "./images/hundred-islands.jpg";
import bolinaolighthouse from "./images/bolinao-lighthouse.jpg";
import balungaohotspring from "./images/balungaohotspring.jpg";
import Button from "./components/atoms/Button";
import SearchBar from "./components/molecules/SearchBar";

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2f8fe0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const ReloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a1a5c" strokeWidth="2">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const INITIAL_SITES = [
  {
    id: 1,
    name: "Hundred Islands",
    location: "Alaminos City",
    image: hundredislands,
    description: "A protected marine national park featuring 124 islands at low tide scattered across the Lingayen Gulf.",
  },
  {
    id: 2,
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image: bolinaolighthouse,
    description: "A historic 1905 beacon standing proudly atop Punta Piedra, guiding ships along the South China Sea.",
  },
  {
    id: 3,
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    image: balungaohotspring,
    description: "Natural mineral hot and cold springs nestled at the foothills of an extinct volcanic mountain.",
  },
];

const MORE_SITES = [
  {
    id: 4,
    name: "Patar White Beach",
    location: "Bolinao, Pangasinan",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    description: "Celebrated for its golden-white sand and stunning sunset views overlooking the western coastline.",
  },
  {
    id: 5,
    name: "Cape Bolinao Lighthouse Trail",
    location: "Bolinao, Pangasinan",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
    description: "Scenic coastal trails surrounding the historic lighthouse overlooking dramatic limestone cliffs.",
  },
  {
    id: 6,
    name: "Enchanted Cave",
    location: "Bani, Pangasinan",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "A mystical subterranean coral cave containing crystal-clear emerald spring water pools.",
  },
];

function Navbar({ activeTab, setActiveTab, searchQuery, onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Heritage Sites", "About", "Contact"];

  return (
    <header className="navbar">
      <div className="navbar-brand" onClick={() => setActiveTab("Home")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Pangasinan Heritage logo" className="logo-circle" />
        <span className="brand-name">Pangasinan Heritage</span>
      </div>

      <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
        {links.map((link) => (
          <Button
            key={link}
            variant="nav"
            active={activeTab === link}
            onClick={() => {
              setActiveTab(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </Button>
        ))}
      </nav>

      <div className="navbar-actions">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <Button
          variant="icon"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}

function SiteCard({ site }) {
  return (
    <article className="site-card">
      <div className="site-card-image">
        <img src={site.image} alt={site.name} loading="lazy" />
      </div>
      <div className="site-card-body">
        <h3 className="site-card-title">{site.name}</h3>
        <p className="site-card-location">
          <PinIcon />
          <span>{site.location}</span>
        </p>
        {site.description && (
          <p style={{ fontSize: "0.875rem", color: "#475569", marginBottom: "1rem" }}>
            {site.description}
          </p>
        )}
        <Button variant="primary">View Details</Button>
      </div>
    </article>
  );
}

function HomeView({ setActiveTab }) {
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <div style={{
        background: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover",
        color: "white",
        padding: "4rem 2rem",
        borderRadius: "1.5rem",
        margin: "1.5rem",
        textAlign: "left"
      }}>
        <span style={{ background: "rgba(59, 130, 246, 0.3)", color: "#93c5fd", padding: "0.35rem 0.85rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>
          Land of Salt & Wonder
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "900", margin: "1rem 0 0.5rem" }}>Discover Pangasinan Heritage</h1>
        <p style={{ maxWidth: "600px", color: "#cbd5e1", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          Explore pristine white beaches, historic lighthouses, mystical caves, and the world-renowned Hundred Islands National Park.
        </p>
        <Button variant="primary" onClick={() => setActiveTab("Heritage Sites")}>
          Explore All Sites
        </Button>
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="content-panel" style={{ maxWidth: "800px", margin: "2rem auto", padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.35rem 0.85rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>
          About The Province
        </span>
        <h2 style={{ fontSize: "2.25rem", fontWeight: "900", color: "#0f172a", marginTop: "0.75rem" }}>Preserving Pangasinan&apos;s Rich Legacy</h2>
        <p style={{ color: "#475569", fontSize: "1rem", marginTop: "0.5rem", lineHeight: "1.6" }}>
          Pangasinan derives its name from panag-asinan, meaning &quot;land of salt&quot; or &quot;place where salt is made,&quot; reflecting its historic salt-making industry along the Lingayen Gulf.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        <div style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.75rem" }}>🏛️ Historical Roots</h3>
          <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: "1.6" }}>
            From pre-colonial trading ports interacting with ancient merchants to key revolutionary milestones, Pangasinan holds a revered place in Philippine history and culture.
          </p>
        </div>
        <div style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.75rem" }}>🌿 Sustainable Ecotourism</h3>
          <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: "1.6" }}>
            Our initiative is dedicated to protecting our natural treasures, promoting local culture, and ensuring sustainable tourism for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="content-panel" style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.35rem 0.85rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase" }}>
          Get in Touch
        </span>
        <h2 style={{ fontSize: "2rem", fontWeight: "900", color: "#0f172a", marginTop: "0.75rem" }}>Contact Provincial Tourism</h2>
        <p style={{ color: "#475569", fontSize: "0.875rem", marginTop: "0.5rem" }}>Have inquiries about heritage sites or travel guides? Send us a note below.</p>
      </div>

      <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ width: "3rem", height: "3rem", background: "#d1fae5", color: "#059669", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: "bold", margin: "0 auto 1rem" }}>✓</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.5rem" }}>Message Sent!</h3>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Thank you, {name}. Our tourism office will respond to you shortly.</p>
            <Button variant="primary" onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); }}>Send Another Message</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#334155", marginBottom: "0.35rem" }}>Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Juan Dela Cruz"
                style={{ width: "100%", padding: "0.75rem", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "0.75rem", fontSize: "0.875rem", outline: "none" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#334155", marginBottom: "0.35rem" }}>Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="juan@example.com"
                style={{ width: "100%", padding: "0.75rem", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "0.75rem", fontSize: "0.875rem", outline: "none" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#334155", marginBottom: "0.35rem" }}>Message</label>
              <textarea
                required
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                style={{ width: "100%", padding: "0.75rem", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "0.75rem", fontSize: "0.875rem", outline: "none", resize: "vertical" }}
              ></textarea>
            </div>
            <Button variant="primary" style={{ width: "100%", padding: "0.75rem", justifyContent: "center" }}>Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [sites, setSites] = useState(INITIAL_SITES);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setSites((prev) => [...prev, ...MORE_SITES]);
      setHasMore(false);
      setLoading(false);
    }, 600);
  };

  const filteredSites = sites.filter((site) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      site.name.toLowerCase().includes(query) ||
      site.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="page">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      {activeTab === "Home" && <HomeView setActiveTab={setActiveTab} />}

      {activeTab === "Heritage Sites" && (
        <main className="content-panel">
          {filteredSites.length > 0 ? (
            <div className="site-grid">
              {filteredSites.map((site) => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>
          ) : (
            <p className="no-results">No heritage sites match &quot;{searchQuery}&quot;.</p>
          )}

          {hasMore && !searchQuery && (
            <div className="load-more-wrap">
              <Button variant="outline" onClick={handleLoadMore} disabled={loading}>
                <ReloadIcon />
                {loading ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </main>
      )}

      {activeTab === "About" && <AboutView />}

      {activeTab === "Contact" && <ContactView />}
    </div>
  );
}
