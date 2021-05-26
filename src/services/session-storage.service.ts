import { CHARACTERS } from '../constants/session-keys';

export default class SessionStorageService {

    /**
     * Fn that gets parsed session item from storage
     * @param {string} key 
     */
    public getSessionItem(): any {
        let sessionItem = null;
        try {
            sessionItem = JSON.parse(sessionStorage.getItem(CHARACTERS.CHARACTERS) || '');
        } catch {
            console.error('Error to get characters from storage');
        }
        return sessionItem;
    } 

    public saveInfoInStorage(value: any): void {
        try {
            sessionStorage.setItem(CHARACTERS.CHARACTERS, JSON.stringify(value));
        } catch {
            console.error('Error to save characters in storage');
        }
    } 
}
