FROM node:alpine

# Copying rest of the application to app directory
COPY ./ ./

RUN yarn

# Expose the port and start the application
Expose 3333

CMD ["yarn","dev:server"]