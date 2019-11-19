# docker-yearning

Dockerized Yearning (https://yearning.io).

[![DockerHub Badge](http://dockeri.co/image/jy1989/yearning)](https://hub.docker.com/r/jy1989/yearning/)

## Usage

```sh
docker run -itd \
  --name yearning \
  --restart unless-stopped \
  -p 8000:8000 \
  -e MYSQL_ADDR=172.16.16.50:3308 \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=123 \
  -e MYSQL_DB=yearning \
  jy1989/yearning
```

Goto [Yearning Guide](https://guide.yearning.io) for more.
