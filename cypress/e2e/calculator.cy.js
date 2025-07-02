describe('Calculadora JulieMR - Operações Básicas', () => {
  beforeEach(() => {
    cy.visit('http://juliemr.github.io/protractor-demo/')
  })

  const testCases = [
    { a: '2', op: '+', b: '3', expected: '5' },
    { a: '10', op: '-', b: '4', expected: '6' },
    { a: '6', op: '*', b: '7', expected: '42' },
    { a: '20', op: '/', b: '5', expected: '4' },
  ]

  testCases.forEach(({ a, op, b, expected }) => {
    it(`deve calcular ${a} ${op} ${b} = ${expected}`, () => {
      cy.get('input[ng-model="first"]').clear().type(a)
      cy.get('select[ng-model="operator"]').select(op)
      cy.get('input[ng-model="second"]').clear().type(b)
      cy.get('#gobutton').click()
      cy.get('h2.ng-binding').should('contain.text', expected)
    })
  })
})
