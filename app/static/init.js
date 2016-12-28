
import _ from 'lodash';
import App from 'App';

class Init {
    constructor() {
        document.addEventListener("DOMContentLoaded", this.ready);
    }

    ready() {
        window.inst = new App();
    }
}

new Init();

export default Init;
