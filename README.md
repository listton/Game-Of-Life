# Game Of Life 

The Game of Life is a cellular automaton devised by John Horton Conway in 1970.

It's also used for [Coderetreat](https://www.coderetreat.org/). I participated in Coderetreat 1 time at work. We organized it for our development team. I wanted to implement this game with visualization and write tests for it.

## Rules

<img src='./rules.jpg' width='400px'>

- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any live cell with fewer than two live neighbours dies, as if by underpopulation.

## How to start

The easiest way — link to github pages

Or:

- clone repository
- `npm i`
- `npm run dev`
- open [localhost:8000](http://localhost:8000)

## What is done here and why

- I used: Webpack, Jest, Stylus, Canvas, JS.
- Tests. I wanted to try Jest, so there is Jest. Coderetrit is about TDD and I used it here for developing game rules.  
- Webpack. Because I needed to transpile JavaScript and I wanted to pay attention to the development of the Game Of Life. Webpack is the most familiar tool for me.
- This application developed just for fun :) I wanted to do it and did it.
