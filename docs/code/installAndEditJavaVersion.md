---
title: 在linux系統安裝java跟更改運行版本
date: 2021-08-07
tags:
 - code
 - java
 - linux
---

# 搜尋
`sudo apt search openjdk`

# 安裝
java8 : `sudo apt install openjdk-8-jre`\
java11: `sudo apt install openjdk-11-jre`\
java13: `sudo apt install openjdk-13-jre`\
java14: `sudo apt install openjdk-14-jre`\
java16: `sudo apt install openjdk-16-jre`

# 更改java運行的版本
`sudo update-alternatives --config java`