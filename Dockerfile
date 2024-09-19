FROM emscripten/emsdk:3.1.67

RUN apt update && apt install -y git npm

WORKDIR /usr/src

RUN git clone https://github.com/stinkydev/libav.js.git#stinky

WORKDIR /usr/src/libav.js

RUN npm install

RUN make build-hevc-aac
