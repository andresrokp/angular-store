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
- Run designating a port: `ng serve port=3499`
- Inside a workspace, `ng version` gives info on dependencies

### L4 - Estructura básica de un proyecto

- `src` contains the app itself
- `.editorconfig` is a kind of lintern that work together with the `angular lang service` extension
- `tsconfig.json` hold TS settings like JS version and strict mode
- `angular.json` holds the project config associated to angular like versioning, build and test