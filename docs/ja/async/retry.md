# retry

[[[desc retry

]]]

[[[version retry
  
]]]

### Usage

```ts
import { retry } from 'parsnip-kit'

let times = 0
const func = async (a: number, b: number) => {
  if (times < 3) {
    times++
    throw new Error(`Error ${times}`)
  }
  return a + b
}
const retried = retry(func)
retried(2, 3).then(res => {
  console.log(res)
  // { status: 'fulfilled', value: 5 }
})
```


### API

#### Type Parameter

[[[template retry

]]]

#### Arguments

[[[params retry

]]]

#### Returns

[[[returns retry

]]]

# RetryOptions
      
[[[desc RetryOptions

]]]

[[[version RetryOptions
  
]]]

### Source

[[[source RetryOptions
  
]]]