FROM nginx

COPY my.user.space/assets     /usr/share/nginx/html/my/assets
COPY my.user.space/index.html /usr/share/nginx/html/my
COPY my.user.space/dist       /usr/share/nginx/html/my/dist

COPY the.user.space/assets     /usr/share/nginx/html/the/assets
COPY the.user.space/index.html /usr/share/nginx/html/the
COPY the.user.space/dist       /usr/share/nginx/html/the/dist
