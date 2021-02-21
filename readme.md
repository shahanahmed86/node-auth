# node-auth

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-type: application/json' \
-d '{"email": "shahan.khaan@gmail.com", "name": "Shahan", "password": "123abc456", "confirmPassword": "123abc456"}'
# set cookie
curl -X POST localhost:3000/register --cookie 'sid=s%3AlHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB.4Vl8vvP3ABpEQ6YRq3kgIsJmLZ6EBYqYoUvFwbWRBoQ'
```

## docker

```
docker exec -it node-auth_db_1 mongo -u admin -p secret auth
docker exec -it node-auth_cache_1 redis-cli -a secret
```

## mongo

```
db.users.find({}).pretty()
db.users.deletMany({})
```

## redis

```
scan 0
get "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
ttl "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
del "sess:lHoGnDimxq3Lz5j0cRWuEp3wivXtgSBB"
```
