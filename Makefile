.PHONY: build up up_build down

build:
	docker build -t egirls_frontend_image .

up:
	docker-compose up -d

up_build:
	docker-compose up -d --build

down:
	docker-compose down

clean:
	rm -rf node_modules .next next-env.d.ts yarn.lock package-lock.json