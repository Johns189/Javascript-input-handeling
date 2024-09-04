function validateAlias(alias) {
    let aliasIsValid = alias.length > 0
    
    if (!aliasIsValid) {
        console.log("The alias must contain at least 1 character")
        //Avbryte sekvensen
        return  false
    }

    return true

}

function handleComment() {
    //Knappene til funkonene
    //Det settet med steg du ønsker skal kjøre
    console.log("Comment button clicked")

    //Les av verdien i Alias feltet
    let aliasField = document.getElementById("alias-field")
    let aliasValue = aliasField.value

    //Valider verdien
    let aliasValid = aliasValue.length > 0
    
    if (!aliasValid) {
        return
}


    //Les av verdiene i kommentar feltet
        let commentField = document.getElementById("comment-field")
        let commentValue = commentField.value

    //Valider verdien

    //Legg til det nye HTML kommentar feltet
        let wrapper = document.createElement("li")
        let authorElement = document.createElement("p")
        let commentElement = document.createElement("p")

        //kombiner disse elementene
        wrapper.append(authorElement)
        wrapper.append(commentElement)



    //Legg det til i dokumentet

    let commentList = document.getElementById("comment-list")
    commentList.append(wrapper)
}

//Finne knappen som skal trigge funksjonen vår
let commentButton = document.getElementById("add-comment")
console.log(commentButton)
//Legg til funksjonene som skal kjøre når knappen trykkes på
commentButton.addEventListener("click", handleComment)
