class Person {
    constructor(private FirstName: string) {}
}
const max = new Person("Max")
const btn: Element | null = document.querySelector('#btn')

let anyFlag

function logINfo(data: string) {
    console.log(data);
    anyFlag = true
    console.log(anyFlag)
}

if (btn) {
    btn.addEventListener('click', () => {
        console.log('Btn was clicked!')
    })
}

