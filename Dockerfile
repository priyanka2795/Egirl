# Step 1: Use an official Node.js runtime as a parent image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and yarn.lock files from your project folder
# COPY package.json ./
COPY . .

RUN npm cache clean --force

# Step 4: Install any necessary dependencies
RUN npm install

RUN npm install sass-loader sass webpack --save-dev

# Step 5: Copy the rest of your application's source code from your project folder to the Docker container
# COPY . .

# Step 6: Build your Next.js application
RUN npm run build

# Step 7: Define the network port that this container will listen on at runtime
EXPOSE 3000

# Step 8: Define the command to run your app
CMD [ "npm","run","start"]