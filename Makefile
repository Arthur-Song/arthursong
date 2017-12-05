

install:
	@npm install $(NPM_REGISTRY)

build:
	@./node_modules/loader-builder/bin/builder src/views .

run:
	@node app.js

start: install build
	@NODE_ENV=production ./node_modules/.bin/pm2 start app.js -i 0 --name "arthursong" --max-memory-restart 400M

restart: install build
	@NODE_ENV=production ./node_modules/.bin/pm2 restart "arthursong"

stop:
	@./node_modules/.bin/pm2 delete "arthursong"