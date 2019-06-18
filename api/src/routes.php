<?php // Julie automatic generated file

use Slim\Http\Request;
use Slim\Http\Response;
use App\Service\LoginService;
use Firebase\JWT\JWT;

$app->add(function (Request $request, Response $response, $next) {
	return $next($request, $response)
		->withHeader("Access-Control-Allow-Origin", "*")
        ->withHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin, Authorization")
        ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");	
});

$app->post('/login', function (Request $request, Response $response, array $args) {
	$roles = ['guest'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->userAuthService()->postLogin($body['username'], $body['password'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/books', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$bookEntity = $this->MF->bookService()->newEntity($params + $body);
	$result = $this->MF->bookService()->postBook($bookEntity, $user);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->put('/books', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$bookEntity = $this->MF->bookService()->newEntity($params + $body);
	$result = $this->MF->bookService()->putBook($bookEntity, $user);
	$status = !!$result ? 400 : 204;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/sections', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$sectionEntity = $this->MF->sectionService()->newEntity($params + $body);
	$result = $this->MF->sectionService()->postSection($sectionEntity, $user);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->put('/sections', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$sectionEntity = $this->MF->sectionService()->newEntity($params + $body);
	$result = $this->MF->sectionService()->putSection($sectionEntity, $user);
	$status = !!$result ? 400 : 204;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/minds', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$mindEntity = $this->MF->mindService()->newEntity($params + $body);
	$result = $this->MF->mindService()->postMind($mindEntity, $user);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->put('/minds', function (Request $request, Response $response, array $args) {
	$roles = ['owner'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$mindEntity = $this->MF->mindService()->newEntity($params + $body);
	$result = $this->MF->mindService()->putMind($mindEntity, $user);
	$status = !!$result ? 400 : 204;
	return $response->withStatus($status)->withJson($result);
});

