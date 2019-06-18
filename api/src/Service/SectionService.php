<?php // Julie automatic generated file
namespace App\Service;

use App\Entity\SectionEntity;
use App\Resource\DbResource;

class SectionService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function newEntity($attributes) {
		return new SectionEntity((array) $attributes);
	}

	public function getAllSection(array $attrs = []) {
		return $this->db->select('*')->from('section')->where($attrs)->fetchAssoc('id');
	}

	public function getSection(array $attrs = []) {
		return $this->db->select('*')->from('section')->where($attrs)->fetch();
	}

	public function postSection(SectionEntity $sectionEntity, array $user) {
		if (array_key_exists('id', $user)) {
			$sectionEntity->user_id($user['id']);
		}
		$this->db->insert('section', $sectionEntity->assign())->execute();
		return $this->db->getInsertId();
	}

	public function putSection(SectionEntity $sectionEntity, array $user) {
		$query = $this->db->update('section', $sectionEntity->assign())->where(['id' => $sectionEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteSection(SectionEntity $sectionEntity, array $user) {
		$query = $this->db->delete('section')->where(['id' => $sectionEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteSectionBy(array $attrs, array $user) {
		$query = $this->db->delete('section')->where($attrs);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

}