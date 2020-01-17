export const Storage = {
  _storage: localStorage.getItem("remember") ? localStorage : sessionStorage,

  set remember(persistent: any) {
    if (persistent) {
      this._storage = localStorage;
      this._storage.setItem("remember", String(true));
    }
  },
  get remember() {
    return localStorage.getItem("remember");
  },
  get user(): string | null {
    return this._storage.getItem("user");
  },
  set user(value: string | null) {
    console.log("set user");
    if (typeof value === "string") {
      this._storage.setItem("user", value);
    } else {
      this._storage.removeItem("user");
    }
  },
  clear() {
    this._storage.clear();
  }
};
