import Mock from 'mockjs'

// your own mock configs
Mock.mock('/vuester', 'get', {
  code: '00000',
  data: {
    name: 'Vuester',
    age: 18,
    msg: `Hiyo, I'm Vuester!`
  }
})
