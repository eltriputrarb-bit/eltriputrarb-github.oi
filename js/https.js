window.addEventListener('load', function() {
    const loader = document.getElementById('loaderWrapper');
    if (loader) {
        // Mengunci loader agar tetap tampil selama 15 detik (15000 ms)
        setTimeout(function() {
            loader.classList.add('fade-out');
        }, 4500); 
    }
});

        // Toggle Menu Mobile
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const navLinks = document.getElementById('nav-links');
            if (menu && navLinks) {
                menu.classList.toggle('is-active');
                navLinks.classList.toggle('active');
            }
        }

        // Open Modal Paling Stabil
        function openModal(element) {
            const modal = document.getElementById("myModal");
            const modalImg = document.getElementById("imgModal");
            const modalVideo = document.getElementById("videoModal");

            if (!modal || !modalImg || !modalVideo) return;

            const tipeElemen = element.tagName.toUpperCase();

            // Sembunyikan & bersihkan total src awal
            modalImg.style.display = "none";
            modalImg.src = "";
            modalVideo.style.display = "none";
            modalVideo.src = "";
            modalVideo.pause();

            if (tipeElemen === "IMG") {
                modalImg.src = element.src;
                modalImg.style.display = "block";
            } 
            else if (tipeElemen === "VIDEO") {
                modalVideo.src = element.src;
                modalVideo.style.display = "block";
                modalVideo.load();
                modalVideo.play();
            }

            modal.style.display = "flex";
        }

        // Close Modal
        function closeModal() {
            const modal = document.getElementById("myModal");
            const modalImg = document.getElementById("imgModal");
            const modalVideo = document.getElementById("videoModal");

            if (modal) modal.style.display = "none";
            if (modalImg) modalImg.src = "";
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.src = "";
            }
        }

        let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://eltriputrarb.vercel.app/css/style.hideen.ndbxjda.css';
link.href = 'https://eltriputrarb.vercel.app/css/gallery.hideNKDNEMS.css';

document.querySelector('head').appendChild(link);

