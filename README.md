# AngularStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

# ANGULAR FUNDAMENTALS

Repo to practice on Angular using the gidelines of the platzi course: Fundamentos de Angular

## Learning

### L2 - Intalación

- Verify some versions: `node -v`, `pnpm -v`
- If there is an odd NodeJS version; change it to an even numbered one
- Change node version: `nvm use xx.yy.z`
- Install globally angular CLI: `pnpm i -g @angular/cli`
- Change the package manager to pnpm (only globally): `ng config -g cli.packageManager pnpm`
- Go to a parent folder, create a project, follow instructions: `ng new [project-name]`
- Enter the new folder, build and run the app: `ng serve [project-name]`
Bonus
- Know size of a folder: `du -sh [folder-name]`... the fresh angular project has 307MB!

### L3 - Comandos para correr el proyecto

- Run with browser oppeming: `ng serve -o`
- Run designating a port: `ng serve --port=3499`
- Inside a workspace, `ng version` gives info on dependencies

### L4 - Estructura básica de un proyecto

- `src` contains the app itself
- `.editorconfig` is a kind of lintern that work together with the `angular lang service` extension
- `tsconfig.json` hold TS settings like JS version and strict mode
- `angular.json` holds the project config associated to angular like versioning, build and test

### L5 - Sintaxis básica de TypeScript para Angular

- I can declare and use variables just as with vanilla JS: `const myVar = 5;  let myVar2 = 'hello'`
- Now with TS, I can denote variables type: `const myVar:number = 5 ; let myVar2:string = 'hello'`
- Once I denote a type, I MUST respect it everywhere
- `myVar2 = 5` shows error
- `myVar2:number = 'hello'` shows error
- Is mandatory to denote functions input type `function sum(num1:number, num2:number) {...}`
- I can denote functions output type `function sum(num1:number, num2:number):string {...}`
- But then is mandatory: `function sum(n1:number, n2:number):string {return n1+n2}` shows error
- TS is very Object Oriented.
- Intensive use of classes.
- Implement a class: `class Person{ ... }`
- Declare class attributes: `var:type;`, at top of the class
- Constructor function: `constructor (args:types){ ... }`
- Attribute assignment `this.var = var`
- Set public/private access to atts: `public var:type ; private var2:type`, at the top.
- Shorten all the previous: `class MyClass{  constructor(access args:types){} }`
- Instanciate an object: `const myObj = new MyClass(args)`

### L6 - String interpolation and the Component TS File

- String Interpolation is the way to put TS inside html.
- uses the doble curly brackets: `<htmltag prop={{ TS_1 }}> content {{ TS_2 }} content <htmltag>`.
- Can be inserted any where in the html.
- Can be self defigned instructions.
- Or can be variables from the Component Object: `{{ myVarFromObjectFile }}`.
- The Component TS file is a TS file next to the Component HTML file.
- The Comp TS file has a @Decorator that indicate relation with other files.
- Component Decorator importing at top: `import Component from '@angular/core';`  .
- Decorator statement: `@Component( {options:values} )`.
- Component Decorator options: `selector`, `templateUrl`, `styleUrls`.
- The Component Object is a class exported by the TS file.
- Declaratio and exporting of the Object: `export class MyComponent{ attributes & methods }`.
- I can declare public and private access to attributes.
- Private atts cannot be accessed from the HTML template.

### L7 - Property Bindind

- Is a way to associate model variables with html properties values
- Syntax: `<htmlElement [prop]="varInModel"`. [] and "" wrapping. 
- This creates an unidirectional relation.
- Is encourged over string interpolation to manage html props
- Bind a progress value: `<progress max="100" [value]="numberInModel"/>`
- Is possible to bind objects `<img [src]="user.profilePicUrl">`
- The ng workspace is aware variables existance
