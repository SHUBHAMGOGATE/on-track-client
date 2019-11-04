import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalenderPageRoutingModule } from './calender-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalenderPage } from './calender.page';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderPageRoutingModule,
    NgCalendarModule,
    AngularFirestoreModule,
    

  ],
  declarations: [CalenderPage],
  providers : [AngularFirestoreModule,AngularFireModule]
})
export class CalenderPageModule {}
