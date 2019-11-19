# docker-yearning

Dockerized Yearning (https://yearning.io).

[![dockeri.co](https://dockeri.co/image/jy1989/docker-yearning)](https://hub.docker.com/r/jy1989/docker-yearning)

## Usage

```sh
docker run -itd \
  --name yearning \
  -p 8000:8000 \
  -e MYSQL_ADDR=172.16.16.50:3308 \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=123 \
  -e MYSQL_DB=yearning \
  jy1989/docker-yearning
```

Goto [Yearning Guide](https://guide.yearning.io) for more.
