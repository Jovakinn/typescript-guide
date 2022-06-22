const user = require("./User")

const run = () => {
    const max = new user.User("Max");
    const alex = new user.User("Alex");

    max.hello(alex);
}

if (module.main) {
    exports.run = run;
} else {
    run();
}
