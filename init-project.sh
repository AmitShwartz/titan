#!/bin/bash

# # Run npm install
npm i

# Define paths and filenames
DOCKER_COMPOSE_FILE="docker-compose.yml"

init_project() {
  echo "Initializing project..."
  docker-compose down
  echo "Starting Docker containers..."
  docker-compose -f "$DOCKER_COMPOSE_FILE" up -d
}

init_project
