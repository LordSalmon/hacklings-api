ARG DOCKER_IMAGE=node:22.12.0

FROM ${DOCKER_IMAGE} AS base

USER root
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

FROM base AS dependencies

COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./package-lock.json ./

RUN npm ci
