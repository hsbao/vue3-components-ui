rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update website version" &&
git branch -M master &&
git remote add origin git@gitee.com:frankfang/gulu-ui-website-1.git &&
git push -f -u origin master &&
cd -