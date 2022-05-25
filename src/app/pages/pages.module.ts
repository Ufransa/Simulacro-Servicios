import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { RegistroModule } from './registro/registro.module';
	
	@NgModule({
	    declarations: [
  ],
	    imports: [
			LoginModule,
			RegistroModule
		],
	    exports: [
			LoginModule,
			RegistroModule
		],
	    providers: [],
	})
	export class PagesModule {}