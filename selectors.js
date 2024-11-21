const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seededFruits = document.getElementsByClassName("seed")
    
    for( let i = 0; i < seededFruits.length; i++ ){
        console.log(seededFruits[i].innerHTML)
    }
    // 2. Get all seedless fruit elements
    const seedlessFruits = document.getElementsByClassName("seedless")
    for( let i = 0; i < seedlessFruits.length; i++ ){
        console.log(seedlessFruits[i].innerHTML)
    }

    // 3. Get first seedless fruit element
    console.log(document.querySelector(".seedless"))

    /* Section 2 */
    const sectionTwo = document.getElementById("two")
    const ol = sectionTwo.children[2]
    // 4. Get inner span with text "you"
    const span = document.querySelector("span");
    console.log(span)

    // 5. Get all children of element "wrapper"
    const wrapperChildren = document.getElementById("wrapper").children
    console.log(wrapperChildren)

    // 6. Get all odd number list items in the list
    
    console.log(sectionTwo.getElementsByClassName("odd"))

    // 7. Get all even number list items in the list
    const evenListItems = []
    for (let i = 0 ; i < ol.children.length ; i++){
        if(!(ol.children[i].className === 'odd')){
            evenListItems.push(ol.children[i].innerHTML)
        }
    }
    console.log(evenListItems)
    /* Section 3 */
    const sectionThree = document.getElementById("three")
    // 8. Get all tech companies without a class name
    const techP = sectionThree.children[1]
    const classlessTech = []
    for ( let i = 0; i < techP.children.length; i++ ) {
        if(!techP.children[i].className){
            classlessTech.push(techP.children[i])
        }
    }
    console.log(classlessTech)
    // debugger

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    const listElements = sectionThree.querySelector('ul').children
    const unicornListElements = []
    for ( let i = 0; i < listElements.length; i++) {
        let currentNode = listElements[i]

        if(currentNode.children){
            if(currentNode.children[0].className === 'unicorn'){
                unicornListElements.push(currentNode)
            }
        }
    }
    console.log('\n Unicorn List \n', unicornListElements)
    // debugger
}

window.onload = select;