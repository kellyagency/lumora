export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'black',color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif',padding:'20px',textAlign:'center'}}>
      <h1 style={{fontSize:'60px',fontWeight:'bold',marginBottom:'10px'}}>LUMORA ✨</h1>
      <p style={{fontSize:'22px',opacity:0.8,marginBottom:'30px'}}>AI Automation Agency — Built by Kelly</p>
      <div style={{display:'flex',gap:'15px'}}>
        <a href="/dashboard" style={{padding:'15px 30px',background:'white',color:'black',borderRadius:'10px',textDecoration:'none',fontWeight:'bold'}}>Enter Dashboard</a>
        <a href="https://wa.me/233XXXXXXXX" style={{padding:'15px 30px',border:'1px solid white',color:'white',borderRadius:'10px',textDecoration:'none'}}>WhatsApp Us</a>
      </div>
      <p style={{marginTop:'50px',fontSize:'14px',opacity:0.5}}>Your business automated. 24/7 AI Agents.</p>
    </main>
  )
}
