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

### 3. Add styles and scripts to architect section of angular.json file:

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

### 5. Layout HTML:

```
<header>
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container rtl">
            <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <h4 class="text-white">آشنایی با پروژه</h4>
                    <p class="text-muted">این یک پروژه صفر می باشد </p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                    <h4 class="text-white">ارتباط</h4>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">گیتهاب</a></li>
                        <li><a href="#" class="text-white">Facebook</a></li>
                        <li><a href="#" class="text-white">Email me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2"
                    viewBox="0 0 24 24" focusable="false">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                </svg>
                <strong>Album</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
</header>

<main role="main">

    <section class="jumbotron text-center">
        <div class="container">
            <h1>آموزش انگولار</h1>
            <p class="lead text-muted">ارتباط بین کامپوننت ها</p>
            <p>
                <a [routerLink]='["/page1"]' class="btn btn-primary my-2">مثال یک</a>

                <a [routerLink]='["/page2"]' class="btn btn-secondary my-2">مثال دو</a>
            </p>
        </div>
    </section>

    <div class="album py-5 bg-light">
        <div class="container rtl">
            <router-outlet></router-outlet>
        </div>
    </div>

</main>

<footer class="text-muted rtl">
    <div class="container">
        <p class="float-left">
            <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a
                href="../getting-started/introduction/">getting started guide</a>.</p>
    </div>
</footer>
```
