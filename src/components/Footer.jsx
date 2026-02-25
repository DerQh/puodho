import React from "react";

export default function ResponsiveFooter() {
  return (
    <footer className="rvf-footer" aria-label="Site footer">
      <div className="rvf-inner">
        <div className="rvf-top">
          <div className="rvf-brand">
            <a href="/" className="rvf-logo" aria-label="Homepage">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="48" height="48" rx="8" fill="#2563EB" />
                <path
                  d="M14 30c4-6 10-14 18-10-6 2-10 8-12 12-2 4-6 4-6 4s0-2 0-6z"
                  fill="#fff"
                />
              </svg>
              <span className="rvf-title">VibeFooter</span>
            </a>
            <p className="rvf-desc">
              Clean, responsive footer built with React and plain CSS.
            </p>
          </div>

          <div className="rvf-news">
            <h4 className="rvf-heading">Stay in the loop</h4>
            <p className="rvf-note">Subscribe for product updates and tips.</p>
            <form
              className="rvf-form"
              onSubmit={(e) => {
                e.preventDefault();
                const el = (e.currentTarget.elements.namedItem(
                  "email"
                ) as HTMLInputElement | null);
                if (el) {
                  el.value = "";
                  el.blur();
                  alert("Thanks — demo subscription only.");
                }
              }}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="rvf-email" className="rvf-sr">Email address</label>
              <div className="rvf-input-wrap">
                <input
                  id="rvf-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  placeholder="you@company.com"
                  required
                />
                <button type="submit" className="rvf-cta">Subscribe</button>
              </div>
            </form>

            <div className="rvf-social" aria-hidden="false">
              <a href="https://twitter.com" aria-label="Twitter" className="rvf-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.66.29-1.37.48-2.12.57.76-.46 1.34-1.19 1.61-2.06-.71.42-1.5.72-2.34.88A3.67 3.67 0 0 0 12.1 8.5c0 .29.03.57.1.84-3.05-.15-5.76-1.62-7.57-3.86-.32.55-.5 1.19-.5 1.88 0 1.3.66 2.44 1.67 3.11-.61-.02-1.18-.19-1.68-.46v.05c0 1.82 1.3 3.34 3.03 3.69-.32.09-.65.13-.99.13-.24 0-.48-.02-.71-.07.48 1.5 1.87 2.58 3.52 2.61A7.36 7.36 0 0 1 3 19.54a10.36 10.36 0 0 0 5.61 1.64c6.73 0 10.42-5.57 10.42-10.4v-.47A7.4 7.4 0 0 0 22 5.92z" />
                </svg>
              </a>
              <a href="https://github.com" aria-label="GitHub" className="rvf-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A12 12 0 0 0 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1 1.6-.8 1.8-1.3.1-.4.5-1 .8-1.2-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0C18 5.2 19 5.5 19 5.5c.6 1.8.2 3.1.1 3.4.8.8 1.2 1.9 1.2 3.2 0 4.6-2.9 5.7-5.6 6 .5.4 1 1.1 1 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 24 12.5 12 12 0 0 0 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="rvf-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="rvf-links" aria-label="Footer navigation">
          <div className="rvf-col">
            <h4 className="rvf-heading">Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#changelog">Changelog</a></li>
            </ul>
          </div>

          <div className="rvf-col">
            <h4 className="rvf-heading">Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="rvf-col">
            <h4 className="rvf-heading">Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="rvf-col rvf-legal-col">
            <p className="rvf-legal-note">© {new Date().getFullYear()} VibeFooter — Built with care.</p>
            <div className="rvf-legal-links">
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Component scope reset */
        .rvf-footer, .rvf-footer * { box-sizing: border-box; }
        .rvf-footer a { color: inherit; text-decoration: none; }
        .rvf-sr { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }

        :root {
          --bg-1: #071032;
          --bg-2: #0b1226;
          --muted: #9fbfff;
          --muted-2: #a8c2ff;
          --text: #e6eef8;
          --cta-from: #60a5fa;
          --cta-to: #3b82f6;
        }

        .rvf-footer {
          background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
          color: var(--text);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 36px 16px;
        }

        .rvf-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Top area: brand + newsletter/social */
        .rvf-top {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .rvf-brand {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .rvf-logo {
          display: inline-flex;
          gap: 12px;
          align-items: center;
        }

        .rvf-title {
          font-weight: 700;
          font-size: 18px;
          color: var(--text);
        }

        .rvf-desc {
          margin: 0;
          color: var(--muted-2);
          font-size: 14px;
        }

        .rvf-news {
          margin-left: 0;
        }

        .rvf-heading {
          margin: 0 0 8px 0;
          font-size: 15px;
          color: var(--muted-2);
        }

        .rvf-note { margin: 0 0 12px 0; color: var(--muted); }

        .rvf-form .rvf-input-wrap {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .rvf-input-wrap input[type="email"] {
          flex: 1;
          min-width: 0;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          color: var(--text);
          outline: none;
          font-size: 14px;
          transition: box-shadow 0.12s ease, border-color 0.12s ease;
        }

        .rvf-input-wrap input::placeholder { color: rgba(230,240,255,0.5); }

        .rvf-input-wrap input:focus {
          border-color: rgba(99,102,241,0.95);
          box-shadow: 0 0 0 6px rgba(99,102,241,0.06);
        }

        .rvf-cta {
          background: linear-gradient(180deg, var(--cta-from), var(--cta-to));
          color: #04223a;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.12s ease, box-shadow 0.12s ease;
        }

        .rvf-cta:active { transform: translateY(1px); }
        .rvf-cta:focus { outline: 3px solid rgba(99,102,241,0.18); outline-offset: 2px; }

        .rvf-social {
          margin-top: 12px;
          display: flex;
          gap: 10px;
        }

        .rvf-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          color: var(--text);
        }

        /* Links grid */
        .rvf-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
        }

        .rvf-col { min-width: 0; }
        .rvf-col ul { list-style: none; padding: 0; margin: 0; }
        .rvf-col li { margin: 8px 0; }
        .rvf-col a { color: var(--muted-2); transition: transform 0.12s ease, color 0.12s ease; }
        .rvf-col a:hover, .rvf-col a:focus { color: var(--text); transform: translateX(4px); }

        .rvf-legal-col { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
        .rvf-legal-note { margin: 0; color: var(--muted-2); }
        .rvf-legal-links { display: flex; gap: 12px; flex-wrap: wrap; }
        .rvf-legal-links a { color: var(--muted); }

        /* SMALL devices (phones) */
        @media (max-width: 480px) {
          .rvf-footer { padding: 28px 12px; }
          .rvf-inner { gap: 20px; }
          .rvf-top { gap: 14px; }
          .rvf-brand { align-items: flex-start; gap: 10px; }
          .rvf-logo svg { width: 36px; height: 36px; }
          .rvf-title { font-size: 16px; }
          .rvf-desc { font-size: 13px; }

          .rvf-form .rvf-input-wrap { flex-direction: column; align-items: stretch; }
          .rvf-cta { width: 100%; padding: 12px; font-size: 15px; }

          .rvf-links { grid-template-columns: 1fr; gap: 14px; }
          .rvf-social-link { width: 36px; height: 36px; }

          .rvf-legal-links { gap: 8px; }
        }

        /* MEDIUM devices (large phones / small tablets) */
        @media (min-width: 481px) and (max-width: 799px) {
          .rvf-inner { gap: 22px; }
          .rvf-top { flex-direction: row; justify-content: space-between; align-items: flex-start; gap: 18px; }
          .rvf-brand { flex: 1 1 45%; align-items: flex-start; }
          .rvf-news { flex: 1 1 55%; min-width: 220px; }

          .rvf-links { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
        }

        /* LARGE devices (tablets / desktops) */
        @media (min-width: 800px) and (max-width: 1100px) {
          .rvf-top { flex-direction: row; gap: 28px; align-items: flex-start; }
          .rvf-brand { flex: 0 0 320px; }
          .rvf-news { flex: 1 1 auto; }

          .rvf-links { grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; }
          .rvf-legal-col { align-items: flex-end; }
        }

        /* XL and wider */
        @media (min-width: 1101px) {
          .rvf-inner { gap: 28px; }
          .rvf-top { flex-direction: row; align-items: flex-start; gap: 32px; }
          .rvf-brand { flex: 0 0 320px; }
          .rvf-news { flex: 1 1 auto; }

          .rvf-links { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 24px; }
        }
      `}</style>
    </footer>
  );
}
