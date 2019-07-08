NAME=${1:-Alex}
echo $NAME
curl -X POST -H "X-Parse-Application-Id: ALEX_APP" -H "Content-Type: application/json" -H "X-Parse-Master-Key: ALEX_MASTER" -d "{\"name\": \"$NAME\"}" http://localhost:1337/parse/classes/test_collection
