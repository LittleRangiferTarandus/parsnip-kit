# PrimitiveType
[[[desc PrimitiveType
基本类型，由`number`、`string`、`boolean`、`undefined`、`null`、`bigint`、`symbol`组成。
]]]

[[[version PrimitiveType
  
]]]

### Source
[[[source PrimitiveType
  
]]]
# NumberString
[[[desc NumberString
由数字组成的字符串。
]]]

[[[version NumberString
  
]]]

### Source
[[[source NumberString
  
]]]
# ObjectLike
[[[desc ObjectLike
非函数对象。
]]]

[[[version ObjectLike
  
]]]

### Source
[[[source ObjectLike
  
]]]
# ExtractUnion
[[[desc ExtractUnion
从元组中提取联合类型。
]]]

[[[version ExtractUnion
  
]]]

### Source
[[[source ExtractUnion
  
]]]
# KeyOrIndex
[[[desc KeyOrIndex
从形如 [${number}] 或 ${number} 的字符串中提取数字。其他情况则返回原始字符串。
]]]

[[[version KeyOrIndex
  
]]]

### Source
[[[source KeyOrIndex
  
]]]
# Tail
[[[desc Tail
获取元组类型最后一个元素。
]]]

[[[version Tail
  
]]]

### Source
[[[source Tail
  
]]]
# Head
[[[desc Head
获取元组类型第一个元素。
]]]

[[[version Head
  
]]]

### Source
[[[source Head
  
]]]
# Edge
[[[desc Edge
获取元组`T`首端或者末端的元素，由类型`D`决定。
]]]

[[[version Edge
  
]]]

### Source
[[[source Edge
  
]]]
# EdgeReverse
[[[desc EdgeReverse
和`Edge`类似，但是`D`取值`'left'`或者`'right'`时效果反过来。
]]]

[[[version EdgeReverse
  
]]]

### Source
[[[source EdgeReverse
  
]]]
# EmptyOrParameters
[[[desc EmptyOrParameters
返回函数的参数值类型，若非函数返回`never[]`类型。
]]]

[[[version EmptyOrParameters
  
]]]

### Source
[[[source EmptyOrParameters
  
]]]
# EmptyOrReturnType
[[[desc EmptyOrReturnType
返回函数的返回值类型，若非函数返回`void`类型。
]]]

[[[version EmptyOrReturnType
  
]]]

### Source
[[[source EmptyOrReturnType
  
]]]
# WithFallback
[[[desc WithFallback
返回函数 `T` 的返回值类型，如果是 `null` 或者 `undefined` 则返回默认值类型 `R`。
]]]

[[[version WithFallback
  
]]]

### Source
[[[source WithFallback
  
]]]
# LiteralStringWithFallback
[[[desc LiteralStringWithFallback
当字符串类型 `T` 太宽泛（例如 `string`）时，此类型会提供一个默认字符串值 `R`。

它可以确保类型安全，在给配置对象或者可选参数设置默认值时非常有用。
]]]

[[[version LiteralStringWithFallback
  
]]]

### Source
[[[source LiteralStringWithFallback
  
]]]
# MappedTypeByKeyOrIndex
[[[desc MappedTypeByKeyOrIndex
根据输入的字符串或数字索引 `T` 来生成普通对象或数组类型，该索引指向类型 `V`，类型 `O` 控制值是否可选。
]]]

[[[version MappedTypeByKeyOrIndex
  
]]]

### Source
[[[source MappedTypeByKeyOrIndex
  
]]]
# DeepMappedTypeByKeyOrIndex
[[[desc DeepMappedTypeByKeyOrIndex
递归地解析字段路径 `T` 并创建嵌套普通对象或数组，它可以解析类似 `"data.[0].name"` 这样的嵌套路径字符串，路径末端的字段指向值 `V`。`O` 控制值是否可选。

在基于字符串模板创建复杂的嵌套类型时非常有用。
]]]

[[[version DeepMappedTypeByKeyOrIndex
  
]]]

### Source
[[[source DeepMappedTypeByKeyOrIndex
  
]]]

# DataUnit
[[[desc DataUnit
`DataUnit` 类型表示数据大小的不同单位。
]]]

[[[version DataUnit
  
]]]

### Source
[[[source DataUnit
  
]]]