// Arrow functions do not block this.

const maasaiMara1 = {
    resort: ['Serian', 'Nkolombo', 'Karen Brixen', 'Serena', 'Governors'],
    print: function(delay=1000) {
        setTimeout(function(){
            console.log(this.resort.join(','), delay);
        })
    } 
}

// maasaiMara1.print();   
// Cannot read property 'join' of undefined

// This error is thrown because it’s trying to use the .join method on what this is. 
// In this case, it’s the window object.

// ! The below code should work. 
// ! since we use arrow function on the point of intrest.

const maasaiMara2 = {
    resort: ['Serian', 'Nkolombo', 'Karen Brixen', 'Serena', 'Governors'],
    print: function() {
        setTimeout(() => {
            console.log(this.resort.join('\n'))
        }, 1000)
    }
}

maasaiMara2.print();

/* This error is thrown because it’s trying to use the .join method on what this is. In
this case, it’s the window object.
 */


// ! However the below code will NOT work
// ! Changing the print function to an arrow function means that this is actually the window.
// ! Hence code wont work

const maasaiMara3 = {
    resort: ['Serian', 'Nkolombo', 'Karen Brixen', 'Serena', 'Governors'],
    print: () => {
        setTimeout(() => {
            console.log(this.resort.join('\n'))
        }, 1000)
    }
}

// maasaiMara3();
