#!/usr/bin/env bash

function build_protos() {
  declare BASEDIR=$(dirname "$0");
  declare PROTO_DEST="./src/proto";
  declare MESSAGE_SRC="./proto";

  cd "${BASEDIR}/../";

  mkdir -p "${PROTO_DEST}";

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I "${MESSAGE_SRC}" \
    proto/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out="grpc_js:${PROTO_DEST}" \
    -I "${MESSAGE_SRC}" \
    proto/*.proto
}

build_protos;