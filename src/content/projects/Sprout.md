---
title: "Sprout"
logo: "./sprout-logo.png"
preview: "./sprout-img1.png"
description: "8-bit style, 2 player competitive strategy game"
year: "2021"
links:
  - title: "Play Sprout"
    link: "https://www.lexaloffle.com/bbs/?tid=44692"
    icon: "game-controller"
tags:
  - pico8
  - lua
---

## Rules of play

### Objective

First player to grow their plant into the other players garden bed wins

### Start of game

The board is a 8x8 grid, with a 1x8 vertical tan coloured garden bed on each side. Each player has a base sprout on their respective side of the board in their garden bed. Purple starts first, then oranges go next. Both players use the same buttons when it's their turn.

### During your turn

You can choose and place 1 tile during your turn. Once you place the tile, your turn ends. The types of tiles you can choose from are listed below (except for base sprouts)

### Types of tiles

**Branch** - standard tile, each player has an infinite amount of these and can only be continued in one direction.

**Sprout** - a tile that allows the player to place tiles that ‘sprout’ from its 3 remaining ends. Each player gets 2 each

**Bridge** - a bridge can be placed on top of another player's tile, which after that basically functions like a normal branch tile. You cannot place a bridge on top of a bridge or a bush, but you can place them on sprouts and base sprouts. You can also follow a bridge with another bridge, and can still Win the game by placing a bridge in the opponent's garden bed. Each player gets 2 each

**Bush** - you can place a bush on top of any of your own tiles (except for bridges) and basically block the other player from being able to place a bridge onto that tile. Each player gets 1 each.

**Base sprout** - like a sprout, but can only ‘sprout’ twice in any 2 chosen directions. This tile is already placed on the board and cannot be moved or placed by the player. This acts as your beginning point, hence it being called the ‘base’ sprout.

### Moving the cursor

During your turn, use the arrow keys to move the blinking grey cursor. Pay attention to the cursor’s sprite, as this determines what type of tile you have selected to place. the cursor will become a cross if the cursor is in a
space that you’re not allowed to place any tiles.

### Cycling through tile options

You can use the z key to cycle through your available tiles, which you will notice changes the sprite of the cursor to indicate what tile is currently selected. This will also cycle through each available orientation of the current tile type before moving onto the next tile type.

### Placing a tile

Once you’ve selected the tile you want to place, Press the x key to place the currently selected tile. Doing this will end your turn and begin the next player's turn.

### General strategy

In general the player with the best balance between attack and defence will be the most likely to win the game, but keep in mind that the player who goes first gets the advantage, because if both players were to continually places tiles in a straight line, the first player (purple) would reach the opponents garden bed first. So with that being said, it may be wiser to focus more on defence or attack depending on whether you go first or second.
