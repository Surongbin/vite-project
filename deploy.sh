###
 # @Description: 
 # @Author: cooky
 # @Date: 2022-03-28 10:45:58
### 
#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:Surongbin/Surongbin.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
#https://Surongbin.github.io/vite-project
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:Surongbin/vite-project.git main:gh-pages

cd -