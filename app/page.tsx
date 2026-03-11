"use client";

import { useState, useEffect } from "react";

function SelfLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" stroke="#E20074" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="180 46" strokeDashoffset="0" />
      <circle cx="40" cy="40" r="26" stroke="#237b82" strokeWidth="1.5" strokeLinecap="round"
        strokeDasharray="120 43" strokeDashoffset="60" />
      <circle cx="40" cy="40" r="4" fill="#E20074" />
      <rect x="28" y="36" width="3" height="8" rx="1.5" fill="white" opacity="0.9" />
      <rect x="33" y="32" width="3" height="16" rx="1.5" fill="white" opacity="0.9" />
      <rect x="38" y="34" width="3" height="12" rx="1.5" fill="#E20074" />
      <rect x="43" y="30" width="3" height="20" rx="1.5" fill="white" opacity="0.9" />
      <rect x="48" y="35" width="3" height="10" rx="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}

function Waveform({ color = "#E20074", opacity = 0.4 }: { color?: string; opacity?: number }) {
  const bars = [4, 10, 7, 14, 6, 18, 8, 12, 5, 16, 9, 13, 4, 11, 7, 15, 6, 10, 8, 14];
  return (
    <div className="flex items-center gap-[3px]" style={{ opacity }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          width: 2, height: h, borderRadius: 2, background: color,
          animation: `wavepulse ${0.8 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.05}s`,
        }} />
      ))}
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(35,123,130,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(35,123,130,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div style={{ position:"absolute", top:"15%", left:"-15%", width:620, height:620, borderRadius:"50%", background:"radial-gradient(circle, rgba(35,123,130,0.12) 0%, transparent 65%)", filter:"blur(70px)" }} />
      <div style={{ position:"absolute", bottom:"-10%", right:"-10%", width:520, height:520, borderRadius:"50%", background:"radial-gradient(circle, rgba(35,123,130,0.1) 0%, transparent 65%)", filter:"blur(55px)" }} />
      <div style={{ position:"absolute", top:"-5%", right:"10%", width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle, rgba(226,0,116,0.1) 0%, transparent 70%)", filter:"blur(40px)" }} />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#ffffff", color: "#0d1f21", fontFamily: "'Syne', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        @keyframes wavepulse { from{transform:scaleY(0.6)} to{transform:scaleY(1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline { 0%{top:-10%} 100%{top:110%} }
        .fade1{animation:fadeUp 0.8s 0.1s ease both}
        .fade2{animation:fadeUp 0.8s 0.25s ease both}
        .fade3{animation:fadeUp 0.8s 0.4s ease both}
        .fade4{animation:fadeUp 0.8s 0.55s ease both}
        .mono{font-family:'Space Mono',monospace}
        .pbtn{display:inline-flex;align-items:center;justify-content:center;padding:14px 32px;border-radius:100px;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;transition:all 0.25s;cursor:pointer;text-decoration:none;border:2px solid #E20074}
        .pbtn-p{background:#E20074;color:white}
        .pbtn-p:hover{background:transparent;color:#E20074}
        .pbtn-o{background:transparent;color:white;border-color:rgba(0,0,0,0.3)}
        .pbtn-o:hover{border-color:#237b82;color:#237b82}
        .acard{border:1px solid rgba(226,0,116,0.2);border-radius:16px;padding:24px;background:rgba(226,0,116,0.05);transition:all 0.3s}
        .acard:hover{border-color:#E20074;background:rgba(226,0,116,0.08);transform:translateY(-4px)}
        .tcard{border:1px solid rgba(35,123,130,0.25);border-radius:16px;padding:24px;background:rgba(35,123,130,0.06);transition:all 0.3s}
        .tcard:hover{border-color:#237b82;background:rgba(35,123,130,0.1)}
        input,textarea{background:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.12);border-radius:12px;color:#0d1f21;padding:16px;width:100%;font-family:'Syne',sans-serif;font-size:15px;outline:none;transition:border-color 0.2s;box-sizing:border-box}
        input:focus,textarea:focus{border-color:#E20074}
        input::placeholder,textarea::placeholder{color:rgba(0,0,0,0.3)}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#0a1f21}
        ::-webkit-scrollbar-thumb{background:#E20074;border-radius:4px}
      `}</style>

      {/* NAV */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"16px 20px", background: scrolled?"rgba(255,255,255,0.95)":"transparent", backdropFilter:scrolled?"blur(12px)":"none", borderBottom:scrolled?"1px solid rgba(226,0,116,0.2)":"1px solid transparent", transition:"all 0.3s", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <SelfLogo size={36} />
          <span style={{ fontWeight:800, fontSize:18, letterSpacing:"0.08em" }}>SELF<span style={{ color:"#E20074" }}>.</span></span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display:"flex", flexDirection:"column", gap:5, padding:8, background:"none", border:"none", cursor:"pointer" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display:"block", width:24, height:2, background:i===1?"#E20074":"#0d1f21", borderRadius:2, transition:"all 0.3s",
              transform: menuOpen?(i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"scaleX(0)"):"none" }} />
          ))}
        </button>
      </header>

      {/* MOBILE MENU */}
      <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:99, background:"rgba(255,255,255,0.99)", backdropFilter:"blur(20px)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:36, opacity:menuOpen?1:0, pointerEvents:menuOpen?"all":"none", transition:"opacity 0.3s" }}>
        <SelfLogo size={64} />
        {["Lineup","Schedule","Venue","Tickets"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}
            style={{ fontSize:32, fontWeight:800, color:"#0d1f21", textDecoration:"none", letterSpacing:"0.05em" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#E20074")}
            onMouseLeave={e=>(e.currentTarget.style.color="white")}
          >{item}</a>
        ))}
        <a href="#tickets" onClick={()=>setMenuOpen(false)} className="pbtn pbtn-p">Get Tickets</a>
      </div>

      {/* HERO */}
      <section style={{ position:"relative", minHeight:"100svh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"120px 20px 80px" }}>
        <Grid />
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <div style={{ position:"absolute", left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,rgba(226,0,116,0.25),transparent)", animation:"scanline 6s linear infinite" }} />
        </div>
        <div style={{ position:"relative", zIndex:1, maxWidth:480 }}>
          <div className="fade1" style={{ marginBottom:32 }}>
            <SelfLogo size={80} />
          </div>
          <div className="fade1" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
            <div style={{ width:24, height:1, background:"#237b82" }} />
            <span className="mono" style={{ fontSize:11, color:"#237b82", letterSpacing:"0.25em", textTransform:"uppercase" }}>Student's EDM &amp; Love Festival</span>
          </div>
          <h1 className="fade2" style={{ fontSize:"clamp(56px,16vw,80px)", fontWeight:800, lineHeight:0.95, letterSpacing:"-0.02em", marginBottom:24 }}>
            FEEL THE<br />
            <span style={{ color:"#E20074" }}>BEAT</span>
            <span style={{ color:"transparent", WebkitTextStroke:"2px rgba(13,31,33,0.2)" }}> LIVE</span>
          </h1>
          <div className="fade3" style={{ marginBottom:24 }}><Waveform color="#E20074" opacity={0.7} /></div>
          <p className="fade3" style={{ fontSize:16, color:"rgba(13,31,33,0.55)", lineHeight:1.7, marginBottom:36, maxWidth:380 }}>
            The ultimate student music experience. Three stages, 48 hours of non-stop EDM, and a crowd that moves as one.
          </p>
          <div className="fade4" style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <a href="#tickets" className="pbtn pbtn-p" style={{ width:"100%", maxWidth:320 }}>Get Your Tickets</a>
            <a href="#lineup" className="pbtn pbtn-o" style={{ width:"100%", maxWidth:320 }}>View Lineup</a>
          </div>
          <div className="fade4" style={{ marginTop:48, display:"flex", gap:32 }}>
            {[["3","Stages"],["48h","Non-stop"],["5K+","Attendees"]].map(([val,label])=>(
              <div key={label}>
                <div className="mono" style={{ fontSize:22, fontWeight:700, color:"#E20074" }}>{val}</div>
                <div style={{ fontSize:11, color:"rgba(13,31,33,0.4)", textTransform:"uppercase", letterSpacing:"0.12em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.4 }}>
          <span className="mono" style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:40, background:"linear-gradient(to bottom,#E20074,transparent)" }} />
        </div>
      </section>

      {/* LINEUP */}
      <section id="lineup" style={{ padding:"80px 20px", background:"white" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:16, height:1, background:"#E20074" }} />
            <span className="mono" style={{ fontSize:10, color:"#E20074", letterSpacing:"0.25em", textTransform:"uppercase" }}>Artists</span>
          </div>
          <h2 style={{ fontSize:40, fontWeight:800, marginBottom:8, letterSpacing:"-0.02em" }}>Lineup</h2>
          <div style={{ marginBottom:36 }}><Waveform color="#237b82" opacity={0.5} /></div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {[
              {name:"MAINSTAGE ACT 1",time:"22:00",stage:"Main Stage",headliner:true},
              {name:"MAINSTAGE ACT 2",time:"20:00",stage:"Main Stage",headliner:true},
              {name:"ARTIST THREE",time:"18:00",stage:"Stage B",headliner:false},
              {name:"ARTIST FOUR",time:"16:00",stage:"Stage B",headliner:false},
              {name:"ARTIST FIVE",time:"14:00",stage:"Stage C",headliner:false},
            ].map(({name,time,stage,headliner})=>(
              <div key={name} className={headliner?"acard":"tcard"}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>
                    <div style={{ fontSize:headliner?18:15, fontWeight:headliner?800:600, color:headliner?"white":"rgba(255,255,255,0.75)", letterSpacing:"0.03em" }}>{name}</div>
                    <div className="mono" style={{ fontSize:11, color:headliner?"#E20074":"#237b82", marginTop:4, letterSpacing:"0.1em" }}>{stage}</div>
                  </div>
                  <div className="mono" style={{ fontSize:14, color:"rgba(13,31,33,0.4)" }}>{time}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop:20, fontSize:12, color:"rgba(13,31,33,0.3)", fontStyle:"italic" }}>* Full lineup announcement coming soon</p>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{ padding:"80px 20px", background:"rgba(35,123,130,0.08)", borderTop:"1px solid rgba(35,123,130,0.2)", borderBottom:"1px solid rgba(35,123,130,0.2)" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:16, height:1, background:"#237b82" }} />
            <span className="mono" style={{ fontSize:10, color:"#237b82", letterSpacing:"0.25em", textTransform:"uppercase" }}>When</span>
          </div>
          <h2 style={{ fontSize:40, fontWeight:800, marginBottom:40, letterSpacing:"-0.02em" }}>Schedule</h2>
          {[
            {day:"Day 01",date:"TBA",events:["Gates Open — 12:00","Stage B Opens — 14:00","Main Stage — 18:00","Headliner — 22:00"]},
            {day:"Day 02",date:"TBA",events:["Gates Open — 12:00","Stage C Opens — 13:00","Stage B — 16:00","Closing Act — 23:00"]},
          ].map(({day,date,events})=>(
            <div key={day} style={{ marginBottom:32 }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:16, marginBottom:16 }}>
                <span style={{ fontSize:22, fontWeight:800, color:"#E20074" }}>{day}</span>
                <span className="mono" style={{ fontSize:12, color:"rgba(13,31,33,0.3)" }}>{date}</span>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:8, paddingLeft:16, borderLeft:"2px solid rgba(226,0,116,0.4)" }}>
                {events.map(e=><div key={e} className="mono" style={{ fontSize:13, color:"rgba(13,31,33,0.6)" }}>{e}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENUE */}
      <section id="venue" style={{ padding:"80px 20px" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:16, height:1, background:"#E20074" }} />
            <span className="mono" style={{ fontSize:10, color:"#E20074", letterSpacing:"0.25em", textTransform:"uppercase" }}>Where</span>
          </div>
          <h2 style={{ fontSize:40, fontWeight:800, marginBottom:24, letterSpacing:"-0.02em" }}>Venue</h2>
          <div style={{ border:"1px solid rgba(226,0,116,0.25)", borderRadius:20, padding:"28px", background:"rgba(226,0,116,0.05)", marginBottom:24 }}>
            <div style={{ fontSize:20, fontWeight:800, marginBottom:8 }}>TBA</div>
            <div className="mono" style={{ fontSize:12, color:"rgba(13,31,33,0.4)", lineHeight:1.8 }}>Location to be announced<br/>Stay tuned for updates</div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {[["🎪","3 Stages"],["🎧","Pro Sound"],["💡","Light Show"],["🍔","Food Zone"]].map(([icon,label])=>(
              <div key={label} className="tcard" style={{ display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:20 }}>{icon}</span>
                <span style={{ fontSize:14, fontWeight:600 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section id="tickets" style={{ padding:"80px 20px", background:"rgba(226,0,116,0.05)", borderTop:"1px solid rgba(226,0,116,0.15)" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:16, height:1, background:"#E20074" }} />
            <span className="mono" style={{ fontSize:10, color:"#E20074", letterSpacing:"0.25em", textTransform:"uppercase" }}>Join Us</span>
          </div>
          <h2 style={{ fontSize:40, fontWeight:800, marginBottom:8, letterSpacing:"-0.02em" }}>Tickets</h2>
          <p style={{ color:"rgba(13,31,33,0.5)", fontSize:14, marginBottom:36, lineHeight:1.7 }}>Early bird pricing available for students. Bring your student ID.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[
              {tier:"Early Bird",price:"TBA",perks:["1-Day Access","Student Discount","General Area"],hot:false},
              {tier:"Full Pass",price:"TBA",perks:["2-Day Access","All Stages","Exclusive Merch"],hot:true},
              {tier:"VIP",price:"TBA",perks:["2-Day Access","VIP Area","Meet & Greet"],hot:false},
            ].map(({tier,price,perks,hot})=>(
              <div key={tier} style={{ border:`1px solid ${hot?"#E20074":"rgba(255,255,255,0.1)"}`, borderRadius:20, padding:"24px", background:hot?"rgba(226,0,116,0.07)":"rgba(0,0,0,0.02)", position:"relative" }}>
                {hot&&<div className="mono" style={{ position:"absolute", top:-10, right:20, background:"#E20074", color:"#0d1f21", fontSize:9, padding:"4px 10px", borderRadius:100, letterSpacing:"0.15em" }}>POPULAR</div>}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                  <div style={{ fontSize:18, fontWeight:800 }}>{tier}</div>
                  <div className="mono" style={{ fontSize:20, fontWeight:700, color:hot?"#E20074":"rgba(255,255,255,0.6)" }}>{price}</div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:6, marginBottom:20 }}>
                  {perks.map(p=>(
                    <div key={p} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"rgba(13,31,33,0.55)" }}>
                      <div style={{ width:4, height:4, borderRadius:"50%", background:hot?"#E20074":"#237b82" }} />{p}
                    </div>
                  ))}
                </div>
                <a href="#contact" className={`pbtn ${hot?"pbtn-p":"pbtn-o"}`} style={{ width:"100%", fontSize:12 }}>Register Interest</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"80px 20px" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:16, height:1, background:"#237b82" }} />
            <span className="mono" style={{ fontSize:10, color:"#237b82", letterSpacing:"0.25em", textTransform:"uppercase" }}>Contact</span>
          </div>
          <h2 style={{ fontSize:40, fontWeight:800, marginBottom:8, letterSpacing:"-0.02em" }}>Get In Touch</h2>
          <p style={{ color:"rgba(13,31,33,0.5)", fontSize:14, marginBottom:36 }}>Questions? Sponsorships? Artist bookings? We'd love to hear from you.</p>
          <form style={{ display:"flex", flexDirection:"column", gap:14 }} onSubmit={e=>e.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your message" rows={4} style={{ resize:"none" }} />
            <button type="submit" className="pbtn pbtn-p" style={{ marginTop:8, border:"none", cursor:"pointer", fontSize:13 }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"40px 20px", borderTop:"1px solid rgba(226,0,116,0.2)", background:"rgba(255,255,255,0.95)" }}>
        <div style={{ maxWidth:480, margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center", gap:20 }}>
          <SelfLogo size={48} />
          <span style={{ fontWeight:800, fontSize:16, letterSpacing:"0.12em", opacity:0.5 }}>SELF<span style={{ color:"#E20074" }}>.</span></span>
          <div style={{ display:"flex", gap:24 }}>
            {["Instagram","TikTok","Spotify"].map(s=>(
              <a key={s} href="#" className="mono" style={{ fontSize:11, color:"rgba(13,31,33,0.4)", textDecoration:"none", letterSpacing:"0.1em", textTransform:"uppercase", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#E20074")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(13,31,33,0.35)")}
              >{s}</a>
            ))}
          </div>
          <Waveform color="#237b82" opacity={0.5} />
          <p className="mono" style={{ fontSize:10, color:"rgba(13,31,33,0.25)", letterSpacing:"0.1em", textAlign:"center" }}>
            © {new Date().getFullYear()} SELF FESTIVAL — STUDENT'S EDM &amp; LOVE FESTIVAL
          </p>
        </div>
      </footer>
    </div>
  );
}
