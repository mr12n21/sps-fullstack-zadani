FROM node:22
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
