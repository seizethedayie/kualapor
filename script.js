// ==========================================
// KUALAPOR - MAIN SCRIPT
// ==========================================

// 32 Data Sungai Sesuai Ketentuan
const daftarSungai = [
    "Sungai Palu", "Sungai Kawatuna", "Sungai Lewara", "Sungai Sombe",
    "Sungai Pondo", "Sungai Vatutela", "Sungai Lambara", "Sungai Layana",
    "Sungai Salena", "Sungai Taipa", "Sungai Pantoloan", "Sungai Watusampu",
    "Sungai Buluri", "Sungai Tipo", "Sungai Kabaena", "Sungai Ngia",
    "Sungai Vatusi", "Sungai Malonda", "Sungai Powelua", "Sungai Tondo",
    "Sungai Poboya", "Sungai Mabodo", "Sungai Uwe Vena", "Sungai Gumbasa",
    "Sungai Miu", "Sungai Saluki", "Sungai Sadoa", "Sungai Larono",
    "Sungai Sangkulera", "Sungai Tuva", "Sungai Kulawi", "Sungai Loleo"
];

// Data Dummy Carousel / Trending Sungai
const carouselData = [
    { nama: "Sungai Palu", info: "38 laporan • Tercemar Berat", status: "Tercemar Berat" },
    { nama: "Sungai Kawatuna", info: "19 laporan • Tercemar Sedang", status: "Tercemar Sedang" },
    { nama: "Sungai Tondo", info: "14 laporan • Tercemar Sedang", status: "Tercemar Sedang" },
    { nama: "Sungai Tavanjuka", info: "11 laporan • Dalam Pantauan", status: "Pemantauan" },
    { nama: "Sungai Layana", info: "9 laporan • Tercemar Sedang", status: "Tercemar Sedang" }
];

// Data Dummy Statistik Bulanan (April - September)
const statistikData = [
    { bulan: "April", jumlah: 18 },
    { bulan: "Mei", jumlah: 24 },
    { bulan: "Juni", jumlah: 22 },
    { bulan: "Juli", jumlah: 31 },
    { bulan: "Agustus", jumlah: 28 },
    { bulan: "September", jumlah: 25 }
];

// 10 Laporan Dummy Public Feed
const publicFeedDummy = [
    {
        id: "pub-1",
        nama: "Rian Hidayat",
        avatar: "",
        inisial: "RH",
        sungai: "Sungai Palu",
        lokasi: "Jembatan Lalove, Palu Barat",
        tanggal: "08 September 2026",
        foto: "images/sungai2.jpg.jpg",
        keterangan: "Terdapat tumpukan sampah plastik yang cukup banyak menyumbat aliran air di dekat pilar jembatan.",
        status: "Sedang Diproses"
    },
    {
        id: "pub-2",
        nama: "Siti Rahma",
        avatar: "",
        inisial: "SR",
        sungai: "Sungai Kawatuna",
        lokasi: "Kawasan Mantikulore",
        tanggal: "07 September 2026",
        foto: "images/sungai1.jpg.jpg",
        keterangan: "Air sungai tampak keruh pekat kecoklatan disertai sampah botol berserakan di pinggirannya.",
        status: "Laporan Terkirim"
    },
    {
        id: "pub-3",
        nama: "Ahmad Fauzi",
        avatar: "",
        inisial: "AF",
        sungai: "Sungai Tondo",
        lokasi: "Dekat kawasan kampus lama",
        tanggal: "06 September 2026",
        foto: "images/sungai3.jpg.jpg",
        keterangan: "Pembuangan limbah rumah tangga langsung ke aliran sungai membuat airnya berbusa dan bau.",
        status: "Laporan Selesai"
    },
    {
        id: "pub-4",
        nama: "Dewi Lestari",
        avatar: "",
        inisial: "DL",
        sungai: "Sungai Layana",
        lokasi: "Muara Sungai Layana",
        tanggal: "05 September 2026",
        foto: "images/sungai4.jpg.jpg",
        keterangan: "Banyak sampah rumah tangga menumpuk di bantaran sungai dan siap terbawa arus ke laut.",
        status: "Sedang Diproses"
    },
    {
        id: "pub-5",
        nama: "Fikri Ramadhan",
        avatar: "",
        inisial: "FR",
        sungai: "Sungai Salena",
        lokasi: "Wilayah Ulujadi",
        tanggal: "04 September 2026",
        foto: "images/sungai5.jpg.jpg",
        keterangan: "Terlihat endapan sedimen lumpur pekat dan limbah plastik setelah arus deras.",
        status: "Laporan Selesai"
    },
    {
        id: "pub-6",
        nama: "Mega Utami",
        avatar: "",
        inisial: "MU",
        sungai: "Sungai Gumbasa",
        lokasi: "Sigi Biromaru",
        tanggal: "03 September 2026",
        foto: "images/sungai6.jpg.jpg",
        keterangan: "Aliran sungai keruh pekat tercemar limbah sisa aktivitas material sekitar.",
        status: "Laporan Terkirim"
    },
    {
        id: "pub-7",
        nama: "Budi Santoso",
        avatar: "",
        inisial: "BS",
        sungai: "Sungai Watusampu",
        lokasi: "Pantai Barat Palu",
        tanggal: "02 September 2026",
        foto: "images/sungai8.jpg.jpg",
        keterangan: "Tumpukan limbah plastik dan sampah mengapung di permukaan air pesisir sungai.",
        status: "Sedang Diproses"
    },
    {
        id: "pub-8",
        nama: "Intan Permata",
        avatar: "",
        inisial: "IP",
        sungai: "Sungai Poboya",
        lokasi: "Kawasan Tambang Rakyat",
        tanggal: "01 September 2026",
        foto: "images/sungai9.jpg.jpg",
        keterangan: "Warna air sungai berubah keruh pekat dan tercemar, butuh penanganan cepat.",
        status: "Laporan Selesai"
    }
];

