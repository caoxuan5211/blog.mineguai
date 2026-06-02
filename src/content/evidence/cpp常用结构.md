+++
date = '2025-12-16T16:17:18+08:00'
draft = false
title = 'Cpp常用结构'

+++

## 1.unordered_set

### 用处

图结构常删除点边的时候可以用避免重复查找。

### 函数

```cpp
insert(),find(),erase(type)（删除指定元素）,clear()
```

## 2.memset

### 用法

```
void *memset(void *str, int c, size_t n)
```

### 参数

- **str** -- 指向要填充的内存区域的指针。
- **c** -- 要设置的值，通常是一个无符号字符。
- **n** -- 要被设置为该值的字节数。

### 例子

```cpp
memset(str,'$',7);
memset(nums,0,sizeof(nums));
```

