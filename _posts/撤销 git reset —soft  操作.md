---
title: '撤销 git reset —soft  操作'
excerpt: '本地修改代码后，没有使用 git commit 就直接使用 git reset --soft commid_id，然后后悔了，想撤回 git reset --soft。'
date: '2021-01-26'
author:
  name: Aye
tags: 'git'
---

## 场景

本地修改代码后，没有使用 git commit 就直接使用 git reset --soft commid_id，然后后悔了，想撤回 git reset --soft。

## 解决方法

1. 使用 git  reflog 找到 git reset --soft 时候的 head
```
git reflog
```
![image](/assets/blog/git/reset_soft.png)

2. 通过 commit message 快速找到需要回滚的 head

```
git reset --soft HEAD@{x} 回滚代码
git reset --soft HEAD@{5}
```

```
var a  = undedined;
var a = null;

// 几乎等价
```

～over~