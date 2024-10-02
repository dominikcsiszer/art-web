# Use the official Node.js 16 image with Alpine Linux
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock or package-lock.json if using npm
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your application's code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