// State Aplikasi & LocalStorage Handlers
function getStoredUser() {
    const user = localStorage.getItem('kualapor_current_user');
    return user ? JSON.parse(user) : null;
}

function setStoredUser(user) {
    if (user) {
        localStorage.setItem('kualapor_current_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('kualapor_current_user');
    }
}

function getAllUsers() {
    const users = localStorage.getItem('kualapor_users');
    return users ? JSON.parse(users) : [];
}

function saveUserToDatabase(userData) {
    const users = getAllUsers();
    users.push(userData);
    localStorage.setItem('kualapor_users', JSON.stringify(users));
}

function updateUserDatabase(updatedUser) {
    let users = getAllUsers();
    users = users.map(u => u.nik === updatedUser.nik ? updatedUser : u);
    localStorage.setItem('kualapor_users', JSON.stringify(users));
}

function getUserReports(nik) {
    const reports = localStorage.getItem(`kualapor_reports_${nik}`);
    return reports ? JSON.parse(reports) : [];
}

function saveUserReport(nik, reportData) {
    const reports = getUserReports(nik);
    reports.unshift(reportData);
    localStorage.setItem(`kualapor_reports_${nik}`, JSON.stringify(reports));
}

// Inisialisasi Saat DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDashboard();
    initLaporForm();
    initAuthModals();
    initRiwayat();
    initProfil();
    updateAuthUI();
});

// ==========================================
// 1. NAVIGASI & ROUTING
// ==========================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = item.getAttribute('data-target');
            navigateTo(targetPage);
        });
    });

    // Shortcut Hero Buat Laporan
    document.getElementById('btn-buat-laporan-hero').addEventListener('click', () => {
        const currentUser = getStoredUser();
        if (!currentUser) {
            openAlertModal("Silakan masuk atau daftar terlebih dahulu untuk membuat laporan.");
        } else {
            navigateTo('lapor');
        }
    });
}

function navigateTo(pageId) {
    const protectedPages = ['lapor', 'riwayat', 'profil'];
    const currentUser = getStoredUser();

    if (protectedPages.includes(pageId) && !currentUser) {
        openAlertModal("Silakan masuk atau daftar terlebih dahulu untuk mengakses fitur ini.");
        return;
    }

    // Update active nav
    document.querySelectorAll('.nav-item').forEach(nav => {
        if (nav.getAttribute('data-target') === pageId) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });

    // Update active section
    document.querySelectorAll('.page-section').forEach(sec => {
        if (sec.id === pageId) {
            sec.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            sec.classList.remove('active');
        }
    });

    // Refresh data spesifik halaman jika diperlukan
    if (pageId === 'riwayat') renderRiwayat('semua');
    if (pageId === 'profil') renderProfil();
}

// ==========================================
// 2. DASHBOARD RENDERING
// ==========================================
function initDashboard() {
    renderCarousel();
    renderBarChart();
    renderTabelSungai(daftarSungai);

    // Search Tabel Sungai
    const searchInput = document.getElementById('search-sungai-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = daftarSungai.filter(s => s.toLowerCase().includes(query));
        renderTabelSungai(filtered);
    });
}

