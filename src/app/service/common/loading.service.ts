import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async show() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();    
  }

  async hide() {
    await this.loadingController.dismiss();
  }
}
