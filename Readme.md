# Test task
## Author: *Daniil Selin*

### Credentials

| Username | Password | Role       |
| ---------|----------|----------- |
| admin    | admin    | ROLE_ADMIN |
| test     | test     | ROLE_USER  |
| misha    | misha    | ROLE_USER  |

------------------------------------

### Startup

> **Important note**: ports **8080**, **80** and **5432** must be free to start application

API, Frontend and Database are three different containers. They are already configured and ready to start. There is a docker-compose.yml file where you can change default ports if needed. I created simple shell script to run whole the application on linux or mac in case docker-compose is intalled. 

Here is the way to run it using script after cloning from git:

```
chmod +x start.sh
./start.sh
```

Or you can simply run it using next command for docker-compose:

```
sudo docker-compose up --build
```

**Important!** You have to be in the same directory as docker-compose.yml file.

-----------------------------------------------

After successful startup just visit localhost on port 80. Or click [here](http://localhost).

-------------------------------------------------

### Links to original repositories with source code:

Frontend - https://github.com/ALazyGuy/Hi-end-Systems-Test-Task-FE.

Backend - https://github.com/ALazyGuy/Hi-end-Systems-Test-Task-BE.

I've also deployed it to the server, so you can reach the website by clicking [here](https://daniil-test-task.duckdns.org/). (UI is not optimized for mobile phones)
