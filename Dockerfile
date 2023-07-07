# Developed with Udemy Docker and Kubernetes: The Practical Guid (pt. 82)
FROM node:16-alpine AS alpine
 
USER node
 
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
 
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./

EXPOSE 8080
 
CMD ["node", "server.js"]