import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { RegistroModule } from './registro/registro.module';
import { HomeComponent } from './home/home.component';
	
	@NgModule({
	    declarations: [
  ],
	    imports: [
			LoginModule,
			RegistroModule,
			HomeModule
		],
	    exports: [
			LoginModule,
			RegistroModule,
			HomeModule
		],
	    providers: [],
	})
	export class PagesModule {}