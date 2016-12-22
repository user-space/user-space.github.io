[ -z "$1" ] && echo "missing change's description" && exit 1
set -x
npm run build || exit 1
bash docker-build.sh || exit 1
version=$(date +"%Y%m%d_%H%M")
message="$version: $@"
git ci -am "$message" || (echo 'could not commit, had you made changes?' && exit 1)
docker tag my-user-space eu.gcr.io/navigator-1320/my-user-space:$version
gcloud docker -- push eu.gcr.io/navigator-1320/my-user-space:$version
kubectl set image deployment my-user-space my-user-space=eu.gcr.io/navigator-1320/my-user-space:$version
