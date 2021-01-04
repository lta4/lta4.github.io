/**************CARDS*****************************/
class MyCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const img = this.getAttribute("img")
        const live = this.getAttribute("live")
        const github = this.getAttribute("github")

        this.innerHTML = `
        <sl-card>
        <h1 slot="header">${name}</h1>
        <img class="img" src =${img} alt=${name} slot="image">
        <sl-button-group>
            <a href=${github} target="_blank"><sl-button>Git</sl-button></a>
            <a href=${live} target="_blank"><sl-button>Live</sl-button></a>
        </sl-button-group>
        
        </sl-card>`;
    }
}

customElements.define("my-card", MyCard)