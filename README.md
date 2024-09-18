# Titan Home Assignment

## Table of Contents

- [Installation](#installation)
- [Justifications](#Justifications)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contact](#contact)

## Installation

### Backend

Before proceeding, ensure Docker is installed on your environment and running. The server and MySQL database run within Docker containers.

To set up the server and database, execute the `init-project.sh` script located in the project directory using the command:

```sh
sh init-project.sh
```

that doing this next steps:

1. npm install.
2. docker-compose -f "$DOCKER_COMPOSE_FILE" up -d

Docker containers:

- mysql port "3306"
- adminer port "9090"
- backend port "8080"

if from some reason the script wont work.

## Documentation

[API Documentation](http://localhost:8080/api-docs) - The server must be up for this documentation.

## Contact

For questions, feedback, or support, contact [Amit Shwartz](shwartzamit17@email.com).
