<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email.";
        exit;
    }

    // Save to a file called emails.csv
    $file = fopen("emails.csv", "a");
    fputcsv($file, [$email, date("Y-m-d H:i:s")]);
    fclose($file);

    // Redirect back to the homepage (or show a success message)
    header("Location: index.html");
    exit;
} else {
    http_response_code(403);
    echo "Forbidden";
}
?>
