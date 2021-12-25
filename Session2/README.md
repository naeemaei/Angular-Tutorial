# Angular-Tutorial

## Session 2

Starter project creation steps:

### 1. Create new project

```
ng new StarterApp
```

### 2. Install packages from terminal:

```
npm i bootstrap-v4-rtl
npm i jquery
npm i @angular/material
```

### 3. Add styles and scripts to architect section of angular.json file

```
"styles":
 [
    "src/styles.css",
    "node_modules/bootstrap-v4-rtl/dist/css/bootstrap.min.css",
    "node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css",
    "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
],
"scripts":
[
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap-v4-rtl/dist/js/bootstrap.min.js"
]
```

### 4. Add this modules to imports section of AppModule file:

```
BrowserModule,
CommonModule,
FormsModule,
RouterModule,
BrowserAnimationsModule,
MatDialogModule
```
