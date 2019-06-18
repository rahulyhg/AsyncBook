<?php
require __DIR__ . '/../vendor/autoload.php';

$dibi = new Dibi\Connection([
	'driver' => 'sqlite3',
	'database' => '../asyncbook.sdb'
]);


$dibi->query('

');