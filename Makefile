.PHONY : check-prod
check-prod:
	curl -s -o /dev/null -w "%{http_code}" www.hliu.ca | grep 200

version=$(shell git describe --tags --always --dirty)

.PHONY : generate-version
generate-version:
	echo "{\"version\": \"$(version)\"}" > version.json
	cat version.json
