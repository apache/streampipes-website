FROM nginx

COPY documentation/website/build/streampipes-docs/ /usr/share/nginx/html/docs
COPY docs-python/ /usr/share/nginx/html/docs/docs/python
COPY build/ /usr/share/nginx/html

COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html/
