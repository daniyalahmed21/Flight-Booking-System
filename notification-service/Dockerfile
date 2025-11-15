FROM node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy source
COPY . .

ENV PORT=3003
EXPOSE 3003

CMD ["npm", "run", "dev"]
