// --- SISTEM LOGIN ---
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-section');
const mainPage = document.getElementById('main-section');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if (u === "admin" && p === "123") {
        loginPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
});

function logout() {
    location.reload();
}

// --- SISTEM UPLOAD ---
const fileInput = document.getElementById('file-input');
const uploadBox = document.getElementById('upload-box');
const imgPreview = document.getElementById('image-preview');
const placeholder = document.getElementById('upload-placeholder');
const scanBtn = document.getElementById('scan-btn');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imgPreview.src = e.target.result;
            imgPreview.classList.remove('hidden');
            placeholder.classList.add('hidden');
            scanBtn.classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// --- SISTEM AI (Simulasi Klasifikasi & Edukasi) ---
function processAI() {
    // UI Transitions
    document.getElementById('ai-idle').classList.add('hidden');
    document.getElementById('ai-result').classList.add('hidden');
    document.getElementById('ai-loading').classList.remove('hidden');
    scanBtn.disabled = true;
    scanBtn.innerText = "SEDANG MEMPROSES...";

    setTimeout(() => {
        document.getElementById('ai-loading').classList.add('hidden');
        document.getElementById('ai-result').classList.remove('hidden');
        scanBtn.disabled = false;
        scanBtn.innerText = "MULAI ANALISIS AI";

        const database = [
            { 
                label: "Organik", 
                icon: "🌿", 
                edu: "Siswa SMA Dharma Wanita! Sampah ini bisa jadi kompos. Mengolahnya berarti memberi makan tanah sekolah kita." 
            },
            { 
                label: "Anorganik (Plastik)", 
                icon: "🥤", 
                edu: "Plastik butuh 400 tahun untuk hancur. Mari kurangi penggunaannya demi masa depan warga Pare." 
            },
            { 
                label: "Limbah Kertas", 
                icon: "📄", 
                edu: "Kertas berasal dari pohon. Gunakan sisi kosongnya untuk mencatat pelajaran agar hutan tetap lestari." 
            }
        ];

        // Pilih hasil secara cerdas (simulasi)
        const result = database[Math.floor(Math.random() * database.length)];

        document.getElementById('res-label').innerText = result.label;
        document.getElementById('res-icon').innerText = result.icon;
        document.getElementById('res-edu').innerText = result.edu;

    }, 2500); // Waktu tunggu 2.5 detik agar dramatis
}
