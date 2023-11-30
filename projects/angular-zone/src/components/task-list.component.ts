import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <div>
      <h3>Listado de Tareas</h3>
      <ul>
        <li *ngFor="let task of tasks">{{ task }}</li>
      </ul>
      <input  placeholder="Nueva Tarea" #newTask/>
      <button (click)="onChange(newTask.value)">Agregar una tarea</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  tasks: string[] = [];

  constructor(private cdRef: ChangeDetectorRef, private zone: NgZone) {}

  onChange(task: any) {
      if (task) {
        this.tasks.push(task);
      }
  }
}