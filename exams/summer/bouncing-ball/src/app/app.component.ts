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
    ['X', '0', '0', '0', 'X', '0', '0', '0', '0', 'Y', '0', 'X'],
    ['X', '0', '0', 'X', 'X', 'X', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', 'Y', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ];

  constructor() { }

  ngOnInit(): void {
    this.simulateBouncingBall();
  }

  simulateBouncingBall(): void {
    let ballPosition = { x: 1, y: 1 }; // Początkowa pozycja piłki
    let ballDirection = { dx: 1, dy: 1 }; // Początkowy kierunek piłki

    const moveBall = () => {
      const nextX = ballPosition.x + ballDirection.dx;
      const nextY = ballPosition.y + ballDirection.dy;

      if (this.board[nextY][nextX] === 'X') { // Kolizja ze ścianą
        ballDirection.dx *= -1; // Odwróć kierunek piłki w osi X
        ballDirection.dy *= -1; // Odwróć kierunek piłki w osi Y
      } else if (this.board[nextY][nextX] === 'Y') { // Kolizja z obiektem Y
        const directions = [{ dx: -1, dy: -1 }, { dx: -1, dy: 1 }, { dx: 1, dy: -1 }, { dx: 1, dy: 1 }];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        ballDirection = randomDirection;
        this.board[nextY][nextX] = '0'; // Zmiana wartości pola Y na 0 po odbiciu piłki
      }

      // Aktualizacja pozycji piłki
      ballPosition.x += ballDirection.dx;
      ballPosition.y += ballDirection.dy;

      // Aktualizacja planszy
      this.board[ballPosition.y][ballPosition.x] = '1';

      // Odśwież planszę co 500ms
      setTimeout(moveBall, 500);
    };

    moveBall();
  }
}
