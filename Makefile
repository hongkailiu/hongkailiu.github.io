.PHONY : check-prod
check-prod:
	curl -s -o /dev/null -w "%{http_code}" www.hliu.ca | grep 200
