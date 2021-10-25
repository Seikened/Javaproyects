/*var AlturaArbol = 10;

for (p = 0; p < altura; p++) {
    console
    for (i= 0; i<=p;i++) {
        console.log("*");
    }
}


/*print "*" that a each interation of the loop increase by 1 in each side and the "*" need be centered
when a change the hight of the tree this need be change in the loop*/

var hight = 10;


for (var i = 0; i < hight; i++) {
    var star = "";
    for (var j = 0; j < hight; j++) {
        if (i == j || i + j == hight - 1) {
            star += "*";
        } else {
            star += " ";
        }
    }
    console.log(star);
}