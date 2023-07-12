FROM nginx

COPY website-v2/build/ /usr/share/nginx/html
COPY docs-python/ /usr/share/nginx/html/python

COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html/
