# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application directory into the container
COPY . .

# Build the React app
RUN npm run build

# Set environment variable to specify production mode
ENV NODE_ENV=production

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
