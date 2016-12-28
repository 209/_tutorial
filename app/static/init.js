import App from 'App';

class Init {
    constructor() {
        document.addEventListener('DOMContentLoaded', this.ready);
    }

    static ready() {
        window.inst = new App();
    }
}

window.inst = new Init();

export default Init;
