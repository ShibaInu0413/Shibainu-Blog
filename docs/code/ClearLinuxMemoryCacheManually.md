---
title: 手動清除Linux記憶體快取
date: 2021-08-07
tags:
 - linux
---

一般來說使用者是不需要去管這些 cache 何時會被清除的，
所以 Linux 也沒有專門的指令來做這件事，
不過依然有提供一個 proc file system 介面 `/proc/sys/vm/drop_caches` 可以強制 kernel 清理快取。
若有這樣的需求，
我們只需要對這個file寫入 1~3 這三種控制碼其中一種，
對應的記憶體快取種類便會被強制清理。

若寫入 1 會清除pagecache：
``` shell
# echo 1 > /proc/sys/vm/drop_caches
```

若寫入 2 會清除dentries與inodes：
```shell
# echo 2 > /proc/sys/vm/drop_caches
```

若寫入 3 則有等同於 1+2 的效果，會清除pagecache、dentries及inodes：
```shell
# echo 3 > /proc/sys/vm/drop_caches
```

要寫入這個file必須有root權限，所以非root帳號需要使用`sudo`來執行：
```shell
$ sudo sh -c 'echo 1 > /proc/sys/vm/drop_caches'
$ sudo sh -c 'echo 2 > /proc/sys/vm/drop_caches'
$ sudo sh -c 'echo 3 > /proc/sys/vm/drop_caches'
```

# 參考資料
[手動清除 Linux 記憶體快取](https://medium.com/hungys-blog/clear-linux-memory-cache-manually-90bec95ea003)

<iframe src="//a.exdynsrv.com/iframe.php?idzone=4385142&size=900x250" width="900" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>