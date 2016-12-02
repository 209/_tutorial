FROM nginx:latest

MAINTAINER Ilya Kolevatykh "???@gmail.com"

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY public/ /usr/share/nginx/html

EXPOSE 80

