export class AuthService {
    loggedIn = false;

    isLoggedIn() {
        const promise = new Promise<boolean>(
        (resolve, reject) => {
            setTimeout( () => {
                resolve(this.loggedIn);
            }, 500);
        }
      );
      return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}