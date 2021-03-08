import { FormControl, Validators } from '@angular/forms';

export class ActivityTypeForm {
  ActivityTypeFormBuilder = {
    method: new FormControl(null),
    id: new FormControl('0'),
    name: new FormControl(null, [Validators.required]),
    desc: new FormControl(null, [Validators.required]),
    user_id: new FormControl(null)
  };
}
