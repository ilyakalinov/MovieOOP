export default class Spinner{
    constructor(selector = ''){
        this.selector = selector;
    }
    createSpinner() {
        this.spinnerElem = document.createElement('div');
        this.spinnerElem.classList.add('loadingio-spinner-spin-wffps27ze9i');
        this.spinnerElem.innerHTML = `
            <div class="ldio-zv7gliytzt">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        `
        document.querySelector(`#${this.selector}`).parentElement.appendChild(this.spinnerElem);
    }
    deleteSpinner() {
        document.querySelector(`#${this.selector}`).parentElement.querySelector('.loadingio-spinner-spin-wffps27ze9i').remove()
    }
    createSpinnerMov(block){
        this.spinnerElem = document.createElement('div');
        this.spinnerElem.classList.add('loadingio-spinner-spin-wffps27ze9i');
        this.spinnerElem.innerHTML = `
            <div class="ldio-zv7gliytzt">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        `
        this.block = block;
        this.block.appendChild(this.spinnerElem);
    }
}