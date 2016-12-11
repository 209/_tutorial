FROM nginx:latest

MAINTAINER Ilya Kolevatykh "???@gmail.com"

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY public/ /usr/share/nginx/html

RUN apt-get update
RUN apt-get install -y mc

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN npm install webpack -g

EXPOSE 80
