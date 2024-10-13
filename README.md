# Truecaller Blog

Welcome to the Truecaller Blog repository! This project contains the source code and content for the Truecaller Blog.

## Table of Contents

- [Introduction](#introduction)
- [Optimizations](#optimizations)
- [Error Handling](#error-handling)
- [Added Features](#added-features)
- [Packages Used](#packages-used)
- [Shortcomings](#shortcomings)

## Introduction

The Truecaller Blog is a platform to share updates, stories, and insights about Truecaller products and services.

The project has 2 routes:

1. Home page which shows all the articles in a card format.
2. The detailed article page which provides the individual post contents.

The components are built in such a way that they can be reused in multiple places across the project. The folder structure has been divided into different categories based on the uses they serve. A Container-Presenter Pattern has been used in the components for fetching and displaying data.

## Optimizations

- The project has 2 routes: one for the home page and the second one for the detailed articles page. Both the components are lazy loaded, thereby filling the DOM only once they are accessed.
- On each page load, the GET API for fetching posts is called and these are memoized, meaning their response is cached. So next time the same page is called, instead of calling the API, the data is provided from the cache.
- The images are lazy loaded, thereby loading when they come into the viewport.

## Error Handling

- Default values are provided for all the props, so in case of missing values, the user will still be able to see the items.
- In case of key API failures, like while getting posts or detailed articles, an error banner is provided asking users to retry.

## Added Features

- In the articles list page, a shimmer UI is provided for the article card to improve the user experience.
- While the API call is being made to retrieve a detailed article, a custom spinner has been added.
- In case the user enters a route that doesn't exist, an error displaying component has been added.

## Packages Used

- `date-fns`: To display the date in the required format.
- `primeicons`: For icons used across the project.
- `vue-router`: To set the routes required.
- `sass`: To be able to build custom styling and responsiveness.

## Shortcomings

- The exact font provided in the VD was not identifiable by me, hence it has affected the design accuracy.
- The total pages available is not specifically available through any of the APIs, so the value from one of the APIs that provides total pages has been used.
