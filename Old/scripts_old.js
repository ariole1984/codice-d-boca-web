const car = {
    brand: "audi",
    model: "a3",
    color: "silver",
    awesome: true,
};
console.log (car)

const p1 = document.getElementById('p1')

p1.innerHTML = 'hellooooo'

p1.innerText = 'heheyey'


p1.innerHTML = '<h2> heading </h2>'

const colors = ['red','green','yellow','blue']

const colorRandomizer = () => {
return colors[(Math.floor(Math.random()*4))];
}

const changeColor = () => {
    p1.style.color = colorRandomizer()
}

const getSomeData = () => {
    fetch('https://codice-boca.web.app/menu')
    .then(response => response.json())
    .then (cleanData => console.log(cleanData))
} 