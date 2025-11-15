FROM node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy source
COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "run", "dev"]
