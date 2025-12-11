import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { AutoComplete, Button, Card, Column, DataTable, DatePicker, Divider, Drawer, IftaLabel, Panel, RadioButton } from 'primevue';
import { Form } from '@primevue/forms';
import KilometerToAstronomicalUnitDirective from './directives/km-to-au';
import KilometerToMeterDirective from './directives/km-to-m';
import ToUpperDirective from './directives/to-upper';
import RadianToDegreeDirective from './directives/rad-to-deg';
import RadiansPerSecondToDegreesPerDayDirective from './directives/rads-to-degd';
import OrbitUncertaintyDirective from './directives/orbit-uncertainty';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});

app.component('AutoComplete', AutoComplete);
app.component('Button', Button);
app.component('Form', Form);
app.component('DatePicker', DatePicker);
app.component('Panel', Panel);
app.component('Card', Card);
app.component('IftaLabel', IftaLabel);
app.component('Divider', Divider);
app.component('RadioButton', RadioButton);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Drawer', Drawer);

app.directive('km-to-au', KilometerToAstronomicalUnitDirective);
app.directive('km-to-m', KilometerToMeterDirective);
app.directive('to-upper', ToUpperDirective);
app.directive('rad-to-deg', RadianToDegreeDirective);
app.directive('rads-to-degd', RadiansPerSecondToDegreesPerDayDirective);
app.directive('orbit-uncertainty', OrbitUncertaintyDirective);

app.mount('#app');
