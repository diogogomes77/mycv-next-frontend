localDir=`dirname $0`

pathToScript=$1
host="http://localhost:8000"

remotePath="$host/swagger/?format=openapi"

rm -rf $pathToScript/api
rm -rf $pathToScript/models 
openapi-generator-cli version-manager set 5.0.0

openapi-generator-cli generate -g typescript-axios -i $remotePath -o $pathToScript -c $localDir/gen-config.json -p apiPackage=api,modelPackage=models --skip-validate-spec --additional-properties=useSingleRequestParameter=true