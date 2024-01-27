/**
 * Sets or updates the credit information on the webpage.
 * If the specified id exists, it updates the content with the provided name and helped_with values.
 * If the specified id does not exist, it creates a new div element with the provided id and sets the content.
 * @param {string} name - The name of the person being credited.
 * @param {string} [helped_with="this project"] - The specific project or task the person helped with.
 * @param {string} [id="credit"] - The id of the element where the credit information will be displayed.
 */
function credit(name, helped_with, id) {
    if (id == null) {
        id = "credit";
    }
    if (helped_with == null) {
        helped_with = "this project";
    }

    if (document.getElementById(id) != null) {
        document.getElementById(id).innerHTML = `Thanks to ${name} for helping with ${helped_with}!`;
    } else {
        let credit_div = document.createElement("div");
        credit_div.id = id;
        credit_div.innerHTML = `Thanks to ${name} for helping with ${helped_with}!`;

        document.body.appendChild(credit_div);
    }
}