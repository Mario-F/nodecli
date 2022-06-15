FROM node:18-slim

ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"

WORKDIR /app
COPY . /app
RUN yarn
RUN yarn compile
RUN npm link

ENTRYPOINT ["nodecli"]
CMD ["--help"]
