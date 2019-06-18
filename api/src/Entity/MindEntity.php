<?php // Julie automatic generated file
namespace App\Entity;


class MindEntity extends BaseEntity {

	const table = "mind";

	public function __construct($attributes) {
		$this->hydrate([
			
			
			

		]);
		parent::__construct($attributes);
	}

	public function section_id($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_id, false);
	}

	public function title($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function content($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_text, false);
	}

	public function image($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function user_id($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_id, false);
	}

}