
import _ from 'lodash';
import App from 'app';

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
