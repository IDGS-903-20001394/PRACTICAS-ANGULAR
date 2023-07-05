import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class confirmAlertComponent implements OnInit {

constructor(
    public dialogo: MatDialogRef<confirmAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit() {
  }

}