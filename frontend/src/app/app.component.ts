import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/posts">Posts</a>
        <a routerLink="/pages">Pages</a>
        <a routerLink="/admin">Admin</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>&copy; 2024 CMS. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    header { background: #333; padding: 1rem; }
    nav a { color: white; margin-right: 1rem; text-decoration: none; }
    main { padding: 2rem; }
    footer { background: #f5f5f5; padding: 1rem; text-align: center; }
  `]
})
export class AppComponent {}
