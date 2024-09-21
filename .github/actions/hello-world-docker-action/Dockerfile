# Use an Alpine Linux image
FROM alpine:3.12

# Install bash since Alpine uses a minimal shell by default
RUN apk add --no-cache bash

# Copy the entrypoint script into the Docker container
COPY entrypoint.sh /entrypoint.sh

# Make the script executable
RUN chmod +x /entrypoint.sh

# Specify the script to run as the container's entry point
ENTRYPOINT ["/entrypoint.sh"]
