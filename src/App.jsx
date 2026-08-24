import React, { useState } from "react";
import "./App.css"; 
import logo from "./images/logo.png";
import hundredislands from "./images/hundred-islands.jpg";
import bolinaolighthouse from "./images/bolinao-lighthouse.jpg";
import balungaohotspring from "./images/balungaohotspring.jpg";
import Button from "./components/atoms/Button";
import SearchBar from "./components/molecules/SearchBar";


/* ---------- Inline icon components (no external icon library needed) ---------- */

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

/* ---------- Data ---------- */

const INITIAL_SITES = [
  {
    id: 1,
    name: "Hundred Islands",
    location: "Alaminos City",
    image:
      hundredislands,
  },
  {
    id: 2,
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image:
      bolinaolighthouse,
  },
  {
    id: 3,
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    image:
      balungaohotspring,
  },
];

const MORE_SITES = [
  {
    id: 4,
    name: "Patar White Beach",
    location: "Bolinao, Pangasinan",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Cape Bolinao Lighthouse Trail",
    location: "Bolinao, Pangasinan",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Enchanted Cave",
    location: "Bani, Pangasinan",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
];

/* ---------- Components ---------- */

function Navbar({ searchQuery, onSearchChange }) {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Heritage Sites", "About", "Contact"];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Pangasinan Heritage logo" className="logo-circle" />
        <span className="brand-name">Pangasinan Heritage</span>
      </div>

      <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
        {links.map((link) => (
          <Button
            key={link}
            variant="nav"
            active={active === link}
            onClick={() => {
              setActive(link);
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
        <Button variant="primary">View Details</Button>
      </div>
    </article>
  );
}

export default function App() {
  const [sites, setSites] = useState(INITIAL_SITES);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate a network fetch
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
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="content-panel">
        {filteredSites.length > 0 ? (
          <div className="site-grid">
            {filteredSites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <p className="no-results">No heritage sites match "{searchQuery}".</p>
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
    </div>
  );
}