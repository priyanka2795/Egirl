#! Makefile for common docker command and utilies
.PHONY: start

up:
	docker-compose up -d --build

down:
	docker-compose down -v

clean:
	rm -rf node_modules next-env.d.ts .next package-lock.json