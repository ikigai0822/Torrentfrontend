# Define the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Define the command to start the application
CMD ["npm", "start"]