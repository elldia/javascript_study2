const data = [{
    name:'나를 소모하지 않는 현명한 태도에 관하여',
    author:['마티아스 뇔케','이미옥'],
    publishing:'퍼스트펭귄',
    date:'2024년 03월',
    price:17800,
    sale:10,
    tag:['#얼리리더','#이달의굿즈','#나를바라보다','#인간관계에대하여'],
},{
    name:'나를 소모하지 않는 현명한 태도에 관하여',
    author:['마티아스 뇔케','이미옥'],
    publishing:'퍼스트펭귄',
    date:'2024년 03월',
    price:17800,
    sale:10,
    tag:['#얼리리더','#이달의굿즈','#나를바라보다','#인간관계에대하여'],
},{
    name:'나를 소모하지 않는 현명한 태도에 관하여',
    author:['마티아스 뇔케','이미옥'],
    publishing:'퍼스트펭귄',
    date:'2024년 03월',
    price:17800,
    sale:10,
    tag:['#얼리리더','#이달의굿즈','#나를바라보다','#인간관계에대하여'],
}]
const section = document.querySelector('section')
let book = '';
book += `<div class="book">`
//내용 시작
book += `<h1>${data[1].name}</h1>`
book += `<p class="info">`
book += `${data[1].author[0]}/${data[1].author[1]}역`
book += `<a href="#">${data[1].publishing}</a>`
book += `<span>${data[1].date}</span>`
book += '</p>'
book += `<p class="price">`
book += `<em>${data[1].price}원</em>`
book += `<span>(${data[1].sale}% 할인)</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[1].tag[0]}
        ${data[1].tag[1]}
        ${data[1].tag[2]}
        ${data[1].tag[3]}`
book += `</p>`
//내용 끝
book += `</div>`
section.innerHTML = book