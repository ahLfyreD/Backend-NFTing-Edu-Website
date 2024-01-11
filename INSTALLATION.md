# NFTing-Backend Installation

This document provides instructions on how to set up and start a running instance of `nfting-backend` on your local system. The instructions are written to be followed in sequence so make sure to go through each of them step by step without skipping any sections.

# Table of Content

1. [Installation](#installation)
    1. [Clone this repository](#clone-this-repository)
    1. [Change directory into the cloned repo](#change-directory-into-the-cloned-repo)
    1. [Installing required packages/dependencies](#installing-required-packagesdependencies)
1. [Configuration](#configuration)
    1. [Creating .env file](#creating-env-file)
    1. [Setting up ACCESS_TOKEN_SECRET in .env file](#setting-up-access_token_secret-in-env-file)
    1. [Setting up REFRESH_TOKEN_SECRET in .env file](#setting-up-refresh_token_secret-in-env-file)
    1. [Setting up REFRESH_TOKEN_SECRET in .env file](#setting-up-refresh_token_secret-in-env-file)
    1. [Setting up DATABASE_URL in .env file](#setting-up-database_url-in-env-file)

# Installation
You will need to have copies of your code on your local system. Here's how to do that.
## Clone This Repository

First you need a local copy of `nfting-backend`. Run the following command in the directory of choice on your local system.

```
git clone https://github.com/ahLfyreD/Backend-NFTing-Edu-Website
```

This will download a local copy of `nfting-backend` in that directory.

## Change Directory into the Cloned Repo

Right after cloning the repo you can change the directory of your current `terminal(shell)` to the root directory of cloned repository using this command:

```
cd nfting-backend
```

**NOTE:** `All the commands we're going to execute in the following instructions will assume you are in the root directory of the cloned nfting-backend project. If you fail to do so, the commands will not work.`

# Installing required packages/dependencies

If you've followed the previous steps you should have already set up node.js on your system.
Run the following command to install the packages and dependencies required by `nfting-backend`:

```
npm install
```

# Configuration
It's important to configure NFTing-Backend. Here's how to do it.
## Creating .env file

A file named .env is required in the root directory of nfting-backend for storing environment variables used at runtime. It is not a part of the repo and you will have to create it. Use this command on your VSCode terminal:

```
cp .env
```

This `.env` file must be populated with the following environment variables for `nfting-backend` to work:

| Variable                     | Description                                   |
| ---------------------------- | --------------------------------------------- |
| ACCESS_TOKEN_SECRET          | token for admin and user login authentication |
| REFRESH_TOKEN_SECRET         | token for users and admin authentication      |
| DATABASE_URL                 | Link for mongodb to connect to your localhost |

follow the instructions below on your terminal on how you can generate your tokens for [Setting up ACCESS_TOKEN_SECRET in .env file](#setting-up-access_token_secret-in-env-file) and [Setting up REFRESH_TOKEN_SECRET in .env file](#setting-up-refresh_token_secret-in-env-file) to set up your environment variables.

Follow the guide below on how you can set up your mongodb for your localhost in your local server. (https://www.youtube.com/watch?v=gB6WLkSrtJk&t=23s)

if you have your local mongodb server and compass set up already,
your variable description should be as shown as the example below

DATABASE_URI=mongodb://localhost:27017/


