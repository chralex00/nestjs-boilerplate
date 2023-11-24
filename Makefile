include .env

clean:
	rm -rf coverage/
	rm -rf dist

docker-build:
	docker build -t ${DOCKER_IMAGE_NAME} .

docker-down:
	docker-compose down
	docker rmi ${DOCKER_IMAGE_NAME}

docker-up:
	docker-compose up -d

docker-logs:
	docker-compose logs -f ${DOCKER_CONTAINER_NAME} --tail=50