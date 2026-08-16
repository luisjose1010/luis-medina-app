import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Luis Medina — Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage () {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #fcfaf9 0%, #ddbea8 55%, #368f8b 100%)',
          color: '#160f29'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#246a73'
          }}
        >
          Luis Medina App
        </div>
        <div style={{ display: 'flex', fontSize: 86, fontWeight: 700, lineHeight: 1.05, marginTop: 24, color: '#164046' }}>
          Luis José Medina Sandoval
        </div>
        <div style={{ display: 'flex', fontSize: 38, marginTop: 24, color: '#215754' }}>
          Ingeniero en informática · Full-Stack Developer
        </div>
        <div style={{ display: 'flex', fontSize: 28, marginTop: 40, color: '#2c7370' }}>
          TypeScript · React · Next.js · Node.js · Tailwind CSS
        </div>
      </div>
    ),
    { ...size }
  )
}
