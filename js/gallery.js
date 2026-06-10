document.getElementById('root').innerHTML = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELTRI PROJECT - GALLERY</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <link rel="stylesheet" href="css/style.hideen.ndbxjda.css">
    <link rel="stylesheet" href="css/gallery.hideNKDNEMS.css">
</head>
<body>
    
    <div class="eltri-loader-wrapper" id="loaderWrapper">
    <div class="loader-content">
        
        <div class="loader-visual-zone">
            <div class="neon-spinner"></div>
            <img src="logo.png" class="loader-center-logo" alt="Logo ELTRI">
        </div>

            <div class="loader-text">ELTRI PROJECT<span>.</span></div>
        <div class="loader-subtext">LOADING UPDATE SERVER [<span id="gdPercent">00%</span>]</div>
    </div>
</div>

    <nav class="container-navbar">
        <div class="nav-left">
            <a href="index.html" class="logo-link">
                <img src="logo.png" class="logo" alt="Logo"> 
                <span class="brand-text">ELTRI PROJECT</span>
            </a>
        </div>

        <div class="nav-right">
            <ul class="ul-navbar" id="nav-links">
                <li><a href="index.html" class="menu-item-btn btn-gahar"><i class="fas fa-home"></i> HOME</a></li>
                <li class="mobile-only"><a href="gallery.html" class="menu-item-btn active-btn btn-gahar"><i class="fas fa-images"></i> GALLERY</a></li>
                <li><a href="proyek.html" class="menu-item-btn btn-gahar"><i class="fas fa-user"></i> PUBLIC PROFILE</a></li>
            </ul>
            
            <div class="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <main class="gallery-container">
        <header class="gallery-header">
            <h1>MY <span>GALLERY</span></h1>
            <p>Tapi saya sendiri yang mengambil foto developernya dari ELTRI PROJECT</p>
        </header>

        <section class="gallery-grid">

           <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto11.jpg" alt="Lokasi Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>10/06,juni,2026</h3>
                    <p>warkop gunung nona indah</p>
                </div>
            </div>
            
            <div class="gallery-card">
                <div class="card-img-wrapper">
                <video src="video/Nostalgia.mp4" autoplay muted loop playsinline controlsList="nodownload" class="clickable-media"></video>
                </div>
                <div class="card-info">
                     <h3>09/06,juni,2026</h3>
                     <p>kid miss u</p>
                 </div>
            </div>
            
           <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto10.jpg" alt="Lokasi Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>08/06,juni,2026</h3>
                    <p>toraja</p>
                </div>
            </div>        

           <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto9.jpg" alt="Lokasi Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>07/06,juni,2026</h3>
                    <p>Lokasi: di makale, tana toraja</p>
                </div>
            </div>
            
            <div class="gallery-card">
                <div class="card-img-wrapper">
                <video src="video/perumtel.mp4" autoplay muted loop playsinline controlsList="nodownload" class="clickable-media"></video>
                </div>
                <div class="card-info">
                     <h3>04/06,juni,2026</h3>
                     <p>saya jalan jadi</p>
                 </div>
            </div>

            <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto8.jpg" alt="Lokasi Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>30/05,mei,2026</h3>
                    <p>Lokasi: Hokky Rumah Makan China</p>
                </div>
            </div>

            <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto1.jpg" alt="Lokasi Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>15/05,mei,2026</h3>
                    <p>Lokasi: Makassar Sudut pandang sinematik jalanan kota</p>
                </div>
            </div>

                        <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto6.jpg" alt="Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>18/4,APRIL,2026</h3>
                    <p>SAYA SENDIRI INI MAU MAKAN</p>
                </div>
            </div>

            <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto4.jpg" alt="Makassar" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>14/03,MARET,2026</h3>
                    <p>Parkiran Roda mobil</p>
                </div>
            </div>

                        <div class="gallery-card">
                <div class="card-img-wrapper">
                    <img src="image/foto3.jpg" alt="SMAKARA" class="clickable-media">
                </div>
                <div class="card-info">
                    <h3>07/12,DESEMBER,2018</h3>
                    <p>SAYA FOTO PAKAI CAMERA SMAKARA</p>
                </div>
            </div>

            <div class="gallery-card">
                <div class="card-img-wrapper">
                <video src="video/jepang.mp4" autoplay muted loop playsinline controlsList="nodownload" class="clickable-media"></video>
                </div>
                <div class="card-info">
                     <h3>✨</h3>
                 </div>
            </div>

            <div class="gallery-card">
                <div class="card-img-wrapper">
                <video src="video/batman.mp4" autoplay muted loop playsinline controlsList="nodownload" class="clickable-media"></video>
                </div>
                <div class="card-info">
                     <h3>WALLA Y'A BATMAN 🔥🔥🔥🔥</h3>
                 </div>
            </div>

</div> </section> <div class="pagination-container" id="paginationControls"></div>

</main>

        </section>
    </main>


    
<div id="myModal" class="modal-lightbox">
    <span class="close-btn" id="closeModalBtn">&times;</span>
    <img class="modal-content" id="imgModal">
    <video class="modal-content" id="videoModal" controls controlsList="nodownload" loop></video>
</div>

<script src="js/gallery.js"></script>
<script src="js/servermenu.js"></script>

    

</body>
</html>
`;
