import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Ścieżka do modelu: wchodzimy do folderu models (jest w tym samym folderze co app.ts)
import { MCUItem } from './models/mcu-item.model';
// Ścieżka do serwisu: musimy wyjść jeden poziom wyżej (..), żeby wejść do core
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  mcuItems: MCUItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTimeline().subscribe({
      next: (data) => {
        this.mcuItems = data;
        console.log('Dane załadowane:', this.mcuItems);
      },
      error: (err) => console.error('Błąd ładowania danych:', err)
    });
  }
}