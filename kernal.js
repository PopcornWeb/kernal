/*
KERNAL JS
-----
*/
// begin kernal class
let Kernal = class {
    // Init

    constructor() {
        this.version = "1.0.0";
        this.views = []
    }

// end kernal class
}
let k = new Kernal()
k.View = class {
    constructor(html) {
        this.html = html
    }
}
k.Component = class {
    constructor(view) {
        this.view = view;
    }
    v(args) {
        let tempView = this.view;
        Object.keys(args).forEach(function (item, index) {
            tempView.html = tempView.html.replaceAll("{"+item+"}", args[item]);
        });
        tempView = tempView.replaceAll;("kernal:open_curly", "{").replaceAll("kernal:closing_curly", "}");
        return tempView;
    }
}
