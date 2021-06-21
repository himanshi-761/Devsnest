const sport1 = {
    game: "football",
    sport(into, title) {
        console.log(into + title + this.name);
    },
};

const sport2 = {
    game: "basketball",
};

student1.sport.call(sport2, "I ", "Love");
student1.sport.apply(sport2, ["I ", "Love "]);

const binds = student1.sport.bind(student2, "Today ", "is a big ");
bindsFunction();