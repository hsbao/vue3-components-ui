rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update website version" &&
git branch -M master &&
git remote add origin git@github.com:hsbao/vue3-lib-ui.git &&
git push -f -u origin master &&
cd -
echo https://hsbao.github.io/vue3-lib-ui/#/