FROM nginx

COPY assets     /usr/share/nginx/html/my/assets
COPY index.html /usr/share/nginx/html/my
COPY dist       /usr/share/nginx/html/my/dist
