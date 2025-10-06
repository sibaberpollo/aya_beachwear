export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1>Aya Beachwear</h1>
      <p>Proyecto en desarrollo</p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/original.html" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#000', 
            color: '#fff', 
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Ver diseño original
        </a>
      </div>
    </div>
  )
}

