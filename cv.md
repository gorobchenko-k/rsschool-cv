# rsschool-cv
## Gorobchenko Ekaterina
### _Frontend Developer_
**************
#### Contacts:
* __Location:__ Saint-Petersburg
* __E-mail:__ gorobchenko.es@mail.ru
* __Telegram:__ gorobchenko_k
* __GitHub:__ [gorobchenko-k](https://github.com/gorobchenko-k) 

**************
#### Skills:
* HTML
* CSS
* JavaScript/ ES6
* Git/GitHub
* Figma, Adobe Illustrator, Adobe InDesign

**************
#### Code example:
__KATA from CODEWARS:__ Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
```
function comp(array1, array2){
  if (Boolean(array1) && Boolean(array2)) {
      let arr1 = array1.sort((a, b) => a - b);
      let arr2 = array2.map(item => Math.sqrt(item)).sort((a, b) => a - b);

      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
      }

      return true;
  }
  return false;
}
```

**************
#### Education:
* University: Saint-Petersburg State University of Aerospace Instrumentation, Information systems and technologies/ 2018 - 2022
* Courses:
    - [freeCodeCamp Responsive Web Design](https://www.freecodecamp.org/certification/fcc0fbdb732-663f-4704-93f3-0f47a038cbd8/responsive-web-design)/ Октябрь 2022
    - [freeCodeCamp JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/certification/fcc0fbdb732-663f-4704-93f3-0f47a038cbd8/javascript-algorithms-and-data-structures)/ Ноябрь 2022

**************
#### Languages:
* Russian - Native
* English - B1