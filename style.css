// --- LOGIKA LOGIN ---
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-section');
const mainPage = document.getElementById('main-section');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Password '123' tersembunyi karena type="password" di HTML
    if (user === "admin" && pass === "123") {
        loginPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
});

function logout() {
    location.reload(); // Kembali ke halaman login
}

// --- LOGIKA UPLOAD ---
const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');
const placeholder = document.getElementById('placeholder');
const btnScan = document.getElementById('btn-scan');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            placeholder.classList.add('hidden');
            btnScan.classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// --- LOGIKA SIMULASI AI ---
function startAI() {
    document.getElementById('empty').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    btnScan.disabled = true;

    // Simulasi proses berpikir AI selama 2 detik
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        btnScan.disabled = false;

        const results = [
            { 
                title: "Sampah Organik", 
                icon: "🥬", 
                edu: "Limbah sisa makanan dari kantin DW bisa diolah jadi kompos untuk taman sekolah!" 
            },
            { 
                title: "Sampah Plastik", 
                icon: "🥤", 
                edu: "Hati-hati, plastik mencemari tanah Pare selama ratusan tahun. Mari gunakan botol minum sendiri!" 
            },
            { 
                title: "Limbah Kertas", 
                icon: "📄", 
                edu: "Kertas bekas tugas bisa dikumpulkan untuk didaur ulang kembali menjadi kerajinan kreatif." 
            }
        ];

        const randomRes = results[Math.floor(Math.random() * results.length)];

        document.getElementById('res-title').innerText = randomRes.title;
        document.getElementById('res-icon').innerText = randomRes.icon;
        document.getElementById('res-edu').innerText = randomRes.edu;

    }, 2000);
}
