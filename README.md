# NodeCLI

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=34NHCDNHRRV6G)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![GitHub issues](https://img.shields.io/github/issues/Mario-F/nodecli)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/mario-f/nodecli.svg)](http://isitmaintained.com/project/mario-f/nodecli "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/mario-f/nodecli.svg)](http://isitmaintained.com/project/mario-f/nodecli "Percentage of issues still open")

This project is a cli bin template written in typescript and distributed to multiple release channels.

## Install

Install with: `npm install -g @mariof/nodecli`

## Usage

npm binary: `nodecli`

docker image: `docker run -it --rm ghcr.io/mario-f/nodecli:latest`

## Development

The development aims to be quick and easy to use, you need to install dependencies with `yarn`, after that you have 2 major ways.

DEV Binary:

Execute the dev binary with `./bin/nodecli-dev` this will compile and execute the project like normal.

DEBUG Binary:

Execute the debug binary with `./bin/nodecli-debug` this will compile and execute the project and wait for node debugger to connect.

When developing with vscode the launch config already delivery with this project and you only need to hit F5, on each subsequent execution the debugger will now automatically connect.
