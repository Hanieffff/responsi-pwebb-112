<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $book = $_POST['book'];
    $date = $_POST['date'];
    $order = "Name: $name, Book: $book, Date: $date\n";
    
    if (file_put_contents('orders.txt', $order, FILE_APPEND)) {
        header("Location: order.html?status=success");
        exit();
    } else {
        echo "Terjadi kesalahan saat menyimpan pesanan. Silakan coba lagi.";
    }
}
?>
