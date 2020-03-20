module.exports = (name) => {
  console.log("Hola " + name);
}

module.exports.trimHello = (name) => {
  console.log("Hola " + name.trim());
}