function renderCarousel() {
    const carouselEl = document.getElementById('river-carousel');
    carouselEl.innerHTML = carouselData.map(item => `
        <div class="carousel-card">
            <h4>${item.nama}</h4>
            <p>${item.info}</p>
            <span class="badge status-heavy">${item.status}</span>
        </div>
    `).join('');

    // Carousel Navigation
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    prevBtn.addEventListener('click', () => {
        carouselEl.scrollBy({ left: -260, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        carouselEl.scrollBy({ left: 260, behavior: 'smooth' });
    });
}

function renderBarChart() {
    const chartEl = document.getElementById('bar-chart');
    const maxVal = Math.max(...statistikData.map(d => d.jumlah));

    chartEl.innerHTML = statistikData.map(item => {
        const heightPct = (item.jumlah / (maxVal * 1.15)) * 100;
        return `
            <div class="chart-bar-group">
                <span class="chart-bar-value">${item.jumlah}</span>
                <div class="chart-bar" style="height: ${heightPct}%;"></div>
                <span class="chart-bar-label">${item.bulan}</span>
            </div>
        `;
    }).join('');
}

function renderTabelSungai(dataList) {
    const tbody = document.querySelector('#tabel-sungai tbody');
    if (dataList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Sungai tidak ditemukan.</td></tr>`;
        return;
    }

    // Dummy lokasi di sekitar Palu
    const lokasiList = [
        "Jl. Tavanjuka, Palu", "Kawasan Kawatuna", "Kec. Palu Utara", "Kec. Tatanga",
        "Kec. Palu Selatan", "Kec. Mantikulore", "Desa Lambara", "Kec. Tawaeli",
        "Kec. Ulujadi", "Kel. Taipa", "Kawasan Pantoloan", "Kec. Tawaeli",
        "Kel. Buluri", "Kel. Tipo", "Wilayah Kabaena", "Kec. Palu Timur",
        "Kawasan Vatusi", "Kec. Marawola", "Wilayah Sigi", "Kel. Tondo",
        "Kawasan Poboya", "Kec. Biromaru", "Desa Uwe Vena", "Kec. Gumbasa",
        "Kec. Miu", "Desa Saluki", "Kec. Sadoa", "Kec. Larono",
        "Wilayah Sangkulera", "Kec. Tuva", "Kec. Kulawi", "Kec. Loleo"
    ];

    const totalTargetLaporan = 308;

    tbody.innerHTML = dataList.map((sungai, index) => {
        let reportCount;
        const randomLokasi = lokasiList[index % lokasiList.length];
        const namaSungai = typeof sungai === 'string' ? sungai : (sungai.nama || randomLokasi);

        if (index === 0) {
            reportCount = 38;
        } else if (index === 1) {
            reportCount = 19;
        } else if (index === 2) {
            reportCount = 14;
        } else if (index === 3) {
            reportCount = 11;
        } else {
            const sisaLaporanTarget = totalTargetLaporan - (38 + 19 + 14 + 11);
            const sisaIndexCount = dataList.length - 4;
            const baseSisa = Math.floor(sisaLaporanTarget / sisaIndexCount);
            reportCount = Math.max(0, baseSisa + ((index % 5 === 0) ? 2 : (index % 3 === 0) ? -2 : 0));
        }

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${namaSungai}</td>
                <td>${randomLokasi}</td>
                <td>${reportCount} laporan</td>
            </tr>
        `;
    }).join('');
}

// ==========================================
// 3. HALAMAN LAPOR & PUBLIC FEED
// ==========================================
let uploadedImageBase64 = null;

function initLaporForm() {
    const selectSungai = document.getElementById('lapor-sungai');
    daftarSungai.forEach(sungai => {
        const opt = document.createElement('option');
        opt.value = sungai;
        opt.textContent = sungai;
        selectSungai.appendChild(opt);
    });

    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('lapor-foto');
    const uploadContentInner = document.getElementById('upload-content-inner');
    const previewContainer = document.getElementById('preview-container');
    const imgPreview = document.getElementById('img-preview');
    const btnRemovePhoto = document.getElementById('btn-remove-photo');

    dropzone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                uploadedImageBase64 = evt.target.result;
                imgPreview.src = uploadedImageBase64;
                uploadContentInner.classList.add('hidden');
                previewContainer.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    btnRemovePhoto.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        uploadedImageBase64 = null;
        imgPreview.src = '';
        previewContainer.classList.add('hidden');
        uploadContentInner.classList.remove('hidden');
    });

    renderPublicFeed(publicFeedDummy);

    const searchFeedInput = document.getElementById('search-feed-input');
    searchFeedInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = publicFeedDummy.filter(item => item.sungai.toLowerCase().includes(query));
        renderPublicFeed(filtered);
    });

    const formLapor = document.getElementById('form-lapor');
    formLapor.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUser = getStoredUser();

        if (!currentUser) {
            openAlertModal("Silakan masuk terlebih dahulu untuk mengirim laporan.");
            return;
        }

        const sungai = selectSungai.value;
        const lokasi = document.getElementById('lapor-lokasi').value;
        const keterangan = document.getElementById('lapor-ket').value;

        if (!sungai || !lokasi || !keterangan) {
            alert("Mohon lengkapi seluruh form laporan.");
            return;
        }

        const fotoFinal = uploadedImageBase64 || "images/sungai1.jpg";

        const newReport = {
            id: 'rep-' + Date.now(),
            sungai: sungai,
            lokasi: lokasi,
            tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
            foto: fotoFinal,
            keterangan: keterangan,
            status: 'Laporan Terkirim'
        };

        saveUserReport(currentUser.nik, newReport);

        const feedItem = {
            id: newReport.id,
            nama: currentUser.nama,
            avatar: currentUser.avatar || '',
            inisial: currentUser.nama.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
            sungai: newReport.sungai,
            lokasi: newReport.lokasi,
            tanggal: newReport.tanggal,
            foto: newReport.foto,
            keterangan: newReport.keterangan,
            status: newReport.status
        };
        publicFeedDummy.unshift(feedItem);
        renderPublicFeed(publicFeedDummy);

        formLapor.reset();
        uploadedImageBase64 = null;
        previewContainer.classList.add('hidden');
        uploadContentInner.classList.remove('hidden');

        alert("Laporan berhasil dikirim!");
        navigateTo('riwayat');
    });
}

