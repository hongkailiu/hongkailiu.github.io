.PHONY : check-prod
check-prod:
	curl -s -o /dev/null -w "%{http_code}" www.hliu.ca | grep 200
	curl -s www.hliu.ca/version.json | jq -r .version

.PHONY : generate-version
generate-version:
	$(eval version := $(shell git describe --tags --always --dirty))
	echo "{\"version\": \"$(version)\"}" > version.json
	cat version.json
