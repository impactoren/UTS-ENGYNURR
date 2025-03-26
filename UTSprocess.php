<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "wayzenct00@gmail.com"; // Ganti dengan email kamu
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "Nama: $name\nEmail: $email\nSubjek: $subject\n\nPesan:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='UTScontact.html';</script>";
    } else {
        echo "<script>alert('Pesan gagal dikirim. Coba lagi.'); window.location.href='UTScontact.html';</script>";
    }
} else {
    header("Location: UTScontact.html");
    exit();
}
?>
