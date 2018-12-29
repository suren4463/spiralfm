import { NgModule } from '@angular/core';

import { SpiralfmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpiralfmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpiralfmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpiralfmSharedCommonModule {}
