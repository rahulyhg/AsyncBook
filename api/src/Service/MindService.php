<?php // Julie automatic generated file
namespace App\Service;

use App\Entity\MindEntity;
use App\Resource\DbResource;

class MindService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function newEntity($attributes) {
		return new MindEntity((array) $attributes);
	}

	public function getAllMind(array $attrs = []) {
		return $this->db->select('*')->from('mind')->where($attrs)->fetchAssoc('id');
	}

	public function getMind(array $attrs = []) {
		return $this->db->select('*')->from('mind')->where($attrs)->fetch();
	}

	public function postMind(MindEntity $mindEntity, array $user) {
		if (array_key_exists('id', $user)) {
			$mindEntity->user_id($user['id']);
		}
		$this->db->insert('mind', $mindEntity->assign())->execute();
		return $this->db->getInsertId();
	}

	public function putMind(MindEntity $mindEntity, array $user) {
		$query = $this->db->update('mind', $mindEntity->assign())->where(['id' => $mindEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteMind(MindEntity $mindEntity, array $user) {
		$query = $this->db->delete('mind')->where(['id' => $mindEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteMindBy(array $attrs, array $user) {
		$query = $this->db->delete('mind')->where($attrs);
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