---
title: "SlipBox"
logo: "./slipbox-logo.png"
description: "A stream of consciousness note taking web app where you can view your notes in different ways"
year: "2023"
links:
  - title: "Live demo"
    link: "https://slipbox-react-app.fly.dev/"
    icon: "cursor"
  - title: "Source code"
    link: "https://github.com/wilgru/slipbox-react-app"
    icon: "code"
platforms:
  - Web
tags:
  - react
  - typescript
  - pocketbase
---

SlipStream is a stream of consciousness note taking app where you can view your notes in different ways.

## Problem

I have a particular note taking style (specifically for work) where I like to have creation dates associated with every note I take, so that I can see how my information comes together chronologically, like a diary. But I also want to be able to structure and organise my notes to be able to find and view them in a focused context. Specifically, I like to view my notes visibly together in one place, like a structured document.

With traditional note taking apps I cant really achieve both functionalities. I can keep information in a single note/document for contextual organisation, but forfeit date metadata per note while also now having to worry about manually formatting and structuring the document, which often feels arbitrary. I could keep a separate dated note per piece of information, but this makes information hard to find at a glance (especially notes with no title) and is overkill for notes that are only one or two sentances long.

## Solution

The solution Ive come up with is an app that takes the best of both worlds, by allowing you to create individual notes with dates and other metadata that are compiled into automatically formatted documents called 'journals'. With this approach, your notes are treated like interchangable building blocks, that can be rearranged and grouped in ways that lets you take your existing notes and view them in different ways. For example, using pins and flags on notes can help you filter notes more granularly, and the ability to associate notes with multiple journals means you can view the same notes in different focused contexts.

## Tech Stack

I chose to build this SlipStream as a React SPA web app with TypeScript, with a small open source and self hosted BAAS called Pocketbase. I chose React because its the technology I'm most proficient at, and although its not the most ideal choice for an interactive application, it allowed me to get the project off the ground weth less friction and if I were to treat this like an actual product, it would be able to reach more users across different platforms quickly and easily via the browser, and can prioritise packaging it into a native desktop applications using a framework like Electron.

I chose Pocketbase mainly because its lightweight, easy to use and self hosted, which felt like an appropriate option for a casual hobby project. I also thought it was an interesting new tool and thought this project would be a good opportunity to try it. I've had the assumption from the beginning though that if I wanted to take this project more seriously it would have to be replaced with a more production ready BAAS alternative like Supabase or Firebase, or even build my own backend if the necessity arises.

## Design?
