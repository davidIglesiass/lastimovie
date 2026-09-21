function ApiKeyWarning() {
  return (
    <div className="contact-form" style={{ marginTop: '2rem' }}>
      <p style={{ margin: 0 }}>
        Falta configurar <code>VITE_TMDB_API_KEY</code> en tu archivo <code>.env</code>. Conseguí una key gratis en{' '}
        <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
          themoviedb.org/settings/api
        </a>
        .
      </p>
    </div>
  )
}

export default ApiKeyWarning
