.PHONY : check-prod
check-prod:
	curl -s -o /dev/null -w "%{http_code}" www.hliu.ca | grep 200
	curl -s www.hliu.ca/version.json | jq -r .version
	git log --oneline -2
	$(eval expected_version := $(shell git log --oneline -n 1 --skip 1 | awk '{print $1}'))
	echo "expected_version: $(expected_version)"
	$(eval prod_version := $(shell curl -s www.hliu.ca/version.json | jq -r .version))
	echo "prod_version: $(prod_version)"
ifeq ($(expected_version), $(prod_version))
	echo "versions match!"
else
	echo "versions do NOT match: manual push?"
	false
endif

.PHONY : generate-version
generate-version:
	$(eval version := $(shell git describe --tags --always --dirty))
	echo "{\"version\": \"$(version)\"}" > version.json
	cat version.json
