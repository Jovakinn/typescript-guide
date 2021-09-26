class Person {
    constructor(private FirstName: string) {}
}
const max = new Person("Max")
const btn: Element | null = document.querySelector('#btn')


if (btn) {
    btn.addEventListener('click', () => {
        console.log('Btn was clicked!')
    })
}

