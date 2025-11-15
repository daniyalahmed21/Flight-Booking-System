FROM node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy source
COPY . .

ENV PORT=3002
EXPOSE 3002

CMD ["npm", "run", "dev"]
