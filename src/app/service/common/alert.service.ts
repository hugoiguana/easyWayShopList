import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async confirmDelete(functionPos) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: '',
      message: 'Confirma exclusão?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Sim',
          handler: () => {
            functionPos();
          }
        }
      ]
    });

    await alert.present();
  }
}
