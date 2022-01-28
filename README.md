IMPORTANT!! Before you run the next command make sure you don’t commit the .gitignore and vue.config.js.
Run the command:
`git add build && git commit -m "Initial dist subtree commit"`
`git subtree push --prefix build origin gh-pages`

`git push origin `git subtree split --prefix build main`:gh-pages --force`

## Saving these for later

https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd  
https://richpauloo.github.io/2019-11-17-Linking-a-Custom-Domain-to-Github-Pages/
