const test = function(){
    console.log('测试js')
    let img = `<img src="${require('../img/zdy.jpeg')}">`
    document.body.innerHTML = img
}
export default test