生成配置文件

````bash
docker run --rm influxdb:latest influxd print-config > config.yml
````





````bash
docker run -d \
      -p 8086:8086 \
      -v $PWD/data:/var/lib/influxdb2 \
      -v $PWD/config:/etc/influxdb2 \
      -v $PWD/config.yml:/etc/influxdb2/config.yml \
      -e DOCKER_INFLUXDB_INIT_MODE=setup \
      -e DOCKER_INFLUXDB_INIT_USERNAME=rexense \
      -e DOCKER_INFLUXDB_INIT_PASSWORD=rexense820 \
      -e DOCKER_INFLUXDB_INIT_ORG=rexense \
      -e DOCKER_INFLUXDB_INIT_BUCKET=mqtt_server \
      -e DOCKER_INFLUXDB_INIT_RETENTION=7d \
      -e DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=rexense820 \
      --name=influxdb2 \
      influxdb:latest
````



