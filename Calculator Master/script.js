
let result=document.querySelector('.resultList')

// addition

let addBtn = document.querySelector('.addbtn');

addBtn.addEventListener('click', () => {
    let inpA = document.querySelector('#A').value;

    let inpB = document.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) + Number(inpB);
    newLi.innerHTML =`Result of Addition : ${mot} `;

    result.appendChild(newLi);
})


//subtraction

let subtBtn = document.querySelector('.subtrbtn');


subtBtn.addEventListener('click', () => {
    let subtraction =document.querySelector('.subtraction')
    let inpA = subtraction.querySelector('#A').value;

    let inpB = subtraction.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) - Number(inpB);
    newLi.innerHTML =`Result of Subtraction : ${mot} `;

    result.appendChild(newLi);
})


//MUltiplication

let multiBtn = document.querySelector('.multiply');

multiBtn.addEventListener('click', () => {
    let multiplication =document.querySelector('.multiplication')
    let inpA = multiplication.querySelector('#A').value;

    let inpB = multiplication.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) * Number(inpB);
    newLi.innerHTML =`Result of Multiplication : ${mot} `;

    result.appendChild(newLi);
})

// division

let diviBtn = document.querySelector('.divibtn');

diviBtn.addEventListener('click', () => {
    let division =document.querySelector('.division')
    let inpA = division.querySelector('#A').value;

    let inpB = division.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) / Number(inpB);
    newLi.innerHTML =`Result of Division : ${mot} `;

    result.appendChild(newLi);
})


// remainder

let remaindBtn = document.querySelector('.remaindbtn');

remaindBtn.addEventListener('click', () => {
    let remainder =document.querySelector('.remainder')
    let inpA = remainder.querySelector('#A').value;

    let inpB = remainder.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) % Number(inpB);
    newLi.innerHTML =`Result of Remainder : ${mot} `;

    result.appendChild(newLi);
})


// interest

let intrBtn = document.querySelector('.intrbtn');

intrBtn.addEventListener('click', () => {
    let interest =document.querySelector('.interest')
    let inpA = interest.querySelector('#A').value;

    let inpB = interest.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot = Number(inpA) * (Number(inpB)/100);
    newLi.innerHTML =`Result of Interest : ${mot} `;

    result.appendChild(newLi);
})


//Celcius to farenheight

let celBtn = document.querySelector('.celBtn');

celBtn.addEventListener('click', () => {
    let celcius =document.querySelector('.cTof')
    let inpA = celcius.querySelector('#A').value;

    //let inpB = interest.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =((9* Number(inpA))/5)+32;
    newLi.innerHTML =`Result in Farenheight : ${mot} `;

    result.appendChild(newLi);
})


// Farenheight to celcius

let farBtn = document.querySelector('.farBtn');

farBtn.addEventListener('click', () => {
    let farenheight =document.querySelector('.fToc')
    let inpA = farenheight.querySelector('#A').value;
    
    let newLi = document.createElement('li');

    let mot =(5*(Number(inpA)-32))/9;
    newLi.innerHTML =`Result in Celcius : ${mot} `;

    result.appendChild(newLi);
})


//area of circle


let circleBtn = document.querySelector('.circleBtn');

circleBtn.addEventListener('click', () => {
    let circle =document.querySelector('.circle')
    let inpA = circle.querySelector('#A').value;
    
    let newLi = document.createElement('li');

    let mot =3.1416*Number(inpA)*Number(inpA);
    newLi.innerHTML =`Total Circle Area : ${mot} sqr inch `;

    result.appendChild(newLi);
})

//Area of Rectangle

let recBtn = document.querySelector('.recBtn');

recBtn.addEventListener('click', () => {
    let rectangle =document.querySelector('.rectangle')
    let inpA = rectangle.querySelector('#A').value;

    let inpB = rectangle.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =Number(inpA)*Number(inpB);
    newLi.innerHTML =`Area of Rectangle : ${mot} sqr inch `;

    result.appendChild(newLi);
})


//SQUARE CALCULAOTR


let sqrBtn = document.querySelector('.sqrBtn');

sqrBtn.addEventListener('click', () => {
    let square =document.querySelector('.square')
    let inpA = square.querySelector('#A').value;

    //let inpB = square.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =Number(inpA)*Number(inpA);
    newLi.innerHTML =`Area of Square : ${mot} sqr inch `;

    result.appendChild(newLi);
})


//Area of Triangle


let triangleBtn = document.querySelector('.triBtn');

triangleBtn.addEventListener('click', () => {
    let triangle =document.querySelector('.triangle')
    let inpA = triangle.querySelector('#A').value;

    let inpB = triangle.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =(1/2)*Number(inpA)*Number(inpB);
    newLi.innerHTML =`Area of Triangle : ${mot} sqr inch `;

    result.appendChild(newLi);
})

//Area of Parallelogram


let paralleloBtn = document.querySelector('.paralleloBtn');

paralleloBtn.addEventListener('click', () => {
    let parallelogram =document.querySelector('.parallelogram')
    let inpA = parallelogram.querySelector('#A').value;

    let inpB = parallelogram.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =Number(inpA)*Number(inpB);
    newLi.innerHTML =`Area of Parallelogram : ${mot} sqr inch `;

    result.appendChild(newLi);
})


//Area of rhombus

let rhombusBtn = document.querySelector('.rhombusBtn');

rhombusBtn.addEventListener('click', () => {
    let rhombus =document.querySelector('.rhombus')
    let inpA = rhombus.querySelector('#A').value;

    let inpB = rhombus.querySelector('#B').value;
    
    let newLi = document.createElement('li');

    let mot =.5*Number(inpA)*Number(inpB);
    newLi.innerHTML =`Area of Rhombus : ${mot} sqr inch `;

    result.appendChild(newLi);
})


//Area of Trapezoid



let trapezoidBtn = document.querySelector('.trapezoidBtn');

trapezoidBtn.addEventListener('click', () => {
    let trapezoid =document.querySelector('.trapezoid')
    let inpA = trapezoid.querySelector('#A').value;

    let inpB = trapezoid.querySelector('#B').value;

    let inpC = trapezoid.querySelector('#C').value;


    
    let newLi = document.createElement('li');

    let mot =.5*(Number(inpA)+Number(inpB))*Number(inpC);
    newLi.innerHTML =`Area of trapezoid : ${mot} sqr inch `;

    result.appendChild(newLi);
})



// Area of Ellipse

let ellipseBtn = document.querySelector('.ellipseBtn');

ellipseBtn.addEventListener('click', () => {
    let ellipse =document.querySelector('.ellipse')
    let inpA = ellipse.querySelector('#A').value;

    let inpB = ellipse.querySelector('#B').value;


    
    let newLi = document.createElement('li');

    let mot =3.1416*Number(inpA)*Number(inpB);
    newLi.innerHTML =`Area of ellipse : ${mot} sqr inch `;

    result.appendChild(newLi);
})


//Area of Cube


let cubeBtn = document.querySelector('.cubeBtn');

cubeBtn.addEventListener('click', () => {
    let cube =document.querySelector('.cube')
    let inpA = cube.querySelector('#A').value;

    
    let newLi = document.createElement('li');

    let mot =6*Number(inpA)*Number(inpA);
    newLi.innerHTML =`Area of Cube : ${mot} sqr inch `;

    result.appendChild(newLi);
})
