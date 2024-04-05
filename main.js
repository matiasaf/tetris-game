import "./style.css";

// 1) INITIALICE CANVAS
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const BLOCK_SIZE = 20;
const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 30;

canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

//KEYBOARD KEYS CONSTANTS
const KEYBOARD_KEY_LEFT = "ArrowLeft";
const KEYBOARD_KEY_RIGHT = "ArrowRight";
const KEYBOARD_KEY_DOWN = "ArrowDown";
const KEYBOARD_KEY_UP = "ArrowUp";

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
];

const NAMED_PIECES = {
  cuadrado: [
    [1, 1],
    [1, 1],
  ],

  linea1: [[1, 1, 1, 1]],
  linea2: [[1], [1], [1], [1]],

  triangulo1: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  triangulo2: [
    [1, 0],
    [1, 1],
    [1, 0],
  ],
  triangulo3: [
    [1, 1, 1],
    [0, 1, 0],
  ],
  triangulo4: [
    [0, 1],
    [1, 1],
    [0, 1],
  ],

  serpiente1: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  serpiente2: [
    [0, 1],
    [1, 1],
    [1, 0],
  ],

  l1: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  l2: [
    [1, 1, 1],
    [1, 0, 0],
  ],
  l3: [
    [1, 1],
    [0, 1],
    [0, 1],
  ],
  l4: [
    [0, 0, 1],
    [1, 1, 1],
  ],
};

const InitialFigures = ["cuadrado", "linea1", "serpiente1", "triangulo1", "l1"];

const ROTATED_PIECES = {
  cuadrado: "cuadrado",

  linea1: "linea2",
  linea2: "linea1",

  serpiente1: "serpiente2",
  serpiente2: "serpiente1",

  triangulo1: "triangulo2",
  triangulo2: "triangulo3",
  triangulo3: "triangulo4",
  triangulo4: "triangulo1",

  l1: "l2",
  l2: "l3",
  l3: "l4",
  l4: "l1",
};

// piece

const figure = "l1";
// InitialFigures[Math.floor(Math.random() * InitialFigures.length)];

const piece = {
  position: { x: 5, y: 5 },
  shape: {
    name: figure,
    structure: NAMED_PIECES[figure],
  },
};

// 2) GAME LOOP
let dropCounter = 0;
let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  dropCounter += deltaTime;

  if (dropCounter > 1000) {
    piece.position.y++;
    dropCounter = 0;

    if (checkCollision(board, piece)) {
      piece.position.y--;
      solidifyPiece();
      removeRows();
    }
  }

  draw();
  window.requestAnimationFrame(update);
}

function draw() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        context.fillStyle = "yellow";
        context.fillRect(x, y, 1, 1);
      }
    });
  });

  piece.shape["structure"].forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        context.fillStyle = "red";
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
      }
    });
  });
}

function movePieceToRight(piece) {
  piece.position.x++;
}
function movePieceToLeft(piece) {
  piece.position.x--;
}
function movePieceDown() {
  piece.position.y++;
}
function movePieceUp() {
  piece.position.y--;
}

document.addEventListener("keydown", (event) => {
  if (event.key === KEYBOARD_KEY_LEFT) {
    movePieceToLeft(piece);
    if (checkCollision(board, piece)) movePieceToRight(piece);
  }

  if (event.key === KEYBOARD_KEY_RIGHT) {
    movePieceToRight(piece);
    if (checkCollision(board, piece)) movePieceToLeft(piece);
  }

  if (event.key === KEYBOARD_KEY_DOWN) {
    movePieceDown(piece);
    if (checkCollision(board, piece)) {
      movePieceUp(piece);
      solidifyPiece();
      removeRows();
    }
  }

  // rotate piece
  if (event.key === KEYBOARD_KEY_UP) {
    const newPiece = ROTATED_PIECES[piece.shape.name];

    if (piece.position.x + NAMED_PIECES[newPiece][0].length > BOARD_WIDTH)
      return;

    piece.shape.name = newPiece;
    piece.shape.structure = NAMED_PIECES[newPiece];
  }
});

function checkCollision(board, piece) {
  const { position } = piece;
  const { structure } = piece.shape;

  return structure?.find((row, y) => {
    return row.find((value, x) => {
      return value !== 0 && board[y + position.y]?.[x + position.x] !== 0;
    });
  });
}

function resetPosition(piece) {
  piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2);
  piece.position.y = 0;
}

function getRandomShape(piece, InitialFigures) {
  const random =
    InitialFigures[Math.floor(Math.random() * InitialFigures.length)];

  piece.shape = {
    name: random,
    structure: NAMED_PIECES[random],
  };
}

function solidifyPiece() {
  piece.shape["structure"].forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        board[y + piece.position.y][x + piece.position.x] = 1;
      }
    });
  });

  // RESET POSITION
  resetPosition(piece);

  // GET RANDOM SHAPE
  getRandomShape(piece, InitialFigures);

  //GAMEOVER
  if (checkCollision(board, piece)) {
    window.alert("Game over my friend!");
    board.forEach((row) => row.fill(0));
  }
}

function removeRows() {
  const rowsToRemove = [];

  board.forEach((row, y) => {
    if (row.every((value) => value === 1)) {
      rowsToRemove.push(y);
    }
  });

  rowsToRemove.forEach((y) => {
    board.splice(y, 1);
    const newRow = Array(BOARD_WIDTH).fill(0);
    board.unshift(newRow);
  });
}

// RUN THE GAME
update();
