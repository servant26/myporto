        // Data sertifikat sesuai struktur folder
        const certificatesData = [
            // Programming (33 file)
            { id: 1, category: "programming", title: "Programming 1", img: "assets/images/Programming/1" },
            { id: 2, category: "programming", title: "Programming 2", img: "assets/images/Programming/2" },
            { id: 3, category: "programming", title: "Programming 3", img: "assets/images/Programming/3" },
            { id: 4, category: "programming", title: "Programming 4", img: "assets/images/Programming/4" },
            { id: 5, category: "programming", title: "Programming 5", img: "assets/images/Programming/5" },
            { id: 6, category: "programming", title: "Programming 6", img: "assets/images/Programming/6" },
            { id: 7, category: "programming", title: "Programming 7", img: "assets/images/Programming/7" },
            { id: 8, category: "programming", title: "Programming 8", img: "assets/images/Programming/8" },
            { id: 9, category: "programming", title: "Programming 9", img: "assets/images/Programming/9" },
            { id: 10, category: "programming", title: "Programming 10", img: "assets/images/Programming/10" },
            { id: 11, category: "programming", title: "Programming 11", img: "assets/images/Programming/11" },
            { id: 12, category: "programming", title: "Programming 12", img: "assets/images/Programming/12" },
            { id: 13, category: "programming", title: "Programming 13", img: "assets/images/Programming/13" },
            { id: 14, category: "programming", title: "Programming 14", img: "assets/images/Programming/14" },
            { id: 15, category: "programming", title: "Programming 15", img: "assets/images/Programming/15" },
            { id: 16, category: "programming", title: "Programming 16", img: "assets/images/Programming/16" },
            { id: 17, category: "programming", title: "Programming 17", img: "assets/images/Programming/17" },
            { id: 18, category: "programming", title: "Programming 18", img: "assets/images/Programming/18" },
            { id: 19, category: "programming", title: "Programming 19", img: "assets/images/Programming/19" },
            { id: 20, category: "programming", title: "Programming 20", img: "assets/images/Programming/20" },
            { id: 56, category: "programming", title: "Programming 21", img: "assets/images/Programming/21" },
            { id: 57, category: "programming", title: "Programming 22", img: "assets/images/Programming/22" },
            { id: 58, category: "programming", title: "Programming 23", img: "assets/images/Programming/23" },
            { id: 59, category: "programming", title: "Programming 24", img: "assets/images/Programming/24" },
            { id: 60, category: "programming", title: "Programming 25", img: "assets/images/Programming/25" },
            { id: 61, category: "programming", title: "Programming 26", img: "assets/images/Programming/26" },
            { id: 62, category: "programming", title: "Programming 27", img: "assets/images/Programming/27" },
            { id: 63, category: "programming", title: "Programming 28", img: "assets/images/Programming/28" },
            { id: 64, category: "programming", title: "Programming 29", img: "assets/images/Programming/29" },
            { id: 65, category: "programming", title: "Programming 30", img: "assets/images/Programming/30" },
            { id: 66, category: "programming", title: "Programming 31", img: "assets/images/Programming/31" },
            { id: 67, category: "programming", title: "Programming 32", img: "assets/images/Programming/32" },
            { id: 68, category: "programming", title: "Programming 33", img: "assets/images/Programming/33" },

            //BNSP/LSP (2 file) - yang tinggi
            { id: 21, category: "competence", title: "BNSP/LSP 1", img: "assets/images/Competence/1", isTall: true },
            { id: 22, category: "competence", title: "BNSP/LSP 2", img: "assets/images/Competence/2", isTall: true },

            // Design (7 file)
            { id: 23, category: "design", title: "Design 1", img: "assets/images/Design/1" },
            { id: 24, category: "design", title: "Design 2", img: "assets/images/Design/2" },
            { id: 25, category: "design", title: "Design 3", img: "assets/images/Design/3" },
            { id: 26, category: "design", title: "Design 4", img: "assets/images/Design/4" },
            { id: 27, category: "design", title: "Design 5", img: "assets/images/Design/5" },
            { id: 28, category: "design", title: "Design 6", img: "assets/images/Design/6" },
            { id: 29, category: "design", title: "Design 7", img: "assets/images/Design/7" },

            // Editing (5 file)
            { id: 30, category: "editing", title: "Editing 1", img: "assets/images/Editing/1" },
            { id: 31, category: "editing", title: "Editing 2", img: "assets/images/Editing/2" },
            { id: 32, category: "editing", title: "Editing 3", img: "assets/images/Editing/3" },
            { id: 33, category: "editing", title: "Editing 4", img: "assets/images/Editing/4" },
            { id: 34, category: "editing", title: "Editing 5", img: "assets/images/Editing/5" },

            // Microsoft (10 file)
            { id: 35, category: "microsoft", title: "Microsoft 1", img: "assets/images/Microsoft/1" },
            { id: 36, category: "microsoft", title: "Microsoft 2", img: "assets/images/Microsoft/2" },
            { id: 37, category: "microsoft", title: "Microsoft 3", img: "assets/images/Microsoft/3" },
            { id: 38, category: "microsoft", title: "Microsoft 4", img: "assets/images/Microsoft/4" },
            { id: 39, category: "microsoft", title: "Microsoft 5", img: "assets/images/Microsoft/5" },
            { id: 40, category: "microsoft", title: "Microsoft 6", img: "assets/images/Microsoft/6" },
            { id: 41, category: "microsoft", title: "Microsoft 7", img: "assets/images/Microsoft/7" },
            { id: 42, category: "microsoft", title: "Microsoft 8", img: "assets/images/Microsoft/8" },
            { id: 43, category: "microsoft", title: "Microsoft 9", img: "assets/images/Microsoft/9" },
            { id: 44, category: "microsoft", title: "Microsoft 10", img: "assets/images/Microsoft/10" },

            // MSIB (3 file)
            { id: 45, category: "msib", title: "MSIB 1", img: "assets/images/MSIB/1" },
            { id: 46, category: "msib", title: "MSIB 2", img: "assets/images/MSIB/2" },
            { id: 47, category: "msib", title: "MSIB 3", img: "assets/images/MSIB/3" },

            // Organisasi (4 file)
            { id: 48, category: "organization", title: "Organisasi 1", img: "assets/images/Organisasi/1" },
            { id: 49, category: "organization", title: "Organisasi 2", img: "assets/images/Organisasi/2" },
            { id: 50, category: "organization", title: "Organisasi 3", img: "assets/images/Organisasi/3" },
            { id: 51, category: "organization", title: "Organisasi 4", img: "assets/images/Organisasi/4" },

            // English (3 file)
            { id: 52, category: "english", title: "English 1", img: "assets/images/English/1" },
            { id: 53, category: "english", title: "English 2", img: "assets/images/English/2" },
            { id: 54, category: "english", title: "English 3", img: "assets/images/English/3" },

            { id: 55, category: "other", title: "Other 1", img: "assets/images/Other/1" },
        ];

        const projectsData = [
            {
                id: 1,
                category: "personal",
                title: "Devmate",
                desc: "Web belajar coding, tersedia berbagai materi seperti Front-End, Back End, dan lainnya.",
                img: "assets/images/Projects/devmate.png",
                tech: "React, Node.js, MongoDB, Stripe API",
                previewImages: [
                    "assets/images/Projects/devmate.png",
                    "assets/images/Projects/devmate2.png",
                    "assets/images/Projects/devmate3.png"
                ],
                hasTallImage: false
            },
            {
                id: 2,
                category: "personal",
                title: "Aniplus",
                desc: "Web download anime, tersedia berbagai anime mulai dari anime lama hingga anime terbaru.",
                img: "assets/images/Projects/aniplus.png",
                tech: "HTML, CSS, PHP, MySQL, Laravel",
                previewImages: [
                    "assets/images/Projects/aniplus.png",
                    "assets/images/Projects/aniplus2.png",
                    "assets/images/Projects/aniplus3.png"
                ],
                hasTallImage: true
            },
            {
                id: 3,
                category: "personal",
                title: "Ghibli",
                desc: "Website yang ngebahas tentang bebeberapa anime Ghibli ternama seperti Spirited Away dan sebagainya.",
                img: "assets/images/Projects/ghibli.png",
                tech: "HTML, CSS, Javascript, Bootstrap",
                previewImages: [
                    "assets/images/Projects/ghibli.png",
                    "assets/images/Projects/ghibli2.png",
                    "assets/images/Projects/ghibli3.png"
                ],
                hasTallImage: false
            },
            {
                id: 4,
                category: "academic",
                title: "Klik Reservasi",
                desc: "Web reservasi aula dan kunjungan perpustakaan studi kasus instansi layanan publik.",
                img: "assets/images/Projects/klikreservasi.png",
                tech: "HTML, CSS, Javascript, Bootstrap, PHP, MySQL, Laravel",
                previewImages: [
                    "assets/images/Projects/klikreservasi.png",
                    "assets/images/Projects/klikreservasi2.png",
                    "assets/images/Projects/klikreservasi3.png"
                ],
                hasTallImage: true
            },
            {
                id: 5,
                category: "academic",
                title: "Aspirasi Desa Lolo",
                desc: "Web yang digunakan sebagai wadah aspirasi Desa Lolo, setiap warga dapat menyampaikan aspirasinya ke dalam website dan mendapatkan tanggapan dari admin.",
                img: "assets/images/Projects/aspirasilolo.png",
                tech: "HTML, CSS, Javascript, PHP, MySQL, Laravel",
                previewImages: [
                    "assets/images/Projects/aspirasilolo.png",
                    "assets/images/Projects/aspirasilolo2.png",
                    "assets/images/Projects/aspirasilolo3.png"
                ],
                hasTallImage: false
            },
            {
                id: 6,
                category: "personal",
                title: "Docta ID",
                desc: "Web konsultasi kesehatan menggunakan API dari AI Gemini guna menjawab segala bentuk pertanyaan seputar masalah kesehatan.",
                img: "assets/images/Projects/docta.png",
                tech: "HTML, CSS, Javascript, Bootstrap",
                previewImages: [
                    "assets/images/Projects/docta.png",
                    "assets/images/Projects/docta2.png",
                    "assets/images/Projects/docta3.png"
                ],
                hasTallImage: false
            },
            {
                id: 7,
                category: "academic",
                title: "Komunitas Motlis",
                desc: "Website seputar komunitas motor listrik, dibuat dalam rangka mengikuti ujian BNSP.",
                img: "assets/images/Projects/motlis.png",
                tech: "HTML, CSS, Bootstrap",
                previewImages: [
                    "assets/images/Projects/motlis.png",
                    "assets/images/Projects/motlis2.png",
                    "assets/images/Projects/motlis3.png"
                ],
                hasTallImage: false
            },
            {
                id: 8,
                category: "academic",
                title: "Website Wisata Samarinda",
                desc: "Website yang memberikan seluruh informasi wisata seputar Samarinda mulai dari tempat liburan, kuliner, hotel, dan sebagainya.",
                img: "assets/images/Projects/wisatasamarinda.png",
                tech: "HTML, CSS, Javascript, Bootstrap",
                previewImages: [
                    "assets/images/Projects/wisatasamarinda.png",
                    "assets/images/Projects/wisatasamarinda2.png",
                    "assets/images/Projects/wisatasamarinda3.png"
                ],
                hasTallImage: false
            },
            {
                id: 9,
                category: "personal",
                title: "Generate Surat Lamaran Kerja",
                desc: "Website yang dapat membantu dan mempermudah dalam pembuatan surat lamaran kerja, user hanya perlu menginputkan data yang dibutuhkan dan website akan meng-generate hasilnya.",
                img: "assets/images/Projects/suratlamaran.png",
                tech: "HTML, CSS, Javascript",
                previewImages: [
                    "assets/images/Projects/suratlamaran.png",
                    "assets/images/Projects/suratlamaran2.png",
                    "assets/images/Projects/suratlamaran3.png"
                ],
                hasTallImage: false
            },
            {
                id: 10,
                category: "duta-meta-graha",
                title: "Accpedia",
                desc: "Platform manajemen keuangan perusahaan yang responsif dan interaktif, dirancang untuk meningkatkan pengalaman pengguna dalam memantau data finansial.",
                img: "assets/images/Projects/accpedia.png",
                tech: "Laravel, React, Tailwind, MySQL",
                previewImages: [
                    "assets/images/Projects/accpedia.png",
                    "assets/images/Projects/accpedia2.png",
                    "assets/images/Projects/accpedia3.png"
                ],
                hasTallImage: false
            },
            {
                id: 11,
                category: "duta-meta-graha",
                title: "Survlus",
                desc: "Website manajemen survei untuk input dan randomisasi RT serta KK yang dirancang untuk mempermudah surveyor dalam mengelola proyek dan pelaksanaan survei di lapangan.",
                img: "assets/images/Projects/survlus.png",
                tech: "Laravel, Tailwind, MySQL",
                previewImages: [
                    "assets/images/Projects/survlus.png",
                    "assets/images/Projects/survlus2.png",
                    "assets/images/Projects/survlus3.png"
                ],
                hasTallImage: false
            },
            {
                id: 12,
                category: "duta-meta-graha",
                title: "Klinik Zahind Animal Care",
                desc: "Website reservasi klinik hewan terintegrasi yang mempermudah pemilik hewan dalam melakukan pendaftaran online, penjadwalan medis, serta akses rekam medis.",
                img: "assets/images/Projects/klinik1.png",
                tech: "Laravel, Tailwind, MySQL",
                previewImages: [
                    "assets/images/Projects/klinik1.png",
                    "assets/images/Projects/klinik2.png",
                    "assets/images/Projects/klinik3.png"
                ],
                hasTallImage: false
            }
        ];

        // Variabel global untuk pagination
        let currentPage = 1;
        let currentFilter = 'all';
        let certificatesPerPage = 6;
        let filteredCertificates = [];

        // Variabel untuk pagination project modal
        let currentProjectsPage = 1;
        let projectsPerPage = 4;
        let currentProjectsFilter = 'all';
        let filteredProjects = [];

        // Variabel untuk project preview
        let currentPreviewProject = null;
        let currentPreviewSlide = 0;

        let previewModal = document.getElementById('previewModal');
        let previewImage = document.getElementById('previewImage');
        let previewImageContainer = document.querySelector('.scrollable-image-container');

        // Fungsi untuk menghitung jumlah sertifikat per kategori secara otomatis
        function countCertificatesByCategory() {
            const counts = {};
            certificatesData.forEach(cert => {
                if (!counts[cert.category]) {
                    counts[cert.category] = 0;
                }
                counts[cert.category]++;
            });
            return counts;
        }

        // Fungsi untuk membuat filter buttons dengan jumlah sertifikat yang dihitung otomatis
        function createFilterButtons() {
            const counts = countCertificatesByCategory();
            const filterButtonsContainer = document.getElementById('filterButtonsContainer');

            // Urutan kategori yang ingin ditampilkan
            const categoryOrder = [
                { key: 'all', label: 'All' },
                { key: 'programming', label: 'Programming' },
                { key: 'competence', label: 'BNSP/LSP' },
                { key: 'english', label: 'English' },
                { key: 'microsoft', label: 'Microsoft' },
                { key: 'design', label: 'Design' },
                { key: 'editing', label: 'Editing' },
                { key: 'msib', label: 'MSIB' },
                { key: 'organization', label: 'Organization' },
                { key: 'other', label: 'Other' }
            ];

            // Hitung total semua sertifikat
            const totalCount = certificatesData.length;

            filterButtonsContainer.innerHTML = '';

            categoryOrder.forEach(category => {
                const button = document.createElement('button');
                button.className = `filter-btn ${category.key === 'all' ? 'active' : ''}`;
                button.setAttribute('data-filter', category.key);

                let count;
                if (category.key === 'all') {
                    count = totalCount;
                } else {
                    count = counts[category.key] || 0;
                }

                button.innerHTML = `
                    ${category.label} <span class="badge-count">${count}</span>
                `;

                filterButtonsContainer.appendChild(button);
            });
        }

        // Fungsi untuk mendapatkan path gambar
        function getImagePath(basePath) {
            const formats = ['jpg', 'jpeg', 'png'];
            for (let format of formats) {
                return `${basePath}.${format}`;
            }
            return `${basePath}.jpg`;
        }

        // Fungsi untuk filter sertifikat
        function filterCertificates(category) {
            currentFilter = category;
            currentPage = 1;

            if (category === 'all') {
                filteredCertificates = [...certificatesData];
            } else {
                filteredCertificates = certificatesData.filter(cert => cert.category === category);
            }

            renderCertificates();
            renderPagination();
        }

        // Fungsi untuk render sertifikat
        function renderCertificates() {
            const container = document.getElementById('allCertificates');
            container.innerHTML = '';

            const startIndex = (currentPage - 1) * certificatesPerPage;
            const endIndex = startIndex + certificatesPerPage;
            const pageCertificates = filteredCertificates.slice(startIndex, endIndex);

            if (pageCertificates.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.className = 'col-12 text-center';
                emptyMessage.innerHTML = `
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Tidak ada sertifikat dalam kategori ini.
                    </div>
                `;
                container.appendChild(emptyMessage);
                return;
            }

            pageCertificates.forEach(cert => {
                const certItem = document.createElement('div');
                certItem.className = 'certificate-modal-item';
                certItem.setAttribute('data-category', cert.category);
                certItem.setAttribute('data-id', cert.id);
                certItem.setAttribute('data-istall', cert.isTall || false);
                certItem.innerHTML = `
                    <img src="${getImagePath(cert.img)}" alt="${cert.title}" class="certificate-modal-img">
                `;
                container.appendChild(certItem);
            });
        }

        // Fungsi untuk render pagination sertifikat
        function renderPagination() {
            const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage);
            const pageNumbers = document.getElementById('pageNumbers');
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            pageNumbers.innerHTML = '';

            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, currentPage + 2);

            if (currentPage <= 3) {
                endPage = Math.min(totalPages, 5);
            }

            if (currentPage >= totalPages - 2) {
                startPage = Math.max(1, totalPages - 4);
            }

            for (let i = startPage; i <= endPage; i++) {
                const pageBtn = document.createElement('div');
                pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    currentPage = i;
                    renderCertificates();
                    renderPagination();
                });
                pageNumbers.appendChild(pageBtn);
            }

            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;

            prevBtn.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderCertificates();
                    renderPagination();
                }
            };

            nextBtn.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderCertificates();
                    renderPagination();
                }
            };
        }

        // Fungsi untuk render projects di modal dengan pagination
        function renderProjectsModal() {
            const container = document.getElementById('allProjects');
            container.innerHTML = '';

            const startIndex = (currentProjectsPage - 1) * projectsPerPage;
            const endIndex = startIndex + projectsPerPage;
            const pageProjects = filteredProjects.slice(startIndex, endIndex);

            if (pageProjects.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.className = 'col-12 text-center';
                emptyMessage.innerHTML = `
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Tidak ada project.
                    </div>
                `;
                container.appendChild(emptyMessage);
                return;
            }

            pageProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card-modal';
                projectCard.setAttribute('data-project-id', project.id);
                projectCard.innerHTML = `
                    <div class="project-img-container-modal">
                        <img src="${project.img}" alt="${project.title}" class="project-img-modal">
                    </div>
                    <div class="project-body-modal">
                        <h4>${project.title}</h4>
                        <p>${project.desc}</p>
                        <p class="project-tech-modal">Tech: ${project.tech}</p>
                    </div>
                `;
                container.appendChild(projectCard);
            });

            renderProjectsPagination();
        }

        // Fungsi untuk render pagination project modal
        function renderProjectsPagination() {
            const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
            const pageNumbers = document.getElementById('projectsPageNumbers');
            const prevBtn = document.getElementById('prevProjectsPage');
            const nextBtn = document.getElementById('nextProjectsPage');

            pageNumbers.innerHTML = '';

            let startPage = Math.max(1, currentProjectsPage - 2);
            let endPage = Math.min(totalPages, currentProjectsPage + 2);

            if (currentProjectsPage <= 3) {
                endPage = Math.min(totalPages, 5);
            }

            if (currentProjectsPage >= totalPages - 2) {
                startPage = Math.max(1, totalPages - 4);
            }

            for (let i = startPage; i <= endPage; i++) {
                const pageBtn = document.createElement('div');
                pageBtn.className = `page-number ${i === currentProjectsPage ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    currentProjectsPage = i;
                    renderProjectsModal();
                });
                pageNumbers.appendChild(pageBtn);
            }

            prevBtn.disabled = currentProjectsPage === 1;
            nextBtn.disabled = currentProjectsPage === totalPages || totalPages === 0;

            prevBtn.onclick = () => {
                if (currentProjectsPage > 1) {
                    currentProjectsPage--;
                    renderProjectsModal();
                }
            };

            nextBtn.onclick = () => {
                if (currentProjectsPage < totalPages) {
                    currentProjectsPage++;
                    renderProjectsModal();
                }
            };
        }

        // Fungsi untuk membuka project preview
        function openProjectPreview(projectId) {
            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;

            currentPreviewProject = project;
            currentPreviewSlide = 0;

            // Load semua gambar preview
            document.getElementById('projectPreviewImg1').src = project.previewImages[0] || project.img;
            document.getElementById('projectPreviewImg2').src = project.previewImages[1] || project.img;
            document.getElementById('projectPreviewImg3').src = project.previewImages[2] || project.img;

            // Atur class untuk gambar tinggi
            const previewImgs = document.querySelectorAll('.project-preview-img');
            previewImgs.forEach(img => {
                if (project.hasTallImage) {
                    img.classList.remove('no-scroll');
                } else {
                    img.classList.add('no-scroll');
                }
            });

            document.getElementById('totalSlides').textContent = project.previewImages.length;
            document.getElementById('totalSlides2').textContent = project.previewImages.length;
            document.getElementById('totalSlides3').textContent = project.previewImages.length;

            updateProjectPreviewSlide();

            document.getElementById('projectPreviewModal').classList.add('active');
        }

        // Fungsi untuk update project preview slide
        function updateProjectPreviewSlide() {
            document.querySelectorAll('.project-preview-slide').forEach(slide => {
                slide.classList.remove('active');
            });

            const activeSlide = document.getElementById(`projectSlide${currentPreviewSlide + 1}`);
            if (activeSlide) {
                activeSlide.classList.add('active');

                document.getElementById('currentSlide').textContent = currentPreviewSlide + 1;
                document.getElementById('currentSlide2').textContent = currentPreviewSlide + 1;
                document.getElementById('currentSlide3').textContent = currentPreviewSlide + 1;
            }
        }

        // Fungsi untuk menggeser slide project preview
        function nextProjectSlide() {
            if (!currentPreviewProject) return;

            currentPreviewSlide = (currentPreviewSlide + 1) % currentPreviewProject.previewImages.length;
            updateProjectPreviewSlide();
        }

        function prevProjectSlide() {
            if (!currentPreviewProject) return;

            currentPreviewSlide = (currentPreviewSlide - 1 + currentPreviewProject.previewImages.length) % currentPreviewProject.previewImages.length;
            updateProjectPreviewSlide();
        }

        // Fungsi untuk menginisialisasi website
        function initWebsite() {
            createFilterButtons();
            initCertificates();
            initCertificateFilter();

            // Inisialisasi data & filter project
            filteredProjects = [...projectsData];
            createProjectFilterButtons();
            initProjectFilter();
            renderProjectsModal();

            initScrollAnimations();
            initCertificatePreview();
            initProjectPreview();
            initDetailModal();

            filteredCertificates = [...certificatesData];
            renderCertificates();
            renderPagination();

            updateCopyrightYear();
            animateCounters();
        }

        // Fungsi untuk menghitung jumlah project per kategori secara otomatis
        function countProjectsByCategory() {
            const counts = {};
            projectsData.forEach(proj => {
                if (!counts[proj.category]) {
                    counts[proj.category] = 0;
                }
                counts[proj.category]++;
            });
            return counts;
        }

        // Fungsi untuk membuat filter buttons project
        function createProjectFilterButtons() {
            const counts = countProjectsByCategory();
            const filterButtonsContainer = document.getElementById('projectFilterButtonsContainer');
            if (!filterButtonsContainer) return;

            const categoryOrder = [
                { key: 'all', label: 'All' },
                { key: 'personal', label: 'Personal' },
                { key: 'academic', label: 'Academic' },
                { key: 'duta-meta-graha', label: 'PT Duta Meta Graha' }
            ];

            const totalCount = projectsData.length;
            filterButtonsContainer.innerHTML = '';

            categoryOrder.forEach(category => {
                const button = document.createElement('button');
                button.className = `project-filter-btn filter-btn ${category.key === 'all' ? 'active' : ''}`;
                button.setAttribute('data-filter', category.key);

                let count;
                if (category.key === 'all') {
                    count = totalCount;
                } else {
                    count = counts[category.key] || 0;
                }

                button.innerHTML = `
                    ${category.label} <span class="badge-count">${count}</span>
                `;

                filterButtonsContainer.appendChild(button);
            });
        }

        function filterProjects(category) {
            currentProjectsFilter = category;
            currentProjectsPage = 1;

            if (category === 'all') {
                filteredProjects = [...projectsData];
            } else {
                filteredProjects = projectsData.filter(proj => proj.category === category);
            }

            renderProjectsModal();
        }

        function initProjectFilter() {
            document.addEventListener('click', function (e) {
                const btn = e.target.closest('.project-filter-btn');
                if (btn) {
                    const filterButtons = document.querySelectorAll('.project-filter-btn');
                    filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filterValue = btn.getAttribute('data-filter');
                    filterProjects(filterValue);
                }
            });
        }

        // Fungsi untuk animasi counter
        function animateCounters() {
            const totalProjects = projectsData.length;
            const totalProgrammingCerts = certificatesData.filter(cert => cert.category === 'programming').length;

            function runCycle() {
                animateValue("statsProjects", 0, totalProjects, 1500);
                animateValue("statsCertificates", 0, totalProgrammingCerts, 1500);

                // Setelah selesai animasi (1.5 detik), tunggu 10 detik lalu jalankan kembali
                setTimeout(runCycle, 5000);
            }

            runCycle();
        }

        function animateValue(id, start, end, duration) {
            const obj = document.getElementById(id);
            if (!obj) return;
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Fungsi untuk update tahun copyright secara otomatis
        function updateCopyrightYear() {
            const currentYear = new Date().getFullYear();
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                yearElement.textContent = currentYear;
            }
        }

        // Fungsi untuk inisialisasi sertifikat bergerak
        function initCertificates() {
            const certificatesContainer = document.getElementById('certificatesContainer');

            const displayCertificates = certificatesData.slice(0, 5);
            const duplicatedCertificates = [...displayCertificates, ...displayCertificates];

            duplicatedCertificates.forEach(cert => {
                const certItem = document.createElement('div');
                certItem.className = 'certificate-item';
                certItem.setAttribute('data-category', cert.category);
                certItem.setAttribute('data-id', cert.id);
                certItem.setAttribute('data-istall', cert.isTall || false);
                certItem.innerHTML = `
                    <img src="${getImagePath(cert.img)}" alt="${cert.title}" class="certificate-img">
                `;
                certificatesContainer.appendChild(certItem);
            });
        }

        // Fungsi untuk filter sertifikat
        function initCertificateFilter() {
            const filterButtons = document.querySelectorAll('.filter-btn');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');
                    filterCertificates(filterValue);
                });
            });
        }

        // Fungsi untuk preview sertifikat dan gambar lainnya
        function initCertificatePreview() {
            document.addEventListener('click', function (e) {
                const certItem = e.target.closest('.certificate-item') || e.target.closest('.certificate-modal-item');

                if (certItem) {
                    const imgElement = certItem.querySelector('img');
                    if (imgElement) {
                        const isTall = certItem.getAttribute('data-istall') === 'true';

                        previewImage.src = imgElement.src;
                        previewImage.alt = imgElement.alt;

                        // Untuk gambar yang tinggi, kita biarkan container scrollable
                        // Untuk gambar biasa, kita set max-height agar tidak perlu scroll
                        if (isTall) {
                            previewImage.classList.remove('no-scroll');
                            previewImageContainer.style.maxHeight = '75vh';
                        } else {
                            previewImage.classList.add('no-scroll');
                            previewImageContainer.style.maxHeight = '75vh';
                        }

                        previewModal.classList.add('active');
                        e.stopPropagation();
                        return;
                    }
                }
            });

            previewModal.addEventListener('click', function (e) {
                if (!e.target.closest('.preview-img-container')) {
                    previewModal.classList.remove('active');
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && previewModal.classList.contains('active')) {
                    previewModal.classList.remove('active');
                }
            });
        }

        // Fungsi untuk inisialisasi project preview
        function initProjectPreview() {
            document.querySelectorAll('.project-img-container-home').forEach(container => {
                container.addEventListener('click', function () {
                    const projectId = parseInt(this.getAttribute('data-project-id'));
                    openProjectPreview(projectId);
                });
            });

            document.addEventListener('click', function (e) {
                const projectCard = e.target.closest('.project-card-modal');
                if (projectCard) {
                    const projectId = parseInt(projectCard.getAttribute('data-project-id'));
                    openProjectPreview(projectId);
                }
            });

            document.getElementById('nextProjectSlide').addEventListener('click', nextProjectSlide);
            document.getElementById('prevProjectSlide').addEventListener('click', prevProjectSlide);
            document.getElementById('closeProjectPreview').addEventListener('click', function () {
                document.getElementById('projectPreviewModal').classList.remove('active');
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && document.getElementById('projectPreviewModal').classList.contains('active')) {
                    document.getElementById('projectPreviewModal').classList.remove('active');
                }

                if (document.getElementById('projectPreviewModal').classList.contains('active')) {
                    if (e.key === 'ArrowRight') {
                        nextProjectSlide();
                    } else if (e.key === 'ArrowLeft') {
                        prevProjectSlide();
                    }
                }
            });

            document.getElementById('projectPreviewModal').addEventListener('click', function (e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        }

        // Fungsi untuk menginisialisasi media detail modal (LinkedIn Style)
        function initDetailModal() {
            document.addEventListener('click', function (e) {
                const btn = e.target.closest('.show-detail-btn');
                if (btn) {
                    const img = btn.getAttribute('data-img');
                    const title = btn.getAttribute('data-title');
                    const subtitle = btn.getAttribute('data-subtitle');
                    const desc = btn.getAttribute('data-desc');

                    document.getElementById('mediaDetailImg').src = img;
                    document.getElementById('mediaDetailTitle').textContent = title;
                    document.getElementById('mediaDetailSubtitle').textContent = subtitle;
                    document.getElementById('mediaDetailDesc').textContent = desc;

                    const modal = new bootstrap.Modal(document.getElementById('mediaDetailModal'));
                    modal.show();
                }
            });
        }

        // Fungsi untuk smooth scroll dan animasi
        function initScrollAnimations() {
            // Navbar active link berdasarkan scroll position
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

            function updateActiveNavLink() {
                let scrollY = window.scrollY + 120; // offset for nav height
                let activeSectionId = null;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        activeSectionId = section.getAttribute('id');
                    }
                });

                // Fallback: if we are at the very top of the page, default to home
                if (window.scrollY < 50) {
                    activeSectionId = 'home';
                }

                // Fallback: if we are scrolled to the very bottom, default to the last section (konten)
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                    activeSectionId = 'konten';
                }

                if (activeSectionId) {
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${activeSectionId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            }

            window.addEventListener('scroll', updateActiveNavLink);

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Update active nav link
                        navLinks.forEach(link => link.classList.remove('active'));
                        this.classList.add('active');

                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const fadeElements = document.querySelectorAll('.fade-in');

            const fadeInOnScroll = () => {
                const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;

                    if (elementTop < window.innerHeight - elementVisible || scrolledToBottom) {
                        element.classList.add('visible');
                    }
                });
            };

            window.addEventListener('scroll', fadeInOnScroll);
            window.addEventListener('load', fadeInOnScroll);

            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
                    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
                } else {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                }

                // Update active nav link saat scroll
                updateActiveNavLink();
            });

            // Set active nav link awal
            navLinks[0].classList.add('active');
        }

        // Panggil fungsi inisialisasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', initWebsite);
