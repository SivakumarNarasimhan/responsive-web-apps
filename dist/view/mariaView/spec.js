define("view/mariaView/spec",{mariaView:{create:{module:"view/mariaView/main"},init:{buildTemplate:[],attachViewToDOM:[{$ref:"viewNode"}]}},plugins:[{module:"wire/debug",trace:!0}]}),define("view/mariaView/main",["maria"],function(e){var t={},n=new e.Controller,r='<p class="module">Rendered the default maria ElementView (<code>view/mariaView</code>).</p>';return e.ElementView.subclass(t,"myView",{controllerConstructor:n,template:r}),t.myView});