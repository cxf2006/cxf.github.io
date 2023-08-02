安装cJSON

````bash
wget https://github.com/DaveGamble/cJSON/archive/v1.7.14.tar.gz
tar -zxvf v1.7.14.tar.gz
cd cJSON-1.7.14
sudo make
sudo make install
````

cJSON库加入搜索路径

````bash
export LD_LIBRARY_PATH=/usr/local/lib/:$LD_LIBRARY_PATH
````

编译

````bash
gcc scene_manager_test.c -o scene_manager_test -lcjson
````





