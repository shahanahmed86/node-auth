# node-auth

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-type: application/json' \
-d '{"email": "shahan.khaan@gmail.com", "name": "Shahan", "password": "123Abc456", "confirmPassword": "123Abc456"}'
curl -v -X POST localhost:3000/login -H 'Content-type: application/json' \
-d '{"email": "shahan.khaan@gmail.com", "password": "123Abc456"}' \
--cookie 'sid=s%3AN22BOsysG0Z7Z7i6fIX3XYLGA2oLrLSx.TIayeV8Y5CSzQQAAM%2FrIswDbM2YYobvBX5tMcnGS0NY'

--cookie # for cookie
-v # for Verbose
-X # for methods like GET, PUT, POST, DELETE
-H # for headers like 'Content-type: application/json'
-d # for payload
```

## mongo

```sh
# docker
docker exec -it node-auth_db_1 mongo -u admin -p secret auth
# flags
-it # for interactive
-u # for username
-p # password
auth # is the name of database

# mongo terminal commands
db.users.find({}).pretty()
db.users.deleteMany({})
```

## redis

```sh
docker exec -it node-auth_cache_1 redis-cli -a secret
# flags
-it # for interactive
redis-cli # to load redis command line interface
-a # cli password

# redis commands
scan 0
get "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
ttl "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
del "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
```
