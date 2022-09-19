// Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. 

let heading1 = document.querySelector('h1');

let header1 = heading1.closest('header')
//console.log(header);

header1.style.border = "5px solid grey"


// If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border.

let listItems = document.querySelectorAll('.package-title')
// console.log(listItems);

listItems.forEach(item => item.previousElementSibling.style.border = "solid black")



// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. ![alt text](images/packages.png "Packages")

let label = document.querySelectorAll('label')

// console.log(label);

label.forEach((item) => {
    if (item.matches(".mild")) {
        item.style.borderBottom = "solid yellow"
    } else if (item.matches(".intense")) {
        item.style.borderBottom = "solid orange"
    } else {
        item.style.borderBottom = "solid red"
    }
})

// Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children. ![alt text](images/footer.png "Footer")

let navItems = document.querySelector('.nav-list');
// console.log(navItems.children);


let siteMap = document.querySelector('.site-map');

let clone = navItems.cloneNode(true);


Array.from(clone.children).forEach((item) => {
    siteMap.appendChild(item);
});