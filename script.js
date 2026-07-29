/* ===========================
   RESET
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:Inter,sans-serif;

    background:#0f172a;

    color:white;

    overflow-x:hidden;

}

/* ===========================
CONTAINER
=========================== */

.container{

    width:min(1200px,92%);

    margin:auto;

}

/* ===========================
HEADER
=========================== */

header{

    position:fixed;

    width:100%;

    top:0;

    z-index:1000;

    backdrop-filter:blur(18px);

    background:rgba(15,23,42,.70);

    border-bottom:1px solid rgba(255,255,255,.08);

}

header .container{

    display:flex;

    justify-content:space-between;

    align-items:center;

    height:80px;

}

.logo{

    width:55px;

    height:55px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

    font-weight:700;

    font-size:22px;

    background:linear-gradient(135deg,#3b82f6,#06b6d4);

    color:white;

}

nav{

    display:flex;

    gap:35px;

}

nav a{

    color:white;

    text-decoration:none;

    font-weight:500;

    transition:.3s;

}

nav a:hover{

    color:#38bdf8;

}

/* ===========================
HERO
=========================== */

.hero{

    min-height:100vh;

    display:flex;

    align-items:center;

    position:relative;

    overflow:hidden;

}

/* background glow */

.hero::before{

    content:"";

    position:absolute;

    width:650px;

    height:650px;

    left:-250px;

    top:-250px;

    border-radius:50%;

    background:#2563eb30;

    filter:blur(140px);

    animation:floatGlow 8s infinite alternate;

}

.hero::after{

    content:"";

    position:absolute;

    width:550px;

    height:550px;

    right:-180px;

    bottom:-150px;

    border-radius:50%;

    background:#06b6d420;

    filter:blur(120px);

    animation:floatGlow2 9s infinite alternate;

}

.hero-grid{

    display:grid;

    grid-template-columns:1fr 430px;

    gap:80px;

    align-items:center;

    width:100%;

    position:relative;

    z-index:2;

}

.hello{

    color:#38bdf8;

    font-weight:600;

    margin-bottom:20px;

    font-size:18px;

}

.hero h1{

    font-size:72px;

    line-height:1;

    font-weight:800;

    margin-bottom:18px;

}

.hero h2{

    font-size:34px;

    color:#38bdf8;

    height:50px;

    margin-bottom:25px;

}

.cursor{

    animation:blink .7s infinite;

}

.intro{

    color:#cbd5e1;

    font-size:19px;

    line-height:1.8;

    max-width:650px;

}

.intro strong{

    color:white;

}

/* ===========================
BUTTONS
=========================== */

.buttons{

    margin-top:45px;

    display:flex;

    gap:20px;

}

.btn-primary{

    background:linear-gradient(135deg,#3b82f6,#06b6d4);

    color:white;

    padding:16px 34px;

    border-radius:50px;

    text-decoration:none;

    font-weight:600;

    transition:.35s;

}

.btn-primary:hover{

    transform:translateY(-4px);

    box-shadow:0 20px 35px rgba(37,99,235,.35);

}

.btn-secondary{

    border:1px solid rgba(255,255,255,.15);

    color:white;

    padding:16px 34px;

    border-radius:50px;

    text-decoration:none;

    transition:.35s;

}

.btn-secondary:hover{

    background:white;

    color:#111827;

}

/* ===========================
STATS
=========================== */

.stats{

    display:flex;

    gap:50px;

    margin-top:60px;

}

.stats h3{

    font-size:42px;

    color:#38bdf8;

}

.stats span{

    color:#94a3b8;

}

/* ===================================
   HERO PHOTO
=================================== */

.hero-right{

    display:flex;

    justify-content:center;

    align-items:center;

}

.photo-card{

    position:relative;

    width:380px;

    height:480px;

    border-radius:30px;

    overflow:hidden;

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(20px);

    border:1px solid rgba(255,255,255,.08);

    box-shadow:0 30px 80px rgba(0,0,0,.35);

    transition:.45s;

    animation:floatCard 5s ease-in-out infinite;

}

.photo-card:hover{

    transform:translateY(-12px) scale(1.02);

    box-shadow:0 45px 90px rgba(59,130,246,.35);

}

.photo-card img{

    width:100%;

    height:100%;

    object-fit:cover;

}

.photo-card::before{

    content:"";

    position:absolute;

    inset:0;

    background:linear-gradient(
        to top,
        rgba(15,23,42,.45),
        transparent 45%
    );

}

/* ===================================
   SECTION
=================================== */

section{

    padding:120px 0;

}

.section-title{

    font-size:48px;

    margin-bottom:20px;

}

.section-subtitle{

    color:#94a3b8;

    font-size:18px;

    max-width:700px;

    margin-bottom:60px;

}

/* ===================================
   CARD
=================================== */

.card{

    background:rgba(255,255,255,.05);

    border:1px solid rgba(255,255,255,.08);

    border-radius:24px;

    padding:30px;

    backdrop-filter:blur(20px);

    transition:.35s;

}

.card:hover{

    transform:translateY(-8px);

    border-color:#38bdf8;

}

/* ===================================
   SCROLLBAR
=================================== */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#0f172a;

}

::-webkit-scrollbar-thumb{

    background:#2563eb;

    border-radius:30px;

}

/* ===================================
   ANIMATIONS
=================================== */

@keyframes blink{

    50%{

        opacity:0;

    }

}

@keyframes floatGlow{

    from{

        transform:translateY(0);

    }

    to{

        transform:translateY(80px);

    }

}

@keyframes floatGlow2{

    from{

        transform:translateY(0);

    }

    to{

        transform:translateY(-70px);

    }

}

@keyframes floatCard{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-12px);

    }

    100%{

        transform:translateY(0);

    }

}

/* ===================================
   FADE ANIMATION
=================================== */

.fade-up{

    opacity:0;

    transform:translateY(30px);

    transition:.8s;

}

.fade-up.show{

    opacity:1;

    transform:none;

}

/* ===================================
   MOBILE
=================================== */

@media(max-width:1000px){

.hero-grid{

grid-template-columns:1fr;

text-align:center;

}

.hero-right{

margin-top:60px;

}

.buttons{

justify-content:center;

flex-wrap:wrap;

}

.stats{

justify-content:center;

flex-wrap:wrap;

}

.intro{

margin:auto;

}

.hero h1{

font-size:58px;

}

.hero h2{

font-size:28px;

}

.photo-card{

width:320px;

height:420px;

}

}

@media(max-width:700px){

nav{

display:none;

}

header .container{

justify-content:center;

}

.hero{

padding-top:100px;

}

.hero h1{

font-size:42px;

}

.hero h2{

font-size:24px;

}

.intro{

font-size:17px;

}

.stats{

gap:25px;

}

.stats h3{

font-size:34px;

}

.photo-card{

width:280px;

height:360px;

}

.buttons{

flex-direction:column;

align-items:center;

}

.btn-primary,

.btn-secondary{

width:230px;

text-align:center;

}

}