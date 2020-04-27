const test = require('ava')
const removeDuplicates = require("./index")

test('1', t => {
    const valueToTest = false
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
	t.is(calculated, expected)
})
test('2', t => {
    const valueToTest = null
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('3', t => {
    const valueToTest = undefined
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('4', t => {
    const valueToTest = 0
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('5', t => {
    const valueToTest = -0
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('6', t => {
    const valueToTest = 0n
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('7', t => {
    const valueToTest = NaN
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('8', t => {
    const valueToTest = ''
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('9', t => {
    const valueToTest = {}
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('10', t => {
    const valueToTest = { test: 1 }
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('11', t => {
    const valueToTest = { test: 'test' }
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('12', t => {
    const valueToTest = 'Test'
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('13', t => {
    const valueToTest = 1
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('14', t => {
    const valueToTest = 1.3
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('15', t => {
    const valueToTest = true
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('16', t => {
    const valueToTest = () => {}
    const calculated = t.throws(() => removeDuplicates(valueToTest)).message
    const expected = 'function removeDuplicates must receive an array'
    t.is(calculated, expected)
})
test('17', t => {
    const valueToTest = []
    const calculated = removeDuplicates(valueToTest)
    const expected = []
    t.deepEqual(calculated, expected)
})
test('18', t => {
    const valueToTest = ['1']
    const calculated = removeDuplicates(valueToTest)
    const expected = ['1']
    t.deepEqual(calculated, expected)
})
test('19', t => {
    const valueToTest = ['1','2']
    const calculated = removeDuplicates(valueToTest)
    const expected = ['1','2']
    t.deepEqual(calculated, expected)
})
test('20', t => {
    const valueToTest = [1,2]
    const calculated = removeDuplicates(valueToTest)
    const expected = [1,2]
    t.deepEqual(calculated, expected)
})
test('21', t => {
    const valueToTest = [1,2,2]
    const calculated = removeDuplicates(valueToTest)
    const expected = [1,2]
    t.deepEqual(calculated, expected)
})
test('22', t => {
    const valueToTest = ['1','2','2']
    const calculated = removeDuplicates(valueToTest)
    const expected = ['1','2']
    t.deepEqual(calculated, expected)
})
test('23', t => {
    const valueToTest = [['1','2','2']]
    const calculated = removeDuplicates(valueToTest)
    const expected = ['1','2']
    t.deepEqual(calculated, expected)
})
test('24', t => {
    const valueToTest = [['1','2',['2']]]
    const calculated = removeDuplicates(valueToTest)
    console.log('Test 24 is a known case where this function fails',calculated)
    const expected = ['1','2',['2']]
    t.deepEqual(calculated, expected)
})
