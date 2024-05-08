import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  board: string[][] = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '1', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', 'X', '0', '0', '0', '0', 'Y', '0', 'X'],// trzeci od prawej był Y
    ['X', '0', '0', 'X', 'X', 'X', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', 'Y', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ];

  ballPosition: { x: number; y: number; } = { x: 1, y: 1 }; // Początkowa pozycja piłki
  previousBallPosition: { x: number; y: number } | null = null; // Poprzednia pozycja piłki

  constructor() { }

  ngOnInit(): void {
    this.simulateBouncingBall();
  }  

  simulateBouncingBall(): void {
    let ballDirection: { dx: number; dy: number; } = { dx: 1, dy: 1 }; // Początkowy kierunek piłki
  
    const moveBall = () => {
      const nextX = this.ballPosition.x + ballDirection.dx;
      const nextY = this.ballPosition.y + ballDirection.dy;
      const theSameX = this.ballPosition.x;
      const theSameY = this.ballPosition.y;
  
      // Kolizja z obiektem Y
      if (this.board[nextY][nextX] === 'Y') { 
        // Zmiana kierunku na losowy
        ballDirection = this.generateRandomDirection(ballDirection);

        // Zmiana obiektu Y na puste pole
        this.board[nextY][nextX] = '0';
      }
      // odbicie od spiczastego kantu
      else if (
        this.board[nextY][nextX] === 'X' 
        && this.board[theSameY][nextX] === '0'
        && this.board[nextY][theSameX] === '0'
      ) {
        ballDirection.dx *= -1;
        ballDirection.dy *= -1;

        // Aktualizacja planszy
        this.board[this.ballPosition.y][this.ballPosition.x] = '0'; // Usuń piłkę z aktualnej pozycji
        this.previousBallPosition = this.ballPosition; // Zapamiętaj poprzednią pozycję piłki
        this.ballPosition.x += ballDirection.dx;
        this.ballPosition.y += ballDirection.dy;
        this.board[this.ballPosition.y][this.ballPosition.x] = '1'; // Oznacz aktualną pozycję piłki
      } 
      // odbicie od wklęsłego kąta tak jak w pokoju
      else if (
        // this.board[nextY][nextX] === 'X' &&
        this.board[theSameY][nextX] === 'X' &&
        this.board[nextY][theSameX] === 'X'
      ) {
        ballDirection.dx *= -1;
        ballDirection.dy *= -1;

        // Aktualizacja planszy
        this.board[this.ballPosition.y][this.ballPosition.x] = '0'; // Usuń piłkę z aktualnej pozycji
        this.previousBallPosition = this.ballPosition; // Zapamiętaj poprzednią pozycję piłki
        this.ballPosition.x += ballDirection.dx;
        this.ballPosition.y += ballDirection.dy;
        this.board[this.ballPosition.y][this.ballPosition.x] = '1'; // Oznacz aktualną pozycję piłki
      }
      // odbicie od pionowej ściany
      else if (
        this.board[theSameY][nextX] === 'X'
        && this.board[nextY][theSameX] === '0'
      ) {
        ballDirection.dx *= -1;
        ballDirection.dy *= 1;

        // Aktualizacja planszy
        this.board[this.ballPosition.y][this.ballPosition.x] = '0'; // Usuń piłkę z aktualnej pozycji
        this.previousBallPosition = this.ballPosition; // Zapamiętaj poprzednią pozycję piłki
        this.ballPosition.x += ballDirection.dx;
        this.ballPosition.y += ballDirection.dy;
        this.board[this.ballPosition.y][this.ballPosition.x] = '1'; // Oznacz aktualną pozycję piłki
      }
      // odbicie od poziomej ściany
      else if (
        this.board[theSameY][nextX] === '0'
        && this.board[nextY][theSameX] === 'X'
      ) {
        ballDirection.dx *= 1;
        ballDirection.dy *= -1;

        // Aktualizacja planszy
        this.board[this.ballPosition.y][this.ballPosition.x] = '0'; // Usuń piłkę z aktualnej pozycji
        this.previousBallPosition = this.ballPosition; // Zapamiętaj poprzednią pozycję piłki
        this.ballPosition.x += ballDirection.dx;
        this.ballPosition.y += ballDirection.dy;
        this.board[this.ballPosition.y][this.ballPosition.x] = '1'; // Oznacz aktualną pozycję piłki
      }
      // gdy nie napotka na X ani Y 
      else {
        // Aktualizacja planszy
        this.board[this.ballPosition.y][this.ballPosition.x] = '0'; // Usuń piłkę z aktualnej pozycji
        this.previousBallPosition = this.ballPosition; // Zapamiętaj poprzednią pozycję piłki
        this.ballPosition.x = nextX;
        this.ballPosition.y = nextY;
        this.board[this.ballPosition.y][this.ballPosition.x] = '1'; // Oznacz aktualną pozycję piłki
      }

      // Odśwież planszę co 500ms
      setTimeout(moveBall, 500);
    };
  
    moveBall();
  }

  // Funkcja generująca losowy kierunek inny niż aktualny kierunek piłki
  generateRandomDirection(currentDirection: { dx: number; dy: number }): { dx: number; dy: number } {
    let dx = Math.random() < 0.5 ? -1 : 1;
    let dy = Math.random() < 0.5 ? -1 : 1;

    // Sprawdzamy czy nowy kierunek jest różny od aktualnego
    while (dx === currentDirection.dx && dy === currentDirection.dy) {
      dx = Math.random() < 0.5 ? -1 : 1;
      dy = Math.random() < 0.5 ? -1 : 1;
    }

    return { dx, dy };
  }
  

  getCellBackgroundColor(cell: string): string {
    if (cell === 'X') {
      return 'gray';
    } else if (cell === 'Y') {
      return 'yellow';
    } else if (cell === '1') {
      return 'red';
    } else {
      return 'white';
    }
  }
}
