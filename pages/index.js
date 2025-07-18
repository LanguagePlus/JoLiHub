
import Head from 'next/head'

export default function Home() {
  return (
   <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <img
        src="/logo-jolihub.png"
        alt="JoLiHub Logo"
        style={{ width: '240px', marginBottom: '20px' }}
      />
      <h1 style={{
        color: '#3EDC81',
        fontSize: '2.5rem',
        textAlign: 'center',
        textShadow: '0 0 8px #FFEF00',
        margin: 0,
      }}>
        Aprende idiomas. Conecta con el mundo.
      </h1>
    </div>
  )
} 