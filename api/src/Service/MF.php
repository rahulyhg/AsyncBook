<?php // Julie automatic generated file
namespace App\Service;

class MF {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance =  new self();
		}
		return self::$instance;
	}

	public function userAuthService() {
		return UserAuthService::create();
	}
	
	public function bookService() {
		return BookService::create();
	}
	
	public function sectionService() {
		return SectionService::create();
	}
	
	public function mindService() {
		return MindService::create();
	}
	


}