function renderPublicFeed(feedList) {
    const feedGrid = document.getElementById('feed-grid');
    const feedEmpty = document.getElementById('feed-empty');

    if (feedList.length === 0) {
        feedGrid.innerHTML = '';
        feedEmpty.classList.remove('hidden');
        return;
    }

    feedEmpty.classList.add('hidden');
    feedGrid.innerHTML = feedList.map(item => {
        let badgeClass = 'status-sent';
        if (item.status === 'Sedang Diproses') badgeClass = 'status-proc';
        if (item.status === 'Laporan Selesai') badgeClass = 'status-done';

        return `
            <div class="feed-card">
                <div class="feed-card-header">
                    <div class="feed-user-info">
                        <div class="feed-avatar">
                            ${item.avatar ? `<img src="${item.avatar}" alt="Avatar">` : item.inisial}
                        </div>
                        <div>
                            <div class="feed-username">${item.nama}</div>
                            <div class="feed-time">${item.tanggal}</div>
                        </div>
                    </div>
                    <span class="badge ${badgeClass}">${item.status}</span>
                </div>
                <img src="${item.foto}" alt="Foto Sungai" class="feed-img">
                <div class="feed-river-name">${item.sungai}</div>
                <div class="feed-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${item.lokasi}
                </div>
                <div class="feed-desc">${item.keterangan}</div>
            </div>
        `;
    }).join('');
}

// ==========================================
// 4. HALAMAN RIWAYAT
// ==========================================
function initRiwayat() {
    const filterTabs = document.querySelectorAll('#riwayat-filter .filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filterVal = tab.getAttribute('data-filter');
            renderRiwayat(filterVal);
        });
    });
}

