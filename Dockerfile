# Use a base image with PHP
FROM php:7.4-cli

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy PHP files to the container
COPY ./api /app/api

# Set entrypoint to PHP CLI
CMD ["php", "/app/api/php-api.js"]
