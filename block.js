const fruits = () => {
    if (true) {
        var fruit1 = 'manzana';
        let fruit2 = 'sandía';
        const fruit3 = 'coco';
        console.log(fruit2);
        console.log(fruit3);
    };
    console.log(fruit1);
};

fruits();

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
     };
};

anotherFunction();
