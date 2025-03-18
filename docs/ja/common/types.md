# PrimitiveType
[[[desc PrimitiveType

]]]

[[[version PrimitiveType
  
]]]

### Source
[[[source PrimitiveType
  
]]]
# NumberString
[[[desc NumberString

]]]

[[[version NumberString
  
]]]

### Source
[[[source NumberString
  
]]]
# ObjectLike
[[[desc ObjectLike

]]]

[[[version ObjectLike
  
]]]

### Source
[[[source ObjectLike
  
]]]
# ExtractUnion
[[[desc ExtractUnion

]]]

[[[version ExtractUnion
  
]]]

### Source
[[[source ExtractUnion
  
]]]
# KeyOrIndex
[[[desc KeyOrIndex

]]]

[[[version KeyOrIndex
  
]]]

### Source
[[[source KeyOrIndex
  
]]]
# Tail
[[[desc Tail

]]]

[[[version Tail
  
]]]

### Source
[[[source Tail
  
]]]
# Head
[[[desc Head

]]]

[[[version Head
  
]]]

### Source
[[[source Head
  
]]]
# Edge
[[[desc Edge

]]]

[[[version Edge
  
]]]

### Source
[[[source Edge
  
]]]
# EdgeReverse
[[[desc EdgeReverse

]]]

[[[version EdgeReverse
  
]]]

### Source
[[[source EdgeReverse
  
]]]
# EmptyOrParameters
[[[desc EmptyOrParameters

]]]

[[[version EmptyOrParameters
  
]]]

### Source
[[[source EmptyOrParameters
  
]]]
# EmptyOrReturnType
[[[desc EmptyOrReturnType

]]]

[[[version EmptyOrReturnType
  
]]]

### Source
[[[source EmptyOrReturnType
  
]]]
# WithFallback
[[[desc WithFallback
型 `T` の結果を返すか、結果が `null` または `undefined` の場合にデフォルト値の型 `R` を返します。

]]]

[[[version WithFallback
  
]]]

### Source
[[[source WithFallback
  
]]]
# LiteralStringWithFallback
[[[desc LiteralStringWithFallback
文字列型 `T` が広範囲（例えば `string`）の場合、この型はデフォルトの文字列値 `R` を提供します。

これは、構成オブジェクトやオプションのパラメータなどのシナリオで型の安全性を確保しながら、柔軟性も確保します。
]]]

[[[version LiteralStringWithFallback
  
]]]

### Source
[[[source LiteralStringWithFallback
  
]]]
# MappedTypeByKeyOrIndex
[[[desc MappedTypeByKeyOrIndex
入力文字列/数値インデックス `T` に基づいて、平たく単純なオブジェクトまたは配列の型を生成し、そのインデックスが型 `V` を指し、型 `O` が値のオプション性を制御します。
]]]

[[[version MappedTypeByKeyOrIndex
  
]]]

### Source
[[[source MappedTypeByKeyOrIndex
  
]]]
# DeepMappedTypeByKeyOrIndex
[[[desc DeepMappedTypeByKeyOrIndex
フィールドパス `T` を再帰的に解析し、ネストされた平たく単純なオブジェクトまたは配列を作成します。`"data.[0].name"` のようなネストされたパス文字列を解釈し、パスの末端フィールドが値 `V` を指します。`O` が値がオプションかどうかを決定します。

これは、文字列テンプレートに基づいて複雑なネストされた型を作成するのに非常に役立ちます。
]]]

[[[version DeepMappedTypeByKeyOrIndex
  
]]]

### Source
[[[source DeepMappedTypeByKeyOrIndex
  
]]]