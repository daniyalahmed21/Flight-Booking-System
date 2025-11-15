FROM node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy source
COPY . .

ENV PORT=3000
EXPOSE 3000

# Default command (development friendly)
CMD ["npm", "run", "dev"]
