rm -rf dist
mkdir dist
docker run --rm emff tar -cC /usr/src/libav.js . | tar -xC dist