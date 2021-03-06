const test = require('tape')
const reducer = require('../app/reducer.js')


test('SHIRT@ADD: add red sm to an empty state',  t  =>{
  const startingState =[]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size:'sm',
    motto: "Keep Calm and Code On"
  }
  const expectedResult=[{
    id:1,
    color: 'red',
    size: 'sm',
    motto: 'Keep Calm and Code On'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})

test('SHIRT@ADD: add red sm to an empty state',  t  =>{
  const startingState =[]
  const action = {
    type: 'SHIRT@ADD',
    color: 'green',
    size:'sm',
    motto: "Keep Calm and Code On"
  }
  const expectedResult=[{
    id:1,
    color: 'green',
    size: 'sm',
    motto: 'Keep Calm and Code On'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})

test('SHIRT@ADD: add second red sm to an empty state',  t  =>{
  const starting=[{
    id:1,
    color: 'red',
    size:'sm',
    motto: "Keep Calm and Code On"
  }]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size:'sm',
    motto: "Real Programers count from 0"
  }
  const expect =[{
    id:1,
    color: 'red',
    size: 'sm',
    motto: 'Keep Calm and Code On'
  }, {
    id:2,
    color: 'red',
    size:'sm',
    motto: "Real Programers count from 0"
  }]
  t.deepEqual(reducer(starting, action), expect)
  t.end()
})

test('SHIRT@ADD: add red sm to a state with two shirts', (t) => {
  const starting = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
  }]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }
  const expect = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
    }, {
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }]

  t.deepEqual(reducer(starting, action), expect)
  t.end()
})

test('SHIRT@REMOVE: remove id 8 to a state with two shirts', (t) => {
  const starting = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
    },
    {
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
    }]
  const action = {
    type: 'SHIRT@REMOVE',
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }
  const expect = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
    }]

  t.deepEqual(reducer(starting, action), expect)
  t.end()
})
