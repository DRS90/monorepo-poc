// remove the dot in front of the filename
const { dependencies } = require('./package.json')

const withTM = require('next-transpile-modules')(
  Object.keys(dependencies || []).filter(dependency => dependency.startsWith('@monorepo/'))
) 
console.log("monolith")

module.exports = withTM();