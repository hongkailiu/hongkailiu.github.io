expected_version := $(shell git log --oneline -n 1 --skip 1 | awk '{print $$1}')
prod_version := $(shell curl -s www.hliu.ca/version.json | jq -r .githubPagesVersion)

.PHONY : check-prod
check-prod:
	curl -s -o /dev/null -w "%{http_code}" www.hliu.ca | grep 200
	curl -s www.hliu.ca/version.json | jq -r .githubPagesVersion
	git log --oneline -2
	echo "expected_version: =$(expected_version)="
	echo "prod_version: =$(prod_version)="
ifeq ($(expected_version),$(prod_version))
	echo "versions match!"
else
	echo "versions do NOT match: manual push?"
	git log --oneline $(prod_version)..HEAD
	false
endif

github_page_version := $(shell git describe --tags --always --dirty)
github_page_build_time := $(shell date --iso-8601=seconds)

.PHONY : generate-version
generate-version:
	echo "{\"githubPageVersion\": \"$(github_page_version)\", \"githubPageBuildTime\": \"$(github_page_build_time)\"}" > version.json
	cat version.json
