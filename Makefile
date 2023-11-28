.PHONY: build up up_build down

build:
	docker build -t egirls_frontend_image .

up:
	docker-compose up -d

up_build:
	docker-compose up -d --build

down:
	docker-compose down