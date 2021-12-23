import  load  from 'recaptcha-v3'

async function asyncFunction() {
  const recaptcha = await load('6LcWQqEdAAAAAPS2EJRmjB-YipTPgu3eYmmoKsE4')
  const token = await recaptcha.execute('<action>')

  console.log(token) // Will also print the token
}