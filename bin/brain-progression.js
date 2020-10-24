#!/usr/bin/env node
import gameInfo from '../src/games/brain-progression.js';
import initGame from '../src/games/index.js';

const startGame = initGame(gameInfo);
startGame();
