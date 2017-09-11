class Content {
    constructor() {
        this.content = document.querySelector(".content")
        this.nameDiv = document.querySelector(".name")
        this.contentHTML = this.content.innerHTML
        this.events()
    }

    events() {
        const nameLetters = document.querySelectorAll(".name span")
        nameLetters.forEach((letter, index) => {
            letter.char = letter.innerText
            nameLetters[index].addEventListener("mouseenter", () =>
                this.replaceLetters(event, letter)
            )
            nameLetters[index].addEventListener("mouseleave", () =>
                this.replaceLetters(event, letter)
            )
        })

        this.nameDiv.addEventListener("click", this.showImage.bind(this))
        this.nameDiv.addEventListener(
            "mousemove",
            () => (this.nameDiv.className = "name")
        )
    }

    showImage() {
        if (/name__show-image/.test(this.nameDiv.className)) {
            this.nameDiv.className = "name"
        } else {
            this.nameDiv.className = "name name__show-image"
        }
    }

    replaceLetters({ type } = "mouseleave", element = null) {
        if (type === "mouseenter") {
            const regex = new RegExp("(?!([^<]+)?>)+" + element.char, "gi")
            const textReplaced = this.content.innerHTML.replace(
                regex,
                "&lowbar;"
            )
            this.content.innerHTML = textReplaced
            element.innerHTML = "&lowbar;"
        } else {
            this.content.innerHTML = this.contentHTML
            element.innerText = element.char
        }
    }
}

const content = new Content()
