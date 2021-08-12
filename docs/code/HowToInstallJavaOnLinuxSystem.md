---
title: 如何在linux系統安裝java
date: 2021-08-07
tags:
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
如果你的linux電腦有很多不同的java版本
可以使用以下指令進行選取你要的版本

`sudo update-alternatives --config java`