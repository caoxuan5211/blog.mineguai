+++
date = '2025-09-25T19:30:11+08:00'
draft = false
title = 'KMP'
tags= ["算法"]


+++

感觉`KMP`很简单就没练过，用的时候太不熟练，写个博客熟悉熟悉。

其实主要就是两部分，一个是确定`next`数组，一个是利用`next`找子串，这两部分大致思路很简单，有点异曲同工。

具体细节代码中注释已经说的很清楚了，不再赘述。

```C++
#include<bits/stdc++.h>
using namespace std;

vector<int> getNext(const string &pattern)
{
    int m = pattern.size(); // 既可以用来初始化也可以作为循环出口
    vector<int> next(m);
    next.push_back(0); // 一个字符无法匹配默认为0
    int i=1; // 后缀匹配到的字符位置（只增不减）
    int p=0; // 记录当前最大前缀(末)位置(其实也就是p=next[0])
    while(i<m)
    {
        if(next[p] == next[i])
        {
            p++; // 缀数增加，要推进主串，同时构建next
            next.push_back(p);
            i++; // 向后推进
        }
        else // 后缀断连
        {
            if(p == 0) // 没有回退空间（找不到更小前后缀）,保持缀数不变,继续推进
            {
                i++;
            }
            else
            {
                p = next[p-1]; // 前后缀长度回退，循环继续
            }
        }
    }
    return next;
}

int main()
{
    string text;// 原串
    string pattern;// 要找的目标字符串
    
    cin >> text;
    cin >> pattern;

    int n=text.size();
    int m=pattern.size();
    if(n < m) return 0; //长度不符合标准
    
    vector<int> next = getNext(text);
    
    // 这里只处理查找到第一个匹配串的位置，如果多个匹配点,重置变量(p),继续匹配不间断输出就行
    
    int j=0; // pattern(副)串匹配到的位置
    int i=0; // text(主)串匹配到的位置
    while(j<m)
    {
        if(pattern[j] == text[i])
        {
            j++;
            i++;
        }
        else
        {
            if(j==0) // 无法回退
            {
                i++; // 向前推进
            }
            else
            {
                j = next[j-1];
            }
        }
    }
    // 这时i位于找到的子串所在位置后面一个
    printf("第一个匹配的子串位置是[%d,%d]\n",i-m,i-1); // 输出所在区间
    return 0;
}

```