function renderRiwayat(filter = 'semua') {
    const currentUser = getStoredUser();
    const riwayatListEl = document.getElementById('riwayat-list');
    const riwayatEmptyEl = document.getElementById('riwayat-empty');

    if (!currentUser) {
        riwayatListEl.innerHTML = '';
        riwayatEmptyEl.classList.remove('hidden');
        return;
    }

    let reports = getUserReports(currentUser.nik);

    if (filter !== 'semua') {
        reports = reports.filter(r => r.status === filter);
    }

    if (reports.length === 0) {
        riwayatListEl.innerHTML = '';
        riwayatEmptyEl.classList.remove('hidden');
        return;
    }

    riwayatEmptyEl.classList.add('hidden');
    riwayatListEl.innerHTML = reports.map(r => {
        let badgeClass = 'status-sent';
        if (r.status === 'Sedang Diproses' || r.status === 'Diproses') badgeClass = 'status-proc';
        if (r.status === 'Laporan Selesai' || r.status === 'Selesai') badgeClass = 'status-done';

        const isTerkirim = true;
        const isDiproses = r.status === 'Sedang Diproses' || r.status === 'Diproses' || r.status === 'Laporan Selesai' || r.status === 'Selesai';
        const isSelesai = r.status === 'Laporan Selesai' || r.status === 'Selesai';

        return `
            <div class="riwayat-card">
                <img src="${r.foto}" alt="Sungai" class="riwayat-img">
                <div class="riwayat-content">
                    <h4>${r.sungai}</h4>
                    <div class="riwayat-meta">${r.lokasi} • ${r.tanggal}</div>
                    <div class="riwayat-desc">${r.keterangan}</div>
                    <div class="progress-timeline">
                        <span class="progress-step ${isTerkirim ? 'completed' : ''}">Terkirim</span>
                        <span>&rsaquo;</span>
                        <span class="progress-step ${isDiproses ? 'completed' : ''}">Diproses</span>
                        <span>&rsaquo;</span>
                        <span class="progress-step ${isSelesai ? 'completed' : ''}">Selesai</span>
                    </div>
                </div>
                <div class="riwayat-status-col">
                    <span class="badge ${badgeClass}">${r.status}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// 5. HALAMAN PROFIL & GANTI FOTO
// ==========================================
function initProfil() {
    const inputGantiFoto = document.getElementById('input-ganti-foto');
    inputGantiFoto.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                const base64Img = evt.target.result;
                let currentUser = getStoredUser();
                if (currentUser) {
                    currentUser.avatar = base64Img;
                    setStoredUser(currentUser);
                    updateUserDatabase(currentUser);
                    renderProfil();
                    updateAuthUI();
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

function renderProfil() {
    const currentUser = getStoredUser();
    if (!currentUser) return;

    document.getElementById('info-nama').textContent = currentUser.nama;
    document.getElementById('info-nik').textContent = currentUser.nik;
    document.getElementById('profil-nama-display').textContent = currentUser.nama;
    document.getElementById('profil-nik-display').textContent = currentUser.nik;

    const initials = currentUser.nama.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('avatar-initials').textContent = initials;

    const avatarImg = document.getElementById('avatar-img');
    if (currentUser.avatar) {
        avatarImg.src = currentUser.avatar;
        avatarImg.classList.remove('hidden');
        document.getElementById('avatar-initials').classList.add('hidden');
    } else {
        avatarImg.classList.add('hidden');
        document.getElementById('avatar-initials').classList.remove('hidden');
    }

    const reports = getUserReports(currentUser.nik);
    const total = reports.length;
    const diproses = reports.filter(r => r.status === 'Sedang Diproses' || r.status === 'Diproses').length;
    const selesai = reports.filter(r => r.status === 'Laporan Selesai' || r.status === 'Selesai').length;

    document.getElementById('stat-total-laporan').textContent = total;
    document.getElementById('stat-diproses-laporan').textContent = diproses;
    document.getElementById('stat-selesai-laporan').textContent = selesai;
}

// ==========================================
// 6. AUTHENTICATION & MODALS
// ==========================================
function initAuthModals() {
    const authModal = document.getElementById('auth-modal');
    const alertModal = document.getElementById('alert-modal');
    const formLoginBox = document.getElementById('form-login-box');
    const formRegisterBox = document.getElementById('form-register-box');

    document.getElementById('modal-close-btn').addEventListener('click', () => {
        authModal.classList.remove('active');
    });
    document.getElementById('alert-close').addEventListener('click', () => {
        alertModal.classList.remove('active');
    });
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.classList.remove('active');
    });
    alertModal.addEventListener('click', (e) => {
        if (e.target === alertModal) alertModal.classList.remove('active');
    });

    document.getElementById('switch-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        formLoginBox.classList.add('hidden');
        formRegisterBox.classList.remove('hidden');
    });
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        formRegisterBox.classList.add('hidden');
        formLoginBox.classList.remove('hidden');
    });

    document.getElementById('alert-btn-login').addEventListener('click', () => {
        alertModal.classList.remove('active');
        openAuthModal('login');
    });
    document.getElementById('alert-btn-register').addEventListener('click', () => {
        alertModal.classList.remove('active');
        openAuthModal('register');
    });

    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            input.type = (input.type === 'password') ? 'text' : 'password';
        });
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nik = document.getElementById('login-nik').value.trim();
        const password = document.getElementById('login-password').value;
        const errEl = document.getElementById('login-error');

        const users = getAllUsers();
        const foundUser = users.find(u => u.nik === nik && u.password === password);

        if (foundUser) {
            errEl.classList.add('hidden');
            setStoredUser(foundUser);
            authModal.classList.remove('active');
            loginForm.reset();
            updateAuthUI();
            navigateTo('dashboard');
        } else {
            errEl.textContent = "NIK atau password salah, atau akun belum terdaftar.";
            errEl.classList.remove('hidden');
        }
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('reg-nama').value.trim();
        const nik = document.getElementById('reg-nik').value.trim();
        const password = document.getElementById('reg-password').value;
        const errEl = document.getElementById('reg-error');

        if (nik.length < 6) {
            errEl.textContent = "NIK harus valid (minimal 6 karakter).";
            errEl.classList.remove('hidden');
            return;
        }

        const users = getAllUsers();
        if (users.some(u => u.nik === nik)) {
            errEl.textContent = "NIK sudah terdaftar. Silakan gunakan NIK lain atau masuk.";
            errEl.classList.remove('hidden');
            return;
        }

        const newUser = {
            nama: nama,
            nik: nik,
            password: password,
            avatar: ""
        };

        saveUserToDatabase(newUser);
        setStoredUser(newUser);
        errEl.classList.add('hidden');
        authModal.classList.remove('active');
        registerForm.reset();
        updateAuthUI();
        navigateTo('dashboard');
        alert("Pendaftaran berhasil! Selamat datang di Kualapor.");
    });
}

function openAuthModal(mode = 'login') {
    const authModal = document.getElementById('auth-modal');
    const formLoginBox = document.getElementById('form-login-box');
    const formRegisterBox = document.getElementById('form-register-box');

    if (mode === 'login') {
        formLoginBox.classList.remove('hidden');
        formRegisterBox.classList.add('hidden');
    } else {
        formLoginBox.classList.add('hidden');
        formRegisterBox.classList.remove('hidden');
    }
    authModal.classList.add('active');
}

function openAlertModal(msg) {
    document.getElementById('alert-msg').textContent = msg;
    document.getElementById('alert-modal').classList.add('active');
}

function updateAuthUI() {
    const currentUser = getStoredUser();
    const sidebarAuthArea = document.getElementById('sidebar-auth-area');
    const topBarAuth = document.getElementById('top-bar-auth');

    if (currentUser) {
        const initials = currentUser.nama.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        
        sidebarAuthArea.innerHTML = `
            <div class="sidebar-user-info">
                <div class="user-mini-profile">
                    <div class="mini-avatar">
                        ${currentUser.avatar ? `<img src="${currentUser.avatar}" alt="Avatar">` : initials}
                    </div>
                    <span class="mini-name">${currentUser.nama}</span>
                </div>
                <button class="btn btn-danger-subtle" id="btn-logout" title="Keluar">Logout</button>
            </div>
        `;

        topBarAuth.innerHTML = `
            <button class="btn btn-secondary top-bar-auth-btn" id="btn-logout-mobile">Logout</button>
        `;

        document.getElementById('btn-logout').addEventListener('click', handleLogout);
        const btnLogoutMobile = document.getElementById('btn-logout-mobile');
        if (btnLogoutMobile) btnLogoutMobile.addEventListener('click', handleLogout);

    } else {
        sidebarAuthArea.innerHTML = `
            <div class="sidebar-auth-buttons">
                <button class="btn btn-secondary btn-block" id="btn-open-login">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                    Masuk
                </button>
                <button class="btn btn-primary btn-block" id="btn-open-register">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    Daftar
                </button>
            </div>
        `;

        topBarAuth.innerHTML = `
            <button class="btn btn-outline top-bar-auth-btn" id="btn-open-login-mobile">Masuk</button>
        `;

        document.getElementById('btn-open-login').addEventListener('click', () => openAuthModal('login'));
        document.getElementById('btn-open-register').addEventListener('click', () => openAuthModal('register'));
        
        const btnLoginMobile = document.getElementById('btn-open-login-mobile');
        if (btnLoginMobile) btnLoginMobile.addEventListener('click', () => openAuthModal('login'));
    }
}

function handleLogout() {
    setStoredUser(null);
    updateAuthUI();
    navigateTo('dashboard');
    alert("Anda telah keluar dari akun.");
}