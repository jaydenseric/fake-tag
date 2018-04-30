import test from 'ava'
import tag from '.'

test('Empty.', t => {
  t.is(tag``, '')
})

test('Escapes.', t => {
  t.is(tag`\``, '`')
})

test('No variables.', t => {
  t.is(tag`1`, '1')
})

test('Only variables.', t => {
  t.is(tag`${1}${2}${3}`, '123')
})

test('Surrounding variables.', t => {
  t.is(tag`${1}2${3}`, '123')
})

test('Surrounded variables.', t => {
  t.is(tag`1${2}${3}4`, '1234')
})
