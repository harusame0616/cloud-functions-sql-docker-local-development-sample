FROM node:16

WORKDIR /project

COPY ./project/package.*json ./
RUN ["npm", "i"]

CMD ["npm", "start"]
