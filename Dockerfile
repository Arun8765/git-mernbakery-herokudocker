FROM node:8  
# Create app directory  
WORKDIR D:\docker_heroku_mymern
# Install app dependencies  
COPY package*.json ./  
  
RUN npm install  
# Copy app source code  
COPY . .  
 
#Expose port and start application  
EXPOSE 8888  
CMD [ "npm","run","dev" ] 