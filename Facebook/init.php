<?php include("index.html"); ?>

<?php

$pdo = new PDO("mysql:host=localhost:3306;dbname=fbynovjs", 'root', '');

switch ($_GET["function"]) {
    case 'postMessage':
        $prepare = $pdo->prepare("INSERT INTO status (text) 
                                    VALUES (:text)");
        $prepare->execute($_POST);

        echo "Message sauvegardé";
        break;
        
        case 'getMessages':

            $query = $pdo->query("SELECT * FROM status ORDER BY id_text");

            echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
            break;
}