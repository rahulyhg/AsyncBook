<?php

namespace App\Service;

use \App\Entity\UserEntity;
use \App\Resource\UserAuthResource;

class UserAuthService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance =  new self();
		}
		return self::$instance;
	}

	public function __construct() {
		$this->bookService = new BookService();
		$this->sectionService = new SectionService();
		$this->mindService = new MindService();
	}

	public function getAuthToken(UserEntity $userEntity) {
		return $this->userAuthResource->getAuthToken($userEntity);
	}

	public function postLogin($username, $password) {
		if ($username === 'zbynek.rybicka' && $password === 'mojeMilaJulinka') {
			return [
				'books' => (object) $this->bookService->getAllBook(),
				'sections' => (object) $this->sectionService->getAllSection(),
				'minds' => (object) $this->mindService->getAllMind(),
			];
		}
	}

}