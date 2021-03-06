import {Injectable} from "@angular/core";

@Injectable()
export class WfStorageService {
  private storage: Storage;

  constructor() {
    this.storage = sessionStorage;
  }

  setKey(keyName: string, data: any): void {
    if (data) {
      this.storage.setItem(keyName, JSON.stringify(data));
    }
  }

  getKey(keyName: string): any | null {
    let result: string | null = this.storage.getItem(keyName);
    if (result) {
      return JSON.parse(result);
    }
    return null;
  }

  deleteKey(keyName: string): void {
    this.storage.removeItem(keyName);
  }

  clear(): void {
    this.storage.clear();
  }
}
