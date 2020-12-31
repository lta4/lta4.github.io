class MyCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const img = this.getAttribute("img")

        this.innerHTML = `
        <sl-card>
        <h1>${name}</h1>
        <img src =${img} alt=${name} slot="image">
        <sl-button-group>
            <a href=${git}><sl-button>Git</sl-button></a>
            <a href=${live}><sl-button>Live</sl-button></a>
        </sl-button-group>
        
        </sl-card>`;
    }
}

customElements.define("my-card", MyCard)