FROM nginx

COPY my.user.space/assets             /usr/share/nginx/html/my/assets
COPY my.user.space/dist               /usr/share/nginx/html/my/dist
COPY my.user.space/index.html         /usr/share/nginx/html/my
COPY my.user.space/manifest.json      /usr/share/nginx/html/my
COPY my.user.space/service-worker.js  /usr/share/nginx/html/my
COPY my.user.space/app.html           /usr/share/nginx/html/my

COPY the.user.space/assets            /usr/share/nginx/html/the/assets
COPY the.user.space/dist              /usr/share/nginx/html/the/dist
COPY the.user.space/index.html        /usr/share/nginx/html/the
COPY the.user.space/terms.html        /usr/share/nginx/html/the
COPY the.user.space/privacy.html        /usr/share/nginx/html/the
COPY the.user.space/use.html        /usr/share/nginx/html/the
COPY the.user.space/manifest.json     /usr/share/nginx/html/the
COPY the.user.space/service-worker.js /usr/share/nginx/html/the
COPY the.user.space/app.html          /usr/share/nginx/html/the

COPY docs                         /usr/share/nginx/html/docs
COPY sdk                          /usr/share/nginx/html/sdk
