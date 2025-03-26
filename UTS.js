document.addEventListener("DOMContentLoaded", function () {
    // =================== FUN FACT FEATURE ===================
    const funFactButton = document.getElementById("show-funfact");
    const funFactText = document.getElementById("funfact");

    if (funFactButton && funFactText) {
        funFactButton.addEventListener("click", function () {
            const facts = [
                "Aku suka warna pink pastel! 💖",
                "Aku sering menghabiskan waktu luang buat desain & eksplor UI baru! 🎨",
                "Aku ingin bikin project animasi sendiri suatu hari nanti! ✨",
                "Aku sering streaming di Tiktok bermain Game! 🎮",
                "Aku suka ngobrol dan diskusi di Discord! 💬",
                "Aku punya followers ratusan ribu di Tiktok gara-gara konten game! 🔥"
            ];

            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            funFactText.innerText = randomFact;
        });
    }

    // =================== DARK MODE FEATURE ===================
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                toggleModeButton.innerText = "☀️ Mode Terang";
            } else {
                toggleModeButton.innerText = "🌙 Mode Gelap";
            }
        });
    }
});

