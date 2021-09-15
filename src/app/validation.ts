
import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
    /**
     * Verifie la correspondance entre le mot de passe et sa confirmation
     * @param controlName  premier champ
     * @param checkControlName  deuxieme champ
     * @returns ValidatorFn
     */
    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            //Récupération des valeurs des 2 champs
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);

            if (checkControl?.errors && !checkControl.errors.matching) {
                return null;
            }

            //Vérifier la correspondance entre les 2 champs
            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }
}