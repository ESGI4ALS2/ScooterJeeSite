import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    private readonly storageKey: string = 'brumaire-user';

    setToken(value: string) {
        localStorage.setItem(this.storageKey, value);
    }

    getToken() {
        return localStorage.getItem(this.storageKey);
    }

    revokeToken() {
        localStorage.removeItem(this.storageKey);
    }
}
