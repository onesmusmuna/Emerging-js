// When defining object methods, 
// it is no longer necessary to use the function keyword and the simi colon (:)
// when defining object methods, it is no longer necessary to use the function 

//! OLD

const obj = {
    foo: function() {
      // ...
    },
    bar: function() {
      // ...
    }
}

//! New 

const obj = {
    foo() {
      // ...
    },
    bar() {
      // ...
    }
}
