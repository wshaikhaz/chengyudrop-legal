import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Leaf({ className = 'leaf' }) {
  return <img className={className} src="/leaf.png" alt="" width="40" height="40" />
}

export default function Doc({ source, docLabel, current }) {
  const dateMatch = source.match(/\*\*Effective date:\*\*\s*(.+)/i)
  const effectiveDate = dateMatch ? dateMatch[1].trim() : null

  // The header renders the title + date, so strip them from the body.
  const body = source
    .replace(/^#\s+.*\n/, '')
    .replace(/\*\*Effective date:\*\*.*\n?/i, '')
    .trim()

  return (
    <div className="page">
      <header className="masthead">
        <div className="brand">
          <Leaf />
          <div className="brand-text">
            <span className="brand-name">ChengyuDrop</span>
            <span className="brand-sub">Chinese idioms, one card at a time</span>
          </div>
        </div>
        <h1 className="doc-title">{docLabel}</h1>
        {effectiveDate && (
          <p className="doc-date">
            <span className="dot" /> Effective {effectiveDate}
          </p>
        )}
      </header>

      <main className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href = '', ...props }) => {
              const external = /^https?:/i.test(href)
              return (
                <a
                  href={href}
                  {...props}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                />
              )
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </main>

      <footer className="foot">
        <Leaf className="leaf foot-leaf" />
        <nav className="foot-nav" aria-label="Legal documents">
          <a href="/" aria-current={current === 'privacy' ? 'page' : undefined}>
            Privacy Policy
          </a>
          <span className="sep" aria-hidden="true">·</span>
          <a href="/terms" aria-current={current === 'terms' ? 'page' : undefined}>
            Terms of Use
          </a>
        </nav>
        <p className="foot-meta">
          © {new Date().getFullYear()} Shaikha Alsuwaidi ·{' '}
          <a href="mailto:chengyudrop@gmail.com">chengyudrop@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}
