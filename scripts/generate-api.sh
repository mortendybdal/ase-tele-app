echo "||| S T A R T I N G  A P I  G E NE R A T I O N |||"
openapi-generator-cli generate -i "./scripts/api.yaml" -g typescript-fetch -o ./src/generated-api/api --additional-properties=withInterfaces=true,withoutRuntimeChecks=true
